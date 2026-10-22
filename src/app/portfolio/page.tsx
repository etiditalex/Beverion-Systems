import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Practice showcases for web, search, ticketing, voting, data, and partner promotions.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Systems the practice is built to deliver."
        text="These cards describe the shape of the work. They are not claimed client launches. When a live engagement can be named, it will be added here with permission."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <PortfolioGrid />
      </section>
    </>
  );
}
