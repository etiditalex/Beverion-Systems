import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TalkButton } from "@/components/TalkButton";
import { company } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "Beverion Systems",
    template: "%s · Beverion Systems",
  },
  description: company.description,
  openGraph: {
    title: "Beverion Systems",
    description: company.description,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper text-heading">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-slate-900"
        >
          Skip to content
        </a>
        <Suspense fallback={<div className="h-[110px] border-b border-black/8 bg-white" />}>
          <SiteHeader />
        </Suspense>
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <TalkButton />
      </body>
    </html>
  );
}
