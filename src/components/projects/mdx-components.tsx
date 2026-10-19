import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
type ElementProps<T extends keyof React.JSX.IntrinsicElements> =
  ComponentPropsWithoutRef<T>;
export function getProjectMdxComponents() {
  return {
    h2: ({ className, ...props }: ElementProps<"h2">) => (
      <h2
        className={cn(
          "mt-16 scroll-m-20 font-heading text-2xl font-semibold tracking-tight first:mt-0 sm:text-3xl",
          className,
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }: ElementProps<"h3">) => (
      <h3
        className={cn(
          "mt-10 scroll-m-20 font-heading text-xl font-semibold tracking-tight sm:text-2xl",
          className,
        )}
        {...props}
      />
    ),
    p: ({ className, ...props }: ElementProps<"p">) => (
      <p
        className={cn(
          "mt-5 text-base leading-8 text-muted-foreground",
          className,
        )}
        {...props}
      />
    ),
    ul: ({ className, ...props }: ElementProps<"ul">) => (
      <ul
        className={cn(
          "mt-6 list-disc space-y-3 ps-6 text-base leading-7 text-muted-foreground marker:text-foreground",
          className,
        )}
        {...props}
      />
    ),
    ol: ({ className, ...props }: ElementProps<"ol">) => (
      <ol
        className={cn(
          "mt-6 list-decimal space-y-3 ps-6 text-base leading-7 text-muted-foreground marker:text-foreground",
          className,
        )}
        {...props}
      />
    ),
    li: ({ className, ...props }: ElementProps<"li">) => (
      <li className={cn("ps-1", className)} {...props} />
    ),
    a: ({ className, ...props }: ElementProps<"a">) => (
      <a
        className={cn(
          "font-medium text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground",
          className,
        )}
        {...props}
      />
    ),
    blockquote: ({ className, ...props }: ElementProps<"blockquote">) => (
      <blockquote
        className={cn(
          "mt-6 border-s-2 border-border ps-6 italic text-muted-foreground",
          className,
        )}
        {...props}
      />
    ),
    hr: ({ className, ...props }: ElementProps<"hr">) => (
      <hr className={cn("my-12 border-border/60", className)} {...props} />
    ),
    code: ({ className, ...props }: ElementProps<"code">) => (
      <code
        className={cn(
          "rounded-md border border-border/70 bg-muted px-1.5 py-0.5 font-mono text-[0.85em]",
          className,
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }: ElementProps<"pre">) => (
      <pre
        className={cn(
          "mt-6 overflow-x-auto rounded-xl border border-border/70 bg-muted/40 p-5 font-mono text-sm leading-7",
          className,
        )}
        {...props}
      />
    ),
  };
}
