"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  words: string[];
};

export function Typewriter({ words }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const word = words[index % words.length] ?? "";

  useEffect(() => {
    if (!deleting && subIndex === word.length) {
      const timeout = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((s) => (deleting ? s - 1 : s + 1)),
      deleting ? 40 : 95
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, word.length]);

  return (
    <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text font-semibold text-transparent">
      {word.slice(0, subIndex)}
      <span className="ml-1 inline-block h-[1.1em] w-[2px] translate-y-[0.2em] animate-pulse bg-sky-400" />
    </span>
  );
}
