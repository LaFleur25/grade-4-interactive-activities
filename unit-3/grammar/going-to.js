function openScreen(id) {
  if (!['home', 'learn', 'mc', 'quiz', 'buildMenu', 'build', 'spinner'].includes(id)) return;
  document.querySelectorAll('.screen').forEach(screen => { screen.hidden = screen.id !== id; });
  window.ActivityNavigation?.refresh();
  document.getElementById({home:'home-title', learn:'learn-title', mc:'mc-title', quiz:'quiz-title', buildMenu:'build-menu-title', build:'build-title', spinner:'spinner-title'}[id]).focus();
  window.scrollTo(0, 0);
}
document.querySelectorAll('[data-screen]').forEach(button => {
  button.addEventListener('click', () => openScreen(button.dataset.screen));
});
const normalizeAnswer = value => value.trim().toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, ' ');
document.querySelectorAll('[data-practice]').forEach(form => {
  const inputs = [...form.querySelectorAll('input')];
  const feedback = form.querySelector('.practice-feedback');
  form.addEventListener('submit', event => {
    event.preventDefault();
    let correct = 0;
    inputs.forEach(input => {
      const valid = input.dataset.answers.split('|').some(answer => normalizeAnswer(answer) === normalizeAnswer(input.value));
      input.classList.toggle('good', valid); input.classList.toggle('bad', !valid);
      input.setAttribute('aria-invalid', String(!valid));
      if (valid) correct++;
    });
    feedback.textContent = correct === inputs.length ? '🌟 Great job! All answers are correct!' : `${correct} of ${inputs.length} correct. Check the highlighted answers and try again.`;
  });
  form.addEventListener('reset', () => {
    inputs.forEach(input => { input.classList.remove('good', 'bad'); input.removeAttribute('aria-invalid'); });
    feedback.textContent = '';
  });
});

const quizSets = {
  plans: [
    ['Jane ___ going to paint a picture.', ['is', 'are', 'am', 'be'], 0, 'Jane is one person: use is.'],
    ['Tom and Jane ___ going to visit a museum.', ['is', 'are', 'am', 'be'], 1, 'Tom and Jane = they: use are.'],
    ['I ___ going to make a model.', ['is', 'are', 'am', 'be'], 2, 'With I, use am.'],
    ['Tom is going to ___ the guitar.', ['plays', 'playing', 'play', 'played'], 2, 'Use the base verb after going to.'],
    ['We ___ going to watch a film. We have other plans.', ['aren’t', 'isn’t', 'am not', 'don’t'], 0, 'With we, use aren’t.'],
    ['Jane ___ going to be a dancer. She wants to be an artist.', ['aren’t', 'isn’t', 'am not', 'doesn’t'], 1, 'With Jane, use isn’t.'],
    ['I ___ going to stay home. I have a plan to go out.', ['isn’t', 'aren’t', 'am not', 'don’t'], 2, 'With I, use am not.'],
    ['They are going to ___ cookies tomorrow.', ['bake', 'bakes', 'baking', 'baked'], 0, 'Use the base verb bake.'],
    ['Choose the correct sentence.', ['He going to draw.', 'He is going to draw.', 'He are going to draw.', 'He is going to draws.'], 1, 'He needs is before going to.'],
    ['When she grows up, Jane is going to ___ an artist.', ['is', 'being', 'be', 'are'], 2, 'Be is the base verb here.']
  ],
  questions: [
    ['___ Tom going to play the guitar?', ['Is', 'Are', 'Am', 'Does'], 0, 'Use Is with Tom.'],
    ['___ they going to visit the gallery?', ['Is', 'Are', 'Am', 'Do'], 1, 'Use Are with they.'],
    ['Is Jane going to paint? Yes, ___.', ['she does', 'she is', 'she going', 'she are'], 1, 'Use she is in the short answer.'],
    ['Are Tom and Jane going to sing? No, ___.', ['they isn’t', 'they don’t', 'they aren’t', 'they am not'], 2, 'Tom and Jane = they: use they aren’t.'],
    ['Are you going to dance? Yes, ___.', ['I am', 'I do', 'I going', 'I is'], 0, 'Answer Are you ...? with Yes, I am.'],
    ['___ I going to be in the show?', ['Are', 'Is', 'Am', 'Do'], 2, 'Use Am with I.'],
    ['Choose the correct question.', ['Is going to Tom paint?', 'Is Tom going to paint?', 'Tom is going to paint?', 'Does Tom going to paint?'], 1, 'Put Is before the subject.'],
    ['Is Tom going to ___ a designer?', ['be', 'is', 'being', 'are'], 0, 'Use the base verb be.'],
    ['Are we going to visit the park? No, ___.', ['we isn’t', 'we aren’t', 'we don’t', 'we am not'], 1, 'Use we aren’t.'],
    ['___ is Jane going to do tomorrow? She is going to draw.', ['What', 'Are', 'Is', 'Do'], 0, 'What asks about the action.']
  ]
};
const quizStates = Object.fromEntries(Object.entries(quizSets).map(([key, items]) => [key, { index: 0, answers: Array(items.length).fill(null) }]));
let quizSet = 'plans';
const el = id => document.getElementById(id);
function renderQuiz() {
  const state = quizStates[quizSet], items = quizSets[quizSet];
  const [question, options, correct, explanation] = items[state.index];
  el('quiz-progress').textContent = `Question ${state.index + 1} of ${items.length}`;
  el('quiz-score').textContent = `Score: ${state.answers.filter((answer, i) => answer === items[i][2]).length} / ${items.length}`;
  el('quiz-question').textContent = question;
  el('quiz-options').replaceChildren();
  options.forEach((option, i) => {
    const button = document.createElement('button'); button.type = 'button'; button.textContent = option;
    if (state.answers[state.index] !== null) {
      button.disabled = true;
      if (i === correct) button.className = 'correct';
      else if (i === state.answers[state.index]) button.className = 'wrong';
    }
    button.addEventListener('click', () => { state.answers[state.index] = i; renderQuiz(); });
    el('quiz-options').append(button);
  });
  const answer = state.answers[state.index];
  el('quiz-feedback').textContent = answer === null ? '' : (answer === correct ? '✓ Correct! ' : 'Not quite. ') + explanation;
  el('quiz-prev').disabled = state.index === 0;
  el('quiz-next').disabled = false;
  el('quiz-next').textContent = state.index === items.length - 1 ? 'See Result →' : 'Next →';
}
document.querySelectorAll('[data-quiz-set]').forEach(button => button.addEventListener('click', () => { quizSet = button.dataset.quizSet; renderQuiz(); openScreen('quiz'); }));
el('quiz-prev').onclick = () => { const state = quizStates[quizSet]; if (state.index > 0) { state.index--; renderQuiz(); } };
el('quiz-next').onclick = () => {
  const state = quizStates[quizSet], items = quizSets[quizSet];
  if (state.index < items.length - 1) { state.index++; renderQuiz(); return; }
  const unanswered = state.answers.findIndex(answer => answer === null);
  if (unanswered !== -1) { state.index = unanswered; renderQuiz(); el('quiz-feedback').textContent = 'Complete this question to see your result.'; return; }
  const score = state.answers.filter((answer, i) => answer === items[i][2]).length;
  el('quiz-question').textContent = `🌟 Well done! Your score: ${score} / ${items.length}`;
  el('quiz-options').replaceChildren(); el('quiz-feedback').textContent = 'Use Previous to review your answers, or choose another set.';
  el('quiz-next').disabled = true;
};

const buildSets = {
  jumbled: [
    ['Make a positive sentence.', 'Jane is going to paint a picture.'],
    ['Make a positive sentence.', 'Tom is going to play the guitar.'],
    ['Make a positive sentence.', 'They are going to visit a museum.'],
    ['Make a positive sentence.', 'I am going to be an artist.'],
    ['Make a negative sentence.', 'Jane is not going to dance tonight.'],
    ['Make a negative sentence.', 'We are not going to watch a film.'],
    ['Make a negative sentence.', 'I am not going to sing today.'],
    ['Make a question.', 'Is Tom going to make a model?'],
    ['Make a question.', 'Are they going to play outside?'],
    ['Make a question.', 'Are you going to be a teacher?']
  ],
  change: [
    ['Make it negative: Jane is going to sing.', 'Jane is not going to sing.'],
    ['Make it negative: They are going to paint.', 'They are not going to paint.'],
    ['Make it negative: I am going to dance.', 'I am not going to dance.'],
    ['Make a question: Tom is going to play.', 'Is Tom going to play?'],
    ['Make a question: They are going to draw.', 'Are they going to draw?'],
    ['Make a question: You are going to be a designer.', 'Are you going to be a designer?']
  ]
};
function makeBuildState(items) {
  return {index:0, tasks:items.map(([, sentence]) => {
    const words = sentence.split(' ').map((text, id) => ({text, id}));
    const bank = words.map(word => word.id);
    for (let i = bank.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [bank[i], bank[j]] = [bank[j], bank[i]]; }
    return {words, bank, chosen:[], checked:false};
  })};
}
const buildStates = Object.fromEntries(Object.entries(buildSets).map(([key, items]) => [key, makeBuildState(items)]));
let buildSet = 'jumbled';
function renderBuild() {
  const state = buildStates[buildSet], task = state.tasks[state.index], item = buildSets[buildSet][state.index];
  el('build-progress').textContent = `Sentence ${state.index + 1} of ${state.tasks.length}`;
  el('build-type').textContent = buildSet === 'jumbled' ? 'Jumbled Sentences' : 'Change the Sentence';
  el('build-clue').textContent = item[0];
  const draw = (target, ids, selected) => {
    target.replaceChildren();
    ids.forEach(id => {
      const button = document.createElement('button'); button.type = 'button'; button.className = 'word'; button.textContent = task.words[id].text;
      button.addEventListener('click', () => {
        if (selected) { task.chosen = task.chosen.filter(value => value !== id); task.bank.push(id); }
        else { task.bank = task.bank.filter(value => value !== id); task.chosen.push(id); }
        task.checked = false; renderBuild();
      });
      target.append(button);
    });
  };
  draw(el('build-bank'), task.bank, false); draw(el('build-answer'), task.chosen, true);
  const answer = task.chosen.map(id => task.words[id].text).join(' ');
  el('build-feedback').textContent = !task.checked ? '' : answer === item[1] ? '✓ Great job! That sentence is correct.' : 'Not quite. Check the word order and try again.';
  el('build-prev').disabled = state.index === 0; el('build-next').disabled = state.index === state.tasks.length - 1;
}
document.querySelectorAll('[data-build-set]').forEach(button => button.addEventListener('click', () => { buildSet = button.dataset.buildSet; renderBuild(); openScreen('build'); }));
el('build-check').onclick = () => { const state = buildStates[buildSet]; state.tasks[state.index].checked = true; renderBuild(); };
el('build-reset').onclick = () => { const state = buildStates[buildSet], task = state.tasks[state.index]; task.bank.push(...task.chosen); task.chosen = []; task.checked = false; renderBuild(); };
el('build-prev').onclick = () => { const state = buildStates[buildSet]; if (state.index > 0) { state.index--; renderBuild(); } };
el('build-next').onclick = () => { const state = buildStates[buildSet]; if (state.index < state.tasks.length - 1) { state.index++; renderBuild(); } };
