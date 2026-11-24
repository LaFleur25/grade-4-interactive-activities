(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const questions = [
    {tag:'Tomorrow', icon:'☀️', title:'Your plans!', prompt:'What are you going to do tomorrow?', answer:'I am going to play football tomorrow.', example:true},
    {tag:'Complete', icon:'🎨', title:'Fill the gap', prompt:'Jane ___ going to paint a picture.', answer:'Jane is going to paint a picture.'},
    {tag:'Negative', icon:'🚫', title:'Make it negative', prompt:'Tom is going to play the guitar.', answer:'Tom is not going to play the guitar. / Tom isn’t going to play the guitar.'},
    {tag:'Question', icon:'❓', title:'Make a question', prompt:'They are going to visit a museum.', answer:'Are they going to visit a museum?'},
    {tag:'Fix it', icon:'🔍', title:'Find and fix the mistake', prompt:'She are going to dance tonight.', answer:'She is going to dance tonight.'},
    {tag:'Weekend', icon:'🌳', title:'Your weekend!', prompt:'What are you going to do this weekend?', answer:'I am going to visit a museum this weekend.', example:true},
    {tag:'Order', icon:'🧩', title:'Put the words in order', prompt:'going / We / bake / to / are / cookies', answer:'We are going to bake cookies.'},
    {tag:'Say yes', icon:'👍', title:'Give a short answer: YES', prompt:'Are you going to watch a film tonight?', answer:'Yes, I am.'},
    {tag:'Say no', icon:'🙅', title:'Give a short answer: NO', prompt:'Is Tom going to sing in the show?', answer:'No, he isn’t. / No, he is not.'},
    {tag:'Complete', icon:'🛠️', title:'Fill the gap', prompt:'I ___ going to make a model tomorrow.', answer:'I am going to make a model tomorrow.'},
    {tag:'Fix it', icon:'🖌️', title:'Find and fix the mistake', prompt:'He is going to paints a picture.', answer:'He is going to paint a picture.'},
    {tag:'Negative', icon:'🎬', title:'Make it negative', prompt:'We are going to watch a film.', answer:'We are not going to watch a film. / We aren’t going to watch a film.'},
    {tag:'Question', icon:'🎸', title:'Make a question', prompt:'She is going to play the guitar.', answer:'Is she going to play the guitar?'},
    {tag:'Dream job', icon:'🚀', title:'Your future!', prompt:'What are you going to be when you grow up?', answer:'I am going to be an artist when I grow up.', example:true},
    {tag:'Ask a friend', icon:'💬', title:'Ask your friend!', prompt:'Ask a friend a question with “Are you going to…?”', answer:'Are you going to paint a picture tomorrow?', example:true}
  ];
  const wheel = $('question-wheel'), dialog = $('spin-dialog');
  const colors = ['#ffd470','#9edfea','#d2b5f5','#ffaec5','#b8e0b1'];
  const removed = new Set();
  let visible = questions.map((_,i) => i), labels = new Map();
  let remaining = questions.map((_, i) => i), last = null, rotation = 0, busy = false;
  function drawWheel() {
    visible = questions.map((_,i) => i).filter(i => !removed.has(i));
    const step = 360 / (visible.length || 1);
    wheel.replaceChildren(); labels = new Map();
    rotation = 0; wheel.style.transform = 'rotate(0deg)';
    wheel.style.background = visible.length ? `conic-gradient(from ${-step/2}deg, ${visible.map((_,i) => `${colors[i%colors.length]} ${i*step}deg ${(i+1)*step}deg`).join(',')})` : '#e5e8f0';
    visible.forEach((index,i) => {
    const question = questions[index];
    const label = document.createElement('span'); label.className = 'question-wheel-label';
    label.classList.toggle('discovered',!remaining.includes(index));
    label.style.setProperty('--angle', `${i*step}deg`);
    label.style.setProperty('--counter-angle', `${-i*step}deg`);
    const number = document.createElement('b'); number.textContent = String(index+1);
    const tag = document.createElement('span'); tag.textContent = question.tag;
    label.append(number,tag); wheel.append(label); labels.set(index,label);
    });
  }
  drawWheel();
  function updateStatus() {
    $('spin-status').textContent = !visible.length ? 'All questions removed! Press Start Again to restore them.' : (remaining.length ? `${remaining.length} questions left this round` : '🌟 Round complete! Play again?') + (removed.size ? ` · ${removed.size} removed` : '');
    $('spin-start').disabled = !visible.length;
    $('spin-next').disabled = !visible.length;
    $('spin-start').textContent = remaining.length ? '🎡 Spin the Wheel!' : '🎡 Play Again!';
    $('spin-next').textContent = remaining.length ? 'Next Spin →' : '🎡 Play Again!';
  }
  function reset() {
    removed.clear();
    remaining = questions.map((_,i) => i); last = null;
    drawWheel();
    $('spin-last').hidden = true;
    updateStatus();
  }
  function showQuestion() {
    const question = questions[last];
    $('spin-question-number').textContent = `QUESTION ${last+1} · BE GOING TO`;
    $('spin-question-icon').textContent = question.icon;
    $('spin-question-title').textContent = question.title;
    $('spin-question-prompt').textContent = question.prompt;
    $('spin-answer-text').textContent = question.answer;
    $('spin-answer-label').textContent = question.example ? 'ONE POSSIBLE ANSWER · YOUR IDEA CAN BE DIFFERENT' : 'ANSWER';
    $('spin-answer').hidden = true;
    $('spin-reveal').textContent = question.example ? '👀 Show Example Answer' : '👀 Show Answer';
    $('spin-reveal').setAttribute('aria-expanded','false');
    $('spin-remove').disabled = removed.has(last);
    $('spin-remove').textContent = removed.has(last) ? '✓ Question Removed' : '🗑 Remove Question';
    dialog.showModal(); $('spin-reveal').focus();
  }
  async function spin() {
    if (busy || !visible.length) return;
    if (!remaining.length) {
      remaining = [...visible];
      labels.forEach(label => label.classList.remove('discovered'));
    }
    busy = true;
    $('spin-start').disabled = true; $('spin-reset').disabled = true; $('spin-last').disabled = true;
    $('spin-status').textContent = 'Spinning… Which question will it be?';
    const index = remaining[Math.floor(Math.random()*remaining.length)];
    const target = (360-visible.indexOf(index)*(360/visible.length))%360;
    const end = rotation+360*5+((target-rotation%360+360)%360);
    // Web Animations avoids global CSS transition overrides cancelling the spin.
    const animation = wheel.animate([{transform:`rotate(${rotation}deg)`},{transform:`rotate(${end}deg)`}], {
      duration:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 700 : 3600,
      easing:'cubic-bezier(.12,.65,.12,1)', fill:'forwards'
    });
    try { await animation.finished; } catch { /* Keep the question available if animation is cancelled. */ }
    wheel.style.transform = `rotate(${end}deg)`; animation.cancel(); rotation = end;
    busy = false;
    $('spin-start').disabled = false; $('spin-reset').disabled = false; $('spin-last').disabled = false;
    if ($('spinner').hidden) { updateStatus(); return; }
    remaining = remaining.filter(value => value !== index); last = index;
    labels.get(index).classList.add('discovered'); $('spin-last').hidden = false;
    updateStatus(); showQuestion();
  }
  $('spin-start').addEventListener('click',spin);
  $('spin-reset').addEventListener('click',reset);
  $('spin-remove').addEventListener('click',() => {
    if (last === null || removed.has(last)) return;
    removed.add(last);
    remaining = remaining.filter(index => index !== last);
    drawWheel(); updateStatus(); dialog.close();
  });
  $('spin-last').addEventListener('click',showQuestion);
  $('spin-close').addEventListener('click',() => dialog.close());
  dialog.addEventListener('keydown',event => {
    if (event.key === 'Escape') { event.preventDefault(); dialog.close(); }
  });
  dialog.addEventListener('close',() => { if (!busy) (visible.length ? $('spin-start') : $('spin-reset')).focus({preventScroll:true}); });
  $('spin-next').addEventListener('click',() => { dialog.close(); spin(); });
  $('spin-reveal').addEventListener('click',() => {
    const show = $('spin-answer').hidden;
    $('spin-answer').hidden = !show;
    $('spin-reveal').setAttribute('aria-expanded',String(show));
    $('spin-reveal').textContent = show ? '🙈 Hide Answer' : questions[last].example ? '👀 Show Example Answer' : '👀 Show Answer';
  });
})();
