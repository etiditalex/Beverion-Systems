import Link from "next/link";
import { company, services } from "@/lib/content";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#08161a]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo tone="plain" />
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            Beverion Systems designs websites, search programs, ticketing and voting platforms, integrations, and the support around them.
          </p>
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="text-white/75 hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Company</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li><Link className="hover:text-white" href="/about">About</Link></li>
            <li><Link className="hover:text-white" href="/portfolio">Portfolio</Link></li>
            <li><Link className="hover:text-white" href="/partners">Partners</Link></li>
            <li><Link className="hover:text-white" href="/blog">Blog</Link></li>
            <li><Link className="hover:text-white" href="/opportunities">Opportunities</Link></li>
            <li><Link className="hover:text-white" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <a className="hover:text-white" href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>{company.location}</li>
            <li>{company.response}</li>
          </ul>
          <Link
            href="/contact"
            className="mt-5 inline-flex h-11 items-center rounded-xl bg-accent px-4 text-sm font-semibold text-navy hover:bg-[#3ebe68]"
          >
            Start a project
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 Beverion Systems. All rights reserved.</p>
          <p>Web, search, platforms, and support.</p>
        </div>
      </div>
    </footer>
  );
}
