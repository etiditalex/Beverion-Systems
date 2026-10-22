import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Partners",
  description: "Beverion partners with other companies and promotes products that fit the operators we serve.",
};

const lanes = [
  { title: "Software", text: "Tools an operator would log into every week: workflow, membership, finance, or field products." },
  { title: "Events", text: "Hardware, access, and production tools that sit beside ticketing and check-in." },
  { title: "Data", text: "Collection, warehouse, and visualization products we can explain next to an analysis engagement." },
  { title: "Infrastructure", text: "Hosting, identity, security, and communications platforms a serious deployment depends on." },
];

const model = [
  { n: "01", title: "You introduce the product", text: "Tell us who it is for, what it replaces, and how a buyer starts." },
  { n: "02", title: "We review the fit", text: "If we cannot explain it to the organizations we already talk to, we decline." },
  { n: "03", title: "We publish a surface", text: "A page and a recommendation path, written in Beverion’s voice, with you named as the seller." },
  { n: "04", title: "We make introductions", text: "When a conversation is a real match, we connect the buyer. You own the sale." },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="We promote other companies’ products when the fit is real."
        text="Beverion is building a partner shelf, not a logo wall. You keep the product, the price, and the customer. We put it in front of buyers who have a reason to care."
      />
      <section id="model" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold text-heading">How a partnership works</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {model.map((step) => (
            <li key={step.n} className="rounded-2xl border border-black/8 bg-white shadow-[0_8px_24px_rgba(16,24,28,0.04)] p-5">
              <span className="text-sm font-bold text-accent">{step.n}</span>
              <h3 className="mt-3 text-lg font-semibold text-heading">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-copy">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="border-t border-black/8 bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold text-heading">Lanes we will consider</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {lanes.map((lane) => (
              <article key={lane.title} className="rounded-2xl border border-black/8 bg-white shadow-[0_8px_24px_rgba(16,24,28,0.04)] p-5">
                <h3 className="text-lg font-semibold text-heading">{lane.title}</h3>
                <p className="mt-2 text-sm leading-6 text-copy">{lane.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-bold text-heading">Apply to the shelf</h2>
          <p className="mt-3 text-sm leading-6 text-copy">
            Send the product, the buyer, and why it belongs next to Beverion’s work. We reply within one business day.
          </p>
        </div>
        <InquiryForm defaultInterest="Partner promotion" submitLabel="Apply to partner" />
      </section>
    </>
  );
}
