---
version: alpha
name: Crocotaste examples
description: A single-page Next.js static export on shadcn/ui (radix-nova, neutral base) and Tailwind CSS 4, themed green with a dark brand field.
colors:
  background: "oklch(0.976 0.004 157.179)"
  background-dark: "oklch(0.167 0.009 168.991)"
  foreground: "oklch(0.206 0.018 169.92)"
  foreground-dark: "oklch(0.97 0.004 160)"
  card: "oklch(1 0 0)"
  card-dark: "oklch(0.197 0.011 163.6)"
  card-foreground: "oklch(0.206 0.018 169.92)"
  card-foreground-dark: "oklch(0.97 0.004 160)"
  primary: "oklch(0.528 0.115 161.878)"
  primary-dark: "oklch(0.773 0.153 163.223)"
  primary-foreground: "oklch(1 0 0)"
  primary-foreground-dark: "oklch(0.165 0.02 164.756)"
  secondary: "oklch(0.96 0.007 160.074)"
  secondary-dark: "oklch(0.227 0.012 167.45)"
  secondary-foreground: "oklch(0.206 0.018 169.92)"
  secondary-foreground-dark: "oklch(0.97 0.004 160)"
  muted: "oklch(0.96 0.007 160.074)"
  muted-dark: "oklch(0.227 0.012 167.45)"
  muted-foreground: "oklch(0.475 0.02 167.78)"
  muted-foreground-dark: "oklch(0.741 0.013 164.666)"
  destructive: "oklch(0.577 0.245 27.325)"
  destructive-dark: "oklch(0.704 0.191 22.216)"
  success: "oklch(0.528 0.115 161.878)"
  success-dark: "oklch(0.773 0.153 163.223)"
  warning: "oklch(0.555 0.146 48.998)"
  warning-dark: "oklch(0.837 0.164 84.429)"
  border: "oklch(0.928 0.008 157.082)"
  border-dark: "oklch(1 0 0 / 10%)"
typography:
  display:
    fontFamily: Outfit
    fontSize: 3rem
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.025em
  display-sm:
    fontFamily: Outfit
    fontSize: 2.25rem
    fontWeight: 600
    lineHeight: 2.5rem
    letterSpacing: -0.025em
  lead:
    fontFamily: Outfit
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.75rem
  title:
    fontFamily: Outfit
    fontSize: 1.125rem
    fontWeight: 600
    lineHeight: 1.375
  heading-sm:
    fontFamily: Outfit
    fontSize: 1rem
    fontWeight: 500
    lineHeight: 1.5rem
  body-md:
    fontFamily: Outfit
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.25rem
  label-md:
    fontFamily: Outfit
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1.25rem
  label-sm:
    fontFamily: Outfit
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1rem
  code:
    fontFamily: ui-monospace
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1rem
rounded:
  md: 0.5rem
  lg: 0.625rem
  xl: 0.875rem
  4xl: 1.625rem
spacing:
  unit: 0.25rem
  card: 1rem
  card-sm: 0.75rem
  stack: 1rem
  gutter: 1rem
  gutter-md: 1.5rem
  page-max-width: 64rem
components:
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
  page-dark:
    backgroundColor: "{colors.background-dark}"
    textColor: "{colors.foreground-dark}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    height: 2rem
    padding: 0.625rem
  button-primary-lg:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    height: 2.25rem
    padding: 0.625rem
  button-primary-dark:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.primary-foreground-dark}"
    rounded: "{rounded.lg}"
    height: 2rem
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondary-foreground}"
    rounded: "{rounded.lg}"
    height: 2rem
  button-secondary-dark:
    backgroundColor: "{colors.secondary-dark}"
    textColor: "{colors.secondary-foreground-dark}"
    rounded: "{rounded.lg}"
    height: 2rem
  button-outline:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    height: 2rem
  button-outline-sm:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    height: 1.75rem
    padding: 0.625rem
  button-ghost-hover:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    height: 2rem
  badge-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondary-foreground}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.4xl}"
    height: 1.25rem
    padding: 0.5rem
  badge-success:
    textColor: "{colors.success}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.4xl}"
    height: 1.25rem
  badge-success-dark:
    textColor: "{colors.success-dark}"
  badge-warning:
    textColor: "{colors.warning}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.4xl}"
    height: 1.25rem
  badge-warning-dark:
    textColor: "{colors.warning-dark}"
  badge-destructive:
    textColor: "{colors.destructive}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.4xl}"
    height: 1.25rem
  badge-destructive-dark:
    textColor: "{colors.destructive-dark}"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.card-foreground}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.card}"
  card-dark:
    backgroundColor: "{colors.card-dark}"
    textColor: "{colors.card-foreground-dark}"
  card-description:
    textColor: "{colors.muted-foreground}"
    typography: "{typography.body-md}"
  card-description-dark:
    textColor: "{colors.muted-foreground-dark}"
  muted-tile:
    backgroundColor: "{colors.muted}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card}"
  muted-tile-dark:
    backgroundColor: "{colors.muted-dark}"
  separator:
    backgroundColor: "{colors.border}"
    height: 1px
  separator-dark:
    backgroundColor: "{colors.border-dark}"
    height: 1px
  hero:
    textColor: "{colors.foreground}"
    typography: "{typography.display}"
---

## Overview

A one-page Next.js App Router site, exported statically and served from GitHub Pages under `/crocotaste-examples`. It is built from stock shadcn/ui (`radix-nova` style, `neutral` base color, CSS variables on) with a green theme. The design system lives in four places, and every value in this file was copied from them:

- `src/app/globals.css`: every color and radius token. Light values sit in `:root`, dark values in `.dark`, and `@theme inline` maps each `--x` to a Tailwind `--color-x` (so `--primary` becomes `bg-primary`). `--radius-*` is derived from `--radius: 0.625rem`.
- `src/app/layout.tsx`: the font. Outfit from `next/font/google`, exposed as `--font-sans`; `globals.css` also points `--font-heading` at it.
- `src/components/ui/`: the five components, `button.tsx`, `badge.tsx`, `card.tsx`, `separator.tsx`, `tabs.tsx`; the button and badge variants are `cva` calls. `src/components/croc-mark.tsx` is the logo mark, `src/components/evidence.tsx` draws a quoted issue or pull request, and `src/components/example-explorer.tsx` is the examples card.
- `CLAUDE.md`: the written UI rules. `components.json` holds the shadcn configuration.

The type sizes, the spacing unit (`--spacing: 0.25rem`), the mono font stack and the container widths are not defined by this repository: they are Tailwind 4's defaults from `node_modules/tailwindcss/theme.css`, recorded here where the page uses them.

`globals.css` also defines `--accent`, `--popover`, `--chart-1` to `--chart-5` and the `--sidebar-*` family. Nothing on the page reads them, so they are left out of the front matter.

## Colors

Colors are `oklch()` values, and every one is reached through a Tailwind utility named after its role (`bg-card`, `text-muted-foreground`). The front matter lists the light value under the role name and the dark value under `<role>-dark`; the `-dark` component entries show which values the `.dark` block swaps in.

- **Background / foreground:** the page (`body` applies `bg-background text-foreground`). Each diff inverts them: `bg-foreground text-background`.
- **Card / card-foreground:** the surface of every `Card`, white on the faintly green page.
- **Primary / primary-foreground:** the one brand green. Default `Button`, the default `Badge` that numbers the how-it-works steps and the anatomy's parts, the `CrocMark` in the header (`text-primary`), the footer link, and `--ring`.
- **Secondary:** secondary `Button`, the `setup`, `command` and `decision` `Badge`s, and the neutral check `Badge`.
- **Muted / muted-foreground:** quiet fills and supporting text: the how-it-works tiles (`bg-muted`), the active row of the examples sidebar, code spans and code blocks, the file-path bar above each diff, the check row under each pull request, `CardDescription`, step descriptions, the footer.
- **Success, warning, destructive:** status only. They appear on the page through the `success`, `warning` and `destructive` `Badge` variants, at `/10` opacity for the fill (`/20` in dark) with the full token as text. Each quoted finding opens with its verdict as an `OutcomeBadge`, the way the step it belongs to is labeled, and each pull request's check row opens with its conclusion: `success` for a green check, `secondary` for a neutral one. `--success` has the same value as `--primary` in both modes.
- **Border:** `* { @apply border-border outline-ring/50 }` sets the default border color for every element, and `Separator` is `bg-border`.
- **Ring and input** (not in the front matter, because the code reads them only at partial opacity): `--ring` is `oklch(0.528 0.115 161.878)` light and `oklch(0.773 0.153 163.223)` dark, the same values as `--primary`, and every focus ring is `ring-ring/50`. `--input` is `oklch(0.928 0.008 157.082)` light and `oklch(1 0 0 / 15%)` dark; only the dark `outline` `Button` reads it (`dark:border-input dark:bg-input/30`).

**Dark mode.** `@custom-variant dark (&:is(.dark *))` makes `dark:` utilities apply under a `.dark` ancestor, and the `.dark` block in `globals.css` redefines every token above. Nothing in the app adds the `.dark` class, and there is no theme toggle or `prefers-color-scheme` rule, so the page always renders the light values. A component that reads theme tokens needs no extra `dark:` classes to be correct in dark mode; the `dark:` classes in `src/components/ui/` only retune opacities.

## Typography

One family: Outfit, loaded with `subsets: ["latin"]` and applied to `html` through `font-sans`. `font-heading` resolves to the same variable, so headings do not change family. Code uses Tailwind's default `font-mono` stack, which starts `ui-monospace, SFMono-Regular, Menlo`.

Two weights carry hierarchy: `font-semibold` (600) for the h1, card titles, the open example's title and the header wordmark, `font-medium` (500) for buttons, badges, tile and part titles, sidebar rows and the GitHub title of each quoted issue or pull request. Everything else is 400.

| Token        | Classes in the code                              | Used for                                                     |
| :----------- | :----------------------------------------------- | :----------------------------------------------------------- |
| `display`    | `text-5xl font-semibold tracking-tight` at `md:` | Hero h1 on wide screens                                      |
| `display-sm` | `text-4xl font-semibold tracking-tight`          | Hero h1 below `md`                                           |
| `lead`       | `text-lg`                                        | Hero paragraph                                               |
| `title`      | `text-lg font-semibold`                          | Every `CardTitle`, and the open example's `h3`               |
| `heading-sm` | `font-medium` (`text-base`)                      | How-it-works tile and anatomy part `h3`                      |
| `body-md`    | `text-sm`                                        | Card body text (`Card` sets `text-sm`), descriptions, footer |
| `label-md`   | `text-sm font-medium`                            | `Button`, sidebar rows (`TabsTrigger`)                       |
| `label-sm`   | `text-xs font-medium`                            | `Badge`, the sidebar's stage labels                          |
| `code`       | `font-mono text-xs`                              | Code spans, diffs, suggestions, quoted blocks, check titles  |

The h1 also carries `text-balance`. `CardTitle` is `text-lg font-semibold leading-snug` in `card.tsx` itself, so no call site restyles it; it wraps an `h2`, so the headings run h1, h2, h3 in order. There is no separate type-scale token file.

## Layout

Spacing uses Tailwind's scale on its default `--spacing: 0.25rem`; the repository defines no spacing tokens of its own besides the card's.

- **Page:** one column, `mx-auto w-full max-w-5xl` (64rem), side padding `px-4` then `md:px-6`, bottom `pb-10`.
- **Stack:** `main` separates sections with `space-y-4`. The header and footer use `py-4` and `py-6`.
- **Card:** padding comes from `--card-spacing`, `--spacing(4)` by default and `--spacing(3)` at `size="sm"`, used as both the vertical padding and the gap between header and content.
- **Order:** hero, how it works, the examples, how to read a finding, try it.
- **Grids and rows:** the how-it-works tiles are `grid gap-4 md:grid-cols-3`; the anatomy is `grid gap-6 md:grid-cols-2`, its numbered rows `flex items-start gap-3`. Button groups are `flex flex-wrap gap-2`.
- **Examples:** one `Tabs` with `orientation="vertical"`, `md:grid md:grid-cols-3 md:gap-6`. From `md` the sidebar takes a column and sticks (`md:sticky md:top-4`, which works because `Card` clips with `overflow-clip`, not `overflow-hidden`): one vertical `TabsList` of all twelve steps, a `text-xs` stage label (`aria-hidden`, visual only) above each stage's rows, each row the number at `w-6` and the title. The previous and next `Button`s bring the card's top back into view and keep focus on the pager at either end. The open step takes two columns: its badge and kind, its title and description, then its `Evidence` frame (the GitHub title, the diff, every post with `Separator` between them, the check row), then the GitHub link and the previous and next `Button`s. Below `md` the sidebar is hidden and a stage and position line with the same pager sits above the step. The open step is in the URL hash (`#example-3`), so a link can land on any of them. Code scrolls inside its block (`overflow-x-auto`) and prose wraps (`whitespace-pre-wrap break-words`), so nothing widens the page at 320px.
- **Hero:** type centered on the page background, no panel and no image, kept short so the cards start near the fold: `flex flex-col items-center text-center px-6 pt-6 pb-4 md:pt-10 md:pb-6`, the h1 at `max-w-3xl` with its last phrase in `text-primary`, the paragraph `mt-4 max-w-2xl text-balance text-muted-foreground`, actions `mt-6` centered, then a `font-mono text-xs` tally counted from `STEPS` at `mt-4`.
- **Breakpoints:** Tailwind defaults, used at `sm` and `md` only.

## Elevation & Depth

There are no shadows and no shadow tokens: no `shadow-*` class appears in `src/`. Depth comes from surface and outline:

- `Card` separates itself from `bg-background` with `bg-card` and `ring-1 ring-foreground/10`.
- Nested panels step down a surface instead of up: `bg-muted` tiles inside the card, `rounded-lg border` around each step's evidence.
- A horizontal tab list's active tab is `bg-card` with `ring-1 ring-foreground/10` on the `bg-muted` list, the same ring a `Card` uses. A vertical list has no track, and its active row steps to `bg-muted` instead.

## Shapes

Every radius comes from the `rounded-*` scale in `@theme inline`, derived from `--radius: 0.625rem` (`sm` is ×0.6, `md` ×0.8, `lg` ×1, `xl` ×1.4, `2xl` ×1.8, `3xl` ×2.2, `4xl` ×2.6). The front matter lists the steps the page uses, as computed values.

- `rounded-4xl`: `Badge`, a pill.
- `rounded-xl`: `Card`.
- `rounded-lg`: `Button` (default and `lg` sizes), how-it-works tiles, the tab list, each evidence frame.
- `rounded-md`: tab triggers and sidebar rows, the suggestion and quoted `<pre>` blocks; `Button` at `sm` computes to it (`min(var(--radius-md),12px)`).
- `rounded`: inline code spans.

Icons are `lucide-react` line icons, sized by the component they sit in: `size-4` in a `Button`, `size-3.5` in a `sm` `Button`, `size-3` in a `Badge`. The one icon outside a component, the issue or pull request icon in an evidence frame's title bar, is `size-4 text-muted-foreground`. The `CrocMark` defaults to `size-6` and is filled with `currentColor`.

## Components

Import from `src/components/ui/<name>` by path; there is no barrel file.

**Button** (`button.tsx`). Variants: `default`, `outline`, `secondary`, `ghost`, `destructive`, `link`. Sizes: `xs` (`h-6`), `sm` (`h-7`), `default` (`h-8`), `lg` (`h-9`), and square `icon-xs`, `icon-sm`, `icon`, `icon-lg`. Every link that acts as a button is `<Button asChild><a …></a></Button>`. On the page:

- `lg` + `default` for the main call to action (`Browse the examples`, `Get started`), with `outline` beside it (on the hero and in a card).
- `ghost` for the header's `GitHub` link.
- `outline` + `sm` for the open example's `See it on GitHub #n` link and its `Previous` and `Next` buttons, which are disabled at either end.
- An external link carries a trailing `ArrowUpRight` marked `data-icon="inline-end"`, which tightens the right padding.

States: hover `bg-primary/80` (default), `bg-muted` (outline, ghost), a `color-mix` 5% toward foreground (secondary); pressed `active:translate-y-px`; focus `focus-visible:border-ring ring-3 ring-ring/50`; disabled `opacity-50 pointer-events-none`; invalid `aria-invalid` gives a destructive border and ring. There is no loading state.

**Badge** (`badge.tsx`). Variants: `default`, `secondary`, `success`, `warning`, `destructive`, `outline`, `ghost`, `link`. One size, `h-5 px-2 text-xs rounded-4xl`. The `default` variant numbers the how-it-works steps and the anatomy's parts. `evidence.tsx` wraps it in `OutcomeBadge`, the only mapping from outcome to badge:

| Outcome              | Label            | Variant       | Icon                        |
| :------------------- | :--------------- | :------------ | :-------------------------- |
| `setup` · `decision` | Setup · Decision | `secondary`   | `Settings2` · `NotebookPen` |
| `pass`               | Pass             | `success`     | `CircleCheck`               |
| `drift`              | Drift            | `warning`     | `CircleAlert`               |
| `violation`          | Violation        | `destructive` | `CircleX`                   |
| `command`            | Command          | `secondary`   | `MessageCircle`             |

The check row maps its conclusion the same way: `success` with `CircleCheck` (Success), `secondary` with `CircleMinus` (Neutral). Every status badge has a leading icon (`data-icon="inline-start"`) and a text label, so status never rests on color alone.

**Card** (`card.tsx`). `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, `CardFooter`; sizes `default` and `sm`. Every boxed section below the hero is a `Card` with a `CardHeader` (title plus one-line description) and a `CardContent`.

**Separator** (`separator.tsx`). A 1px `bg-border` rule, decorative by default. It divides the posts inside an evidence frame.

**Tabs** (`tabs.tsx`). `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`, on Radix, so arrow keys move between tabs and each panel is labeled by its tab. `orientation="vertical"` is a variant in `tabs.tsx` itself (`data-[orientation=vertical]:…`): the list loses its track and stacks, triggers wrap and align left, hover and active are `bg-muted`. The examples use it as one `TabsList`, so the sidebar is one tab stop and the arrow keys cross stages, opening on `FIRST_STEP`. Every state comes from tokens (`hover:text-foreground`, `focus-visible:ring-3 ring-ring/50`, active `bg-card` with a ring or `bg-muted`), with no shadow and no arbitrary value.

**CrocMark** (`croc-mark.tsx`). The logo from `src/app/icon.svg` without its field, `aria-hidden`, colored by the parent's text color (`text-primary` in the header).

## Do's and Don'ts

- Do take every color from a theme token utility (`bg-card`, `text-muted-foreground`, `text-destructive`); don't write a raw hex, `rgb()` or `oklch()` value, or a Tailwind palette color such as `text-red-600`, outside `globals.css`.
- Do add a new color role to `:root`, `.dark` and `@theme inline` in `globals.css` in the same change.
- Do keep `success`, `warning` and `destructive` for status; don't use them for decoration, and don't tint the `CrocMark` with them.
- Do show a status as a `Badge` through `OutcomeBadge`, with its lucide icon and its label; don't build a status pill from a `span`.
- Do use `Button` for every action, and `Button asChild` around an `<a>` for a link styled as a button; don't style a bare `<a>` or `<button>` as a button.
- Do wrap every boxed section in `Card` with `CardHeader` and `CardContent`; don't draw a box with `border rounded-xl` on a `div` at section level.
- Do change a shadcn component's look through a variant in its own file under `src/components/ui/`; don't override its colors or radius with classes at the call site.
- Do take radii from the `rounded-*` scale (`rounded-lg`, `rounded-xl`); don't write `rounded-[…]` outside `src/components/ui/`.
- Do take spacing from Tailwind's scale (`p-4`, `gap-2`, `space-y-4`); don't write `p-[…]`, `gap-[…]` or any arbitrary spacing value.
- Do separate a surface with `ring-1 ring-foreground/10` or a step to `bg-muted`; don't add `shadow-*`.
- Do give every interactive element a visible hover and a `focus-visible` ring from `--ring`; the base layer's `outline-ring/50` must stay.
- Do give every `<img>` an `alt`, empty (`alt=""`) only when the image is decorative.
- Do give a link or button whose text alone is unclear an `aria-label` (the step links read `See it on GitHub: Pull request #3`, the pager `Next: A hex that several roles share`); don't ship an icon-only `Button` without one.
- Do mark decorative SVGs `aria-hidden`, as `CrocMark` is.
- Do prefix a plain `<img src>` or `srcSet` with `process.env.NEXT_PUBLIC_BASE_PATH`; Next does not do it outside its own components.
- Do write copy in sentence case (`Browse the examples`, `See pricing`); don't use exclamation marks or em dashes. The Crocotaste text quoted in `STEPS` (`src/data/showcase.ts`) is the one exception, reproduced verbatim.
- Do spell out "pull request" in copy, write "color" with US spelling, and use the verdict words `Pass`, `Drift` and `Violation` as they appear in the badges.
- Do keep page copy in `src/data/showcase.ts`, not inline in `page.tsx`.
- Do name files in kebab-case with named exports, and import components by path; don't add barrel files.
- Don't add anything that needs a request (route handlers, server actions, `cookies()`, `headers()`); the site is a static export.

## Decisions

_Team decisions are recorded here as undated entries; each one is a rule, its reason, and its source._

### The hero is type, not a picture

The hero is type centered on the page background, with no panel and no image: the examples below are what the page shows, so nothing competes with it above the fold. Content sections stay in a Card. Source: DESIGN.md:264.
