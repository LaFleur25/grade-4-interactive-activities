(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  let selectedUnit = 2;
  const chevron = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m7 4 6 6-6 6"/></svg>';
  const lock = '<svg viewBox="0 0 20 20" aria-hidden="true"><rect x="4" y="8" width="12" height="9" rx="2"/><path d="M6 8V6a4 4 0 0 1 8 0v2m-4 4v2"/></svg>';
  for (let unit = 1; unit <= 9; unit++) {
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'unit-button'; button.dataset.unit = unit;
    if (unit <= 2) {
      button.innerHTML = '<span>Unit ' + unit + '</span>' + (unit === 2 ? '<span class="badge">NEW</span>' : '') + chevron;
      button.addEventListener('click', () => { location.hash = 'units/unit-' + unit; });
    } else {
      button.disabled = true;
      button.innerHTML = lock + '<span>Unit ' + unit + '<small>Coming soon</small></span>';
    }
    $('unit-list').append(button);
  }
  function render() {
    const pts = location.hash === '#pts';
    const match = location.hash.match(/^#units\/unit-([12])$/);
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
    $('grammar-link').href = 'unit-' + selectedUnit + '/grammar/index.html';
    document.title = (pts ? 'PTS Zone' : 'Unit ' + selectedUnit) + ' · Grade 4 Activity Labs';
  }
  window.addEventListener('hashchange', render);
  render();
})();
