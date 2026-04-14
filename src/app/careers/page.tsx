import Link from "next/link";
import { ArrowRight, Clock, Heart, Laptop } from "lucide-react";
import { PageShell } from "@/components/shared/page-shell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/site-config";

const roles = [
  { title: "Senior product designer", location: "Remote · Americas", type: "Full-time", level: "Senior", focus: "Systems thinking for discovery, owner dashboards, and partner white-label surfaces." },
  { title: "Full-stack engineer", location: "Remote · EU friendly", type: "Full-time", level: "Mid", focus: "Search performance, media pipelines, and resilient APIs for high-traffic listing pages." },
  { title: "Partner success lead", location: "Hybrid · Madrid", type: "Full-time", level: "Lead", focus: "City pilots, onboarding playbooks, and co-marketing with regional business groups." },
  { title: "Content strategist", location: "Remote", type: "Contract", level: "Senior", focus: "Editorial guides, SEO-ready templates, and tone that matches our calm directory aesthetic." },
];

const perks = [
  { icon: Laptop, title: "Remote-first", body: "Core hours overlap, async by default, stipend for home office and connectivity." },
  { icon: Heart, title: "Care coverage", body: "Health, dental, and mental wellness allowances scaled to your region." },
  { icon: Clock, title: "Learning time", body: "Dedicated Fridays for exploration, internal demos, and open-source contributions." },
];

export default function CareersPage() {
  return (
    <PageShell
      heroAccent
      eyebrow="Careers"
      title="Help us connect ideas into shipped solutions"
      description={`${SITE_CONFIG.name} is growing. We need people who care about local economies, crisp UX, and dependable infrastructure.`}
      actions={
        <Button className="rounded-full bg-slate-950 text-white hover:bg-slate-800" asChild>
          <Link href="/contact" className="inline-flex items-center gap-2">
            Introduce yourself
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5">
          {roles.map((role) => (
            <div key={role.title} className="site-surface-card rounded-[var(--site-radius)] p-6 sm:p-7">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="rounded-full bg-slate-950 text-white">{role.level}</Badge>
                <Badge variant="outline" className="rounded-full border-slate-200">{role.type}</Badge>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-slate-950">{role.title}</h2>
              <p className="mt-1 text-sm text-slate-500">{role.location}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{role.focus}</p>
              <Button variant="outline" className="mt-5 rounded-full border-slate-200" asChild>
                <Link href="/contact">Discuss this role</Link>
              </Button>
            </div>
          ))}
        </div>
        <aside className="space-y-6">
          <div className="site-surface-card rounded-[var(--site-radius)] p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-slate-950">Interview path</h3>
            <ol className="mt-4 space-y-4 text-sm text-slate-600">
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">1</span>
                <span>Intro call with hiring manager—goals, scope, and ways of working.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">2</span>
                <span>Skills conversation or portfolio review tailored to the role.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">3</span>
                <span>Collaborative session with future teammates—no trivia, real problems.</span>
              </li>
            </ol>
          </div>
          <div className="rounded-[var(--site-radius)] border border-slate-200 bg-slate-50/80 p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-slate-950">Life at {SITE_CONFIG.name}</h3>
            <ul className="mt-5 space-y-4">
              {perks.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-slate-950">{title}</p>
                    <p className="mt-1 text-sm text-slate-600">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
