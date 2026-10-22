"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company, nav, type NavItem } from "@/lib/content";
import { Logo } from "./Logo";
import {
  IconChevron,
  IconClock,
  IconClose,
  IconMail,
  IconMenu,
  IconPin,
  IconShield,
  IconSpark,
} from "./Icons";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function DesktopItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const active = isCurrent(pathname, item.href);
  return (
    <div className="group relative">
      {item.badge ? (
        <span className="pointer-events-none absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-accent px-1.5 py-[2px] text-[9px] font-bold uppercase tracking-wide text-navy">
          {item.badge}
        </span>
      ) : null}
      <Link
        href={item.href}
        className={`flex items-center gap-1 rounded-full px-3 py-2 text-[13.5px] font-medium transition ${
          active ? "text-accent" : "text-heading/75 hover:text-heading"
        }`}
      >
        {item.label}
        {active ? <span className="ml-0.5 h-1.5 w-1.5 rounded-full bg-accent" /> : null}
        {item.children ? <IconChevron className="h-3.5 w-3.5 opacity-70" /> : null}
      </Link>
      {item.children ? (
        <div className={`invisible absolute left-1/2 top-full z-40 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${item.children.length > 4 ? "w-[min(92vw,560px)]" : "w-[min(92vw,340px)]"}`}>
          <div className="rounded-2xl border border-black/8 bg-white p-2 shadow-[0_24px_50px_rgba(16,24,28,0.12)]">
            <div className={item.children.length > 4 ? "grid grid-cols-2 gap-1" : "grid gap-1"}>
              {item.children.map((child) => (
                <Link
                  key={child.href + child.label}
                  href={child.href}
                  className="rounded-xl px-3 py-2.5 transition hover:bg-[#edfbf2]"
                >
                  <span className="block text-sm font-medium text-heading">{child.label}</span>
                  {child.description ? (
                    <span className="mt-0.5 block text-xs text-copy">{child.description}</span>
                  ) : null}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#242427]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-[12px] text-white/75 sm:px-6">
          <div className="flex min-w-0 items-center gap-x-4 gap-y-1 sm:gap-x-5">
            <a href={`mailto:${company.email}`} className="inline-flex items-center gap-1.5 hover:text-white">
              <IconMail className="h-3.5 w-3.5 text-accent-2" />
              <span className="truncate">{company.email}</span>
            </a>
            <span className="hidden items-center gap-1.5 md:inline-flex">
              <IconPin className="h-3.5 w-3.5 text-accent-2" />
              {company.location}
            </span>
            <span className="hidden items-center gap-1.5 lg:inline-flex">
              <IconClock className="h-3.5 w-3.5 text-accent-2" />
              {company.response}
            </span>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-white/80">
            <IconShield className="h-3.5 w-3.5 text-accent-2" />
            <span className="hidden sm:inline">Enterprise delivery</span>
          </span>
        </div>
      </div>

      <div className="border-b border-black/8 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Logo tone="ink" />

        <nav className="hidden items-center xl:flex" aria-label="Primary">
          {nav.map((item) => (
            <DesktopItem key={item.label} item={item} pathname={pathname} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/opportunities"
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#242427] px-4 text-sm font-semibold text-white transition hover:bg-[#3a3a3d]"
          >
            <IconSpark className="h-4 w-4 text-accent-2" />
            Opportunities
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center rounded-xl bg-accent px-4 text-sm font-semibold text-navy shadow-[0_8px_24px_rgba(79,213,116,0.28)] transition hover:bg-[#3ebe68]"
          >
            Start a project
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#3c3c40] text-white xl:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
        </div>
      </div>

      {open ? (
        <div className="max-h-[calc(100vh-8rem)] overflow-y-auto border-t border-black/8 bg-white px-4 py-4 xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <div key={item.label} className="border-b border-black/8 py-1">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="px-1 py-2 text-base font-medium text-heading"
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <button
                      type="button"
                      className="px-3 py-2 text-copy"
                      aria-label={`Toggle ${item.label}`}
                      onClick={() => setExpanded((current) => (current === item.label ? null : item.label))}
                    >
                      <IconChevron className={`h-4 w-4 transition ${expanded === item.label ? "rotate-180" : ""}`} />
                    </button>
                  ) : null}
                </div>
                {item.children && expanded === item.label ? (
                  <div className="mb-2 grid gap-1 pl-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href + child.label}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="rounded-lg px-2 py-2 text-sm text-copy hover:bg-[#edfbf2] hover:text-heading"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <Link
                href="/opportunities"
                onClick={() => setOpen(false)}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-black/10 text-sm font-semibold text-heading"
              >
                <IconSpark className="h-4 w-4 text-[#178a3e]" />
                Opportunities
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-accent text-sm font-semibold text-navy"
              >
                Start a project
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
