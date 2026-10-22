import Link from "next/link";
import { IconArrow } from "./Icons";

export function SectionIntro({
  eyebrow,
  title,
  text,
  href,
  action,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  href?: string;
  action?: string;
}) {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="inline-flex rounded-full bg-[#e7f9ee] px-3 py-1 text-xs font-semibold text-[#178a3e]">{eyebrow}</p>
        <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-heading md:text-4xl">{title}</h2>
        {text ? <p className="mt-3 text-base leading-7 text-copy">{text}</p> : null}
      </div>
      {href && action ? (
        <Link href={href} className="inline-flex items-center gap-2 text-sm font-semibold text-[#178a3e] hover:text-heading">
          {action}
          <IconArrow className="h-4 w-4" />
        </Link>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="border-b border-black/8 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#178a3e]">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-[-0.035em] text-heading md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-copy md:text-lg">{text}</p>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-[28px] bg-accent px-6 py-10 text-navy sm:px-10 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-navy">Ready to put a system behind the work?</h2>
          <p className="mt-3 text-navy/80">Tell us the outcome. We will reply within one business day with a clear next step.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#242427] px-5 text-sm font-semibold text-white hover:bg-[#3a3a3d]">
            Start a project
            <IconArrow className="h-4 w-4" />
          </Link>
          <Link href="/services" className="inline-flex h-12 items-center rounded-xl border border-[#242427]/20 px-5 text-sm font-semibold text-navy hover:bg-white/30">
            Browse services
          </Link>
        </div>
      </div>
    </section>
  );
}
