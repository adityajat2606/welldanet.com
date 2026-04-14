import type { Metadata } from "next";
import Link from "next/link";
import { Braces, Globe, Lock, RefreshCw } from "lucide-react";
import { PageShell } from "@/components/shared/page-shell";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";

const pillars = [
  {
    icon: Braces,
    title: "Stable feeds & JSON shapes",
    body: "Predictable schemas for listings, categories, and media references. Versioned endpoints with deprecation windows—no surprise field removals.",
  },
  {
    icon: Globe,
    title: "Attribution that travels",
    body: "When you syndicate, keep brand marks, canonical URLs, and freshness timestamps visible so end users trust the source.",
  },
  {
    icon: Lock,
    title: "Scoped access",
    body: "API keys tied to environments, rate limits that burst for batch syncs, and audit trails for compliance reviews.",
  },
  {
    icon: RefreshCw,
    title: "Sync playbooks",
    body: "Guidance on incremental updates, conflict resolution when owners edit mid-sync, and backoff strategies for busy markets.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: "/developers",
    title: `Developers | ${SITE_CONFIG.name}`,
    description: `Integration patterns, attribution rules, and partner guidelines for ${SITE_CONFIG.name} listing data.`,
  });
}

export default function DevelopersPage() {
  return (
    <PageShell
      heroAccent
      eyebrow="Developers"
      title="Build on structured listings—responsibly"
      description="Partners use our surfaces in city portals, intranets, and mobile apps. These are the guardrails that keep data fresh and trustworthy."
      actions={
        <Button className="rounded-full bg-slate-950 text-white hover:bg-slate-800" asChild>
          <Link href="/contact">Request integration access</Link>
        </Button>
      }
    >
      <div className="grid gap-6 md:grid-cols-2">
        {pillars.map(({ icon: Icon, title, body }) => (
          <div key={title} className="site-surface-card rounded-[var(--site-radius)] p-6 sm:p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-slate-950">{title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[var(--site-radius)] border border-slate-200 bg-slate-950 p-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300/90">Sandbox</p>
          <h3 className="mt-3 text-xl font-semibold">Try the shape before you commit</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            We provide sample payloads mirroring production fields. Rotate keys freely; production promotion is a short review away.
          </p>
          <Button variant="secondary" className="mt-6 rounded-full bg-white text-slate-950 hover:bg-slate-100" asChild>
            <Link href="/status">Check API status</Link>
          </Button>
        </div>
        <div className="site-surface-card rounded-[var(--site-radius)] p-8">
          <h3 className="text-lg font-semibold text-slate-950">Support channels</h3>
          <ul className="mt-4 space-y-4 text-sm text-slate-600">
            <li>
              <span className="font-semibold text-slate-950">Technical partnerships:</span> architecture reviews, SLAs, and co-branded launches.
            </li>
            <li>
              <span className="font-semibold text-slate-950">Compliance:</span> DPIA templates, subprocessors list, and regional hosting notes on request.
            </li>
            <li>
              <span className="font-semibold text-slate-950">Office hours:</span> Thursdays · 15:00 UTC · open Zoom for integrators.
            </li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
