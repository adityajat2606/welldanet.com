import Link from 'next/link'
import { Cookie, Gauge, SlidersHorizontal } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'

const types = [
  {
    icon: Cookie,
    title: 'Strictly necessary',
    body: 'Authentication, CSRF protection, load balancing, and fraud prevention. These cannot be toggled off without breaking core flows.',
  },
  {
    icon: Gauge,
    title: 'Analytics & diagnostics',
    body: 'Aggregated usage to understand search success, error rates, and device classes. IPs may be truncated; no sale of browsing history.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Preferences',
    body: 'Remember filters, map zoom, language, and UI density. Stored locally when possible; synced to your account when signed in.',
  },
]

const lifecycle = [
  { title: 'Consent regions', body: 'Where required, we surface a consent banner on first visit with granular toggles for non-essential categories.' },
  { title: 'Duration', body: 'Session cookies expire when you close the browser; persistent cookies range from 30 days to 12 months depending on purpose.' },
  { title: 'Third parties', body: 'Embedded maps or media players may set their own cookies—review their policies when you interact with those modules.' },
]

export default function CookiesPage() {
  return (
    <PageShell
      heroAccent
      eyebrow="Legal"
      title="Cookie Policy"
      description="What hits your browser when you use our directory, why each category exists, and how to adjust your choices without losing essential safety features."
      actions={
        <Link href="/privacy" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
          Privacy Policy →
        </Link>
      }
    >
      <p className="mb-8 text-xs font-medium uppercase tracking-wide text-slate-500">Last updated · April 14, 2026</p>

      <div className="grid gap-6 md:grid-cols-3">
        {types.map(({ icon: Icon, title, body }) => (
          <div key={title} className="site-surface-card rounded-[var(--site-radius)] p-6">
            <Icon className="h-6 w-6 text-primary" />
            <h2 className="mt-4 text-lg font-semibold text-slate-950">{title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {lifecycle.map((row) => (
          <div key={row.title} className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/80 p-5">
            <h3 className="font-semibold text-slate-950">{row.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{row.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-[var(--site-radius)] border border-primary/20 bg-primary/5 p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-slate-950">Need help updating preferences?</h3>
        <p className="mt-2 text-sm text-slate-600">
          Signed-in users can revisit cookie choices from account settings (when enabled for your region). Otherwise{" "}
          <Link href="/contact" className="font-semibold text-primary underline-offset-4 hover:underline">
            contact support
          </Link>{" "}
          and include your browser version—we will walk you through manual steps.
        </p>
      </div>
    </PageShell>
  )
}
