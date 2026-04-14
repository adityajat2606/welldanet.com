import type { Metadata } from "next";
import Link from "next/link";
import { Handshake, Megaphone, Users } from "lucide-react";
import { PageShell } from "@/components/shared/page-shell";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";

const circles = [
  {
    icon: Users,
    title: "Neighborhood guides",
    body: "Volunteer curators assemble seasonal lists—outdoor dining, kid-friendly services, late-night eats—with clear sourcing from live listings.",
    cta: { label: "Suggest a guide", href: "/contact" },
  },
  {
    icon: Megaphone,
    title: "Owner roundtables",
    body: "Monthly video sessions on pricing updates, photography swaps, and policy previews. Notes published within 48 hours.",
    cta: { label: "Request invite", href: "/contact" },
  },
  {
    icon: Handshake,
    title: "City partnerships",
    body: "Economic development teams co-create coverage maps, events modules, and compliance-friendly data shares.",
    cta: { label: "Partner with us", href: "/contact" },
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: "/community",
    title: `Community | ${SITE_CONFIG.name}`,
    description: `Programs, guides, and partnerships that keep ${SITE_CONFIG.name} grounded in real neighborhoods.`,
  });
}

export default function CommunityPage() {
  return (
    <PageShell
      heroAccent
      eyebrow="Community"
      title="People, programs, and shared standards"
      description={`${SITE_CONFIG.name} only works when locals, owners, and institutions pull in the same direction. Here is how we host that collaboration.`}
      actions={
        <>
          <Button variant="outline" className="rounded-full border-slate-200 bg-white" asChild>
            <Link href="/blog">Read field notes</Link>
          </Button>
          <Button className="rounded-full bg-slate-950 text-white hover:bg-slate-800" asChild>
            <Link href="/listings">Explore listings</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {circles.map(({ icon: Icon, title, body, cta }) => (
          <div key={title} className="flex flex-col site-surface-card rounded-[var(--site-radius)] p-6 sm:p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-xl font-semibold text-slate-950">{title}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{body}</p>
            <Link href={cta.href} className="mt-6 inline-flex text-sm font-semibold text-primary hover:opacity-80">
              {cta.label} →
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[var(--site-radius)] border border-slate-200 bg-white p-8 shadow-[var(--shadow-soft)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Code of care</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-950">Respect, accuracy, attribution</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            <li>Harassment-free spaces—in comments, events, and owner messaging.</li>
            <li>Fact-check before amplifying; link to authoritative listing pages.</li>
            <li>Credit photographers, writers, and partner orgs by name.</li>
          </ul>
        </div>
        <div className="rounded-[var(--site-radius)] border border-primary/20 bg-gradient-to-br from-primary/5 to-white p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Impact snapshot</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-950">Community-led wins</h3>
          <dl className="mt-6 grid grid-cols-2 gap-6">
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500">Guides published</dt>
              <dd className="mt-1 text-3xl font-semibold text-slate-950">120+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500">Cities with partners</dt>
              <dd className="mt-1 text-3xl font-semibold text-slate-950">38</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500">Office hours hosted</dt>
              <dd className="mt-1 text-3xl font-semibold text-slate-950">210</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500">Volunteer hours</dt>
              <dd className="mt-1 text-3xl font-semibold text-slate-950">4.5k</dd>
            </div>
          </dl>
        </div>
      </div>
    </PageShell>
  );
}
