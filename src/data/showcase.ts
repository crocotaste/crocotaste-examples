// The page's content, kept out of the markup so the page reads as layout.
// Everything attributed to crocotaste below is quoted verbatim from the issue
// and pull requests it links to, trimmed to the lines that matter, so its
// punctuation (dashes included) is Crocotaste's, not this page's.

export type Outcome =
  "setup" | "pass" | "drift" | "violation" | "command" | "decision";

export type StageId = "setup" | "catches" | "decisions" | "clean";

export type DiffLine = { sign: "+" | "-" | " "; text: string };

export type Diff = {
  path: string;
  lines: DiffLine[];
  // Prose (DESIGN.md) wraps; code scrolls inside its block, the way GitHub shows it.
  wrap?: true;
};

export type Post =
  | {
      kind: "finding";
      verdict: "violation" | "drift";
      message: string;
      source: string;
      suggestion?: string;
    }
  | {
      kind: "comment";
      author: string;
      action: string;
      text: string;
      block?: { label?: string; text: string };
    };

export type Step = {
  stage: StageId;
  title: string;
  shows: string;
  outcome: Outcome;
  // Issues and pull requests share one counter: the onboarding issue is #1,
  // the DESIGN.md pull request #2, and each example follows in this order.
  number: number;
  issue?: true;
  diff?: Diff;
  posts: Post[];
};

export const REPO_URL = "https://github.com/crocotaste/crocotaste-examples";

// Tagged so visits from this page read as this page in the site's analytics.
export function siteUrl(path = "/"): string {
  return `https://www.crocotaste.com${path}?utm_source=crocotaste-examples&utm_medium=page`;
}

export const HERO = {
  lead: "Watch a design review happen on",
  highlight: "real pull requests",
  body: "A small Next.js app on shadcn/ui and Tailwind. Every step below shows the change and exactly what Crocotaste posted on it.",
  primary: "Follow the walkthrough",
  secondary: "Visit crocotaste.com",
};

export const CHECKS_SECTION = {
  title: "What gets checked",
  description: "Everything is read from this repository, nothing from ours",
};

export const CHECKS = [
  {
    title: "Your tokens",
    body: "Every color, radius and size in a diff is read against the shadcn theme in globals.css and the tokens in DESIGN.md.",
  },
  {
    title: "Your components",
    body: "Markup that rebuilds a Button or a Card from components/ui gets flagged, citing the file it should have used.",
  },
  {
    title: "Your team's decisions",
    body: "Rules and decisions in DESIGN.md are read at the base of each pull request and cited by file and line.",
  },
] as const;

export const WALKTHROUGH = {
  title: "The walkthrough",
  description:
    "From install to a green check. Each step quotes what Crocotaste posted, unedited.",
  link: "See it on GitHub",
  tabsLabel: "Walkthrough stages",
};

// The labels around each quoted post, in GitHub's own words where it has them.
export const EVIDENCE = {
  bot: "crocotaste",
  onTheLine: "commented on the line",
  source: "Source:",
  suggestion: "Suggested change",
  added: "Added",
  removed: "Removed",
  unchanged: "Unchanged",
};

export const STAGES: { id: StageId; label: string; description: string }[] = [
  {
    id: "setup",
    label: "Setup",
    description:
      "Install the app, and your coding agent writes the DESIGN.md every review reads.",
  },
  {
    id: "catches",
    label: "Catches",
    description:
      "Off-system UI, flagged on the line that changed and cited to the file it breaks.",
  },
  {
    id: "decisions",
    label: "Decisions",
    description:
      "Dismiss a finding with a reason, record it, and every later review holds to it.",
  },
  {
    id: "clean",
    label: "Clean",
    description:
      "An on-system change gets a green check and an approval, and nothing else.",
  },
];

// The tab the walkthrough opens on: what Crocotaste catches is why anyone is here.
export const FIRST_STAGE: StageId = "catches";

export const TRY_IT = {
  title: "Try it on your own repository",
  description: "Install the GitHub App, and your first three reviews are free",
  primary: "Get started",
  secondary: "See pricing",
};

// In the order they were opened, so the list reads as a walkthrough.
export const STEPS: Step[] = [
  {
    stage: "setup",
    title: "The onboarding issue",
    shows:
      "Crocotaste opens one issue, with instructions your coding agent can follow.",
    outcome: "setup",
    number: 1,
    issue: true,
    posts: [
      {
        kind: "comment",
        author: "crocotaste",
        action: "opened Generate your DESIGN.md",
        text: "Crocotaste reviews every UI pull request here against your design system: your tokens, your components, your team's decisions. The sharpest reviews come from a DESIGN.md, and the same file is what makes your coding agent write on-system UI in the first place.",
        block: {
          label: "Instructions for your coding agent",
          text: "You are working in the repository crocotaste/crocotaste-examples. Write a DESIGN.md at the repository root that describes this codebase's design system as it actually is, in the Google Labs DESIGN.md format (https://github.com/google-labs-code/design.md).\n\nRead the code first, and take every value from it:",
        },
      },
    ],
  },
  {
    stage: "setup",
    title: "Adding DESIGN.md",
    shows: "The agent's pull request, and what Crocotaste read once it merged.",
    outcome: "setup",
    number: 2,
    diff: {
      path: "DESIGN.md",
      wrap: true,
      lines: [
        { sign: "+", text: "---" },
        { sign: "+", text: "version: alpha" },
        { sign: "+", text: "name: Crocotaste examples" },
        {
          sign: "+",
          text: "description: A single-page Next.js static export on shadcn/ui (radix-nova, neutral base) and Tailwind CSS 4, themed green with a dark brand field.",
        },
      ],
    },
    posts: [
      {
        kind: "comment",
        author: "crocotaste",
        action: "commented",
        text: "Parsed DESIGN.md · 51 tokens · 26 components · 48 conventions · 0 decisions\nEvery review of this repository now cites it.",
      },
    ],
  },
  {
    stage: "catches",
    title: "A Tailwind color where a theme token exists",
    shows: "text-red-600 is the theme's destructive red, written raw.",
    outcome: "violation",
    number: 3,
    diff: {
      path: "src/app/page.tsx:183",
      lines: [
        {
          sign: "+",
          text: '<p className="mt-4 text-sm text-muted-foreground">',
        },
        {
          sign: "+",
          text: '  <span className="font-medium text-red-600">{VERDICT_NOTE.lead}</span>',
        },
      ],
    },
    posts: [
      {
        kind: "finding",
        verdict: "violation",
        message:
          "`text-red-600` is `--color-destructive` — use the token (src/app/globals.css:24)",
        source: "src/app/globals.css:24",
        suggestion:
          '<span className="font-medium text-destructive">{VERDICT_NOTE.lead}</span>',
      },
    ],
  },
  {
    stage: "catches",
    title: "A hex that several roles share",
    shows: "White is six tokens here, so it names them all and guesses none.",
    outcome: "violation",
    number: 4,
    diff: {
      path: "src/app/page.tsx:122",
      lines: [
        { sign: " ", text: "</div>" },
        {
          sign: "+",
          text: '<p className="mt-6 text-sm text-[#ffffff]">{HERO_NOTE}</p>',
        },
      ],
    },
    posts: [
      {
        kind: "finding",
        verdict: "violation",
        message:
          "`#ffffff` is `--color-card`, `--color-popover`, `--color-primary-foreground`, `--color-brand-field-foreground` and 2 more in your palette — use the one for this role (src/app/globals.css:12)",
        source: "src/app/globals.css:12",
      },
    ],
  },
  {
    stage: "catches",
    title: "A spacing value just off the scale",
    shows: "A near miss is drift: it is named, and the check stays green.",
    outcome: "drift",
    number: 5,
    diff: {
      path: "src/app/page.tsx:139",
      lines: [
        {
          sign: "-",
          text: '<div key={check.title} className="rounded-lg bg-muted p-4">',
        },
        {
          sign: "+",
          text: '<div key={check.title} className="rounded-lg bg-muted p-[18px]">',
        },
      ],
    },
    posts: [
      {
        kind: "finding",
        verdict: "drift",
        message:
          "`18px` isn't on your spacing scale — nearest `spacing.card` is 16px (DESIGN.md:92)",
        source: "DESIGN.md:92",
      },
    ],
  },
  {
    stage: "catches",
    title: "A radius off the scale",
    shows: "The nearest step on the radius scale, as a one-click fix.",
    outcome: "drift",
    number: 6,
    diff: {
      path: "src/app/page.tsx:161",
      lines: [
        {
          sign: "-",
          text: '<div className="overflow-hidden rounded-lg border">',
        },
        {
          sign: "+",
          text: '<div className="overflow-hidden rounded-[12px] border">',
        },
      ],
    },
    posts: [
      {
        kind: "finding",
        verdict: "drift",
        message:
          "`12px` isn't on your radius scale — nearest `--radius-lg` is 10px (src/app/globals.css:47)",
        source: "src/app/globals.css:47",
        suggestion: '<div className="overflow-hidden rounded-lg border">',
      },
    ],
  },
  {
    stage: "catches",
    title: "A token that does not exist",
    shows: "A misspelled var() that would silently render nothing.",
    outcome: "violation",
    number: 7,
    diff: {
      path: "src/app/globals.css:142",
      lines: [
        { sign: "+", text: "::selection {" },
        { sign: "+", text: "  background-color: var(--primay);" },
      ],
    },
    posts: [
      {
        kind: "finding",
        verdict: "violation",
        message:
          "`--primay` isn't defined in your stylesheets — nearest is `--primary` (src/app/globals.css:62)",
        source: "src/app/globals.css:62",
        suggestion: "  background-color: var(--primary);",
      },
    ],
  },
  {
    stage: "catches",
    title: "A button built from scratch",
    shows:
      "Every class is on-system, so the AI review catches it, citing the rule.",
    outcome: "violation",
    number: 8,
    diff: {
      path: "src/app/page.tsx:251",
      lines: [
        { sign: "+", text: "<a" },
        { sign: "+", text: "  href={siteUrl(STANDARD_LINK.path)}" },
        {
          sign: "+",
          text: '  className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 text-sm font-medium hover:bg-muted"',
        },
        { sign: "+", text: ">" },
      ],
    },
    posts: [
      {
        kind: "finding",
        verdict: "violation",
        message:
          "A bare `<a>` is styled by hand as a button (`border border-border bg-background`, `rounded-lg`, `h-9`, `hover:bg-muted`) where `Button` with the `outline` variant exists. DESIGN.md says to use `Button asChild` around an `<a>` for a link styled as a button.",
        source: "DESIGN.md:329",
      },
    ],
  },
  {
    stage: "decisions",
    title: "Dismissing a finding",
    shows:
      "A reply with @crocotaste ignore dismisses it and drafts the decision to record.",
    outcome: "command",
    number: 9,
    diff: {
      path: "src/app/page.tsx:229",
      lines: [
        { sign: "-", text: "<Card>" },
        {
          sign: "+",
          text: '<section className="rounded-3xl bg-brand-field px-6 py-12 md:px-10">',
        },
      ],
    },
    posts: [
      {
        kind: "finding",
        verdict: "violation",
        message:
          "The section is a hand-drawn box (`rounded-3xl bg-brand-field`) where `Card` with `CardHeader` and `CardContent` exists. The removed lines used `Card`. `rounded-3xl` and `brand-field` are the hero's look, and this is not the hero. The rule is DESIGN.md:330.",
        source: "DESIGN.md:330",
      },
      {
        kind: "comment",
        author: "mfbz",
        action: "replied",
        text: "@crocotaste ignore Brand-field panels are the page's calls to action: the hero opens the page and the closing banner ends it, full width on bg-brand-field with rounded-3xl. Content sections stay in a Card.",
      },
      {
        kind: "comment",
        author: "crocotaste",
        action: "replied",
        text: "Dismissed on this pull request. To make it hold everywhere, add this to `DESIGN.md` under `## Decisions`:",
        block: {
          text: "### a hand-drawn box\n\nBrand-field panels are the page's calls to action: the hero opens the page and the closing banner ends it, full width on bg-brand-field with rounded-3xl. Content sections stay in a Card. Source: DESIGN.md:330.",
        },
      },
    ],
  },
  {
    stage: "decisions",
    title: "Recording the decision",
    shows:
      "The drafted block merged into DESIGN.md, where every review reads it.",
    outcome: "decision",
    number: 10,
    diff: {
      path: "DESIGN.md",
      wrap: true,
      lines: [
        { sign: " ", text: "## Decisions" },
        {
          sign: "+",
          text: "### Brand-field panels are the page's calls to action",
        },
        {
          sign: "+",
          text: "Brand-field panels are the page's calls to action: the hero opens the page and the closing banner ends it, full width on bg-brand-field with rounded-3xl. Content sections stay in a Card. Source: DESIGN.md:330.",
        },
      ],
    },
    posts: [
      {
        kind: "comment",
        author: "crocotaste",
        action: "commented",
        text: "Parsed DESIGN.md · 51 tokens · 26 components · 48 conventions · 1 decisions\nEvery review of this repository now cites it.",
      },
    ],
  },
  {
    stage: "decisions",
    title: "Breaking the recorded decision",
    shows:
      "No general rule forbids this panel. The decision does, and the finding cites it.",
    outcome: "violation",
    number: 11,
    diff: {
      path: "src/app/page.tsx:189",
      lines: [
        { sign: "+", text: "function MidCta() {" },
        { sign: "+", text: "  return (" },
        {
          sign: "+",
          text: '    <section className="mx-auto max-w-xl rounded-xl bg-brand-field px-6 py-8 text-center">',
        },
      ],
    },
    posts: [
      {
        kind: "finding",
        verdict: "violation",
        message:
          "This mid-page section uses bg-brand-field with max-w-xl and rounded-xl. The decision at DESIGN.md:350 limits brand-field panels to the hero and the closing banner, full width with rounded-3xl. Content sections stay in a Card.",
        source: "DESIGN.md:350",
      },
    ],
  },
  {
    stage: "clean",
    title: "A clean pull request",
    shows: "Nothing off-system, so the check goes green and it approves.",
    outcome: "pass",
    number: 12,
    diff: {
      path: "src/app/page.tsx",
      lines: [
        { sign: "-", text: "<CardDescription>" },
        {
          sign: "-",
          text: "  From install to a green check, one pull request at a time",
        },
        { sign: "-", text: "</CardDescription>" },
        {
          sign: "+",
          text: "<CardDescription>{WALKTHROUGH_LEDE}</CardDescription>",
        },
      ],
    },
    posts: [
      {
        kind: "comment",
        author: "crocotaste",
        action: "check passed",
        text: "On-system · 1 file · 125 tokens · 30 components · 1 decisions · 0 violations\nEvery UI change is on-system.",
      },
      {
        kind: "comment",
        author: "crocotaste",
        action: "approved these changes",
        text: "Nothing to snap at.",
      },
    ],
  },
];

export function stepUrl(step: Step): string {
  return `${REPO_URL}/${step.issue ? "issues" : "pull"}/${step.number}`;
}
