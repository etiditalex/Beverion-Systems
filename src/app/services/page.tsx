import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/Sections";
import { faqs, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "SEO, AEO, GEO consulting, web design and development, ticketing and voting, integration, IT support, and data analysis.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Search, software, support, and the analysis in between."
        text="Each practice is scoped on its own and delivered by the same team. Start with the one that matches the outcome, or ask us to sequence several."
      />
      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-16 sm:px-6 lg:grid-cols-2">
        {services.map((service) => (
          <article key={service.slug} className="rounded-[28px] border border-black/8 bg-white shadow-[0_8px_24px_rgba(16,24,28,0.04)] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#178a3e]">{service.short}</p>
            <h2 className="mt-2 text-2xl font-semibold text-heading">{service.title}</h2>
            <p className="mt-3 text-sm leading-6 text-copy">{service.summary}</p>
            <ul className="mt-4 space-y-2 text-sm text-copy">
              {service.includes.slice(0, 3).map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href={`/services/${service.slug}`} className="mt-5 inline-flex text-sm font-semibold text-[#178a3e]">
              Open this service
            </Link>
          </article>
        ))}
      </section>
      <section className="border-t border-black/8">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold text-heading">Common questions</h2>
          <div className="mt-6 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="text-lg font-semibold text-heading">{faq.q}</h3>
                <p className="mt-2 text-sm leading-6 text-copy">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
