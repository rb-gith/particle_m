# ⚛ Particle Mahjong

A retro-styled Mahjong Solitaire game where tiles are decorated with **particle physics symbols** instead of traditional Chinese characters. Dark space aesthetic, neon glows, scanline effect, and a starfield background.

## Play it

**Online:** Open `index.html` in any modern browser — no build step, no server, no dependencies to install.

**GitHub Pages:** Push this repo and enable Pages from the repo settings → branch `main` / root. Your game will be live at `https://<your-username>.github.io/<repo-name>/`.

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
- [React 18](https://react.dev/) via CDN (UMD build)
- [Babel Standalone](https://babeljs.io/docs/babel-standalone) for JSX transpilation in-browser
- No backend, no Node.js, no npm

## Layout

- **Layer 0:** 8 × 4 = 32 tiles (base)
- **Layer 1:** 6 × 3 = 18 tiles
- **Layer 2:** 4 × 2 = 8 tiles
- **Layer 3:** 2 tiles (peak)
- **Total:** 60 tiles / 30 pairs

## License

MIT — see [LICENSE](LICENSE).
