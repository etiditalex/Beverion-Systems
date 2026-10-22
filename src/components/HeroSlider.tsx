"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { slides } from "@/lib/content";
import { CardIcon, IconArrow } from "./Icons";

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const slide = slides[index];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 7000);
    return () => window.clearTimeout(timer);
  }, [index, paused, reduced]);

  return (
    <section
      className="hero-glow relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Beverion highlights"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24 lg:pt-14">
        <div key={slide.id} className="rise max-w-xl">
          <div className="inline-flex max-w-full items-center rounded-full bg-white/6 p-1 pr-3 sm:pr-4">
            <span className="shrink-0 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-navy">
              {slide.brand}
            </span>
            <span className="truncate pl-3 text-xs text-white/80 sm:text-sm">{slide.kicker}</span>
          </div>
          <h1 className="mt-6 text-[2.35rem] font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.35rem]">
            {slide.line1}{" "}
            <span className="text-accent">{slide.accent}</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted sm:text-[17px]">{slide.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={slide.primary.href}
              className="inline-flex h-[52px] items-center gap-2 rounded-xl bg-accent px-5 text-[15px] font-semibold text-navy shadow-[0_10px_28px_rgba(79,213,116,0.28)] transition hover:bg-[#3ebe68]"
            >
              {slide.primary.label}
              <IconArrow className="h-4 w-4" />
            </Link>
            <Link
              href={slide.secondary.href}
              className="inline-flex h-[52px] items-center rounded-xl border border-white/12 bg-white/5 px-5 text-[15px] font-semibold text-white transition hover:bg-white/10"
            >
              {slide.secondary.label}
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 pr-16 lg:pr-0" role="tablist" aria-label="Hero slides">
            {slides.map((item, itemIndex) => {
              const selected = itemIndex === index;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setIndex(itemIndex)}
                  className={`relative overflow-hidden rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                    selected ? "bg-white/10 text-white" : "text-white/55 hover:text-white"
                  }`}
                >
                  {item.tab}
                  {selected && !reduced ? (
                    <span className="slide-progress absolute inset-x-0 bottom-0 h-0.5 origin-left bg-accent" />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] px-3 sm:px-8">
          <div className="relative rounded-[30px] bg-gradient-to-br from-accent via-accent/70 to-[#b7f5cc] p-[3px] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[27px] bg-[#122022]">
              {slides.map((item, itemIndex) => (
                <Image
                  key={item.id}
                  src={item.image}
                  alt={itemIndex === index ? item.imageAlt : ""}
                  fill
                  priority={itemIndex === 0}
                  sizes="(min-width: 1024px) 540px, 100vw"
                  className={`object-cover transition duration-700 ${itemIndex === index ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
          </div>

          <article className="absolute left-0 top-6 flex max-w-[230px] items-center gap-3 rounded-2xl bg-white px-3.5 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.28)] sm:top-8 sm:-left-2">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-white">
              <CardIcon name={slide.cards[0].icon} />
            </span>
            <span>
              <span className="block text-[15px] font-bold leading-tight text-slate-900">{slide.cards[0].value}</span>
              <span className="mt-0.5 block text-[11px] leading-4 text-slate-500">{slide.cards[0].label}</span>
            </span>
          </article>

          <article className="absolute bottom-16 right-14 flex max-w-[210px] items-center gap-3 rounded-2xl bg-white px-3.5 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.28)] sm:bottom-12 sm:right-0">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-white">
              <CardIcon name={slide.cards[1].icon} />
            </span>
            <span>
              <span className="block text-[15px] font-bold leading-tight text-slate-900">{slide.cards[1].value}</span>
              <span className="mt-0.5 block text-[11px] leading-4 text-slate-500">{slide.cards[1].label}</span>
            </span>
          </article>

          <div className="dot-field pointer-events-none absolute -bottom-2 right-4 h-20 w-24 sm:right-0" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
