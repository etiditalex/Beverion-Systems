import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Opportunities",
  description: "Tell Beverion Systems how you want to work with the practice.",
};

const areas = [
  { title: "Engineering", text: "Web platforms, integrations, and the admin tools behind ticketing and voting." },
  { title: "Design", text: "Interface and content design for sites that have to explain a serious offer." },
  { title: "Search", text: "SEO, AEO, and GEO consulting with a preference for clear writing." },
  { title: "Support", text: "People who can sit with an operator and keep a system understandable after launch." },
];

export default function OpportunitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Opportunities"
        title="The team is being built in the open."
        text="Beverion is not posting a wall of roles with invented headcount. If your work fits the practice, send a note. We read every one."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <article key={area.title} className="rounded-2xl border border-black/8 bg-white shadow-[0_8px_24px_rgba(16,24,28,0.04)] p-5">
              <h2 className="text-lg font-semibold text-heading">{area.title}</h2>
              <p className="mt-2 text-sm leading-6 text-copy">{area.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-t border-black/8">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold text-heading">Introduce yourself</h2>
            <p className="mt-3 text-sm leading-6 text-copy">
              Include the kind of work you want, where you are based, and a link to something you have shipped or written.
            </p>
          </div>
          <InquiryForm defaultInterest="Working at Beverion" submitLabel="Send an introduction" />
        </div>
      </section>
    </>
  );
}
