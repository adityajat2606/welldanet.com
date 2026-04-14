import Link from 'next/link'
import { Activity, CheckCircle2, Radio } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'
import { Badge } from '@/components/ui/badge'

const services = [
  { name: 'Directory & search', detail: 'Core query path, ranking, and autosuggest', status: 'Operational' as const },
  { name: 'Listing pages & media', detail: 'Detail views, galleries, structured metadata', status: 'Operational' as const },
  { name: 'Auth & owner tools', detail: 'Sign-in, claims, saves, notifications', status: 'Operational' as const },
  { name: 'Partner API', detail: 'Feeds, keys, and sandbox parity', status: 'Operational' as const },
]

const incidents = [
  { date: 'Apr 2, 2026', title: 'Elevated latency in EU search cluster', status: 'Resolved', summary: 'Traffic spike during holiday weekend; autoscaling rules updated.' },
  { date: 'Mar 12, 2026', title: 'Slower listing search results', status: 'Resolved', summary: 'Index rebuild; cache warming improved p95 by 38%.' },
  { date: 'Feb 22, 2026', title: 'Category filter delay', status: 'Resolved', summary: 'Edge config rollback; root cause traced to stale CDN fragment.' },
]

export default function StatusPage() {
  return (
    <PageShell
      heroAccent
      eyebrow="Status"
      title="Live health for discovery, publishing, and APIs"
      description="We publish incidents here first—before social—so integrators and owners share one timeline. Subscribe via your monitoring tool of choice."
      actions={
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-50"
        >
          Report an issue
        </Link>
      }
    >
      <div className="mb-8 flex flex-wrap items-center gap-3 rounded-[var(--site-radius)] border border-emerald-200/80 bg-emerald-50/60 px-5 py-4 text-sm text-emerald-950">
        <CheckCircle2 className="h-5 w-5 shrink-0" />
        <span className="font-semibold">All systems operational</span>
        <span className="text-emerald-800/90">Last checked · {new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <div key={service.name} className="site-surface-card rounded-[var(--site-radius)] p-5">
            <div className="flex items-start justify-between gap-2">
              <Radio className="h-5 w-5 text-primary" />
              <Badge className="rounded-full bg-emerald-600 text-white hover:bg-emerald-600">{service.status}</Badge>
            </div>
            <h2 className="mt-4 text-base font-semibold text-slate-950">{service.name}</h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">{service.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 site-surface-card rounded-[var(--site-radius)] p-6 sm:p-8">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-slate-950">Incident history</h3>
        </div>
        <p className="mt-2 text-sm text-slate-600">Ninety-day rolling window. Older entries available for enterprise partners on request.</p>
        <div className="mt-6 space-y-4">
          {incidents.map((incident) => (
            <div key={incident.title} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{incident.date}</span>
                <Badge variant="secondary" className="rounded-full">{incident.status}</Badge>
              </div>
              <p className="mt-2 font-medium text-slate-950">{incident.title}</p>
              <p className="mt-2 text-sm text-slate-600">{incident.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
