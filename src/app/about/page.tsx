import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/Sections";
import { reasons, services, steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Beverion Systems is a technology practice for web, search, ticketing, voting, integration, support, and data.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Beverion"
        title="A systems practice for organizations that need the work to hold."
        text="Beverion Systems designs and builds websites, search programs, ticketing and voting platforms, integrations, and the support around them for organizations that expect a precise technology practice."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-heading">What we take on</h2>
          <p className="mt-4 text-base leading-7 text-copy">
            The model is a full-service technology house. One team handles the brief, the interface, the build, and the care after launch. Beverion applies that model to search visibility, web platforms, event and decision systems, and the data those systems produce.
          </p>
          <p className="mt-4 text-base leading-7 text-copy">
            We also partner with other companies. When a product fits the operators we serve, we promote it. The partner stays the seller. Beverion’s job is the introduction and the explanation.
          </p>
          <Link href="/contact" className="mt-6 inline-flex h-12 items-center rounded-xl bg-accent px-5 text-sm font-semibold text-navy">
            Start a conversation
          </Link>
        </div>
        <ul className="grid gap-3">
          {services.map((service) => (
            <li key={service.slug}>
              <Link href={`/services/${service.slug}`} className="flex items-center justify-between rounded-2xl border border-black/8 bg-white shadow-[0_8px_24px_rgba(16,24,28,0.04)] px-4 py-3 text-sm hover:border-accent/50">
                <span className="font-semibold text-heading">{service.title}</span>
                <span className="text-copy">{service.short}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section id="delivery" className="border-t border-black/8 bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-heading">How delivery works</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n} className="rounded-2xl border border-black/8 bg-white shadow-[0_8px_24px_rgba(16,24,28,0.04)] p-5">
                <span className="text-sm font-bold text-accent">{step.n}</span>
                <h3 className="mt-3 text-lg font-semibold text-heading">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-copy">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-heading">What you can expect</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article key={reason.title} className="rounded-2xl border border-black/8 p-5">
              <h3 className="text-lg font-semibold text-heading">{reason.title}</h3>
              <p className="mt-2 text-sm leading-6 text-copy">{reason.text}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
