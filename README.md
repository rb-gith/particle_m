# ⚛ Particle Mahjong

A retro-styled Mahjong Solitaire game where tiles are decorated with **particle physics symbols** instead of traditional Chinese characters. Dark space aesthetic, neon glows, scanline effect, and a starfield background.

## Play it

**Locally:** Open `index.html` in any modern browser — no build step, no server, no dependencies to install (an internet connection is needed to load React and Babel).

**GitHub Pages:** Upload all files to the repo and enable Pages from the repo settings → branch `main` / root. Your game will be live at `https://<your-username>.github.io/<repo-name>/`.

**On Android:** Open the GitHub Pages address in Chrome, then tap **⋮ → Install app**. The game opens full-screen from your home screen and works offline after the first visit. The board shrinks to fit narrow screens; turn the phone sideways for bigger tiles.

### Updating

The service worker (`sw.js`) keeps a copy of the game on the phone. After changing any file, bump `VERSION` in `sw.js` (e.g. `'v1'` → `'v2'`) so installed copies download the new version.

## How to play

| Action | Result |
|--------|--------|
| Click a glowing tile | Select it |
| Click a matching glowing tile | Annihilate the pair (+20 pts) |
| Click the same tile again | Deselect |
| Click a dim tile | Nothing — it's locked |

A tile is **free** (glowing) when:
- Nothing is stacked on top of it
- At least one side (left or right) is open

Clear all 60 tiles to win.

## Controls

| Button | Effect |
|--------|--------|
| `HINT` | Highlight a valid pair (−5 pts) |
| `RESHUFFLE` | Randomly reassign all remaining tile types (−20 pts) |
| `NEW GAME` | Start a fresh game |

## Particle tile types (15 types × 4 copies = 60 tiles)

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

## Layout

- **Layer 0:** 8 × 4 = 32 tiles (base)
- **Layer 1:** 6 × 3 = 18 tiles
- **Layer 2:** 4 × 2 = 8 tiles
- **Layer 3:** 2 tiles (peak)
- **Total:** 60 tiles / 30 pairs


