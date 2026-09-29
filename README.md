# Crocotaste examples

A small Next.js app on shadcn/ui and Tailwind, reviewed by [Crocotaste](https://www.crocotaste.com/?utm_source=crocotaste-examples&utm_medium=readme) on every pull request. Each pull request here shows one thing Crocotaste catches, and everything on it (the summary, the inline findings, the check, the replies) is exactly what Crocotaste posted. Nothing was edited after the fact.

**See the app and the walkthrough live: [crocotaste.github.io/crocotaste-examples](https://crocotaste.github.io/crocotaste-examples/)**

## What Crocotaste is

AI design reviews. Crocotaste checks every UI change against your design system: your tokens, your components, and your team's decisions. It's a GitHub App: there's no CI step to write and no package to add.

It reads three things from the repository it reviews:

- **Your tokens.** The colours, radii and sizes declared in your stylesheets (here, the shadcn theme in [`src/app/globals.css`](src/app/globals.css)) and in DESIGN.md.
- **Your components.** What's in `components/` and `ui/` (here, [`src/components/ui/`](src/components/ui)), so a hand-rolled button can be pointed at the `Button` it should have used.
- **Your team's decisions.** The rules in [DESIGN.md](https://www.crocotaste.com/design-md?utm_source=crocotaste-examples&utm_medium=readme), plus the design and UI rules your coding agents already follow in `CLAUDE.md`, `AGENTS.md` or Cursor rules.

Every finding cites the file and line it comes from. A finding with no source in your repository is deleted before it reaches the pull request.

## How to read this repository

Follow the walkthrough below in order, and on each pull request look at four places:

1. **The summary comment.** The first comment on the pull request: what was checked, what was found, and one collapsed prompt that hands every finding to your coding agent at once.
2. **The inline findings.** Under Files changed, on the exact line. Each one names the value, the token, then the source, and most carry a suggestion you can commit in one click.
3. **The check.** At the bottom of the pull request, named Crocotaste. Green means the change is on-system. Neutral means there's something to look at. It's never red, and it never blocks a merge.
4. **The review.** A clean pull request gets an approving review. Findings are posted as a comment review, never as a request for changes.

### The walkthrough

| Step                                         | What to look for                                                                    | Link                                                             |
| -------------------------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| The onboarding issue                         | One issue with instructions for your coding agent to write DESIGN.md                | [#1](https://github.com/crocotaste/crocotaste-examples/issues/1) |
| Adding DESIGN.md                             | The agent's pull request, and the note on what Crocotaste read once it merged       | [#2](https://github.com/crocotaste/crocotaste-examples/pull/2)   |
| A Tailwind colour where a theme token exists | `text-red-600` flagged as `--color-destructive`, with the one-click fix             | [#3](https://github.com/crocotaste/crocotaste-examples/pull/3)   |
| A hex that several roles share               | A white that is `--card`, `--popover` and more, named with all of them and no guess | [#4](https://github.com/crocotaste/crocotaste-examples/pull/4)   |
| A spacing value just off the scale           | An arbitrary padding a few pixels from a spacing token, reported as drift           | [#5](https://github.com/crocotaste/crocotaste-examples/pull/5)   |
| A font size outside the type scale           | A one-off text size next to the nearest type token                                  | [#6](https://github.com/crocotaste/crocotaste-examples/pull/6)   |
| A token that does not exist                  | A misspelled `var()` caught before it renders nothing                               | [#7](https://github.com/crocotaste/crocotaste-examples/pull/7)   |
| A button built from scratch                  | Markup that rebuilds `Button`, cited by the path of `button.tsx`                    | [#8](https://github.com/crocotaste/crocotaste-examples/pull/8)   |
| A change against a recorded decision         | A finding that cites the line in DESIGN.md it breaks                                | [#9](https://github.com/crocotaste/crocotaste-examples/pull/9)   |
| Dismissing a finding                         | An `@crocotaste ignore` reply that drafts the decision to record                    | [#10](https://github.com/crocotaste/crocotaste-examples/pull/10) |
| A clean pull request                         | A green check and an approval                                                       | [#11](https://github.com/crocotaste/crocotaste-examples/pull/11) |

DESIGN.md is merged, because every later review reads it. The example pull requests from #3 on stay open, so each review sits beside the code it read and `main` stays on-system.

## What a finding looks like

```text
Violation · `text-red-600` is `--color-destructive` — use the token (src/app/globals.css:24)
```

Below the message: the source line, a one-line suggestion, and a collapsed **Prompt for your coding agent** you can paste into Cursor, Claude Code or Codex.

There are two verdicts:

- **Violation.** A value that is exactly one of your tokens written raw, a component of yours rebuilt by hand, or a written rule broken. The check turns neutral.
- **Drift.** A near miss: a colour close to a token, a spacing value just off the scale. The check stays green.

## Talking to it

Two commands, typed as a comment on a pull request by anyone who can push to the repository:

- `@crocotaste review` runs the review again on the latest commit.
- `@crocotaste ignore <reason>`, as a reply to one of its inline findings, dismisses that finding for the pull request and drafts a `## Decisions` entry for your DESIGN.md, so the exception lives in your repository where the team can read it.

## What it never does

Crocotaste never writes to your repository. It reads your code and your design system, and it comments, posts a check and opens one onboarding issue if you ask it to. It never commits, never opens a pull request and never edits a file. The full list of permissions is in the [docs](https://www.crocotaste.com/docs/permissions?utm_source=crocotaste-examples&utm_medium=readme).

## Try it on your own repository

1. Install the GitHub App from [crocotaste.com](https://www.crocotaste.com/?utm_source=crocotaste-examples&utm_medium=readme) on the repositories you pick.
2. Let it open the onboarding issue, and hand the instructions in it to your coding agent. The agent opens a pull request that adds your DESIGN.md.
3. Open a pull request that touches UI.

Your first three reviews are free. [Get started](https://www.crocotaste.com/docs?utm_source=crocotaste-examples&utm_medium=readme) has the details, and [pricing](https://www.crocotaste.com/pricing?utm_source=crocotaste-examples&utm_medium=readme) has the plans.

## Run this app

```bash
npm install
npm run dev
```

Then open [localhost:3000](http://localhost:3000). Other scripts: `npm run build`, `npm run typecheck`, `npm run lint`, `npm run format`.

The site is a static export. Every push to `main` builds it and publishes it to GitHub Pages through [`.github/workflows/pages.yml`](.github/workflows/pages.yml).

The design system lives in three places:

- `src/app/globals.css`: the shadcn theme, light and dark
- `src/components/ui/`: the shadcn components (`Button`, `Badge`, `Card`, `Separator`)
- `CLAUDE.md`: the rules this project's coding agents follow, which Crocotaste reads as conventions

Want to see it on your own changes? Fork this repository, install Crocotaste on the fork, and open a pull request there. The croc will find something to snap at, or approve it.
