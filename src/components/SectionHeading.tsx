import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  badge: string;
  title: string;
  description?: string;
};

export function SectionHeading({ badge, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14">
      <div className="flex flex-col gap-3 border-b border-zinc-200/80 pb-6 dark:border-zinc-800/80 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 font-mono text-xs font-medium text-sky-600 dark:text-sky-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-500" />
            <span>{badge}</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
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
