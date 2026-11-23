(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  let selectedUnit = 3;
  const chevron = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m7 4 6 6-6 6"/></svg>';
  const lock = '<svg viewBox="0 0 20 20" aria-hidden="true"><rect x="4" y="8" width="12" height="9" rx="2"/><path d="M6 8V6a4 4 0 0 1 8 0v2m-4 4v2"/></svg>';
  for (let unit = 1; unit <= 9; unit++) {
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'unit-button'; button.dataset.unit = unit;
    if (unit <= 3) {
      button.innerHTML = '<span>Unit ' + unit + '</span>' + (unit === 3 ? '<span class="badge">NEW</span>' : '') + chevron;
      button.addEventListener('click', () => { location.hash = 'units/unit-' + unit; });
    } else {
      button.disabled = true;
      button.innerHTML = lock + '<span>Unit ' + unit + '<small>Coming soon</small></span>';
    }
    $('unit-list').append(button);
  }
  function render() {
    const pts = location.hash === '#pts';
    const match = location.hash.match(/^#units\/unit-([123])$/);
    if (match) selectedUnit = Number(match[1]);
    $('units-panel').hidden = pts; $('pts-panel').hidden = !pts;
    for (const [id, current] of [['units-tab', !pts], ['pts-tab', pts]]) {
      $(id).classList.toggle('is-current', current);
      if (current) $(id).setAttribute('aria-current', 'page');
      else $(id).removeAttribute('aria-current');
    }
    $('units-tab').href = '#units/unit-' + selectedUnit;
    $('unit-heading').textContent = 'Unit ' + selectedUnit;
    document.querySelectorAll('.unit-button:not(:disabled)').forEach(button => {
      const selected = Number(button.dataset.unit) === selectedUnit;
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    $('vocabulary-link').href = 'unit-' + selectedUnit + '/vocabulary/index.html';
    const grammar = $('grammar-link'), available = true;
    grammar.classList.toggle('is-unavailable', !available);
    if (available) {
      grammar.href = 'unit-' + selectedUnit + '/grammar/index.html';
      grammar.removeAttribute('aria-disabled'); grammar.removeAttribute('tabindex');
    } else {
      grammar.removeAttribute('href'); grammar.setAttribute('aria-disabled', 'true'); grammar.tabIndex = -1;
    }
    grammar.querySelector('.open-button').innerHTML = available ? 'Open Grammar Lab <span aria-hidden="true">→</span>' : '🔒 Coming soon';
    grammar.querySelector('p').textContent = available ? 'Build sentences with confidence.' : 'New grammar activities are on their way.';
    $('vocabulary-new').hidden = selectedUnit !== 3;
    $('grammar-new').hidden = selectedUnit !== 3;
    const dates = {
      1: { vocabulary: ['2026-10-25', 'Oct 25, 2026'], grammar: ['2026-10-25', 'Oct 25, 2026'] },
      2: { vocabulary: ['2026-11-03', 'Nov 3, 2026'], grammar: ['2026-11-05', 'Nov 5, 2026'] },
      3: { vocabulary: ['2026-11-23', 'Nov 23, 2026'], grammar: ['2026-11-23', 'Nov 23, 2026'] }
    };
    for (const lab of ['vocabulary', 'grammar']) {
      const label = $(lab + '-updated'), date = dates[selectedUnit][lab];
      label.hidden = !date;
      if (date) { const time = label.querySelector('time'); time.dateTime = date[0]; time.textContent = date[1]; }
    }
    document.title = (pts ? 'PTS Zone' : 'Unit ' + selectedUnit) + ' · Grade 4 Activity Labs';
  }
  window.addEventListener('hashchange', render);
  render();
})();
