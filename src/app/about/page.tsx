import Link from "next/link";
import { ArrowRight, Globe2, Layers, Sparkles, Target } from "lucide-react";
import { PageShell } from "@/components/shared/page-shell";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockTeamMembers } from "@/data/mock-data";
import { SITE_CONFIG } from "@/lib/site-config";

const milestones = [
  { year: "2019", title: "First connections", body: "We started as a small team wiring together local data, search, and owner tools so communities could find real businesses faster." },
  { year: "2022", title: "Platform depth", body: "Expanded categories, richer media, and calmer discovery patterns—built for trust, not noise." },
  { year: "Today", title: "Ideas to solutions", body: "We connect ideas with practical surfaces: listings, guides, and partner-ready experiences that stay easy to maintain." },
];

const principles = [
  { icon: Target, title: "Clarity first", body: "Every screen should answer “what can I do here?” in seconds—whether you are browsing, publishing, or partnering." },
  { icon: Layers, title: "Structured data", body: "Consistent fields and honest metadata power better search, fewer dead ends, and happier owners." },
  { icon: Globe2, title: "Local by design", body: "Coverage, language, and tone respect the neighborhoods we serve—not a one-size template." },
  { icon: Sparkles, title: "Calm craft", body: "We prefer generous spacing, readable type, and soft gradients over clutter—same rhythm as our home experience." },
];

export default function AboutPage() {
  return (
    <PageShell
      heroAccent
      eyebrow="About us"
      title={`We connect ideas. We build what ships.`}
      description={`${SITE_CONFIG.name} exists to turn local intent into confident decisions—clear listings, thoughtful discovery, and tools owners actually use.`}
      actions={
        <>
          <Button variant="outline" className="rounded-full border-slate-200 bg-white" asChild>
            <Link href="/team">Meet the team</Link>
          </Button>
          <Button className="rounded-full bg-slate-950 text-white hover:bg-slate-800" asChild>
            <Link href="/listings" className="inline-flex items-center gap-2">
              Explore listings
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <div className="site-surface-card rounded-[var(--site-radius)] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Story</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">From directory roots to a fuller platform</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Visitors deserve accurate hours, photos, and contact paths. Owners deserve controls that feel modern, not admin-heavy.
            Our roadmap keeps both sides aligned—search that feels fast, cards that feel human, and partnerships that respect attribution.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["12M+", "Monthly discovery sessions"],
              ["40+", "Markets actively curated"],
              ["4.8★", "Owner satisfaction (internal surveys)"],
            ].map(([k, v]) => (
              <div key={v} className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4">
                <p className="text-2xl font-semibold text-slate-950">{k}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{v}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {milestones.map((m) => (
            <div key={m.year} className="site-surface-card rounded-[var(--site-radius)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{m.year}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-950">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">How we work</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Principles behind every release</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {principles.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-[var(--shadow-soft)]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </PageShell>
  );
}
