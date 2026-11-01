# ⚛ Particle Mahjong

A retro-styled Mahjong Solitaire game where tiles are decorated with **particle physics symbols** instead of traditional Chinese characters. Dark space aesthetic, neon glows, scanline effect, and a starfield background.

- **5 layouts** to choose from, from a quick warm-up to a long game
- **Every deal can be cleared**: boards are dealt so at least one solution always exists
- **Timer and time-based scoring** with chain bonuses
- **Arcade-style high scores**: enter your 3 initials for the top 3 of each layout

## Play it

**Locally:** Open `index.html` in any modern browser — no build step, no server, no dependencies to install (an internet connection is needed to load React and Babel).

**GitHub Pages:** Upload all files to the repo and enable Pages from the repo settings → branch `main` / root. Your game will be live at `https://<your-username>.github.io/<repo-name>/`.

**On Android:** Open the GitHub Pages address in Chrome, then tap **⋮ → Install app**. The game opens full-screen from your home screen and works offline after the first visit. The board shrinks to fit narrow screens; turn the phone sideways for bigger tiles.

### Updating

The service worker (`sw.js`) keeps a copy of the game on the phone. After changing any file, bump `VERSION` in `sw.js` (e.g. `'v1'` → `'v2'`) so installed copies download the new version.

## How to play

| Action | Result |
|--------|--------|
| Pick a layout | Start a game on that board |
| Click a glowing tile | Select it (the clock starts on your first click) |
| Click a matching glowing tile | Annihilate the pair |
| Click the same tile again | Deselect |
| Click a dim tile | Nothing — it's locked |

A tile is **free** (glowing) when:
- Nothing is stacked on top of it
- At least one side (left or right) is open

Clear every tile to win.

## Controls

| Button | Effect |
|--------|--------|
| `HINT` | Highlight a valid pair (−5 pts) |
| `RESHUFFLE` | Re-deal the remaining tiles so they can still be cleared (−20 pts) |
| `PAUSE` / `RESUME` | Stop the clock and hide the board (also pauses automatically when you leave the app) |
| `NEW GAME` | Start a fresh game on the same layout |
| `MENU` | Back to layout selection |

## Scoring

| Event | Points |
|-------|--------|
| Matched pair | +20 |
| Chain reaction (a match within 4 s of the previous one) | +10 extra |
| Time bonus on a win | +2 per second under the layout's par time |
| Hint | −5 |
| Reshuffle | −20 |

Par time is 8 seconds per pair. The clock turns red once you are over par.

## High scores

After a win that makes the **top 3** for that layout, the game asks for your **3 initials** (▲ / ▼ to pick each letter, or type them on a keyboard). Ties go to the faster time. Only wins count.

Scores are stored on the device only (in the browser's local storage), so each phone keeps its own list. `★ HIGH SCORES` on the menu shows the top 3 of every layout.

## Particle tile types (15 types, dealt in pairs)

| Symbol | Particle | Family |
|--------|----------|--------|
| γ | Photon | Boson |
| e⁻ | Electron | Lepton |
| e⁺ | Positron | Lepton |
| μ | Muon | Lepton |
| τ | Tau | Lepton |
| ν | Neutrino | Lepton |
| u | Up quark | Quark |
| d | Down quark | Quark |
| s | Strange quark | Quark |
| c | Charm quark | Quark |
| p | Proton | Hadron |
| n | Neutron | Hadron |
| H | Higgs boson | Boson |
| W | W boson | Boson |
| Z | Z boson | Boson |

## Tech stack

- Pure HTML + CSS + JavaScript (no build tools)
- [React 18.3.1](https://react.dev/) via CDN (UMD build)
- [Babel Standalone 7.26.4](https://babeljs.io/docs/babel-standalone) for JSX transpilation in-browser
- Installable web app: `manifest.webmanifest` + offline service worker `sw.js` + `icons/`
- No backend, no Node.js, no npm

Library versions are pinned in both `index.html` and `sw.js`; change them in both places together.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The whole game |
| `manifest.webmanifest` | App name, colors and icons for "Install app" |
| `sw.js` | Caches the game and libraries for offline play |
| `icons/` | App icons (SVG source + 192 / 512 px PNG) |

## Layouts

| Layout | Tiles | Layers | Par time |
|--------|-------|--------|----------|
| Flat | 36 | 2 | 2:24 |
| Pyramid (the original) | 60 | 4 | 4:00 |
| Bridge | 58 | 4 | 3:52 |
| Atom | 64 | 4 | 4:16 |
| Fortress | 84 | 4 | 5:36 |

Layouts are defined in `LAYOUTS` in `index.html` as `[x, y, z]` positions in half-tile units (a tile covers 2 × 2 units), so tiles can sit half a tile off the grid like classic Mahjong boards. To add one, append an entry with an even number of positions.

## Credits

Made by gionzana.
