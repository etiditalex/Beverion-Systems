"use client";

import Image from "next/image";
import { useState } from "react";
import { showcases } from "@/lib/content";

const filters = ["All", "Web", "Search", "Events", "Data", "Partners"] as const;

export function PortfolioGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const items = showcases.filter((item) => filter === "All" || item.area === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter showcases">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={filter === item}
            onClick={() => setFilter(item)}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              filter === item ? "bg-accent text-navy" : "bg-mist text-copy hover:text-heading"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.slug} className="overflow-hidden rounded-2xl border border-black/8 bg-white shadow-[0_8px_24px_rgba(16,24,28,0.04)]">
            <div className="relative h-48">
              <Image src={item.image} alt={item.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#178a3e]">{item.area}</p>
              <h2 className="mt-2 text-lg font-semibold text-heading">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-copy">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
