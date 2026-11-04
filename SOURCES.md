# Research sources

Snapshot reviewed November 3, 2026. Official notes supersede older overviews; item records and routes retain their stated confidence.

- Latest changes: https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-%E2%80%93-updated-november-2/2360696
- Rogue baseline (historical October 7): https://news.blizzard.com/en-us/article/24310968/world-of-warcraft-forever-class-deep-dives-rogue-and-warlock
- Planner data: https://talentsforever.com/export/rogue.json
- Current external Rogue calculator: https://talentsforever.com/rogue

## Primary topic sources

- New Forever dungeons (2026-10-20): https://news.blizzard.com/en-us/article/24301455/explore-the-new-dungeons-of-world-of-warcraft-forever
- Raid sizes and attunement (2026-10-20): https://news.blizzard.com/en-us/article/24303009/world-of-warcraft-forever-raid-overviewlocations-raid-sizes-and-attunement
- Camping and profession features (2026-10-21): https://news.blizzard.com/en-us/article/24301516/gather-around-the-campfire-in-world-of-warcraft-forever
- Forever starter guide (2026-10-28): https://news.blizzard.com/en-us/article/24315280/new-players-starter-guide-welcome-to-world-of-warcraft-forever
- Global launch and new zones (2026-10-29): https://news.blizzard.com/en-us/article/24315820/world-of-warcraft-forever-goes-live-globally-november-4
- PvP progression (2026-10-07): https://news.blizzard.com/en-us/article/24303316/how-pvp-progression-in-world-of-warcraft-forever-works
- Hunter and Druid developer overview (2026-09-30): https://news.blizzard.com/en-us/article/24301515/world-of-warcraft-forever-class-deep-dives-hunter-and-druid
- Priest and Warrior developer overview (2026-09-30): https://news.blizzard.com/en-us/article/24301514/world-of-warcraft-forever-class-deep-dives-priest-and-warrior
- Mage and Shaman developer overview (reviewed November 3): https://news.blizzard.com/en-us/article/24302097/world-of-warcraft-forever-class-deep-dives-mage-and-shaman
- Rogue and Warlock developer overview (2026-10-07): https://news.blizzard.com/en-us/article/24310968/world-of-warcraft-forever-class-deep-dives-rogue-and-warlock
- Paladin developer overview (2026-10-15): https://news.blizzard.com/en-us/article/24302099/world-of-warcraft-forever-class-deep-dives-paladin

## Weapon evidence

v2.2 expands the original six examples below to **1,223 inspected weapon records** (1,005 current Forever records and 218 Classic references). Statistics are read from the actual item ID's Forever tooltip endpoint, with an explicit Classic fallback only when available. Every item card links its own source. Acquisition provenance is separate from item statistics, especially for Horde accessibility and Classic quest references.

Discovery snapshots, fully enumerated rather than a capped 50-row listing:

- https://raw.githubusercontent.com/Napalmsteak/WoW-Classic-Item-Caches/main/Forever%20Cache.json
- https://raw.githubusercontent.com/Napalmsteak/WoW-Classic-Item-Caches/main/Classic%20Era%20Cache.json
- https://raw.githubusercontent.com/nexus-devs/wow-classic-items/master/data/json/data.json

Primary tooltip paths: https://nether.wowhead.com/forever/tooltip/item/{id} and the distinctly labeled Classic reference path https://nether.wowhead.com/classic/tooltip/item/{id}. Direct listing pages returned access challenges; the catalog therefore does not claim a first-page list is exhaustive. Seventy attempted IDs remain unresolved. See `source/weapon-catalog-coverage.json` for reconciliation and per-pass gaps; `source/guide-data.json` retains each accepted record's provenance.

The authentic Rogue board layout and art were checked against https://talentsforever.com/rogue and its public stylesheet/script. Tree artwork URLs and hashes are recorded in `source/talent-tree-assets.json`.

- Wingblade: https://www.wowhead.com/forever/item=6504/wingblade
  Tooltip opened. Quest association from Forever list; no required level shown in tooltip. Forever list associates it with Leaders of the Fang in Wailing Caverns.
- Cruel Barb: https://www.wowhead.com/forever/item=5191/cruel-barb
  Tooltip opened; no live drop rate claimed. Historical comments were excluded. Forever item record lists Edwin VanCleef in the Deadmines.
- Ruby-Adorned Blade: https://www.wowhead.com/forever/item=277246/ruby-adorned-blade
  Opened tooltip explicitly marks New in Forever and Rogue-only. No required level is printed; a quest minimum is not an equip requirement. Listed reward for The Eye of Bhossca. Inspect the Rogue quest chain in your client.
- Meteor Shard: https://www.wowhead.com/forever/item=6220/meteor-shard
  Full indexed tooltip inspected; direct page open returned a JavaScript challenge. Lower confidence than opened records. Forever database extraction lists Archmage Arugal in Shadowfang Keep.
- Toxic Revenger: https://www.wowhead.com/forever/item=9453/toxic-revenger
  Indexed Forever tooltip inspected; direct open returned a JavaScript challenge. Do not reuse historical proc values. Forever database extraction lists Viscous Fallout in Gnomeregan.
- Thrash Blade: https://www.wowhead.com/forever/item=17705/thrash-blade
  Tooltip opened. No equip level shown. Old Maraudon comments do not establish Forever acquisition. Opened Forever record lists a Desolace vendor source; the exact live quest route remains unverified here.

## Supplies and enchants

- Thistle Tea: https://www.wowhead.com/forever/item=7676/thistle-tea
  Forever tooltip inspected and page opened.
- Free Action Potion: https://www.wowhead.com/forever/item=5634/free-action-potion
  Forever tooltip inspected and page opened. No immunity to every possible mechanic is claimed.
- Enchant Necklace — Agility: https://www.wowhead.com/forever/spell=1249059/enchant-necklace-agility
  Indexed Forever spell record inspected; direct open required JavaScript.
- Enchant Boots — Speed: https://www.wowhead.com/forever/spell=1328948/enchant-boots-speed
  Indexed Forever spell and formula records inspected; no live stacking test.

## Update boundaries

- Training rows include only inspected beta-client records; talent-granted abilities are not presented as trainer purchases.
- All route bands and matchup tactics are recommendations. The nine new dungeon ranges and three raid sizes/unlocks are official announced values.
- Named weapon sources may be database listings or indexed records, not independently observed live acquisition.
- Macros are templates with website copy verification and a separate client-test checklist.
