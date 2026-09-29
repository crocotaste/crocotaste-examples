import {
  ArrowUpRight,
  CircleAlert,
  CircleCheck,
  CircleX,
  MessageCircle,
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
import {
  CHECKS,
  FINDING,
  REPO_URL,
  siteUrl,
  STEPS,
  stepUrl,
  type Outcome,
} from "@/data/showcase";

// GitHub Pages serves the site under the repository's name; a plain <img>
// does not get Next's basePath on its own.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const OUTCOME = {
  setup: { label: "Setup", variant: "secondary", Icon: Settings2 },
  pass: { label: "Pass", variant: "success", Icon: CircleCheck },
  drift: { label: "Drift", variant: "warning", Icon: CircleAlert },
  violation: { label: "Violation", variant: "destructive", Icon: CircleX },
  command: { label: "Command", variant: "secondary", Icon: MessageCircle },
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
function Message({ text }: { text: string }) {
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

function Hero() {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl bg-brand-field">
      {/* eslint-disable-next-line @next/next/no-img-element -- static art, no optimizer */}
      <img
        src={`${BASE}/hero-pond-1800.webp`}
        srcSet={`${BASE}/hero-pond-1200.webp 1200w, ${BASE}/hero-pond-1800.webp 1800w, ${BASE}/hero-pond-2200.webp 2200w`}
        sizes="(min-width: 768px) 1400px, 700px"
        alt=""
        className="absolute inset-0 -z-10 size-full object-cover object-left lg:object-center"
      />
      <div className="max-w-2xl px-6 py-16 md:px-10">
        <h1 className="text-4xl font-semibold tracking-tight text-balance text-brand-field-foreground md:text-5xl">
          Watch a design review happen on real pull requests
        </h1>
        <p className="mt-4 text-lg text-brand-field-foreground/90">
          A small Next.js app on shadcn/ui and Tailwind. Each pull request here
          shows one thing Crocotaste catches, and exactly what it posts.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          <Button asChild size="lg">
            <a href="#walkthrough">Follow the walkthrough</a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href={siteUrl()}>
              Visit crocotaste.com
              <ArrowUpRight data-icon="inline-end" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Checks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          What gets checked
        </CardTitle>
        <CardDescription>
          Everything is read from this repository, nothing from ours
        </CardDescription>
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

function Finding() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          How a finding reads
        </CardTitle>
        <CardDescription>
          The value, the token, then the source, on the line that changed
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-hidden rounded-lg border">
          <div className="border-b bg-muted px-4 py-2 font-mono text-xs text-muted-foreground">
            {FINDING.path}:{FINDING.line}
          </div>
          <pre className="overflow-x-auto bg-foreground px-4 py-2 font-mono text-xs text-background">
            <span className="block opacity-70">- {FINDING.removed}</span>
            <span className="block">+ {FINDING.added}</span>
          </pre>
          <div className="space-y-3 p-4">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <OutcomeBadge outcome="violation" />
              <p>
                <Message text={FINDING.message} />
              </p>
            </div>
            <pre className="overflow-x-auto rounded-md bg-muted px-4 py-2 font-mono text-xs">
              {FINDING.suggestion}
            </pre>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Walkthrough() {
  return (
    <Card id="walkthrough" className="scroll-mt-4">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">The walkthrough</CardTitle>
        <CardDescription>
          From install to a green check, one pull request at a time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ol>
          {STEPS.map((step, i) => (
            <li key={step.title}>
              {i > 0 ? <Separator /> : null}
              <div className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:gap-3">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{step.title}</p>
                  <p className="text-sm text-muted-foreground">{step.shows}</p>
                </div>
                <div className="flex items-center gap-2">
                  <OutcomeBadge outcome={step.outcome} />
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={stepUrl(step)}
                      aria-label={`${step.issue ? "Issue" : "Pull request"} #${step.number}`}
                    >
                      #{step.number}
                      <ArrowUpRight data-icon="inline-end" />
                    </a>
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}

function TryIt() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Try it on your own repository
        </CardTitle>
        <CardDescription>
          Install the GitHub App, and your first three reviews are free
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        <Button asChild size="lg">
          <a href={siteUrl("/docs")}>
            Get started
            <ArrowUpRight data-icon="inline-end" />
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href={siteUrl("/pricing")}>
            See pricing
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
        <Finding />
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
