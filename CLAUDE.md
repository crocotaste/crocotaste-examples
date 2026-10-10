# CLAUDE.md

An example project for [Crocotaste](https://www.crocotaste.com): a single-page Next.js app on shadcn/ui and Tailwind CSS.

## Stack

- Next.js (App Router) · React · TypeScript strict · Tailwind CSS 4
- shadcn/ui (`radix-nova` style, Radix primitives), configured in `components.json`
- Icons from `lucide-react`
- Outfit through `next/font/google`, exposed as `--font-sans`
- Static export (`output: "export"` in `next.config.ts`), published to GitHub Pages by `.github/workflows/pages.yml` on every push to `main`

## Layout

- `src/app/globals.css`: the shadcn theme (light and `.dark`), mapped into Tailwind with `@theme inline`
- `src/app/page.tsx`: the page
- `src/components/ui/`: shadcn components, added with `npx shadcn@latest add <name>`
- `src/components/croc-mark.tsx`: the logo mark, drawn from `src/app/icon.svg`
- `src/components/evidence.tsx`: one quoted issue or pull request (title, diff, posts, check row) and `OutcomeBadge`; `src/components/example-explorer.tsx`: the examples card, a client component whose open step lives in the URL hash (`#example-3`)
- `src/data/showcase.ts`: the page's copy; `STAGES`, the sidebar's groups; and `STEPS`, the ordered list the examples render. Each step has its stage, its fixed issue or pull request number, its `githubTitle`, its Crocotaste `check` (conclusion and title), an optional `diff` (the changed lines) and `posts` (findings and comments), quoted verbatim from GitHub and trimmed to the lines that matter. Re-fetch them with `gh pr view <n> --json comments,reviews` and `gh api repos/crocotaste/crocotaste-examples/pulls/<n>/comments` if a review is re-run, and the check with `gh api repos/crocotaste/crocotaste-examples/commits/<sha>/check-runs`
- `src/lib/utils.ts`: `cn`

## Commands

```bash
npm run dev          # localhost:3000
npm run build        # static site in out/
npm run typecheck
npm run lint
npm run format       # prettier --write
```

## UI

- Colors come from the theme tokens (`bg-background`, `text-muted-foreground`, `bg-primary`, `text-destructive`); never a raw hex, rgb or oklch value, and never a Tailwind palette color like `text-red-600` where a theme token covers the role.
- A new color role is added to `:root` and `.dark` in `globals.css` and mapped in `@theme inline`, all in the same change.
- Status colors are for status only: `success`, `warning` and `destructive`.
- Radii come from the `rounded-*` scale derived from `--radius`; no arbitrary `rounded-[…]`.
- Use Tailwind's spacing scale (`p-4`, `gap-2`); no arbitrary `p-[…]` values.
- Use the components in `src/components/ui/` before writing markup: every action is a `Button` (with `asChild` for a link), every boxed section is a `Card`, every status is a `Badge`.
- Customize a shadcn component through its variants in its own file, never by overriding its classes at the call site.
- Every interactive element has a visible hover and focus state.
- Copy is sentence case and US spelling, with no exclamation marks and no em dashes. Text quoted from Crocotaste in `STEPS` keeps its own punctuation.

## Conventions

- kebab-case file names, named exports, no default exports outside Next's file conventions.
- No barrel files.
- Comments explain why, never what.

## Hosting

- No server features: no route handlers, no server actions, no `cookies()` or `headers()`, nothing that needs a request. The build must stay a static export.
- Pages serves the site under `/crocotaste-examples`; the workflow passes it in as `NEXT_PUBLIC_BASE_PATH`. Next prefixes its own links and assets, but a plain `<img src>` must be prefixed by hand.
