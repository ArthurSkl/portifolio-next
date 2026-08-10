import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  badge: string;
  title: string;
  description?: string;
};

export function SectionHeading({ badge, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <span className="mb-3 inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-500 dark:text-sky-400">
        {badge}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">{description}</p>}
    </Reveal>
  );
}
