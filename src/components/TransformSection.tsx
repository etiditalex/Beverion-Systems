import Image from "next/image";
import Link from "next/link";
import { IconArrow } from "./Icons";

const binary = Array.from({ length: 18 }, (_, row) =>
  Array.from({ length: 14 }, (_, col) => ((row * 7 + col * 3) % 5 === 0 ? "1" : "0")).join("  "),
).join("\n");

export function TransformSection() {
  return (
    <section id="ideas" className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-full max-w-3xl opacity-60"
        style={{
          backgroundImage: "radial-gradient(rgba(36, 36, 39, 0.22) 1px, transparent 1.15px)",
          backgroundSize: "16px 16px",
          maskImage: "linear-gradient(90deg, #000 55%, transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-8 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(79,213,116,0.22),transparent_68%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
        <div>
          <h2 className="inline-flex max-w-[340px] items-stretch overflow-hidden rounded-[28px] bg-[#2a2a2e] shadow-[0_10px_30px_rgba(16,24,28,0.08)]">
            <span className="w-1.5 shrink-0 bg-accent" />
            <span className="px-5 py-3.5 text-[1.35rem] font-bold leading-[1.25] tracking-[-0.02em] text-accent">
              Transforming Ideas into Technological Realities...
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-[15px] leading-7 text-copy">
            Beverion Systems turns a working idea into software an organization can run. We design websites, search
            programs, ticketing and voting platforms, and the integrations that keep the rest of the operation in one
            place. The same team writes the scope, builds in short cycles, and stays for support after launch.
          </p>

          <article className="mt-6 max-w-xl rounded-[22px] border border-black/6 bg-white p-5 shadow-[0_16px_40px_rgba(16,24,28,0.06)]">
            <div className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent text-white">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <circle cx="12" cy="9" r="4.2" />
                  <path d="M8.2 12.6 6.4 20l5.6-2.6L17.6 20l-1.8-7.4" />
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-bold tracking-[-0.02em] text-heading">Unparalleled Expertise</h3>
                <p className="mt-1.5 text-sm leading-6 text-copy">
                  Search, sites, platforms, and data stay with one practice. We scope the work in writing, put a
                  clickable slice in your hands early, and leave a system your team can operate.
                </p>
              </div>
            </div>
          </article>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-accent px-5 text-sm font-semibold text-navy shadow-[0_8px_20px_rgba(79,213,116,0.28)] transition hover:bg-[#3ebe68]"
            >
              Our Products
              <IconArrow className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex h-12 items-center rounded-xl border border-black/10 bg-white px-5 text-sm font-semibold text-heading transition hover:bg-mist"
            >
              See our portfolio
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          <figure className="relative row-span-2 min-h-[320px] overflow-hidden rounded-[28px] bg-white p-2 shadow-[0_22px_50px_rgba(16,24,28,0.12)] lg:min-h-[540px]">
            <div className="relative h-full overflow-hidden rounded-[22px]">
              <Image
                src="/images/transform-keyboard.jpg"
                alt="Hands working on a laptop"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 22vw, 45vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-[#0b4f86]/40 mix-blend-multiply" />
              <pre className="pointer-events-none absolute inset-0 overflow-hidden whitespace-pre p-4 font-mono text-[13px] leading-6 tracking-[0.18em] text-cyan-50/55">
                {binary}
              </pre>
            </div>
          </figure>

          <figure className="relative aspect-[5/4] overflow-hidden rounded-[28px] bg-white p-2 shadow-[0_22px_50px_rgba(16,24,28,0.12)]">
            <div className="relative h-full overflow-hidden rounded-[22px]">
              <Image
                src="/images/transform-engineer.jpg"
                alt="Technology lead in glasses"
                fill
                className="object-cover object-[center_20%]"
                sizes="(min-width: 1024px) 22vw, 45vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(8,40,80,0.05),rgba(0,190,220,0.38))]" />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(150,240,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(150,240,255,0.45) 1px, transparent 1px)",
                  backgroundSize: "26px 26px",
                }}
              />
            </div>
          </figure>

          <figure className="relative aspect-[5/4] overflow-hidden rounded-[28px] bg-white p-2 shadow-[0_22px_50px_rgba(16,24,28,0.12)]">
            <div className="relative h-full overflow-hidden rounded-[22px]">
              <Image
                src="/images/transform-interface.jpg"
                alt="Glowing circuit interface"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 22vw, 45vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,40,70,0.05),rgba(0,20,40,0.35))]" />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
