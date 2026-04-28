# Vanessa AVA Briefing

Standalone web prototype for Vanessa (CEO, Cena Health). Chapter 1 of an executive briefing on how Cena builds with agents in the lead.

Built with Vite + React 19 + TypeScript + Tailwind v4. Brand tokens copied from `Lab/haven-ui` (sand + teal palette + semantic aliases).

## Develop

```bash
pnpm install   # or npm install
pnpm dev       # http://localhost:5180
pnpm build     # static output in dist/
pnpm preview   # serve dist/ locally
```

## Deploy (GitHub Pages)

```bash
pnpm build
pnpm deploy    # pushes dist/ to gh-pages branch
```

The `vite.config.ts` `base` defaults to `/vanessa-ava-briefing/` — the GitHub Pages project-page URL path. Override with `VITE_BASE='/'` for a custom-domain or root deploy.

## Source plan

Build phase: `~/.claude/plans/vanessa-ava-briefing-build.md`
Parent plan: `~/.claude/plans/vanessa-ava-briefing.md`
Visual treatment: `~/.claude/plans/vanessa-ava-briefing/04-visual-treatment-direction.md`
Prose v1: `~/.claude/plans/vanessa-ava-briefing/02-agents-first-prose-v1.md`
