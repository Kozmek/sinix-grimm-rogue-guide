# Verification report — v2.2

## Current v2.2 verification

Research snapshot: November 3, 2026. Packaging and final checks: November 4, 2026. The earlier v2/v2.1 evidence below is retained as revision history.

**27 automated tests passed, zero failed**, including all 102 starter-build allocation prefixes. JavaScript syntax checks passed. The expanded catalog reconciles 1,392 attempted IDs = 1,223 accepted + 70 unresolved + 99 exclusions after fetching. Thirteen preliminary exclusions are recorded separately. Final integration removed 30 crafting-recipe wrappers and one tooltip explicitly marked internal use. Fixed-value and elemental damage now parse correctly; unknown equip levels remain unknown. All 1,223 displayed item icons were checked against their recorded JPEG signatures and SHA-256 hashes.

The current catalog contains 937 melee and 286 ranged records, including 448 greens. There are 1,005 inspected Forever tooltip records and 218 separately labeled Classic references. This does not establish live availability for every record, Horde acquisition, every random suffix or exhaustiveness beyond the three named snapshots. Full reconciliation and gaps: `source/weapon-catalog-coverage.json`.

Current browser checks used the Windows in-app Chromium browser at 1600 × 1100, 390 × 844 and 320 × 740. These are responsive viewport tests, not physical phone tests.

- All three authentic Rogue backgrounds, 54 talent nodes, rank badges, grayscale locks, tier lines and three unobstructed prerequisite arrows rendered on desktop. The fourth dependency remains enforced and appears in talent details; its crossing arrow is intentionally omitted, matching the source calculator's behavior.
- Click spending, Shift-click and right-click refunds, mobile Spend/Refund/Inspect modes, per-rank inspection, presets, named build saving, clipboard build codes and reload persistence were exercised. A 16/35/0 saved Combat plan remained intact after reload.
- Mobile tabs displayed one tree at a time. Talent targets measured 46 × 46 CSS pixels, with no page overflow at 390 or 320 pixels.
- Quality, weapon type, ranged-only, item-origin, equip-level and minimum-DPS filters worked. The green filter returned 448 records, ranged returned 286, Classic returned 218, and known equip level ≤60 returned 935. Unknown-level database records are excluded from usable-only results.
- Global search reached Zulian Slicer on the final catalog page. Pagination rendered only 24 cards at a time. Selecting comparison entries retained the current page and keyboard focus; a two-item comparison showed correct damage, speed, stats, effects and separate source evidence. Classic enlargement labeled its source correctly.
- At 320 pixels, weapon cards and enlarged tooltips stayed within the viewport. Mobile drawer navigation closed after selection. No JavaScript errors or warnings were observed in the tested sessions.
- A real progress-backup JSON download completed; its format, version and Rogue class metadata were independently read from disk. The earlier browser import/migration checks and current automated backup round trips remain recorded below.
- The original Forever logo, Horde emblem and both Undead hero WebP files matched the v2.1 asset hashes exactly.

Current screenshots: `preview/talents-v2.2.jpg`, `preview/weapons-v2.2.jpg`, `preview/mobile-v2.2.jpg`. The final delivery check records ZIP integrity, extracted-file equality and the archive checksum. No GitHub repository, website or public deployment was changed.

No live gameplay, optimal-build simulation, final BiS list or confirmed acquisition route for every item is claimed. Nature Sword and Shadow Sword are unknown-acquisition database records, not promised obtainable upgrades. The catalog includes an unknown-source filter category and visibly distinguishes tooltip existence from acquisition evidence.

## Earlier v2.0 verification

Reviewed November 3, 2026. The original v1 archive remains unchanged; v2 is a separate deliverable. The reference GitHub repository was inspected read only. No repository creation, commit, push, deployment or public publication was performed.

## Automated checks actually run

`node --test tests/core.test.cjs`: **20 tests passed, 0 failed**.

Coverage includes current 54-node talent schema, four named dependencies, rank caps, lower-row gates, invalid refunds, budget limits, Legacy timing/cap, build-code round trips and rejection, v1 migration, class-aware v2 backups, malformed/oversized JSON, dangerous keys, weapon eligibility/unknown levels, tooltip arithmetic, realized-cash calculations, full 1–60 band coverage, source references, local assets and unique HTML IDs. Each of the two starter plans also passed every one of its 51 allocation prefixes (102 prefix validations total).

JavaScript syntax checks were run for the application files. HTML asset references and internal page targets were checked against actual files/IDs. No JavaScript errors or warnings were observed in the tested browser sessions after fixes.

## Browser behavior actually exercised

Windows in-app Chromium browser, desktop 1440 × 1000 and mobile viewport overrides 390 × 844 and 320 × 740. These are browser emulations, not physical phone tests.

- All fourteen desktop page links activated the expected page, updated the title and focused its heading; no page-level horizontal overflow was detected.
- Cross-page search found a specific talent, selected the correct tree and deep-linked to it. Empty-result feedback, Escape dismissal and focus return were checked.
- Talent add/refund controls enforced lower-row legality. Both presets loaded with their correct totals. Named builds, clipboard build codes and code loading were exercised. Details displayed all ranks.
- Plan-level application produced 31 points at 40; selected Talented rank 5 produced a 36-point level-40 budget and still capped at 51 at 60. The displayed starter order contained all 51 steps.
- Mobile drawer selection closed the menu; Escape returned focus. Talent controls measured 44 × 44 CSS pixels even at 320 px, with no page overflow.
- Weapon type and eligibility filters worked; unknown equip levels were excluded from usable-only results. Two-weapon comparison displayed matching tooltip values.
- Level 44 selected the appropriate campaign band and Krol’dok Stronghold in the current new-dungeon window.
- Route checks, bookmarks, notes, gear and custom keybinds survived reload. Macro copying returned the displayed macro text.
- Backup export produced a real JSON download, then its format/version/class/level/notes/build count were independently read from disk.
- Restore rejected a different-class backup. A v1 Rogue fixture previewed and restored level, tasks, gear, notes and both build links. HTML-like note text remained literal text and created no image element.
- Matchup class filtering and an empty search state worked. The cash example (30 minutes, 5 loot, 3 sold auctions, 1 fee, 2 other costs) produced 5 net gold and 10 gold/hour. Zero duration was rejected.
- Logo, Horde emblem and responsive Rogue artwork loaded. Desktop and mobile compositions were visually inspected.

## Research and gameplay limits

Official dated notes take priority over earlier beta articles. Database items remain candidates; a tooltip does not independently verify a drop or quest route. Several Wowhead records can present anti-bot challenges to automated access; the guide retains the specific inspected/indexed evidence labels instead of claiming every external page is universally accessible.

No live Forever gameplay, macro behavior, final item BiS ranking, damage simulation, combat-log ranking, complete quest order or measured matchup winrate was tested. Later 1–60 routes are explicit recommendations. Rank-2 Shank cost/cooldown still need live confirmation. These limits are visible inside the guide.

The final ZIP is checked for archive integrity and extracted-file equality during delivery. Publication remains subject to owner approval for a separate Rogue repository.

## v2.1 correction review

Revisited the original live weapon page. Replaced generic navigation symbols with 14 actual game icons; added actual Rogue ability icons to 54 talents, trainer entries, macro headings and applicable sections, plus profession icons. Added six local item icons and six complete Forever tooltip snapshots, two-column reference-style cards, acquisition notes, reasons, evidence disclosures, enlargement and full-tooltip comparison. New source/evidence filters and speed/item-level sorts are included. Tested enlargement, comparison and acquisition filtering through the browser; no JavaScript errors/warnings observed. The prior v2 behavior and storage format remain in place.

The v2.1 suite adds two icon/tooltip checks (22 total tests). Browser checks also confirmed 14 navigation images, 19 images in the selected Combat tree, the 2-card comparison, 2 Quest-reward filter results and an enlarged mobile tooltip at 390 px with no page overflow. New captures: preview/weapons-v2.1.jpg and preview/weapons-mobile-v2.1.jpg.
