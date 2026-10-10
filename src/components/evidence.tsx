import {
  CircleAlert,
  CircleCheck,
  CircleDot,
  CircleMinus,
  CircleX,
  GitPullRequest,
  MessageCircle,
  NotebookPen,
  Settings2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  EVIDENCE,
  type Check,
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

const CONCLUSION = {
  success: { label: EVIDENCE.success, variant: "success", Icon: CircleCheck },
  neutral: { label: EVIDENCE.neutral, variant: "secondary", Icon: CircleMinus },
} as const;

const SIGN = {
  "+": { label: EVIDENCE.added, className: "" },
  "-": { label: EVIDENCE.removed, className: "opacity-70" },
  " ": { label: EVIDENCE.unchanged, className: "opacity-70" },
} as const;

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

function CheckRow({ check }: { check: Check }) {
  const { label, variant, Icon } = CONCLUSION[check.conclusion];
  return (
    <div className="flex flex-wrap items-center gap-2 border-t bg-muted px-4 py-2 text-xs">
      <Badge variant={variant}>
        <Icon data-icon="inline-start" />
        {label}
      </Badge>
      <span className="font-medium">{EVIDENCE.check}</span>
      <span className="min-w-0 font-mono break-words text-muted-foreground">
        {check.title}
      </span>
    </div>
  );
}

export function OutcomeBadge({ outcome }: { outcome: Outcome }) {
  const { label, variant, Icon } = OUTCOME[outcome];
  return (
    <Badge variant={variant}>
      <Icon data-icon="inline-start" />
      {label}
    </Badge>
  );
}

export function Message({ text }: { text: string }) {
  return (
    <p className="break-words whitespace-pre-line">
      <MessageText text={text} />
    </p>
  );
}

// Code scrolls inside its own block and prose wraps, so nothing ever pushes
// the page sideways on a narrow screen.
export function CodeBlock({ text, wrap }: { text: string; wrap?: boolean }) {
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

export function DiffView({ diff }: { diff: Diff }) {
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

// One frame per issue or pull request, read top to bottom the way GitHub
// lays it out: the title, the changed lines, what was posted, then the check.
export function Evidence({ step }: { step: Step }) {
  const Icon = step.issue ? CircleDot : GitPullRequest;
  return (
    <div className="min-w-0 overflow-hidden rounded-lg border">
      <div className="flex items-start gap-2 border-b px-4 py-2">
        <Icon
          aria-hidden="true"
          className="mt-0.5 size-4 shrink-0 text-muted-foreground"
        />
        <p className="min-w-0 font-medium break-words">
          {step.githubTitle}{" "}
          <span className="font-normal text-muted-foreground">
            #{step.number}
          </span>
        </p>
      </div>
      {step.diff ? <DiffView diff={step.diff} /> : null}
      {step.posts.map((post, i) => (
        <div key={i}>
          {i > 0 ? <Separator /> : null}
          <PostView post={post} />
        </div>
      ))}
      {step.check ? <CheckRow check={step.check} /> : null}
    </div>
  );
}
