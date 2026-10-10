import { ArrowUpRight } from "lucide-react";

import { CrocMark } from "@/components/croc-mark";
import {
  CodeBlock,
  DiffView,
  OutcomeBadge,
  Message,
} from "@/components/evidence";
import { ExampleExplorer } from "@/components/example-explorer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ANATOMY,
  EVIDENCE,
  HERO,
  HOW_IT_WORKS,
  REPO_URL,
  siteUrl,
  STEPS,
  TRY_IT,
} from "@/data/showcase";

// The numbers that tie the anatomy's finding to its legend. Decorative: the
// legend beside it says the same thing in words.
function Marker({ n }: { n: number }) {
  return <Badge aria-hidden="true">{n}</Badge>;
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

// Type only, centered on the page's own background, and short enough that
// the first example starts above the fold. The tally is counted from STEPS.
function Hero() {
  const pullRequests = STEPS.filter((step) => !step.issue).length;
  const findings = STEPS.filter((step) =>
    step.posts.some((post) => post.kind === "finding"),
  ).length;
  return (
    <section className="flex flex-col items-center px-6 pt-6 pb-4 text-center md:pt-10 md:pb-6">
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-5xl">
        {HERO.lead} <span className="text-primary">{HERO.highlight}</span>
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-balance text-muted-foreground">
        {HERO.body}
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <Button asChild size="lg">
          <a href="#examples">{HERO.primary}</a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href={siteUrl()}>
            {HERO.secondary}
            <ArrowUpRight data-icon="inline-end" />
          </a>
        </Button>
      </div>
      <p className="mt-4 font-mono text-xs text-muted-foreground">
        {STEPS.length} steps · {pullRequests} pull requests · {findings} reviews
        with findings
      </p>
    </section>
  );
}

function HowItWorks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2>{HOW_IT_WORKS.title}</h2>
        </CardTitle>
        <CardDescription>{HOW_IT_WORKS.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ol className="grid gap-4 md:grid-cols-3">
          {HOW_IT_WORKS.steps.map((step, i) => (
            <li key={step.title} className="rounded-lg bg-muted p-4">
              <Marker n={i + 1} />
              <h3 className="mt-2 font-medium">{step.title}</h3>
              <p className="mt-1 text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}

// One real finding taken apart: the numbers in its gutter match the legend.
function Anatomy() {
  const step = STEPS.find((s) => s.number === ANATOMY.example);
  const finding = step?.posts.find((post) => post.kind === "finding");
  if (!step?.diff || finding?.kind !== "finding") return null;
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2>{ANATOMY.title}</h2>
        </CardTitle>
        <CardDescription>{ANATOMY.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-2 md:items-center">
        <div className="min-w-0 overflow-hidden rounded-lg border">
          <DiffView diff={step.diff} />
          <div className="space-y-3 p-4">
            <p className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground">
                {EVIDENCE.bot}
              </span>{" "}
              {EVIDENCE.onTheLine}
            </p>
            <div className="flex items-start gap-3">
              <Marker n={1} />
              <OutcomeBadge outcome={finding.verdict} />
            </div>
            <div className="flex items-start gap-3">
              <Marker n={2} />
              <Message text={finding.message} />
            </div>
            <div className="flex items-start gap-3">
              <Marker n={3} />
              <p className="min-w-0 text-xs text-muted-foreground">
                {EVIDENCE.source}{" "}
                <code className="font-mono break-all">{finding.source}</code>
              </p>
            </div>
            {finding.suggestion ? (
              <div className="flex items-start gap-3">
                <Marker n={4} />
                <div className="min-w-0 flex-1 space-y-1">
                  <p className="text-xs font-medium text-muted-foreground">
                    {EVIDENCE.suggestion}
                  </p>
                  <CodeBlock text={finding.suggestion} />
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="space-y-4">
          <ol className="space-y-4">
            {ANATOMY.parts.map((part, i) => (
              <li key={part.title} className="flex gap-3">
                <Marker n={i + 1} />
                <div>
                  <h3 className="font-medium">{part.title}</h3>
                  <p className="mt-1 text-muted-foreground">{part.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-muted-foreground">{ANATOMY.footnote}</p>
        </div>
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
        <HowItWorks />
        <ExampleExplorer />
        <Anatomy />
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
