import {
  ArrowUpRight,
  CircleAlert,
  CircleCheck,
  CircleX,
  MessageCircle,
  NotebookPen,
  Settings2,
} from "lucide-react";

import { CrocMark } from "@/components/croc-mark";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  CHECKS,
  CHECKS_SECTION,
  EVIDENCE,
  FIRST_STAGE,
  HERO,
  REPO_URL,
  siteUrl,
  STAGES,
  STEPS,
  stepUrl,
  TRY_IT,
  WALKTHROUGH,
  type Diff,
  type Outcome,
  type Post,
  type Step,
} from "@/data/showcase";

const OUTCOME = {
  setup: { label: "Setup", variant: "secondary", Icon: Settings2 },
  pass: { label: "Pass", variant: "success", Icon: CircleCheck },
  drift: { label: "Drift", variant: "warning", Icon: CircleAlert },
  violation: { label: "Violation", variant: "destructive", Icon: CircleX },
  command: { label: "Command", variant: "secondary", Icon: MessageCircle },
  decision: { label: "Decision", variant: "secondary", Icon: NotebookPen },
} as const;

const SIGN = {
  "+": { label: EVIDENCE.added, className: "" },
  "-": { label: EVIDENCE.removed, className: "opacity-70" },
  " ": { label: EVIDENCE.unchanged, className: "opacity-70" },
} as const;

function OutcomeBadge({ outcome }: { outcome: Outcome }) {
  const { label, variant, Icon } = OUTCOME[outcome];
  return (
    <Badge variant={variant}>
      <Icon data-icon="inline-start" />
      {label}
    </Badge>
  );
}

// Backticks in a message become code spans, the way GitHub renders them.
function MessageText({ text }: { text: string }) {
  return (
    <>
      {text.split("`").map((part, i) =>
        i % 2 === 1 ? (
          <code key={i} className="rounded bg-muted px-1 font-mono text-xs">
            {part}
          </code>
        ) : (
          part
        ),
      )}
    </>
  );
}

function Message({ text }: { text: string }) {
  return (
    <p className="break-words whitespace-pre-line">
      <MessageText text={text} />
    </p>
  );
}

// Code scrolls inside its own block and prose wraps, so nothing ever pushes
// the page sideways on a narrow screen.
function CodeBlock({ text, wrap }: { text: string; wrap?: boolean }) {
  return (
    <pre
      className={
        wrap
          ? "rounded-md bg-muted px-4 py-2 font-mono text-xs break-words whitespace-pre-wrap"
          : "overflow-x-auto rounded-md bg-muted px-4 py-2 font-mono text-xs"
      }
    >
      {text}
    </pre>
  );
}

function DiffView({ diff }: { diff: Diff }) {
  return (
    <>
      <div className="border-b bg-muted px-4 py-2 font-mono text-xs break-all text-muted-foreground">
        {diff.path}
      </div>
      <pre
        className={
          diff.wrap
            ? "bg-foreground px-4 py-2 font-mono text-xs text-background"
            : "overflow-x-auto bg-foreground px-4 py-2 font-mono text-xs text-background"
        }
      >
        {diff.lines.map((line, i) => (
          <span key={i} className={cn("flex gap-2", SIGN[line.sign].className)}>
            <span aria-hidden="true">{line.sign}</span>
            <span className="sr-only">{SIGN[line.sign].label}: </span>
            <span
              className={
                diff.wrap ? "min-w-0 break-words whitespace-pre-wrap" : ""
              }
            >
              {line.text}
            </span>
          </span>
        ))}
      </pre>
    </>
  );
}

function PostView({ post }: { post: Post }) {
  if (post.kind === "finding") {
    return (
      <div className="space-y-2 p-4">
        <p className="text-xs text-muted-foreground">
          <span className="font-medium text-foreground">{EVIDENCE.bot}</span>{" "}
          {EVIDENCE.onTheLine}
        </p>
        <p className="break-words">
          <OutcomeBadge outcome={post.verdict} />{" "}
          <MessageText text={post.message} />
        </p>
        <p className="text-xs text-muted-foreground">
          {EVIDENCE.source}{" "}
          <code className="font-mono break-all">{post.source}</code>
        </p>
        {post.suggestion ? (
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground">
              {EVIDENCE.suggestion}
            </p>
            <CodeBlock text={post.suggestion} />
          </div>
        ) : null}
      </div>
    );
  }
  return (
    <div className="space-y-2 p-4">
      <p className="text-xs text-muted-foreground">
        <span className="font-medium text-foreground">{post.author}</span>{" "}
        {post.action}
      </p>
      <Message text={post.text} />
      {post.block ? (
        <div className="space-y-1">
          {post.block.label ? (
            <p className="text-xs font-medium text-muted-foreground">
              {post.block.label}
            </p>
          ) : null}
          <CodeBlock text={post.block.text} wrap />
        </div>
      ) : null}
    </div>
  );
}

function Evidence({ step }: { step: Step }) {
  return (
    <div className="min-w-0 overflow-hidden rounded-lg border">
      {step.diff ? <DiffView diff={step.diff} /> : null}
      {step.posts.map((post, i) => (
        <div key={i}>
          {i > 0 ? <Separator /> : null}
          <PostView post={post} />
        </div>
      ))}
    </div>
  );
}

// The GitHub link sits under the title from `sm:` and after the evidence
// below it, where it would otherwise split the title from what it shows.
function StepLink({ step }: { step: Step }) {
  const kind = step.issue ? "Issue" : "Pull request";
  return (
    <Button asChild variant="outline" size="sm">
      <a
        href={stepUrl(step)}
        aria-label={`${WALKTHROUGH.link}: ${kind} #${step.number}`}
      >
        {WALKTHROUGH.link} #{step.number}
        <ArrowUpRight data-icon="inline-end" />
      </a>
    </Button>
  );
}

// Stacked on phones, a row from `sm:` (DESIGN.md's walkthrough row): the text
// takes a third, the evidence the rest.
function StepItem({ step }: { step: Step }) {
  return (
    <article className="flex flex-col gap-2 py-3 sm:flex-row sm:gap-3">
      <div className="flex min-w-0 flex-col items-start gap-2 sm:w-1/3">
        <OutcomeBadge outcome={step.outcome} />
        <h3 className="font-medium">{step.title}</h3>
        <p className="text-sm text-muted-foreground">{step.shows}</p>
        <div className="hidden sm:block">
          <StepLink step={step} />
        </div>
      </div>
      <div className="min-w-0 sm:flex-1">
        <Evidence step={step} />
      </div>
      <div className="sm:hidden">
        <StepLink step={step} />
      </div>
    </article>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between gap-4 py-4">
      <a
        href={siteUrl()}
        className="inline-flex items-center gap-1 font-semibold tracking-tight"
      >
        <CrocMark className="text-primary" />
        crocotaste
        <span className="font-normal text-muted-foreground">examples</span>
      </a>
      <Button asChild variant="ghost">
        <a href={REPO_URL}>
          GitHub
          <ArrowUpRight data-icon="inline-end" />
        </a>
      </Button>
    </header>
  );
}

// Type only, on the page's own background: the walkthrough is the picture.
// The tally under the actions is counted from STEPS, so it never drifts.
function Hero() {
  const pullRequests = STEPS.filter((step) => !step.issue).length;
  const findings = STEPS.filter(
    (step) => step.outcome === "violation" || step.outcome === "drift",
  ).length;
  return (
    <section className="px-6 pt-12 pb-8 md:px-10 md:pt-20 md:pb-12">
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-5xl">
        {HERO.lead} <span className="text-primary">{HERO.highlight}</span>
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        {HERO.body}
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        <Button asChild size="lg">
          <a href="#walkthrough">{HERO.primary}</a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href={siteUrl()}>
            {HERO.secondary}
            <ArrowUpRight data-icon="inline-end" />
          </a>
        </Button>
      </div>
      <p className="mt-10 font-mono text-xs text-muted-foreground">
        {STEPS.length} steps · {pullRequests} pull requests · {findings} reviews
        with findings
      </p>
    </section>
  );
}

function Checks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2>{CHECKS_SECTION.title}</h2>
        </CardTitle>
        <CardDescription>{CHECKS_SECTION.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-3">
        {CHECKS.map((check) => (
          <div key={check.title} className="rounded-lg bg-muted p-4">
            <h3 className="font-medium">{check.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{check.body}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// One tab per stage, so a phone scrolls through one stage at a time.
function Walkthrough() {
  return (
    <Card id="walkthrough" className="scroll-mt-4">
      <CardHeader>
        <CardTitle>
          <h2>{WALKTHROUGH.title}</h2>
        </CardTitle>
        <CardDescription>{WALKTHROUGH.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={FIRST_STAGE}>
          <TabsList aria-label={WALKTHROUGH.tabsLabel}>
            {STAGES.map((stage) => (
              <TabsTrigger key={stage.id} value={stage.id}>
                {stage.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {STAGES.map((stage) => (
            <TabsContent key={stage.id} value={stage.id}>
              <p className="text-muted-foreground">{stage.description}</p>
              <ol>
                {STEPS.filter((step) => step.stage === stage.id).map(
                  (step, i) => (
                    <li key={step.number}>
                      {i > 0 ? <Separator /> : null}
                      <StepItem step={step} />
                    </li>
                  ),
                )}
              </ol>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}

function TryIt() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2>{TRY_IT.title}</h2>
        </CardTitle>
        <CardDescription>{TRY_IT.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        <Button asChild size="lg">
          <a href={siteUrl("/docs")}>
            {TRY_IT.primary}
            <ArrowUpRight data-icon="inline-end" />
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href={siteUrl("/pricing")}>
            {TRY_IT.secondary}
            <ArrowUpRight data-icon="inline-end" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-10 md:px-6">
      <Header />
      <main className="space-y-4">
        <Hero />
        <Checks />
        <Walkthrough />
        <TryIt />
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        An example repository for{" "}
        <a
          href={siteUrl()}
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          Crocotaste
        </a>
        . Nothing to snap at here, until a pull request opens.
      </footer>
    </div>
  );
}
