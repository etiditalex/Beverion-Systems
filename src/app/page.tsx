import Image from "next/image";
import Link from "next/link";
import { HeroSlider } from "@/components/HeroSlider";
import { IconArrow, IconCheck, IconLayers, IconSearch, IconShield, IconSpark } from "@/components/Icons";
import { CtaBand, SectionIntro } from "@/components/Sections";
import { TransformSection } from "@/components/TransformSection";
import { faqs, posts, products, reasons, services, showcases, steps } from "@/lib/content";

const serviceIcons = {
  seo: IconSearch,
  aeo: IconSpark,
  geo: IconSpark,
  "web-design-development": IconLayers,
  "ticketing-voting": IconCheck,
  integration: IconLayers,
  "it-support-consulting": IconShield,
  "data-analysis": IconSearch,
} as const;

const ribbon = [
  "SEO",
  "AEO",
  "GEO consulting",
  "Web design",
  "Web development",
  "Ticketing",
  "Voting",
  "Integration",
  "IT support",
  "Data analysis",
  "Partner products",
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <div className="overflow-hidden bg-[#434346]">
        <div className="marquee-track flex w-max gap-8 py-4">
          {[...ribbon, ...ribbon].map((item, index) => (
            <span key={`${item}-${index}`} className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              {item}
              <span className="ml-8 text-accent">·</span>
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionIntro
          eyebrow="Why Beverion"
          title="A technology practice with one standard of finish."
          text="Strategy, design, build, and care stay with one team. Beverion is that practice for operators who want the work written down and the system finished."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <article key={reason.title} className="rounded-2xl border border-black/8 bg-white shadow-[0_8px_24px_rgba(16,24,28,0.04)] p-5">
              <span className="text-xs font-semibold tracking-[0.16em] text-[#178a3e]">0{index + 1}</span>
              <h3 className="mt-3 text-lg font-semibold text-heading">{reason.title}</h3>
              <p className="mt-2 text-sm leading-6 text-copy">{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-6 sm:px-6">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#12181b] px-5 py-12 sm:px-10 sm:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -top-8 h-56 w-72 opacity-70"
            style={{
              backgroundImage: "radial-gradient(rgba(79, 213, 116, 0.55) 1.1px, transparent 1.2px)",
              backgroundSize: "14px 14px",
              maskImage: "radial-gradient(circle at 70% 30%, #000 20%, transparent 72%)",
            }}
          />
          <div className="relative flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl text-3xl font-bold tracking-[-0.03em] text-white md:text-4xl">
              Eight ways we take on the work.
            </h2>
            <p className="max-w-md text-sm leading-6 text-white/60">
              Search, sites, platforms, integration, support, and analysis. Open any practice to see what is included.
            </p>
          </div>
          <div className="relative mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] ?? IconLayers;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/8 bg-[#1c262a] p-5 transition hover:border-accent/50"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-navy">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-white/60">{service.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Learn more
                    <IconArrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="relative mt-5 flex flex-col items-start justify-between gap-4 rounded-2xl bg-[#0d1416] px-5 py-4 sm:flex-row sm:items-center">
            <p className="text-sm text-white/70">Each practice is scoped on its own and delivered by the same team.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/services" className="inline-flex h-11 items-center gap-2 rounded-xl bg-accent px-4 text-sm font-semibold text-navy hover:bg-[#3ebe68]">
                All services
                <IconArrow className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex h-11 items-center rounded-xl border border-white/15 px-4 text-sm font-semibold text-white hover:bg-white/5">
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TransformSection />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionIntro
          eyebrow="Products"
          title="Platforms we put our name on."
          text="Ticketing and voting are products. Partner promotions are how we put another company’s product in front of the right buyers."
          href="/products"
          action="See products"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {products.map((product) => (
            <article key={product.slug} className="overflow-hidden rounded-[28px] border border-black/8 bg-white shadow-[0_8px_24px_rgba(16,24,28,0.04)]">
              <div className="relative h-56">
                <Image src={product.image} alt={product.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#178a3e]">{product.kicker}</p>
                <h3 className="mt-2 text-2xl font-semibold text-heading">{product.title}</h3>
                <p className="mt-2 text-sm leading-6 text-copy">{product.summary}</p>
                <Link href={`/products/${product.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#178a3e]">
                  View the system
                  <IconArrow className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <article className="mt-5 flex flex-col items-start justify-between gap-4 rounded-[28px] border border-[#4fd574]/30 bg-[#edfbf2] p-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#178a3e]">Partner shelf</p>
            <h3 className="mt-2 text-2xl font-semibold text-heading">We promote products from companies we choose to stand next to.</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-copy">
              Beverion reviews a product, and if it fits, we give it a real promotion surface. The partner remains the seller.
            </p>
          </div>
          <Link href="/partners" className="inline-flex h-12 shrink-0 items-center rounded-xl bg-accent px-5 text-sm font-semibold text-navy">
            Become a partner
          </Link>
        </article>
      </section>

      <section className="border-t border-black/8 bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <SectionIntro
            eyebrow="Portfolio"
            title="The kinds of systems we design."
            text="These are practice showcases, not claimed client launches. Named work will be published as engagements go live."
            href="/portfolio"
            action="Open the portfolio"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {showcases.slice(0, 3).map((item) => (
              <article key={item.slug} className="overflow-hidden rounded-2xl border border-black/8 bg-white shadow-[0_8px_24px_rgba(16,24,28,0.04)]">
                <div className="relative h-44">
                  <Image src={item.image} alt={item.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#178a3e]">{item.area}</p>
                  <h3 className="mt-2 text-lg font-semibold text-heading">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-copy">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionIntro
          eyebrow="Delivery"
          title="Four steps, and you can see the work in each one."
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.n} className="rounded-2xl border border-black/8 bg-white shadow-[0_8px_24px_rgba(16,24,28,0.04)] p-5">
              <span className="text-sm font-bold text-accent">{step.n}</span>
              <h3 className="mt-3 text-lg font-semibold text-heading">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-copy">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-black/8">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <SectionIntro eyebrow="Questions" title="Straight answers before the first call." />
          <div className="mt-8 grid gap-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-2xl border border-black/8 bg-white shadow-[0_8px_24px_rgba(16,24,28,0.04)] px-5 py-4">
                <summary className="cursor-pointer list-none text-base font-semibold text-heading">
                  <span className="flex items-center justify-between gap-4">
                    {faq.q}
                    <span className="text-[#178a3e] transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-copy">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/8 bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <SectionIntro
            eyebrow="From the practice"
            title="Notes on search, systems, and partnerships."
            href="/blog"
            action="All notes"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-2xl border border-black/8 bg-white shadow-[0_8px_24px_rgba(16,24,28,0.04)] p-5 transition hover:border-accent/50">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#178a3e]">{post.category}</p>
                <h3 className="mt-3 text-lg font-semibold text-heading">{post.title}</h3>
                <p className="mt-2 text-sm leading-6 text-copy">{post.excerpt}</p>
                <p className="mt-4 text-xs text-copy">{post.date} · {post.read}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
