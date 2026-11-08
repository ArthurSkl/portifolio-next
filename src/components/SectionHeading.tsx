import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  badge: string;
  title: string;
  description?: string;
};

export function SectionHeading({ badge, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 sm:mb-14">
      <div className="flex flex-col gap-3 border-b border-zinc-200/80 pb-5 sm:pb-6 dark:border-zinc-800/80 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0">
          <div className="mb-2 flex items-center gap-2 font-mono text-[11px] sm:text-xs font-medium text-sky-600 dark:text-sky-400">
            <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
            <span className="truncate">{badge}</span>
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl dark:text-white">
            {title}
          </h2>
        </div>
        {description && (
          <p className="max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-right">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
