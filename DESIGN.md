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
  brand-field: "oklch(0.322 0.046 168.496)"
  brand-field-foreground: "oklch(1 0 0)"
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
  3xl: 1.375rem
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
    backgroundColor: "{colors.brand-field}"
    textColor: "{colors.brand-field-foreground}"
    typography: "{typography.display}"
    rounded: "{rounded.3xl}"
---

## Overview

A one-page Next.js App Router site, exported statically and served from GitHub Pages under `/crocotaste-examples`. It is built from stock shadcn/ui (`radix-nova` style, `neutral` base colour, CSS variables on) with a green theme. The design system lives in four places, and every value in this file was copied from them:

- `src/app/globals.css`: every colour and radius token. Light values sit in `:root`, dark values in `.dark`, and `@theme inline` maps each `--x` to a Tailwind `--color-x` (so `--primary` becomes `bg-primary`). `--radius-*` is derived from `--radius: 0.625rem`.
- `src/app/layout.tsx`: the font. Outfit from `next/font/google`, exposed as `--font-sans`; `globals.css` also points `--font-heading` at it.
- `src/components/ui/`: the four components, `button.tsx`, `badge.tsx`, `card.tsx`, `separator.tsx`, with their variants in `cva` calls. `src/components/croc-mark.tsx` is the logo mark.
- `CLAUDE.md`: the written UI rules. `components.json` holds the shadcn configuration.

The type sizes, the spacing unit (`--spacing: 0.25rem`), the mono font stack and the container widths are not defined by this repository: they are Tailwind 4's defaults from `node_modules/tailwindcss/theme.css`, recorded here where the page uses them.

`globals.css` also defines `--accent`, `--popover`, `--chart-1` to `--chart-5` and the `--sidebar-*` family. Nothing on the page reads them, so they are left out of the front matter.

## Colors

Colours are `oklch()` values, and every one is reached through a Tailwind utility named after its role (`bg-card`, `text-muted-foreground`). The front matter lists the light value under the role name and the dark value under `<role>-dark`; the `-dark` component entries show which values the `.dark` block swaps in.

- **Background / foreground:** the page (`body` applies `bg-background text-foreground`). The finding diff inverts them: `bg-foreground text-background`.
- **Card / card-foreground:** the surface of every `Card`, white on the faintly green page.
- **Primary / primary-foreground:** the one brand green. Default `Button`, the `CrocMark` in the header (`text-primary`), the footer link, and `--ring`.
- **Secondary:** secondary `Button` and the `setup` and `command` `Badge`s.
- **Muted / muted-foreground:** quiet fills and supporting text: the check tiles (`bg-muted`), code spans, the file-path bar of the finding, `CardDescription`, step descriptions, the footer.
- **Success, warning, destructive:** status only. They appear on the page solely through the `success`, `warning` and `destructive` `Badge` variants, at `/10` opacity for the fill (`/20` in dark) with the full token as text. `--success` has the same value as `--primary` in both modes.
- **Brand-field / brand-field-foreground:** the dark green behind the hero art and the white text on it. It is the only role with the same value in light and dark.
- **Border:** `* { @apply border-border outline-ring/50 }` sets the default border colour for every element, and `Separator` is `bg-border`.
- **Ring and input** (not in the front matter, because the code reads them only at partial opacity): `--ring` is `oklch(0.528 0.115 161.878)` light and `oklch(0.773 0.153 163.223)` dark, the same values as `--primary`, and every focus ring is `ring-ring/50`. `--input` is `oklch(0.928 0.008 157.082)` light and `oklch(1 0 0 / 15%)` dark; only the dark `outline` `Button` reads it (`dark:border-input dark:bg-input/30`).

**Dark mode.** `@custom-variant dark (&:is(.dark *))` makes `dark:` utilities apply under a `.dark` ancestor, and the `.dark` block in `globals.css` redefines every token above except `brand-field` and `brand-field-foreground`. Nothing in the app adds the `.dark` class, and there is no theme toggle or `prefers-color-scheme` rule, so the page always renders the light values. A component that reads theme tokens needs no extra `dark:` classes to be correct in dark mode; the `dark:` classes in `src/components/ui/` only retune opacities.

## Typography

One family: Outfit, loaded with `subsets: ["latin"]` and applied to `html` through `font-sans`. `font-heading` resolves to the same variable, so headings do not change family. Code uses Tailwind's default `font-mono` stack, which starts `ui-monospace, SFMono-Regular, Menlo`.

Two weights carry hierarchy: `font-semibold` (600) for the h1, card titles and the header wordmark, `font-medium` (500) for buttons, badges, check titles and step titles. Everything else is 400.

| Token        | Classes in the code                              | Used for                                                     |
| :----------- | :----------------------------------------------- | :----------------------------------------------------------- |
| `display`    | `text-5xl font-semibold tracking-tight` at `md:` | Hero h1 on wide screens                                      |
| `display-sm` | `text-4xl font-semibold tracking-tight`          | Hero h1 below `md`                                           |
| `lead`       | `text-lg`                                        | Hero paragraph                                               |
| `title`      | `text-lg font-semibold` on `CardTitle`           | Every card title on the page                                 |
| `heading-sm` | `font-medium` (`text-base`)                      | Check tile `h3`                                              |
| `body-md`    | `text-sm`                                        | Card body text (`Card` sets `text-sm`), descriptions, footer |
| `label-md`   | `text-sm font-medium`                            | `Button`, step titles                                        |
| `label-sm`   | `text-xs font-medium`                            | `Badge`                                                      |
| `code`       | `font-mono text-xs`                              | Code spans, the finding diff and suggestion                  |

The h1 also carries `text-balance`. `CardTitle` is `text-lg font-semibold leading-snug` in `card.tsx` itself, so no call site restyles it. There is no separate type-scale token file.

## Layout

Spacing uses Tailwind's scale on its default `--spacing: 0.25rem`; the repository defines no spacing tokens of its own besides the card's.

- **Page:** one column, `mx-auto w-full max-w-5xl` (64rem), side padding `px-4` then `md:px-6`, bottom `pb-10`.
- **Stack:** `main` separates sections with `space-y-4`. The header and footer use `py-4` and `py-6`.
- **Card:** padding comes from `--card-spacing`, `--spacing(4)` by default and `--spacing(3)` at `size="sm"`, used as both the vertical padding and the gap between header and content.
- **Grids and rows:** the check tiles are `grid gap-4 md:grid-cols-3`. Button groups are `flex flex-wrap gap-2`. Walkthrough rows stack (`flex-col gap-2`) and become a row at `sm:` (`sm:flex-row sm:gap-3`), with `Separator` between rows and `py-3` on each.
- **Hero:** text column `max-w-2xl px-6 py-16 md:px-10`, paragraph `mt-4`, actions `mt-8`.
- **Breakpoints:** Tailwind defaults, used at `sm`, `md` and `lg` only.

## Elevation & Depth

There are no shadows and no shadow tokens: no `shadow-*` class appears in `src/`. Depth comes from surface and outline:

- `Card` separates itself from `bg-background` with `bg-card` and `ring-1 ring-foreground/10`.
- Nested panels step down a surface instead of up: `bg-muted` tiles inside the card, `rounded-lg border` around the finding.
- The hero stacks its art under its text with `relative isolate` on the section and `absolute inset-0 -z-10` on the `<img>`.

## Shapes

Every radius comes from the `rounded-*` scale in `@theme inline`, derived from `--radius: 0.625rem` (`sm` is ×0.6, `md` ×0.8, `lg` ×1, `xl` ×1.4, `2xl` ×1.8, `3xl` ×2.2, `4xl` ×2.6). The front matter lists the steps the page uses, as computed values.

- `rounded-4xl`: `Badge`, a pill.
- `rounded-3xl`: the hero section.
- `rounded-xl`: `Card`.
- `rounded-lg`: `Button` (default and `lg` sizes), check tiles, the finding frame.
- `rounded-md`: the suggestion `<pre>`; `Button` at `sm` computes to it (`min(var(--radius-md),12px)`).
- `rounded`: inline code spans.

Icons are `lucide-react` line icons, sized by the component they sit in: `size-4` in a `Button`, `size-3.5` in a `sm` `Button`, `size-3` in a `Badge`. The `CrocMark` defaults to `size-6` and is filled with `currentColor`.

## Components

Import from `src/components/ui/<name>` by path; there is no barrel file.

**Button** (`button.tsx`). Variants: `default`, `outline`, `secondary`, `ghost`, `destructive`, `link`. Sizes: `xs` (`h-6`), `sm` (`h-7`), `default` (`h-8`), `lg` (`h-9`), and square `icon-xs`, `icon-sm`, `icon`, `icon-lg`. Every link that acts as a button is `<Button asChild><a …></a></Button>`. On the page:

- `lg` + `default` for the main call to action (`Follow the walkthrough`, `Get started`), with `secondary` (on the hero) or `outline` (in a card) beside it.
- `ghost` for the header's `GitHub` link.
- `outline` + `sm` for each walkthrough step's `#n` link.
- An external link carries a trailing `ArrowUpRight` marked `data-icon="inline-end"`, which tightens the right padding.

States: hover `bg-primary/80` (default), `bg-muted` (outline, ghost), a `color-mix` 5% toward foreground (secondary); pressed `active:translate-y-px`; focus `focus-visible:border-ring ring-3 ring-ring/50`; disabled `opacity-50 pointer-events-none`; invalid `aria-invalid` gives a destructive border and ring. There is no loading state.

**Badge** (`badge.tsx`). Variants: `default`, `secondary`, `success`, `warning`, `destructive`, `outline`, `ghost`, `link`. One size, `h-5 px-2 text-xs rounded-4xl`. The page wraps it in `OutcomeBadge` (`page.tsx`), the only mapping from outcome to badge:

| Outcome              | Label            | Variant       | Icon                        |
| :------------------- | :--------------- | :------------ | :-------------------------- |
| `setup` · `decision` | Setup · Decision | `secondary`   | `Settings2` · `NotebookPen` |
| `pass`               | Pass             | `success`     | `CircleCheck`               |
| `drift`              | Drift            | `warning`     | `CircleAlert`               |
| `violation`          | Violation        | `destructive` | `CircleX`                   |
| `command`            | Command          | `secondary`   | `MessageCircle`             |

Every status badge has a leading icon (`data-icon="inline-start"`) and a text label, so status never rests on colour alone.

**Card** (`card.tsx`). `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, `CardFooter`; sizes `default` and `sm`. Every boxed section below the hero is a `Card` with a `CardHeader` (title plus one-line description) and a `CardContent`.

**Separator** (`separator.tsx`). A 1px `bg-border` rule, decorative by default. It divides walkthrough rows.

**CrocMark** (`croc-mark.tsx`). The logo from `src/app/icon.svg` without its field, `aria-hidden`, coloured by the parent's text colour (`text-primary` in the header).

## Do's and Don'ts

- Do take every colour from a theme token utility (`bg-card`, `text-muted-foreground`, `text-destructive`); don't write a raw hex, `rgb()` or `oklch()` value, or a Tailwind palette colour such as `text-red-600`, outside `globals.css`.
- Do add a new colour role to `:root`, `.dark` and `@theme inline` in `globals.css` in the same change.
- Do keep `success`, `warning` and `destructive` for status; don't use them for decoration, and don't tint the `CrocMark` with them.
- Do show a status as a `Badge` through `OutcomeBadge`, with its lucide icon and its label; don't build a status pill from a `span`.
- Do use `Button` for every action, and `Button asChild` around an `<a>` for a link styled as a button; don't style a bare `<a>` or `<button>` as a button.
- Do wrap every boxed section in `Card` with `CardHeader` and `CardContent`; don't draw a box with `border rounded-xl` on a `div` at section level.
- Do change a shadcn component's look through a variant in its own file under `src/components/ui/`; don't override its colours or radius with classes at the call site.
- Do take radii from the `rounded-*` scale (`rounded-lg`, `rounded-xl`); don't write `rounded-[…]` outside `src/components/ui/`.
- Do take spacing from Tailwind's scale (`p-4`, `gap-2`, `space-y-4`); don't write `p-[…]`, `gap-[…]` or any arbitrary spacing value.
- Do separate a surface with `ring-1 ring-foreground/10` or a step to `bg-muted`; don't add `shadow-*`.
- Do give every interactive element a visible hover and a `focus-visible` ring from `--ring`; the base layer's `outline-ring/50` must stay.
- Do give every `<img>` an `alt`, empty (`alt=""`) only when the image is decorative, as with the hero art.
- Do give a link or button whose text alone is unclear an `aria-label` (the step links read `Pull request #3`, not `#3`); don't ship an icon-only `Button` without one.
- Do mark decorative SVGs `aria-hidden`, as `CrocMark` is.
- Do prefix a plain `<img src>` or `srcSet` with `process.env.NEXT_PUBLIC_BASE_PATH`; Next does not do it outside its own components.
- Do write copy in sentence case (`Follow the walkthrough`, `See pricing`); don't use exclamation marks or em dashes. The quoted Crocotaste finding in `src/data/showcase.ts` is the one exception, reproduced verbatim.
- Do spell out "pull request" in copy, write "colour" with British spelling, and use the verdict words `Pass`, `Drift` and `Violation` as they appear in the badges.
- Do keep page copy in `src/data/showcase.ts`, not inline in `page.tsx`.
- Do name files in kebab-case with named exports, and import components by path; don't add barrel files.
- Don't add anything that needs a request (route handlers, server actions, `cookies()`, `headers()`); the site is a static export.

## Decisions

_Team decisions are recorded here as undated entries; each one is a rule, its reason, and its source._

### Brand-field panels are the page's calls to action

Brand-field panels are the page's calls to action: the hero opens the page and the closing banner ends it, full width on bg-brand-field with rounded-3xl. Content sections stay in a Card. Source: DESIGN.md:330.
