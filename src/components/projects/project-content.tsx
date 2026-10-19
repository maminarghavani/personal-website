import type { ReactNode } from "react";

interface ProjectContentProps {
  children: ReactNode;
}

export function ProjectContent({ children }: ProjectContentProps) {
  return (
    <article className="mx-auto max-w-3xl">
      <div className="prose-project">{children}</div>
    </article>
  );
}
