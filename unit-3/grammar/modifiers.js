const $ = id => document.getElementById(id);
function openScreen(id) {
  if (!['home', 'learn', 'mc', 'buildMenu'].includes(id)) return;
  document.querySelectorAll('.screen').forEach(screen => { screen.hidden = screen.id !== id; });
  if (id === 'mc') renderQuiz();
  if (id === 'buildMenu') renderBuild();
  window.ActivityNavigation?.refresh();
  $(id === 'home' ? 'home-title' : id === 'learn' ? 'learn-title' : id === 'mc' ? 'mc-title' : 'build-title').focus();
  window.scrollTo(0, 0);
}
document.querySelectorAll('[data-screen]').forEach(button => button.addEventListener('click', () => openScreen(button.dataset.screen)));

const questions = [
  ['The room is so dark that I can’t see my book.', 'The room is ___ dark to read.', ['too', 'not very', 'pretty'], 0, 'Too shows there is a problem.'],
  ['The photo is blurry. I can only see a little of the picture.', 'The photo is ___ clear.', ['really', 'not very', 'too'], 1, 'Not very clear means the photo is only a little clear.'],
  ['The painting has lots of bright colours. I love it!', 'The painting is ___ colourful.', ['not very', 'too', 'very'], 2, 'Very makes colourful stronger without saying there is a problem.'],
  ['The music is so loud that it hurts my ears.', 'The music is ___ loud.', ['pretty', 'too', 'not very'], 1, 'Too loud means there is a problem.'],
  ['The film was quite good, but it wasn’t great.', 'The film was ___ good.', ['too', 'pretty', 'not very'], 1, 'Pretty means quite or fairly here.'],
  ['The sculpture is extremely beautiful. I love it!', 'The sculpture is ___ beautiful.', ['really', 'not very', 'too'], 0, 'Really makes beautiful stronger.'],
  ['The box is so heavy that Mia can’t lift it.', 'The box is ___ heavy for Mia.', ['not very', 'too', 'pretty'], 1, 'Too heavy tells us Mia cannot lift it.'],
  ['There are only a few people in the museum.', 'The museum is ___ crowded.', ['not very', 'really', 'too'], 0, 'Not very crowded means there are only a few people.'],
  ['Choose the correct word order.', 'Which sentence is correct?', ['The picture is bright very.', 'The picture very is bright.', 'The picture is very bright.'], 2, 'The modifier comes before the adjective.'],
  ['The puzzle is quite simple, but not very simple.', 'The puzzle is ___ simple.', ['pretty', 'too', 'not very'], 0, 'Pretty simple means quite simple.']
];
let quizIndex = 0;
const answers = Array(questions.length).fill(null);
function renderQuiz() {
  const [context, question, options, correct, explanation] = questions[quizIndex];
  $('mc-progress').textContent = `Question ${quizIndex + 1} of ${questions.length}`;
  $('mc-score').textContent = `Score: ${answers.filter((a, i) => a === questions[i][3]).length} / ${questions.length}`;
  $('mc-context').textContent = context; $('mc-question').textContent = question;
  $('mc-options').replaceChildren();
  options.forEach((option, i) => {
    const button = document.createElement('button'); button.type = 'button'; button.textContent = option;
    if (answers[quizIndex] !== null) {
      button.disabled = true;
      if (i === correct) button.className = 'correct';
      else if (i === answers[quizIndex]) button.className = 'wrong';
    }
    button.addEventListener('click', () => { answers[quizIndex] = i; renderQuiz(); });
    $('mc-options').append(button);
  });
  $('mc-feedback').textContent = answers[quizIndex] === null ? '' : (answers[quizIndex] === correct ? '✓ Correct! ' : 'Not quite. ') + explanation;
  $('mc-prev').disabled = quizIndex === 0; $('mc-next').disabled = quizIndex === questions.length - 1;
}
$('mc-prev').onclick = () => { if (quizIndex > 0) { quizIndex--; renderQuiz(); } };
$('mc-next').onclick = () => { if (quizIndex < questions.length - 1) { quizIndex++; renderQuiz(); } };

const sentences = [
  ['The painting has lots of bright colours. Use very.', 'The painting is very colourful.'],
  ['The box is so heavy that I can’t carry it. Use too.', 'The box is too heavy.'],
  ['The photo is blurry. Use not very.', 'The photo is not very clear.'],
  ['The museum has a few people. Use pretty.', 'The museum is pretty empty.'],
  ['I love the new sculpture. Use really.', 'The sculpture is really modern.'],
  ['It is difficult to see in this room. Use too.', 'The room is too dark.'],
  ['The picture has lots of colour. Use really.', 'It is a really colourful picture.'],
  ['The puzzle is quite easy. Use pretty.', 'The puzzle is pretty simple.'],
  ['There are only a few people in the park. Use not very.', 'The park is not very crowded.'],
  ['The light is strong. Use very.', 'The light is very bright.']
];
let buildIndex = 0;
const buildStates = sentences.map(([, sentence]) => {
  const words = sentence.split(' ').map((text, id) => ({text, id}));
  const bank = words.map((_, i) => i);
  for (let i = bank.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [bank[i], bank[j]] = [bank[j], bank[i]]; }
  return { words, bank, chosen: [], checked: false };
});
function renderBuild() {
  const state = buildStates[buildIndex];
  $('build-progress').textContent = `Sentence ${buildIndex + 1} of ${sentences.length}`;
  $('build-clue').textContent = sentences[buildIndex][0];
  const draw = (container, ids, selected) => {
    container.replaceChildren();
    ids.forEach(id => {
      const button = document.createElement('button'); button.type = 'button'; button.className = 'word'; button.textContent = state.words[id].text;
      button.addEventListener('click', () => {
        if (selected) { state.chosen = state.chosen.filter(item => item !== id); state.bank.push(id); }
        else { state.bank = state.bank.filter(item => item !== id); state.chosen.push(id); }
        state.checked = false; renderBuild();
      });
      container.append(button);
    });
  };
  draw($('word-bank'), state.bank, false); draw($('sentence-answer'), state.chosen, true);
  const result = state.chosen.map(id => state.words[id].text).join(' ');
  $('build-feedback').textContent = !state.checked ? '' : result === sentences[buildIndex][1] ? '✓ Great job! That sentence is correct.' : 'Not quite. Check the word order and try again.';
  $('build-prev').disabled = buildIndex === 0; $('build-next').disabled = buildIndex === sentences.length - 1;
}
$('build-check').onclick = () => { buildStates[buildIndex].checked = true; renderBuild(); };
$('build-reset').onclick = () => { const state = buildStates[buildIndex]; state.bank.push(...state.chosen); state.chosen = []; state.checked = false; renderBuild(); };
$('build-prev').onclick = () => { if (buildIndex > 0) { buildIndex--; renderBuild(); } };
$('build-next').onclick = () => { if (buildIndex < sentences.length - 1) { buildIndex++; renderBuild(); } };
