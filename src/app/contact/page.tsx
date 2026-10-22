import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/Sections";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Beverion Systems.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us the outcome you need."
        text="A few sentences are enough. We reply within one business day with questions, not a generic deck."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="space-y-4">
          <article className="rounded-2xl border border-black/8 bg-white shadow-[0_8px_24px_rgba(16,24,28,0.04)] p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-copy">Email</h2>
            <a className="mt-2 block text-lg font-semibold text-heading" href={`mailto:${company.email}`}>{company.email}</a>
          </article>
          <article className="rounded-2xl border border-black/8 bg-white shadow-[0_8px_24px_rgba(16,24,28,0.04)] p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-copy">Where we work</h2>
            <p className="mt-2 text-lg font-semibold text-heading">{company.location}</p>
            <p className="mt-1 text-sm text-copy">Remote-first. Engagements run on a written scope.</p>
          </article>
          <article className="rounded-2xl border border-black/8 bg-white shadow-[0_8px_24px_rgba(16,24,28,0.04)] p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-copy">Response</h2>
            <p className="mt-2 text-lg font-semibold text-heading">{company.response}</p>
          </article>
        </div>
        <InquiryForm />
      </section>
    </>
  );
}
