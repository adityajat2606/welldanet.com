import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { PageShell } from "@/components/shared/page-shell";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockTeamMembers } from "@/data/mock-data";
import { SITE_CONFIG } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";

const disciplines = [
  { title: "Product & design", body: "Research-led flows, accessible UI, and pacing that keeps directory tasks lightweight." },
  { title: "Engineering", body: "Performance, resilient search, and safe releases so owners see improvements without surprises." },
  { title: "Partnerships", body: "City programs, integrations, and co-marketing that grow coverage with clear attribution." },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: "/team",
    title: `Team | ${SITE_CONFIG.name}`,
    description: `Meet the people designing and operating ${SITE_CONFIG.name}—product, engineering, and local partnerships.`,
  });
}

export default function TeamPage() {
  return (
    <PageShell
      heroAccent
      eyebrow="Team"
      title="Builders, curators, and partners in one crew"
      description={`We run ${SITE_CONFIG.name} as a cross-functional team—fewer handoffs, faster decisions, and a shared bar for craft.`}
      actions={
        <>
          <Button variant="outline" className="rounded-full border-slate-200 bg-white" asChild>
            <Link href="/about">Our story</Link>
          </Button>
          <Button className="rounded-full bg-slate-950 text-white hover:bg-slate-800" asChild>
            <Link href="/contact" className="inline-flex items-center gap-2">
              Contact us
              <MessageCircle className="h-4 w-4" />
            </Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {disciplines.map((d) => (
          <div key={d.title} className="site-surface-card rounded-[var(--site-radius)] p-6">
            <h2 className="text-lg font-semibold text-slate-950">{d.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{d.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Leadership & leads</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Who you will meet</h2>
          </div>
          <Link href="/careers" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:opacity-80">
            We are hiring
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockTeamMembers.map((member) => (
            <div key={member.id} className="group site-surface-card rounded-[var(--site-radius)] p-6 transition-transform duration-200 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16 border border-slate-100">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-slate-950">{member.name}</p>
                  <p className="text-xs font-medium uppercase tracking-wide text-primary">{member.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{member.bio}</p>
              <p className="mt-3 text-xs text-slate-500">{member.location}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
