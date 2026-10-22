import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/Sections";
import { getService, services } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return { title: service.title, description: service.summary };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-black/8">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#178a3e]">{service.short}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-[-0.035em] text-heading md:text-5xl">{service.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-copy">{service.summary}</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h2 className="text-2xl font-semibold text-heading">Who it is for</h2>
          <p className="mt-3 text-base leading-7 text-copy">{service.audience}</p>
          <h2 className="mt-10 text-2xl font-semibold text-heading">What changes</h2>
          <ul className="mt-4 space-y-3">
            {service.outcomes.map((item) => (
              <li key={item} className="rounded-2xl border border-black/8 bg-white shadow-[0_8px_24px_rgba(16,24,28,0.04)] px-4 py-3 text-sm text-copy">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <aside className="h-fit rounded-[28px] border border-black/8 bg-white shadow-[0_8px_24px_rgba(16,24,28,0.04)] p-6">
          <h2 className="text-lg font-semibold text-heading">Included</h2>
          <ul className="mt-4 space-y-3 text-sm text-copy">
            {service.includes.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-xl bg-accent text-sm font-semibold text-navy">
            Discuss this service
          </Link>
        </aside>
      </section>
      <section className="border-t border-black/8">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-semibold text-heading">Related practices</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/services/${item.slug}`} className="rounded-2xl border border-black/8 p-5 hover:border-accent/50">
                <h3 className="font-semibold text-heading">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-copy">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
