// The page's content, kept out of the markup so the page reads as layout.

export type Outcome = "setup" | "pass" | "drift" | "violation" | "command";

export type Step = {
  title: string;
  shows: string;
  outcome: Outcome;
  // Issues and pull requests share one counter: the onboarding issue is #1,
  // the DESIGN.md pull request #2, and each example follows in this order.
  number: number;
  issue?: true;
};

export const REPO_URL = "https://github.com/crocotaste/crocotaste-examples";

// Tagged so visits from this page read as this page in the site's analytics.
export function siteUrl(path = "/"): string {
  return `https://www.crocotaste.com${path}?utm_source=crocotaste-examples&utm_medium=page`;
}

export const CHECKS = [
  {
    title: "Your tokens",
    body: "Every colour, radius and size in a diff is read against the shadcn theme in globals.css and the tokens in DESIGN.md.",
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

export const FINDING = {
  path: "src/components/upload-status.tsx",
  line: 12,
  removed: '<p className="text-sm text-destructive">Upload failed</p>',
  added: '<p className="text-sm text-red-600">Upload failed</p>',
  message:
    "`text-red-600` is `--color-destructive` — use the token (src/app/globals.css:24)",
  suggestion: '<p className="text-sm text-destructive">Upload failed</p>',
};

export const VERDICT_NOTE = {
  lead: "Violations",
  rest: " turn the check neutral and drift leaves it green. Neither one blocks a merge.",
};

// In the order they were opened, so the list reads as a walkthrough.
export const STEPS: Step[] = [
  {
    title: "The onboarding issue",
    shows:
      "Crocotaste opens one issue with instructions for your coding agent.",
    outcome: "setup",
    number: 1,
    issue: true,
  },
  {
    title: "Adding DESIGN.md",
    shows: "The agent's pull request, and what Crocotaste read once it merged.",
    outcome: "setup",
    number: 2,
  },
  {
    title: "A Tailwind colour where a theme token exists",
    shows: "text-red-600 instead of text-destructive, with a one-click fix.",
    outcome: "violation",
    number: 3,
  },
  {
    title: "A hex that several roles share",
    shows: "Every token it could be, and no guess about which one.",
    outcome: "violation",
    number: 4,
  },
  {
    title: "A spacing value just off the scale",
    shows: "An arbitrary padding a few pixels from a spacing token.",
    outcome: "drift",
    number: 5,
  },
  {
    title: "A font size outside the type scale",
    shows: "A one-off text size next to the nearest type token.",
    outcome: "drift",
    number: 6,
  },
  {
    title: "A token that does not exist",
    shows: "A misspelled var() that would silently render nothing.",
    outcome: "violation",
    number: 7,
  },
  {
    title: "A button built from scratch",
    shows: "Markup that rebuilds components/ui/button.tsx, cited by path.",
    outcome: "violation",
    number: 8,
  },
  {
    title: "A change against a recorded decision",
    shows: "A finding that cites the line in DESIGN.md it breaks.",
    outcome: "violation",
    number: 9,
  },
  {
    title: "Dismissing a finding",
    shows: "An @crocotaste ignore reply that drafts the decision to record.",
    outcome: "command",
    number: 10,
  },
  {
    title: "A clean pull request",
    shows: "Nothing off-system, so the check goes green and approves.",
    outcome: "pass",
    number: 11,
  },
];

export function stepUrl(step: Step): string {
  return `${REPO_URL}/${step.issue ? "issues" : "pull"}/${step.number}`;
}
