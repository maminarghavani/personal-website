import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
