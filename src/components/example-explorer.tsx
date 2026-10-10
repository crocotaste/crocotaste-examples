"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { Evidence, OutcomeBadge } from "@/components/evidence";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  EVIDENCE,
  EXAMPLES,
  FIRST_STEP,
  STAGES,
  STEPS,
  stepId,
  stepUrl,
  type Step,
} from "@/data/showcase";

const HASH_PREFIX = "#example-";

function kindOf(step: Step): string {
  return step.issue ? EVIDENCE.issue : EVIDENCE.pullRequest;
}

function stageLabel(step: Step): string {
  return STAGES.find((stage) => stage.id === step.stage)?.label ?? "";
}

function StepLink({ step }: { step: Step }) {
  return (
    <Button asChild variant="outline" size="sm">
      <a
        href={stepUrl(step)}
        aria-label={`${EXAMPLES.link}: ${kindOf(step)} #${step.number}`}
      >
        {EXAMPLES.link} #{step.number}
        <ArrowUpRight data-icon="inline-end" />
      </a>
    </Button>
  );
}

function Pager({
  index,
  onSelect,
}: {
  index: number;
  onSelect: (step: Step) => void;
}) {
  const previousRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const previous = STEPS[index - 1];
  const next = STEPS[index + 1];
  // A button that just reached either end disables itself, so focus moves to
  // the other one instead of falling to the page.
  function go(step: Step, target: number) {
    onSelect(step);
    if (target === 0) nextRef.current?.focus();
    if (target === STEPS.length - 1) previousRef.current?.focus();
  }
  return (
    <div className="flex gap-2">
      <Button
        ref={previousRef}
        variant="outline"
        size="sm"
        disabled={!previous}
        aria-label={
          previous ? `${EXAMPLES.previous}: ${previous.title}` : undefined
        }
        onClick={() => previous && go(previous, index - 1)}
      >
        <ArrowLeft data-icon="inline-start" />
        {EXAMPLES.previous}
      </Button>
      <Button
        ref={nextRef}
        variant="outline"
        size="sm"
        disabled={!next}
        aria-label={next ? `${EXAMPLES.next}: ${next.title}` : undefined}
        onClick={() => next && go(next, index + 1)}
      >
        {EXAMPLES.next}
        <ArrowRight data-icon="inline-end" />
      </Button>
    </div>
  );
}

// A sidebar of every step grouped by stage, one panel at a time beside it.
// One tab list, so it is one tab stop and the arrow keys cross stages; the
// stage names are visual only. The open step lives in the URL hash.
export function ExampleExplorer() {
  const [value, setValue] = useState(String(FIRST_STEP));

  useEffect(() => {
    function openFromHash() {
      const number = Number(window.location.hash.slice(HASH_PREFIX.length));
      if (
        !window.location.hash.startsWith(HASH_PREFIX) ||
        !STEPS.some((step) => step.number === number)
      ) {
        return;
      }
      setValue(String(number));
      requestAnimationFrame(() =>
        document.getElementById("examples")?.scrollIntoView(),
      );
    }
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  function select(next: string) {
    setValue(next);
    window.history.replaceState(null, "", `${HASH_PREFIX}${next}`);
  }

  // The pager swaps the step in place, so bring its top back into view when
  // a long example left the reader below it.
  function page(step: Step) {
    select(String(step.number));
    const examples = document.getElementById("examples");
    if (examples && examples.getBoundingClientRect().top < 0) {
      examples.scrollIntoView();
    }
  }

  const index = STEPS.findIndex((step) => String(step.number) === value);

  return (
    <Card id="examples" className="scroll-mt-4">
      <CardHeader>
        <CardTitle>
          <h2>{EXAMPLES.title}</h2>
        </CardTitle>
        <CardDescription>{EXAMPLES.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs
          value={value}
          onValueChange={select}
          orientation="vertical"
          className="md:grid md:grid-cols-3 md:items-start md:gap-6"
        >
          <nav
            aria-label={EXAMPLES.navLabel}
            className="hidden md:sticky md:top-4 md:block"
          >
            <TabsList aria-label={EXAMPLES.navLabel}>
              {STAGES.map((stage) => [
                <div
                  key={stage.id}
                  aria-hidden="true"
                  className="px-2 pt-3 text-xs font-medium text-muted-foreground first:pt-0"
                >
                  {stage.label}
                </div>,
                ...STEPS.filter((step) => step.stage === stage.id).map(
                  (step) => (
                    <TabsTrigger key={step.number} value={String(step.number)}>
                      <span className="w-6 shrink-0 font-mono text-xs text-muted-foreground">
                        #{step.number}
                      </span>
                      {step.title}
                    </TabsTrigger>
                  ),
                ),
              ])}
            </TabsList>
          </nav>
          <div className="min-w-0 space-y-4 md:col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-2 md:hidden">
              <p className="text-sm text-muted-foreground">
                {stageLabel(STEPS[index])} · {index + 1} {EXAMPLES.of}{" "}
                {STEPS.length}
              </p>
              <Pager index={index} onSelect={page} />
            </div>
            {STEPS.map((step) => (
              <TabsContent key={step.number} value={String(step.number)}>
                <article id={stepId(step)} className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <OutcomeBadge outcome={step.outcome} />
                      <span className="text-xs text-muted-foreground">
                        {kindOf(step)} #{step.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.shows}</p>
                  </div>
                  <Evidence step={step} />
                </article>
              </TabsContent>
            ))}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <StepLink step={STEPS[index]} />
              <Pager index={index} onSelect={page} />
            </div>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
}
