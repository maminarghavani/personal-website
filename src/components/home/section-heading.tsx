interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <div className="mb-5 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="h-px w-8 shrink-0 bg-foreground/30"
        />

        <p className="eyebrow">{eyebrow}</p>
      </div>

      <h2 className="max-w-3xl text-balance font-heading text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
