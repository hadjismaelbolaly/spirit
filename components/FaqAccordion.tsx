"use client";

import { useState } from "react";
import Seal from "./Seal";

export default function FaqAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col divide-y divide-gold/10 border-y border-gold/10">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3 font-display text-base text-ivory">
                <Seal size={16} className="shrink-0 text-gold" />
                {item.question}
              </span>
              <span className="font-mono text-gold">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <p className="pb-5 pl-8 text-sm leading-relaxed text-ivory/65">{item.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
