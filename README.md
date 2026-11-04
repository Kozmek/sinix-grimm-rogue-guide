# Sinix Grimm — Rogue Field Guide v2.2

A personal World of Warcraft: Forever companion for Sinix Grimm: Undead, Horde, PvP ruleset, Combat swords for PvE and dagger Subtlety for PvP.

## Open the guide

1. Right-click the ZIP in Windows and select **Extract All**.
2. Open the extracted `index.html` in a current Edge, Chrome or Firefox browser.
3. Keep `index.html` beside its `assets` folder. No installation, account, API key, build step or server is required.
4. Set **LVL** in the header and press Enter (or leave the field) to update your campaign, training window and activity suggestions.

The website assets are local. Research links open external websites when selected. The guide does not load analytics, external scripts, fonts or a live data feed.

## Included

- Fourteen routed guide pages in the reference guide’s dark-fantasy style, using the recovered green theme, the actual WoW Forever logo and original Rogue art.
- Twelve suggested leveling bands covering 1–60, plus 111 client-snapshot training/recipe rank entries.
- Combat sword and Subtlety dagger guidance; nine class matchup notebooks and world/BG planning.
- A 54-talent planner with all three Rogue trees side by side on desktop, authentic tree backgrounds and skill icons, prerequisite arrows, locked/available/maxed states, rank tooltips, point budgets, named builds and portable build codes. Mobile uses one tree at a time.
- Legal 16/35/0 Combat and 10/10/31 Subtlety theorycraft starter plans, including their point-by-point order and tradeoffs.
- 1,223 weapon records through level 60 or with explicitly unlisted equip requirements: 937 one-hand melee and 286 ranged. Includes 448 greens, 131 whites, 53 grays, 404 rares, 186 epics and one legendary reference. Every record has a local item icon and full inspected tooltip. Item existence does not prove live acquisition.
- 1,005 current Forever tooltip records and 218 distinctly labeled Classic references. Filter by weapon type, item quality, data source, acquisition, eligibility, search or minimum DPS; sort and browse 24 cards per page. Compare up to three complete tooltips. Eleven editable equipment rows remain.
- Nine new Forever dungeons, three announced raids, saved readiness checks and activity notes.
- Nine primary professions, supplies/enchants, camping advice and a realized-gold calculator.
- Seven copyable macro templates, client-test checklists and editable keybinds.
- Search (`/`), saved chapters, progression checklists, personal notes and validated JSON backup/restore.

## Progress, privacy and migration

Progress is stored in this browser/device. It is not synchronized to a cloud account. Different browsers, hosting addresses and local-file locations may use different storage. Private browsing or browser restrictions may prevent saving.

Use **Backup** before moving the guide, clearing browser data or changing devices. **Restore** previews a supported backup before replacing current progress. Download the current backup first when you want a rollback copy.

V1 Rogue backups (`format: sinix-grimm-guide`, version 1) preserve level, tasks, gear, notes and both build URLs. On a shared origin, the old `sinix-grimm-rogue-guide-v1` record can migrate to the separate v2 key; the old record is left intact. Other classes’ v2 backups are rejected.

Plan level is independent of character level. Set the target level and earned Legacy **Talented** rank, then select **Apply budget**. Talented shifts early points and never raises the level-60 cap above 51. Build codes are specific to this guide’s client-70753 snapshot; they are not game import strings.

## Accuracy and research snapshot

Reviewed November 3, 2026, before launch. November 2 official tuning supersedes older class deep dives. The planner uses client 1.60.1.70753 with the official tuning overlay, via the attributed Talents Forever export.

The guide distinguishes official facts, client/database records, recommendations and pending client tests. Garrote is not represented as a verified silence. Shank Rank 2’s generation is confirmed, but its specific cost/cooldown still need live verification. Weapon acquisition confidence is distinct from tooltip existence; unknown equip requirements stay unknown.

No live macro verification, final BiS list, simulated optimal build, measured winrate or verified quest-by-quest speedrun is claimed. The 1–60 campaign is a full planning framework. Read `QA_REPORT.md`, `SOURCES.md` and `ATTRIBUTION.md` for the evidence boundaries.

## Publish separately to GitHub Pages

See `DEPLOY.md`. The existing Kozmek website and repository were read only and remain unchanged. No GitHub repository or public Site was created for this edition. Obtain the owner’s approval before publication.

## Maintain and check

- Edit prose/layout in `index.html`, visual design in `assets/theme.css`, behavior in `assets/app.js`, and state/planner rules in `assets/core.js`.
- `assets/styles.css` retains the recovered v1 foundation. `theme.css` is its reference-style green edition.
- Update `source/guide-data.json` deliberately from current evidence, retaining attribution and uncertainty notes. Run `node tools/refresh-data.cjs` to update `assets/data.js`.
- Optional developer check: `node --test tests/core.test.cjs` (Node.js; no third-party packages).
- After changes, retest browser routing, keyboard/mobile navigation, save/reload, filters, copying, and backup/restore. Review the dated research snapshot after each patch.

## Preview images

See the current [talent-board preview](preview/talents-v2.2.jpg), [weapon-page preview](preview/weapons-v2.2.jpg) and [mobile preview](preview/mobile-v2.2.jpg), captured from the working browser preview. Earlier v2/v2.1 images are retained for history.


## v2.1 visual correction

This revision retains v2 and adds actual WoW game artwork throughout, matching the reference sidebar and Rogue abilities. The weapon page now uses the complete Wowhead Forever item tooltip panels and item icons, with enlargement and comparison. The green theme, original Forever logo and Undead hero remain. Game icon/source credits are in ATTRIBUTION.md. Publication has not been approved or performed.

## v2.2 requested refinements

All navigation names use Title Case, including **Talent Workshop** and **Weapons Upgrades**. The green theme, Undead artwork, original Forever logo and existing progress format are preserved.

The Talent Workshop follows the four-column, seven-row Rogue board from Talents Forever. Click to spend; Shift-click, right-click or Backspace/Delete to refund. On touch screens, choose **Refund Points** or **Inspect All Ranks** in Interaction Mode. Keyboard focus shows rank details. Per-tree reset and the previous presets, named saves, build codes and progress backup remain available. A prerequisite arrow is omitted when it would pass through another node; the underlying prerequisite is still enforced and shown in the details.

The weapon catalog enumerates all target records in three named public snapshots, then refreshes actual item IDs against Wowhead Forever, falling back to clearly labeled Classic data. It covers all five one-hand weapon types and four ranged types. Recipe wrappers, ammunition, incompatible restrictions and known debug/temporary records are excluded. Ranged items are for the ranged slot, not replacements for melee weapons. Random-suffix families appear once per base item, rather than every possible roll. Unknown equip levels remain unknown and are excluded from level-based eligibility filters.

Seventy attempted IDs could not produce an accepted tooltip. Hidden, unreleased, unobtainable or later-patch items cannot be guaranteed. This is an audited broad catalog, not a claim of every possible live upgrade, final BiS or measured optimality. See `source/weapon-catalog-coverage.json` for counts, source checksums, exclusions, unresolved IDs and the exact evidence boundaries.
