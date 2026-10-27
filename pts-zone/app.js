'use strict';
(() => {
  const DATA = window.PTS_DATA;
  const $ = id => document.getElementById(id);
  const MODES = {
    training: {name:'PTS Training',icon:'🎯',emojis:['🌱','✨','🚀'],description:'Choose a practice set. Try, learn and correct your answers.'},
    challenge: {name:'PTS Challenge',icon:'🧩',emojis:['🔎','💡','🧠'],description:'Choose a challenge. Look carefully and find the clues.'},
    mock: {name:'PTS Mock Exam',icon:'📝',emojis:['📝','🎓','⭐'],description:'Choose an exam. Your results appear when you finish.'}
  };
  const KINDS = {reading:'Read & choose',dialogue:'Read the conversation',table:'Look at the table',picture:'Look & choose',inference:'Look for a clue',poster:'Look at the card',timeline:'Look at the order',scene:'Look at the scene'};
  const TOPICS={routines:{name:'Daily Routines',icon:'🌅'},frequency:{name:'Adverbs of Frequency',icon:'📅'},pastContinuous:{name:'Past Continuous',icon:'🕰️'}};
  let selectedMode = 'training', activeSet = null, activeSession = null, view = 'home';
  let sessions = {}, history = {}, toastTimer;
  const clone = value => JSON.parse(JSON.stringify(value));
  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  function toast(message) {
    clearTimeout(toastTimer);
    $('toast').textContent = message; $('toast').hidden = false;
    toastTimer = setTimeout(() => { $('toast').hidden = true; }, 3800);
  }
  function score(set, session) {
    const answers = session.answers;
    return set.questions.reduce((total,q,i) => total + Number(answers[i] === q.answer),0);
  }
  function newSession() {
    return {index:0,answers:Array(10).fill(null),flags:Array(10).fill(false),submitted:false};
  }
  function show(screen) {
    window.dispatchEvent(new Event('activity-screen-before-change'));
    view = screen;
    $('home').hidden = screen !== 'home';
    $('sets').hidden = screen !== 'sets';
    $('results').hidden = screen !== 'results';
    $('session').hidden = screen !== 'quiz' && screen !== 'review';
    $('session').classList.toggle('review',screen === 'review');
    document.body.classList.toggle('in-session',screen === 'quiz'||screen === 'review');
    window.scrollTo(0,0);
    window.dispatchEvent(new Event('activity-screen-change'));
  }
  function showHome(){show('home');}
  function showSets(mode = selectedMode) {
    selectedMode = mode;
    $('sets-title').textContent = MODES[mode].name;
    $('mode-icon').textContent=MODES[mode].icon;
    $('mode-description').textContent = MODES[mode].description;
    $('set-cards').replaceChildren();
    for (const [setIndex,set] of DATA.sets.filter(s => s.mode === mode).entries()) {
      const record = history[set.id], draft = sessions[set.id] && !sessions[set.id].submitted ? sessions[set.id] : null;
      const card = make('article','set-card '+mode), head = make('div','set-head');
      const title=make('h3');title.append(make('span','set-emoji',MODES[mode].emojis[setIndex]),document.createTextNode(set.title));
      if (set.isNew) title.append(make('span','set-new','NEW'));
      head.append(title,make('span','set-status'+(record&&!draft?' complete':''),draft?'In progress':record?'✓ Completed':'Ready to start'));
      const meta = make('p','set-meta','10 Questions'+(draft?' · '+draft.answers.filter(a => a !== null).length+' answered':''));
      const previous = make('p','set-meta',record?'Last score this session: '+score(set,record)+' / 10':'Ready when you are!');
      const actions = make('div','set-actions');
      const start = make('button','button primary',draft?'Continue':record?'Retry':'Start');
      start.type = 'button'; start.onclick = () => startSet(set.id);
      actions.append(start);
      if (record) {
        const review = make('button','text-button','View Results');
        review.type='button';review.onclick=() => {activeSet=set;activeSession=clone(record);showResults();};
        actions.append(review);
      }
      card.append(head,meta,previous,actions);$('set-cards').append(card);
    }
    show('sets');$('sets-title').focus({preventScroll:true});
  }
  function startSet(id, reset = false) {
    const set = DATA.sets.find(s => s.id === id); if (!set) return;
    activeSet = set;
    if (reset || !sessions[id] || sessions[id].submitted) sessions[id] = newSession();
    activeSession = sessions[id];show('quiz');renderQuestion();
    $('session-title').focus({preventScroll:true});
  }
  function renderSource(source, question) {
    const box = $('stimulus');box.replaceChildren();box.scrollTop = 0;
    const top = make('div','source-top'), sourceQuestions = activeSet.questions.filter(q => q.source === question.source);
    const sourceLabels={table:'LOOK AT THE TABLE',dialogue:'READ THE CONVERSATION',poster:'LOOK AT THE CARD',timeline:'FOLLOW THE STEPS',scene:'LOOK AT THE SCENE'};
    top.append(make('span','eyebrow',sourceLabels[source.type]||(source.image?'LOOK AT THE PICTURE':'READ THE SHORT TEXT')));
    if (sourceQuestions.length > 1) top.append(make('span','quiet-pill','Shared text · '+(sourceQuestions.indexOf(question)+1)+' / '+sourceQuestions.length));
    const title = make('h2','source-title',source.title); title.id = 'source-title';
    box.append(top,title);
    if (source.type === 'table') {
      const table = make('table','source-table'+(source.compact?' week-tracker':'')),thead=make('thead'),tr=make('tr');
      source.headers.forEach(h => {const th=make('th','',h);th.scope='col';tr.append(th);});thead.append(tr);
      const tbody=make('tbody');
      source.rows.forEach(row => {const tr=make('tr');row.forEach((cell,i)=>{const td=make(i===0?'th':'td','',cell);if(i===0)td.scope='row';if(cell==='✓'||cell==='—'){td.className=cell==='✓'?'tick':'dash';td.setAttribute('aria-label',cell==='✓'?'Yes':'No');}tr.append(td);});tbody.append(tr);});
      table.append(thead,tbody);box.append(table);
      if(source.note)box.append(make('p','table-note',source.note));
    } else if(source.type==='poster'){
      const card=make('div','poster-card'),icon=make('span','poster-icon',source.icon);icon.setAttribute('aria-hidden','true');card.append(icon);
      const facts=make('div','poster-facts');
      source.facts.forEach(f=>{const fact=make('div','poster-fact'),icon=make('span','fact-icon',f.icon);icon.setAttribute('aria-hidden','true');fact.append(icon,make('small','',f.label),make('strong','',f.value));facts.append(fact);});
      card.append(facts);box.append(card);
    } else if(source.type==='timeline'){
      const steps=make('div','timeline');
      source.steps.forEach(step=>{const card=make('div','timeline-step'),icon=make('span','step-icon',step.icon);icon.setAttribute('aria-hidden','true');card.append(icon,make('small','',step.time),make('strong','',step.action));steps.append(card);});
      box.append(steps);
    } else if(source.type==='scene'){
      box.append(make('p','scene-intro',source.intro));const people=make('div','scene-people');
      source.people.forEach(person=>{const card=make('div','scene-person'),icon=make('span','person-icon',person.icon);icon.setAttribute('aria-hidden','true');card.append(icon,make('strong','',person.name),make('p','',person.action));people.append(card);});
      box.append(people,make('p','scene-end',source.end));
    } else if (source.type === 'dialogue') {
      source.turns.forEach(turn => {const p=make('p','dialogue-turn');p.append(make('strong','',turn.name),document.createTextNode(turn.text));box.append(p);});
    } else {
      const body=make('div',source.image?'source-body source-with-picture':'source-body');
      if(source.image) {
        const figure=make('figure','source-figure'),image=make('img');
        image.src=source.image;image.alt=source.alt;image.width=480;image.height=480;image.decoding='async';
        figure.append(image);if(source.caption)figure.append(make('figcaption','',source.caption));body.append(figure);
      }
      body.append(make('p','source-text',source.text));box.append(body);
    }
  }
  function renderFeedback(q, i) {
    const box=$('feedback');box.replaceChildren();box.className='feedback';
    const current=activeSession.answers[i],submitted=activeSession.submitted;
    if(activeSet.mode === 'mock' && !submitted) {
      if(current!==null)box.append(make('p','','Answer saved. You can change it before submitting.'));
      return;
    }
    if(current===null) {
      if(submitted) {box.classList.add('bad');box.append(make('p','','Not answered. Correct answer: '+String.fromCharCode(65+q.answer)+'. '+q.options[q.answer]),make('p','explanation',q.explanation));}
      return;
    }
    const ok=current===q.answer;
    box.classList.add(ok?'good':'bad');

    let message=ok?'✓ Correct! Well done.':(submitted?'Correct answer: '+String.fromCharCode(65+q.answer)+'. '+q.options[q.answer]:'Not quite. Read the explanation and try again.');
    if(submitted&&activeSet.mode==='mock'&&ok)message='✓ Your answer is correct.';
    box.append(make('p','',message),make('p','explanation',q.explanation));

  }
  function renderQuestion() {
    if(!activeSet||!activeSession)return;
    const i=activeSession.index,q=activeSet.questions[i],chosen=activeSession.answers[i],review=view==='review';
    $('session-title').textContent=activeSet.title;
    $('session-mode').textContent=review?'Answer Review':MODES[activeSet.mode].name;
    $('question-count').textContent='Question '+(i+1)+' / 10';
    $('answered-count').textContent='Answered: '+activeSession.answers.filter(a=>a!==null).length+' / 10';
    $('progress-fill').style.width=(i+1)*10+'%';
    $('question-kind').textContent=KINDS[q.kind];
    document.querySelector('.question-heading').hidden=!review;
    $('question-prompt').textContent=q.prompt;
    $('flag-question').hidden=review;
    $('flag-question').setAttribute('aria-pressed',String(activeSession.flags[i]));
    $('flag-question').textContent=activeSession.flags[i]?'★ Marked for review':'☆ Mark for review';
    $('review-status').hidden=!review;
    $('review-status').textContent=chosen===null?'Not answered':chosen===q.answer?'✓ Correct':'✗ Incorrect';
    $('review-status').className='status-chip '+(chosen===q.answer?'good':'bad');
    renderSource(activeSet.sources[q.source],q);
    $('options').replaceChildren();
    q.options.forEach((option,index) => {
      const button=make('button','option');button.type='button';
      button.setAttribute('aria-pressed',String(chosen===index));
      button.append(make('span','option-letter',String.fromCharCode(65+index)),make('span','option-copy',option));
      if(chosen===index)button.classList.add('selected');
      if(activeSession.submitted) {
        button.disabled=true;
        if(index===q.answer)button.classList.add('correct');
        else if(index===chosen)button.classList.add('wrong');
      } else if(activeSet.mode!=='mock'&&chosen===index)button.classList.add(chosen===q.answer?'correct':'wrong');
      button.onclick=()=>answer(index);$('options').append(button);
    });
    $('question-nav').replaceChildren();
    activeSet.questions.forEach((item,index) => {
      const answered=activeSession.answers[index]!==null;
      const button=make('button','question-number',String(index+1));button.type='button';
      if(answered)button.classList.add('answered');
      if(index===i){button.classList.add('current');button.setAttribute('aria-current','step');}
      if(activeSession.flags[index]&&!review)button.classList.add('flagged');
      if(review)button.classList.add(activeSession.answers[index]===item.answer?'review-good':'review-bad');
      button.setAttribute('aria-label','Question '+(index+1)+(answered?', answered':', not answered')+(activeSession.flags[index]?', marked for review':''));
      button.onclick=()=>go(index);$('question-nav').append(button);
    });
    renderFeedback(q,i);
    $('previous').disabled=i===0;
    $('next').textContent=i===9?(review?'Back to Results':'Finish Test'):'Next →';
    $('session-finish').textContent=review?'Back to Results':'Finish Test';
    $('session-finish').hidden=i===9;
    $('back-sets').textContent=review?'← Results':'← Back to Sets';
    $('workspace').scrollTop=0;document.querySelector('.answer-panel').scrollTop=0;
  }
  function answer(choice) {
    if(!activeSession||activeSession.submitted||view!=='quiz')return;
    const i=activeSession.index;
    activeSession.answers[i]=choice;
    renderQuestion();
  }
  function go(index) {
    if(index<0||index>=10)return;
    activeSession.index=index;
    renderQuestion();
    window.scrollTo(0,0);
  }
  function confirmAction({title,copy,note,cancel,confirm,action}) {
    const dialog=$('confirm-dialog');if(dialog.open)return;
    $('dialog-title').textContent=title;$('dialog-copy').textContent=copy;
    $('dialog-unanswered').textContent=note;$('dialog-unanswered').hidden=!note;
    $('dialog-cancel').textContent=cancel;$('dialog-confirm').textContent=confirm;
    dialog.returnValue='';
    dialog.onclose=()=>{if(dialog.returnValue==='confirm')action();};
    dialog.showModal();$('dialog-cancel').focus();
  }
  function requestFinish() {
    if(!activeSession||activeSession.submitted)return;
    const n=activeSession.answers.filter(a=>a===null).length;
    confirmAction({title:'Finish Your Test?',copy:'Are you ready to submit your answers?',
      note:n?'You have '+n+' unanswered question'+(n===1?'':'s')+'. You can keep working or submit now.':'All 10 questions are answered.',
      cancel:'Keep Working',confirm:'Finish Test',action:submit});
  }
  function submit() {
    if(!activeSession||activeSession.submitted)return;
    activeSession.submitted=true;activeSession.submittedAt=new Date().toISOString();
    history[activeSet.id]=clone(activeSession);showResults();
  }
  function renderTopicReport(){
    const report=$('topic-report');report.replaceChildren();
    const table=make('table','topic-table'),head=make('thead'),headrow=make('tr');
    ['Topic / Questions','Correct','Blank'].forEach(text=>{const th=make('th','',text);th.scope='col';headrow.append(th);});head.append(headrow);
    const body=make('tbody');let totalCorrect=0,totalWrong=0,totalBlank=0;
    for(const [key,topic] of Object.entries(TOPICS)){
      const indices=activeSet.questions.map((q,i)=>q.topic===key?i:-1).filter(i=>i>=0);
      const correct=indices.filter(i=>activeSession.answers[i]===activeSet.questions[i].answer).length;
      const blank=indices.filter(i=>activeSession.answers[i]===null).length;
      const wrong=indices.length-correct-blank;
      totalCorrect+=correct;totalWrong+=wrong;totalBlank+=blank;
      const row=make('tr');row.dataset.topic=key;row.dataset.total=indices.length;row.dataset.correct=correct;row.dataset.wrong=wrong;row.dataset.blank=blank;
      const name=make('td','topic-name',topic.icon+' '+topic.name);
      name.append(make('small','topic-total',indices.length+' questions'));
      row.append(name,make('td','topic-correct',correct+' / '+indices.length),make('td','topic-blank',String(blank)));body.append(row);
    }
    const foot=make('tfoot'),row=make('tr');
    row.append(make('td','','Total · 10 questions'),make('td','',totalCorrect+' / 10'),make('td','',String(totalBlank)));foot.append(row);
    table.append(head,body,foot);report.append(table);
  }
  function showResults() {
    const total=score(activeSet,activeSession);
    $('result-title').textContent=activeSet.title;$('result-mode').textContent=MODES[activeSet.mode].name;
    $('result-score').textContent=total+' / 10';$('result-percentage').textContent=total*10+'%';
    $('result-message').textContent=total===10?'Excellent work! You understood every question.':total>=7?'Well done! Review the clues in the questions you missed.':'Good effort! Read the explanations and try the set again.';
    const unanswered=activeSession.answers.filter(a=>a===null).length;
    $('unanswered-result').textContent=unanswered?unanswered+' unanswered question'+(unanswered===1?'.':'s.'):'All 10 questions answered.';
    renderTopicReport();
    show('results');$('result-title').focus({preventScroll:true});
  }
  function backToSets() {
    if(view==='review'){showResults();return;}
    confirmAction({title:'Return to Practice Sets?',copy:'Your answers will stay here while this page is open. Refreshing starts a fresh session.',
      note:'',cancel:'Keep Working',confirm:'🗂️ Practice Sets',action:()=>showSets(activeSet.mode)});
  }
  document.querySelectorAll('[data-mode]').forEach(button=>button.addEventListener('click',()=>showSets(button.dataset.mode)));
  $('previous').onclick=()=>go(activeSession.index-1);
  $('next').onclick=()=>{if(activeSession.index<9)go(activeSession.index+1);else if(view==='review')showResults();else requestFinish();};
  $('session-finish').onclick=()=>view==='review'?showResults():requestFinish();
  $('back-sets').onclick=backToSets;
  $('flag-question').onclick=()=>{if(activeSession.submitted)return;activeSession.flags[activeSession.index]=!activeSession.flags[activeSession.index];renderQuestion();};
  $('review-answers').onclick=()=>{activeSession.index=0;show('review');renderQuestion();$('session-title').focus({preventScroll:true});};
  $('retry-set').onclick=()=>startSet(activeSet.id,true);
  $('result-home').onclick=()=>showSets(activeSet.mode);
  document.addEventListener('keydown',event=>{
    if(view!=='quiz'||$('confirm-dialog').open||event.ctrlKey||event.metaKey||event.altKey||event.repeat)return;
    if(/^(INPUT|TEXTAREA|SELECT)$/.test(event.target.tagName))return;
    const letter=event.key.toUpperCase();
    if(/^[A-D]$/.test(letter)){event.preventDefault();answer(letter.charCodeAt(0)-65);}
  });
  $('back-modes').onclick=showHome;
  window.PTSNavigation = {
    hasDraft: () => Object.values(sessions).some(session => !session.submitted && session.answers.some(answer => answer !== null)),
    capture: () => ({screen:view,mode:selectedMode,setId:activeSet?.id||null}),
    restore: route => {
      selectedMode=Object.hasOwn(MODES,route.mode)?route.mode:'training';
      if(route.screen==='home'){showHome();return;}
      if(route.screen==='sets'){showSets(selectedMode);return;}
      const set=DATA.sets.find(item=>item.id===route.setId);
      const saved=route.screen==='quiz'?sessions[route.setId]:(history[route.setId]||sessions[route.setId]);
      if(!set||!saved){showSets(selectedMode);return;}
      activeSet=set;activeSession=saved.submitted?clone(saved):saved;
      if(route.screen==='results'){showResults();return;}
      show(route.screen==='review'||activeSession.submitted?'review':'quiz');renderQuestion();
    }
  };
  showHome();
})();
