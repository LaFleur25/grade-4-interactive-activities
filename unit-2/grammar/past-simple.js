(() => {
  'use strict';
  const screens = ['home', 'learn', 'mc', 'quiz', 'quizResult', 'verbpractice'];
  function displayScreen(name) {
    screens.forEach(id => { document.getElementById(id).hidden = name !== id; });
    window.scrollTo(0, 0);
    document.getElementById({home:'home-title',learn:'learn-title',mc:'mc-title',quiz:'quiz-title',quizResult:'result-title',verbpractice:'verbpractice-title'}[name]).focus({preventScroll:true});
  }
  window.openScreen = function (name) {
    if (!screens.includes(name)) return;
    if (document.getElementById(name).hidden) {
      history.pushState({ ...history.state, pastSimpleScreen: name, pastSimpleQuiz: activeQuiz }, '', location.href);
      displayScreen(name);
    }
  };
  history.replaceState({ ...history.state, pastSimpleScreen: 'home' }, '', location.href);
  window.addEventListener('popstate', event => {
    const screen = screens.includes(event.state?.pastSimpleScreen) ? event.state.pastSimpleScreen : 'home';
    if (Number.isInteger(event.state?.pastSimpleQuiz) && quizSets[event.state.pastSimpleQuiz]) activeQuiz = event.state.pastSimpleQuiz;
    if (screen === 'quiz') renderQuiz();
    if (screen === 'quizResult') renderQuizResult();
    displayScreen(screen);
  });
  document.querySelectorAll('[data-screen]').forEach(button => button.addEventListener('click', () => window.openScreen(button.dataset.screen)));
  const quizSets = window.PAST_SIMPLE_QUIZZES;
  const quizStates = quizSets.map(set => ({index:0, answers:Array(set.questions.length).fill(null)}));
  let activeQuiz = 0;
  const letters = ['A','B','C','D'], correctPositions = [2,0,3,1,0,2,1,3,1,0];
  function correctPosition(index) { return (correctPositions[index] + activeQuiz) % 4; }
  function quizScore() { return quizStates[activeQuiz].answers.reduce((sum, answer, i) => sum + Number(answer === correctPosition(i)), 0); }
  function renderQuizResult() {
    const set = quizSets[activeQuiz], unanswered = quizStates[activeQuiz].answers.filter(answer => answer === null).length;
    document.getElementById('result-title').textContent = '📊 Quiz Results';
    document.getElementById('mc-result').textContent = `${set.title}: ${quizScore()} / ${set.questions.length} correct.${unanswered ? ` ${unanswered} unanswered.` : ''}`;
  }
  function startQuiz(index, reset = false) {
    activeQuiz = index;
    if (reset) quizStates[index] = {index:0, answers:Array(quizSets[index].questions.length).fill(null)};
    renderQuiz(); window.openScreen('quiz');
  }
  const quizMenu = document.getElementById('mc-menu');
  quizSets.forEach((set, index) => {
    const button = document.createElement('button'); button.type = 'button'; button.className = 'activity-card ' + ['yellow','blue','pink','purple-card'][index];
    const icon = document.createElement('span'); icon.className = 'activity-icon'; icon.textContent = set.icon;
    const title = document.createElement('h3'); title.textContent = set.title;
    const copy = document.createElement('p'); copy.textContent = ['Actions that happened or didn’t happen.','Yes/No questions, Wh- questions and short answers.','Positive, negative and question forms together.','Past forms of regular and irregular verbs.'][index];
    const tag = document.createElement('span'); tag.className = 'activity-tag'; tag.textContent = '10 Questions';
    const heading = document.createElement('div'); heading.className = 'mc-card-heading'; heading.append(icon,title);
    button.append(heading,copy,tag); button.addEventListener('click', () => startQuiz(index, quizStates[index].answers.every(answer => answer !== null))); quizMenu.append(button);
  });
  function renderQuiz() {
    const set = quizSets[activeQuiz], state = quizStates[activeQuiz], item = set.questions[state.index], selected = state.answers[state.index];
    const rightIndex = correctPosition(state.index), options = item.wrong.slice(); options.splice(rightIndex, 0, item.correct);
    document.getElementById('quiz-title').textContent = '🎯 ' + set.title;
    document.getElementById('mc-counter').textContent = `Question ${state.index + 1} / ${set.questions.length}`;
    document.getElementById('mc-score').textContent = `Score: ${quizScore()} / ${set.questions.length}`;
    const context = document.getElementById('mc-context'); context.textContent = item.context || ''; context.hidden = !item.context;
    const tableBox = document.getElementById('mc-table'); tableBox.replaceChildren(); tableBox.hidden = !item.table;
    if (item.table) {
      const table = document.createElement('table'); table.className = 'mc-table';
      item.table.forEach((cells, rowIndex) => { const row = document.createElement('tr'); cells.forEach((value, colIndex) => { const cell = document.createElement(rowIndex === 0 || colIndex === 0 ? 'th' : 'td'); if (cell.tagName === 'TH') cell.scope = rowIndex === 0 ? 'col' : 'row'; cell.textContent = value; if (value === '✓' || value === '✗') cell.setAttribute('aria-label', value === '✓' ? 'Done' : 'Not done'); row.append(cell); }); table.append(row); }); tableBox.append(table);
    }
    const figure = document.getElementById('mc-image'); figure.hidden = !item.image;
    if (item.image) { const img = figure.querySelector('img'); img.src = 'images/past-simple-picture-practice/' + item.image; img.alt = item.alt; figure.querySelector('figcaption').textContent = 'Look at the picture.'; }
    document.getElementById('mc-question').textContent = item.prompt;
    const optionBox = document.getElementById('mc-options'); optionBox.replaceChildren();
    options.forEach((option, i) => {
      const button = document.createElement('button'); button.type = 'button'; button.className = 'mc-option'; button.textContent = `${letters[i]}. ${option}`;
      if (selected !== null) { button.disabled = true; if (i === rightIndex) button.classList.add('correct'); if (i === selected && i !== rightIndex) button.classList.add('wrong'); }
      button.addEventListener('click', () => { if (state.answers[state.index] === null) { state.answers[state.index] = i; renderQuiz(); document.getElementById('mc-next').focus({preventScroll:true}); } }); optionBox.append(button);
    });
    const feedback = document.getElementById('mc-feedback'); feedback.textContent = selected === null ? 'Choose an answer.' : (selected === rightIndex ? '✓ Correct! ' : 'Not quite. ') + item.why;
    feedback.className = 'mc-feedback' + (selected === null ? '' : selected === rightIndex ? ' good' : ' bad');
    document.getElementById('mc-prev').disabled = state.index === 0;
    const next = document.getElementById('mc-next'); next.textContent = state.index === set.questions.length - 1 ? 'See Results →' : 'Next →';
  }
  document.getElementById('mc-prev').addEventListener('click', () => { if (quizStates[activeQuiz].index > 0) { quizStates[activeQuiz].index--; renderQuiz(); } });
  document.getElementById('mc-next').addEventListener('click', () => {
    const state = quizStates[activeQuiz], set = quizSets[activeQuiz];
    if (state.index < set.questions.length - 1) { state.index++; renderQuiz(); }
    else { renderQuizResult(); window.openScreen('quizResult'); }
  });
  document.getElementById('mc-retry').addEventListener('click', () => startQuiz(activeQuiz, true));
  const verbPracticeSets = {
    regular: [['play','played'],['watch','watched'],['clean','cleaned'],['visit','visited'],['pack','packed'],['wash','washed'],['listen','listened'],['help','helped'],['walk','walked'],['cook','cooked'],['dance','danced'],['live','lived'],['like','liked'],['smile','smiled'],['bake','baked'],['study','studied'],['carry','carried'],['try','tried'],['cry','cried'],['stay','stayed'],['enjoy','enjoyed'],['stop','stopped'],['plan','planned'],['hop','hopped']],
    irregular: [['go','went'],['have','had'],['eat','ate'],['see','saw'],['do','did'],['feed','fed'],['feel','felt'],['get','got'],['give','gave'],['come','came'],['take','took'],['make','made'],['read','read'],['write','wrote'],['run','ran'],['drink','drank'],['find','found'],['fly','flew'],['buy','bought'],['bring','brought'],['sleep','slept'],['sit','sat'],['say','said'],['build','built']]
  };
  verbPracticeSets.mixed = [
    ['play','played'],['go','went'],['study','studied'],['have','had'],['watch','watched'],['eat','ate'],
    ['visit','visited'],['see','saw'],['clean','cleaned'],['do','did'],['dance','danced'],['feed','fed'],
    ['stop','stopped'],['feel','felt'],['pack','packed'],['take','took'],['try','tried'],['make','made'],
    ['smile','smiled'],['fly','flew'],['plan','planned'],['write','wrote'],['enjoy','enjoyed'],['sleep','slept']
  ];
  const verbPracticeState = Object.fromEntries(Object.entries(verbPracticeSets).map(([key, items]) => [key, {page:0, values:Array(items.length).fill(''), results:Array(items.length).fill(null)}]));
  let verbPracticeSet = 'regular';
  const verbPracticeSize = 6, verbCards = document.getElementById('verb-practice-cards'), verbFeedback = document.getElementById('verb-practice-feedback');
  function renderVerbPractice() {
    const items = verbPracticeSets[verbPracticeSet], state = verbPracticeState[verbPracticeSet], start = state.page * verbPracticeSize;
    verbCards.replaceChildren(); verbFeedback.textContent = '';
    items.slice(start, start + verbPracticeSize).forEach(([base], offset) => {
      const index = start + offset, card = document.createElement('div'); card.className = 'verb-practice-card';
      const label = document.createElement('label'); label.htmlFor = 'verb-answer-' + index;
      const labelText = document.createElement('span'); labelText.textContent = `V1 · ${base}`; label.append(labelText);
      const input = document.createElement('input'); input.id = label.htmlFor; input.type = 'text'; input.autocomplete = 'off'; input.spellcheck = false; input.value = state.values[index]; input.placeholder = 'Write V2';
      const result = document.createElement('span'); result.className = 'result'; result.setAttribute('aria-live','polite');
      function showResult() {
        const status = state.results[index]; input.classList.toggle('good', status === 'correct'); input.classList.toggle('bad', status === 'wrong' || status === 'empty');
        if (status) input.setAttribute('aria-invalid', String(status !== 'correct')); else input.removeAttribute('aria-invalid');
        result.className = 'result ' + (status === 'correct' ? 'good' : status ? 'bad' : '');
        result.textContent = status === 'correct' ? '✓ Correct!' : status === 'empty' ? 'Write an answer.' : status === 'wrong' ? 'Try again.' : '';
      }
      input.addEventListener('input', () => { state.values[index] = input.value; state.results[index] = null; verbFeedback.textContent = ''; showResult(); });
      showResult(); card.append(label,input,result); verbCards.append(card);
    });
    document.getElementById('verb-practice-progress').textContent = `Page ${state.page + 1} / ${Math.ceil(items.length / verbPracticeSize)} · ${items.length} verbs`;
    document.getElementById('verb-practice-prev').disabled = state.page === 0;
    document.getElementById('verb-practice-next').disabled = start + verbPracticeSize >= items.length;
    document.getElementById('verb-practice-hint').hidden = verbPracticeSet === 'regular';
    document.querySelectorAll('[data-verb-set]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.verbSet === verbPracticeSet)));
  }
  document.querySelectorAll('[data-verb-set]').forEach(button => button.addEventListener('click', () => { verbPracticeSet = button.dataset.verbSet; renderVerbPractice(); }));
  document.getElementById('verb-practice-form').addEventListener('submit', event => {
    event.preventDefault(); const state = verbPracticeState[verbPracticeSet], items = verbPracticeSets[verbPracticeSet], start = state.page * verbPracticeSize; let correct = 0;
    items.slice(start, start + verbPracticeSize).forEach(([, answer], offset) => {
      const index = start + offset, value = state.values[index].trim().toLowerCase();
      state.results[index] = !value ? 'empty' : value === answer ? 'correct' : 'wrong'; if (state.results[index] === 'correct') correct++;
    });
    renderVerbPractice(); verbFeedback.textContent = `${correct} / ${Math.min(verbPracticeSize, items.length - start)} correct. ${correct === Math.min(verbPracticeSize, items.length - start) ? 'Great work!' : 'Check your answers and try again.'}`;
  });
  document.getElementById('verb-practice-reset').addEventListener('click', () => {
    const state = verbPracticeState[verbPracticeSet], start = state.page * verbPracticeSize;
    for (let i = start; i < Math.min(start + verbPracticeSize, state.values.length); i++) { state.values[i] = ''; state.results[i] = null; }
    renderVerbPractice();
  });
  document.getElementById('verb-practice-prev').addEventListener('click', () => { const state = verbPracticeState[verbPracticeSet]; if (state.page > 0) { state.page--; renderVerbPractice(); } });
  document.getElementById('verb-practice-next').addEventListener('click', () => { const state = verbPracticeState[verbPracticeSet]; if ((state.page + 1) * verbPracticeSize < verbPracticeSets[verbPracticeSet].length) { state.page++; renderVerbPractice(); } });
  renderVerbPractice();
  const formNames = ['positive', 'negative', 'questions'];
  function showForm(name, focus = false) {
    formNames.forEach(key => {
      const selected = key === name, tab = document.getElementById('tab-' + key);
      tab.setAttribute('aria-selected', String(selected)); tab.tabIndex = selected ? 0 : -1;
      document.getElementById('form-' + key).hidden = !selected;
    });
    if (focus) document.getElementById('tab-' + name).focus();
  }
  formNames.forEach(name => document.getElementById('tab-' + name).addEventListener('click', () => showForm(name)));
  document.querySelector('.tabs').addEventListener('keydown', event => {
    let index = formNames.findIndex(name => document.getElementById('tab-' + name) === document.activeElement);
    if (index < 0) return;
    if (event.key === 'ArrowRight') index = (index + 1) % formNames.length;
    else if (event.key === 'ArrowLeft') index = (index + formNames.length - 1) % formNames.length;
    else if (event.key === 'Home') index = 0;
    else if (event.key === 'End') index = formNames.length - 1;
    else return;
    event.preventDefault(); showForm(formNames[index], true);
  });
  const sets = {
    regular: [ ['Alice','tennis yesterday.','play','played'], ['Harry','for his test last night.','study','studied'], ['Grace','a film last night.','watch','watched'], ['Oliver','his room yesterday.','clean','cleaned'] ],
    irregular: [ ['Daisy','to the park yesterday.','go','went'], ['They','breakfast at seven.','have','had'], ['Oliver','his pet yesterday morning.','feed','fed'], ['William','an apple after school.','eat','ate'] ],
    mixed: [ ['George','his grandparents last weekend.','visit','visited'], ['Lily','excited yesterday.','feel','felt'], ['Charlie','his bag last night.','pack','packed'], ['Sarah','her homework yesterday.','do','did'] ]
  };
  const questions = document.getElementById('questions'), feedback = document.getElementById('feedback');
  let active = 'regular';
  function render() {
    questions.replaceChildren(); feedback.textContent = '';
    sets[active].forEach(([subject, end, verb], i) => {
      const row = document.createElement('div'); row.className = 'question';
      const label = document.createElement('label');
      label.append(document.createTextNode(`${i + 1}. ${subject} `));
      const input = document.createElement('input'); input.type = 'text'; input.autocomplete = 'off'; input.spellcheck = false; input.setAttribute('aria-label', `${subject} blank ${end} Verb: ${verb}`);
      label.append(input, document.createTextNode(` ${end} (${verb})`));
      const result = document.createElement('span'); result.className = 'result'; result.setAttribute('aria-live', 'polite');
      input.addEventListener('input', () => { input.classList.remove('good','bad'); input.removeAttribute('aria-invalid'); result.textContent = ''; feedback.textContent = ''; });
      row.append(label,result); questions.append(row);
    });
  }
  document.querySelectorAll('[data-set]').forEach(button => button.addEventListener('click', () => {
    active = button.dataset.set; document.querySelectorAll('[data-set]').forEach(b => b.setAttribute('aria-pressed', String(b === button))); render();
  }));
  document.getElementById('practice-form').addEventListener('submit', event => {
    event.preventDefault(); let correct = 0;
    [...questions.children].forEach((row, i) => {
      const input = row.querySelector('input'), result = row.querySelector('.result');
      const right = input.value.trim().toLowerCase() === sets[active][i][3]; correct += Number(right);
      input.classList.toggle('good',right); input.classList.toggle('bad',!right); input.setAttribute('aria-invalid',String(!right));
      result.className = 'result ' + (right ? 'good' : 'bad'); result.textContent = right ? '✓ Correct!' : (input.value.trim() ? 'Try again.' : 'Write an answer.');
    });
    feedback.textContent = `${correct} / ${sets[active].length} correct. ${correct === sets[active].length ? 'Great work!' : 'Check your answers and try again.'}`;
  });
  document.getElementById('reset').addEventListener('click',render);
  const negativeSets = {
    regular: [
      {before:'Sarah', after:'tennis yesterday. (play)', verb:'play'},
      {before:'Harry', after:'for his test last night. (study)', verb:'study'},
      {before:'Grace', after:'a film last night. (watch)', verb:'watch'},
      {before:'Oliver', after:'his bag yesterday. (pack)', verb:'pack'}
    ],
    irregular: [
      {before:'Sarah', after:'to school by bus yesterday. (go)', verb:'go'},
      {before:'They', after:'breakfast at home. (have)', verb:'have'},
      {before:'Michael', after:'his pet yesterday. (feed)', verb:'feed'},
      {before:'Alice', after:'her homework last night. (do)', verb:'do'}
    ],
    mixed: [
      {before:'George', after:'his grandparents last weekend. (visit)', verb:'visit'},
      {before:'Daisy', after:'an apple yesterday. (eat)', verb:'eat'},
      {before:'Charlie', after:'his room yesterday. (clean)', verb:'clean'},
      {before:'Lily', after:'a picture yesterday. (take)', verb:'take'}
    ]
  };
  Object.values(negativeSets).flat().forEach(item => { item.answers = [`didn't ${item.verb}`, `did not ${item.verb}`]; });
  const questionSets = {
    yesno: [
      {before:'', after:'Sarah go to school yesterday?', answers:['did']},
      {context:'Did Tom play football? (Yes)', before:'', after:'', answers:['yes he did']},
      {context:'Did Alice visit her grandparents? (No)', before:'', after:'', answers:["no she didn't", 'no she did not']},
      {context:'Did Tom and Michael feed the pet? (Yes)', before:'', after:'', answers:['yes they did']}
    ],
    wh: [
      {context:'Sarah went to the park yesterday.', before:'', after:'did Sarah go yesterday?', answers:['where']},
      {context:'Tom watched a film last night.', before:'', after:'did Tom watch last night?', answers:['what']},
      {context:'Michael visited his grandparents last weekend.', before:'', after:'did Michael visit his grandparents?', answers:['when']},
      {context:'Alice visited her grandmother yesterday.', before:'', after:'did Alice visit yesterday?', answers:['who']}
    ]
  };
  function setupPractice(id, data, initial) {
    const root = document.getElementById(id), form = root.querySelector('form');
    const list = root.querySelector('.practice-questions'), message = root.querySelector('.feedback');
    let selected = initial;
    const normalize = value => value.trim().toLowerCase().replace(/[’‘]/g, "'").replace(/[.,!?]/g, '').replace(/\s+/g, ' ');
    function draw() {
      list.replaceChildren(); message.textContent = '';
      data[selected].forEach((item, index) => {
        const row = document.createElement('div'); row.className = 'question';
        if (item.context) { const context = document.createElement('div'); context.className = 'practice-context'; context.textContent = item.context; row.append(context); }
        const label = document.createElement('label'); label.append(document.createTextNode(`${index + 1}. ${item.before}${item.before ? ' ' : ''}`));
        const input = document.createElement('input'); input.type = 'text'; input.autocomplete = 'off'; input.spellcheck = false;
        input.setAttribute('aria-label', `${item.context ? item.context + ' ' : ''}${item.before} blank ${item.after}`.trim());
        label.append(input, document.createTextNode(item.after ? ` ${item.after}` : ''));
        const result = document.createElement('span'); result.className = 'result'; result.setAttribute('aria-live', 'polite');
        input.addEventListener('input', () => { input.classList.remove('good','bad'); input.removeAttribute('aria-invalid'); result.textContent = ''; message.textContent = ''; });
        row.append(label, result); list.append(row);
      });
    }
    root.querySelectorAll('[data-practice-set]').forEach(button => button.addEventListener('click', () => {
      selected = button.dataset.practiceSet;
      root.querySelectorAll('[data-practice-set]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
      draw();
    }));
    form.addEventListener('submit', event => {
      event.preventDefault(); let correct = 0;
      [...list.children].forEach((row, index) => {
        const input = row.querySelector('input'), result = row.querySelector('.result'), value = normalize(input.value);
        const right = data[selected][index].answers.some(answer => normalize(answer) === value); correct += Number(right);
        input.classList.toggle('good', right); input.classList.toggle('bad', !right); input.setAttribute('aria-invalid', String(!right));
        result.className = 'result ' + (right ? 'good' : 'bad'); result.textContent = right ? '✓ Correct!' : (value ? 'Try again.' : 'Write an answer.');
      });
      message.textContent = `${correct} / ${data[selected].length} correct. ${correct === data[selected].length ? 'Great work!' : 'Check your answers and try again.'}`;
    });
    root.querySelector('.practice-reset').addEventListener('click', draw);
    draw();
  }
  setupPractice('negative-practice', negativeSets, 'regular');
  setupPractice('question-practice', questionSets, 'yesno');
  document.querySelectorAll('[data-dialog]').forEach(button => button.addEventListener('click', () => document.getElementById(button.dataset.dialog).showModal()));
  const verbs = [['be','was / were'],['become','became'],['begin','began'],['bring','brought'],['build','built'],['buy','bought'],['come','came'],['do','did'],['drink','drank'],['eat','ate'],['feel','felt'],['feed','fed'],['find','found'],['fly','flew'],['get','got'],['give','gave'],['go','went'],['have','had'],['make','made'],['read','read'],['run','ran'],['say','said'],['see','saw'],['sit','sat'],['sleep','slept'],['take','took'],['write','wrote']];
  const pageSize = 8, rows = document.getElementById('verb-rows'), toggle = document.getElementById('toggle-v2');
  let verbPage = 0, hideV2 = false;
  function renderVerbs() {
    rows.replaceChildren();
    const pages = Math.ceil(verbs.length / pageSize);
    verbs.slice(verbPage * pageSize, (verbPage + 1) * pageSize).forEach(([base, past]) => {
      const row = document.createElement('tr'), first = document.createElement('th'), second = document.createElement('td');
      first.scope = 'row'; first.textContent = base;
      if (base === 'read') {
        const info = document.createElement('details'); info.className = 'read-info';
        const summary = document.createElement('summary'); summary.textContent = 'ⓘ'; summary.setAttribute('aria-label', 'Pronunciation of read');
        const note = document.createElement('span'); note.textContent = 'V1 sounds like “reed”. V2 sounds like “red”. The spelling stays the same.';
        info.append(summary, note); first.append(' ', info);
      }
      second.textContent = hideV2 ? '—' : past;
      if (hideV2) second.setAttribute('aria-label', 'Past form hidden');
      row.append(first, second); rows.append(row);
    });
    document.getElementById('verb-page').textContent = `Page ${verbPage + 1} of ${pages}`;
    document.getElementById('verbs-prev').disabled = verbPage === 0;
    document.getElementById('verbs-next').disabled = verbPage === pages - 1;
    toggle.textContent = hideV2 ? 'Show V2' : 'Hide V2'; toggle.setAttribute('aria-pressed', String(hideV2));
  }
  toggle.addEventListener('click', () => { hideV2 = !hideV2; renderVerbs(); });
  document.getElementById('verbs-prev').addEventListener('click', () => { if (verbPage > 0) { verbPage--; renderVerbs(); } });
  document.getElementById('verbs-next').addEventListener('click', () => { if ((verbPage + 1) * pageSize < verbs.length) { verbPage++; renderVerbs(); } });
  renderVerbs();
  document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
  document.querySelectorAll('[data-reveal]').forEach(button => button.addEventListener('click', () => {
    const answer = button.parentElement.querySelector('.picture-answer');
    answer.hidden = !answer.hidden;
    button.setAttribute('aria-expanded', String(!answer.hidden));
    button.textContent = answer.hidden ? 'Show Answer' : 'Hide Answer';
  }));
  document.querySelectorAll('.picture-dialog').forEach(dialog => dialog.addEventListener('close', () => {
    dialog.querySelector('.picture-answer').hidden = true;
    const button = dialog.querySelector('[data-reveal]');
    button.textContent = 'Show Answer'; button.setAttribute('aria-expanded', 'false');
  }));
  document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('keydown', event => {
    if (event.key === 'Escape') { event.preventDefault(); dialog.close(); }
  }));
  render();
})();
