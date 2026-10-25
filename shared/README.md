# Activity navigation

All activity pages load `navigation.css` and `navigation.js` with relative URLs. The first control always returns to the Activity Labs hub. The second names the immediate parent screen. The old controls remain hidden so existing activity handlers continue to work.

For new pages, set the body metadata:

- Lab entry: `data-navigation="vocabulary-index"` or `"grammar-index"`, plus `data-unit="N"`.
- Vocabulary week: `data-navigation="vocabulary-week" data-unit="N" data-week="N"`.
- Grammar topic: `data-navigation="grammar-topic" data-unit="N" data-topic="Topic name"`.
- Revision: `data-navigation="revision" data-unit="1"`.
- Second PTS website: `data-navigation="pts"`.

The current screen is observed through its `class`, `hidden` or `style` attribute. Add an explicit parent mapping in `destination()` when adding a new type of nested screen. `window.ActivityNavigation.refresh()` can refresh the bar after other state changes.

Global home URLs use `index.html#units/unit-N` or `index.html#pts`. Existing activity navigation stays inside its page, keeping answers in memory. External departures with an active answer session show a confirmation; the second PTS website retains its own Practice Sets confirmation. New PTS has a read-only `window.PTSNavigation.hasDraft()` adapter for this check.

Keep question counters, Previous/Next, Check, Finish and answer logic separate from this shared site navigation. Do not use browser history as a substitute for a named parent destination.

## PTS browser Back / Forward

Both PTS sites publish screen-change events and provide capture/restore adapters. The shared navigation records menu/set/test/result transitions in browser history. Question movement stays inside a test. The history state contains opaque route tokens only; answer snapshots remain in page memory. Refreshing discards those snapshots. Returning to an already submitted new PTS test opens its review. Unit 1 Revision screens outside its PTS branch keep their existing behavior.

At a PTS site entrance only Activity Labs is shown when a second button would point to the same hub destination.
