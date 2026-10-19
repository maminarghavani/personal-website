import type { ReactNode } from "react";

interface BlogContentProps {
  children: ReactNode;
}

export function BlogContent({ children }: BlogContentProps) {
  return (
    <article className="mx-auto w-full max-w-4xl px-5 sm:px-8 lg:px-10">
      <div className="prose-blog min-w-0">{children}</div>
    </article>
  );
}
