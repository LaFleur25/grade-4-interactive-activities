(() => {
  'use strict';
  const script = document.currentScript;
  const root = new URL('../', script.src);
  const page = document.body.dataset.navigation;
  const unit = Number(document.body.dataset.unit || 1);
  const week = Number(document.body.dataset.week || 1);
  const $ = id => document.getElementById(id);
  const url = relative => new URL(relative, root).href;
  const run = (name, ...args) => { if (typeof window[name] === 'function') window[name](...args); };
  const click = id => { if ($(id)) $(id).click(); };
  const shown = element => !!element && !element.hidden && getComputedStyle(element).display !== 'none';
  const screen = () => {
    if(page==='pts'){
      if(shown($('home')))return 'home';
      if(shown($('sets')))return 'sets';
      if(shown($('results')))return 'results';
      return $('session')?.classList.contains('review')?'review':'quiz';
    }
    return [...document.querySelectorAll('.screen,.activity-screen,.practice-screen,.quiz-screen,.unscramble-screen,.guess-screen')].find(el => shown(el))?.id || 'home';
  };
  const isRevisionPTSEntry = location.hash === '#pts';
  let hasWork = false, pendingLeave = null;
  const hiddenLegacy = 'body>.top,body>.topnav,.lab-home-nav,.practice-back,.back-btn,.section-back';
  document.querySelectorAll(hiddenLegacy).forEach(el => el.setAttribute('data-navigation-legacy',''));
  if (page === 'pts') document.querySelectorAll('.topbar,#back-sets').forEach(el => el.setAttribute('data-navigation-legacy',''));
  const bar = document.createElement('nav');
  bar.className = 'activity-navigation';bar.setAttribute('aria-label','Activity navigation');
  const inner = document.createElement('div');inner.className='activity-navigation__inner';
  const home = document.createElement('a');home.className='activity-nav-button';home.textContent='🏠 Activity Labs';home.id='activity-labs-home';
  const parentSlot=document.createElement('span');parentSlot.style.display='contents';
  const context=document.createElement('span');context.className='activity-nav-context';
  inner.append(home,parentSlot,context);bar.append(inner);document.body.prepend(bar);

  const dialog=document.createElement('dialog');dialog.className='activity-nav-confirm';dialog.id='navigation-confirm';dialog.setAttribute('aria-labelledby','navigation-confirm-title');dialog.setAttribute('aria-describedby','navigation-confirm-copy');
  dialog.innerHTML='<h2 id="navigation-confirm-title">Leave this page?</h2><p id="navigation-confirm-copy">Your answers stay here while this page is open. Leaving this page will clear this session.</p><div class="activity-nav-confirm__actions"><button type="button" class="activity-nav-button" id="navigation-stay">Keep Working</button><button type="button" class="activity-nav-button activity-nav-leave" id="navigation-leave">Leave Page</button></div>';
  document.body.append(dialog);
  $('navigation-stay').onclick=()=>{pendingLeave=null;dialog.close();};
  $('navigation-leave').onclick=()=>{const action=pendingLeave;pendingLeave=null;dialog.close();if(action)action();};
  dialog.addEventListener('cancel',()=>{pendingLeave=null;});
  function confirmLeave(action, restarting=false){
    pendingLeave=action;
    $('navigation-confirm-title').textContent=restarting?'Return to PTS Menu?':'Leave this page?';
    $('navigation-confirm-copy').textContent=restarting?'Starting another PTS test will clear the answers in this test.':'Your answers stay here while this page is open. Leaving this page will clear this session.';
    $('navigation-leave').textContent=restarting?'PTS Menu':'Leave Page';
    dialog.showModal();$('navigation-stay').focus();
  }
  function draft(){
    if(page==='pts'&&window.PTSNavigation)return window.PTSNavigation.hasDraft();
    if(page==='revision'&&screen()==='ptsQuiz'&&window.LegacyPTSNavigation)return window.LegacyPTSNavigation.capture().answers.some(answer=>answer!==null);
    return hasWork;
  }
  function external(event){
    if(event.defaultPrevented||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||event.button!==0)return;
    if(draft()){event.preventDefault();const target=event.currentTarget.href;confirmLeave(()=>{location.href=target;});}
  }
  home.addEventListener('click',external);
  document.addEventListener('click',event=>{
    const button=event.target.closest('button');if(!button||button.closest('.activity-navigation,.activity-nav-confirm'))return;
    const id=screen(),handler=button.getAttribute('onclick')||'';
    if((/quiz/i.test(id)&&(/option|answer|choice|opt\b/.test(button.className)||/^answer|^pick|^choose/.test(handler))))hasWork=true;
  },true);
  document.addEventListener('input',event=>{if(event.target.matches('input,textarea')&&event.target.closest('.screen,.activity-screen,.quiz-screen'))hasWork=true;});
  function link(label,target){return {label,target:url(target)};}
  function action(label,callback){return {label,callback};}
  function destination(){
    const id=screen();
    let hub='index.html#units/unit-'+unit;
    let parent=null;
    let title='Unit '+unit;
    if(page==='vocabulary-index')title+=' · Vocabulary Lab';
    if(page==='grammar-index')title+=' · Grammar Lab';
    if(page==='vocabulary-week'){
      title+=' · Week '+week;
      if($('menuScreen')){
        const active=[...document.querySelectorAll('#practiceScreen,#quizScreen,#unscrambleScreen,#guessScreen,#gamesScreen,#detectiveScreen')].find(shown);
        if(!active)parent=link('📅 Vocabulary Weeks','unit-'+unit+'/vocabulary/index.html');
        else if($('gamesScreen') && ['guessScreen','detectiveScreen'].includes(active.id))parent=action('🎲 Word Games',()=>run('openActivity','games'));
        else {
          const closers={practiceScreen:'closePractice',quizScreen:'closeQuiz',unscrambleScreen:'closeUnscramble',guessScreen:'closeGuess'};
          parent=action('🎮 Activities',()=>run($('gamesScreen')?'closeActivity':closers[active.id]));
        }
      } else parent=id==='home'?link('📅 Vocabulary Weeks','unit-'+unit+'/vocabulary/index.html'):action('🎮 Activities',()=>run('home'));
    }
    if(page==='grammar-topic'){
      title+=' · '+document.body.dataset.topic;
      if(id==='home')parent=link('📚 Grammar Lab','unit-'+unit+'/grammar/index.html');
      else if(id==='quiz')parent=action('🎯 Multiple Choice',()=>run('openScreen','mc'));
      else if(['jumble','changeSentence','build'].includes(id))parent=action('🧩 Build the Sentence',()=>run('openScreen','buildMenu'));
      else parent=action('🎮 Activities',()=>run('openScreen','home'));
    }
    if(page==='revision'){
      title='Unit 1 · Revision Hub';
      if(/^pts/.test(id)){
        hub='index.html#pts';title='PTS Zone 1';
        if(id==='ptsMenu')parent=isRevisionPTSEntry?null:action('🚀 Revision Hub',()=>run('openScreen','home'));
        else parent=action('🏆 PTS Menu',()=>{
          if(id==='ptsQuiz'&&draft())confirmLeave(()=>{hasWork=false;run('openScreen','ptsMenu');},true);
          else run('openScreen','ptsMenu');
        });
      }else if(id==='home')parent=link('📚 Grammar Lab','unit-1/grammar/index.html');
      else if(id==='lesson')parent=action('📖 Learn',()=>run('openScreen','learnMenu'));
      else if(['quiz','quizResult'].includes(id))parent=action('🎯 Practice Zone',()=>run('openScreen','practiceMenu'));
      else if(['build','transform'].includes(id))parent=action('🧩 Build the Sentence',()=>run('openScreen','buildMenu'));
      else parent=action('🚀 Revision Hub',()=>run('openScreen','home'));
    }
    if(page==='pts'){
      hub='index.html#pts';title='PTS Zone 2';
      if(shown($('home')))parent=null;
      else if(shown($('sets')))parent=action('🏆 PTS Menu',()=>click('back-modes'));
      else if(shown($('results')))parent=action('🗂️ Practice Sets',()=>click('result-home'));
      else if($('session').classList.contains('review'))parent=action('📊 Results',()=>click('back-sets'));
      else parent=action('🗂️ Practice Sets',()=>click('back-sets'));
    }
    return {hub,parent,title,id};
  }
  function normalizeInlineNavigation(){
    // Keep the original screen controls for their existing handlers; the shared bar is their visible replacement.
    document.querySelectorAll(hiddenLegacy).forEach(el=>el.setAttribute('data-navigation-legacy',''));
    document.querySelectorAll('button.quiz-prev,button[id$="Prev"]').forEach(button=>{
      if(/^(⬅️|←)?\s*Back\s*$/.test(button.textContent.trim()))button.textContent='← Previous';
    });
    if(page==='pts'){
      const labels={'back-modes':'🏆 PTS Menu','result-home':'🗂️ Practice Sets','review-answers':'📊 Review Answers'};
      Object.entries(labels).forEach(([id,label])=>{if($(id)&&$(id).textContent!==label)$(id).textContent=label;});
      ['result-home','review-answers'].forEach(id=>$(id)?.classList.add('activity-nav-button'));
      document.querySelectorAll('#set-cards .set-actions .text-button').forEach(button=>{button.textContent='📊 View Results';button.classList.add('activity-nav-button');});
    }
    if(page==='revision'){
      document.querySelectorAll('button[onclick="openScreen(\'ptsMenu\')"]').forEach(button=>{button.textContent='🏆 PTS Menu';button.classList.add('activity-nav-button');});
      document.querySelectorAll('button.ctrl[onclick="openScreen(\'practiceMenu\')"]').forEach(button=>{button.textContent='🎯 Practice Zone';button.classList.add('activity-nav-button');});
    }
  }
  let lastKey='';
  function sync(){
    const state=destination();home.href=url(state.hub);context.textContent=state.title;
    const key=state.id+'|'+state.hub+'|'+(state.parent?.label||'')+'|'+(state.parent?.target||'');
    if(key!==lastKey){
      const focused=parentSlot.contains(document.activeElement);parentSlot.replaceChildren();
      if(state.parent){
        const control=document.createElement(state.parent.target?'a':'button');control.className='activity-nav-button';control.id='activity-parent';control.textContent=state.parent.label;
        if(state.parent.target){control.href=state.parent.target;control.addEventListener('click',external);}else{control.type='button';control.onclick=state.parent.callback;}
        parentSlot.append(control);if(focused)control.focus({preventScroll:true});
      }
      lastKey=key;
    }
    normalizeInlineNavigation();
  }
  const measure=()=>document.documentElement.style.setProperty('--activity-navigation-height',bar.offsetHeight+'px');
  new ResizeObserver(measure).observe(bar);measure();
  const observer=new MutationObserver(sync);
  document.querySelectorAll('.screen,.activity-screen,.practice-screen,.quiz-screen,.unscramble-screen,.guess-screen,#menuScreen,#home,#sets,#session,#results').forEach(el=>observer.observe(el,{attributes:true,attributeFilter:['class','hidden','style']}));
  window.addEventListener('hashchange',sync);
  window.ActivityNavigation={refresh:sync};

  // A browser-history entry represents a PTS screen, not an individual answer.
  // Snapshots are held in memory so refreshing still clears the answer session.
  function installPTSHistory(adapter,name,allowed){
    const memory=new Map(),prefix=Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
    let sequence=0,activeToken='',replaying=false;
    const initial=adapter.capture();
    const key=route=>route.screen+'|'+(['sets','quiz','review','results','ptsQuiz','ptsResult'].includes(route.screen)?route.mode:'')+'|'+(['quiz','review','results'].includes(route.screen)?route.setId:'');
    const write=(token,replace)=>{
      const old=window.history.state;
      const state={...(old&&typeof old==='object'?old:{}),activityScreen:{page:name,token}};
      window.history[replace?'replaceState':'pushState'](state,'',location.href);
    };
    const stash=()=>{
      if(replaying)return;
      const route=adapter.capture();
      if(allowed(route))memory.set(activeToken,route);
    };
    const record=()=>{
      if(replaying)return;
      const route=adapter.capture();if(!allowed(route))return;
      const previous=memory.get(activeToken);
      if(previous&&key(previous)===key(route)){memory.set(activeToken,route);return;}
      activeToken=prefix+':'+(++sequence);memory.set(activeToken,route);write(activeToken,false);
    };
    activeToken=prefix+':0';memory.set(activeToken,initial);write(activeToken,true);
    window.addEventListener('activity-screen-before-change',stash);
    window.addEventListener('activity-screen-change',record);
    window.addEventListener('popstate',event=>{
      const entry=event.state?.activityScreen;if(entry?.page!==name)return;
      stash();
      const known=memory.has(entry.token),route=known?memory.get(entry.token):initial;
      replaying=true;
      try{adapter.restore(route);}finally{replaying=false;}
      activeToken=known?entry.token:prefix+':'+(++sequence);
      memory.set(activeToken,adapter.capture());if(!known)write(activeToken,true);
    });
  }
  if(page==='pts'&&window.PTSNavigation){
    installPTSHistory(window.PTSNavigation,'pts-zone-2',()=>true);
  }
  if(page==='revision'&&window.LegacyPTSNavigation){
    const originalOpen=window.openScreen,originalStart=window.startPTS;
    let starting=false;
    window.openScreen=function(...args){
      if(!starting)window.dispatchEvent(new Event('activity-screen-before-change'));
      const result=originalOpen.apply(this,args);
      window.dispatchEvent(new Event('activity-screen-change'));return result;
    };
    window.startPTS=function(...args){
      window.dispatchEvent(new Event('activity-screen-before-change'));starting=true;
      try{return originalStart.apply(this,args);}finally{starting=false;}
    };
    installPTSHistory(window.LegacyPTSNavigation,'pts-zone-1',route=>['home','ptsMenu','ptsQuiz','ptsResult'].includes(route.screen));
  }
  sync();
})();
