import Link from 'next/link'
import { Eye, FileKey, Shield } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'

const sections = [
  {
    icon: FileKey,
    title: 'Information we collect',
    body: 'Account identifiers, listing content you submit (names, addresses, hours, photos, pricing hints), device and log data for security, and support transcripts when you contact us.',
  },
  {
    icon: Eye,
    title: 'How we use information',
    body: 'To render and rank listings, prevent fraud, improve search quality, send operational emails, and comply with law. We do not sell personal data to brokers.',
  },
  {
    icon: Shield,
    title: 'Your controls',
    body: 'Access, correct, export, or delete your account and listing payloads where law permits. Object to certain processing via the contact page with your handle and relevant URLs.',
  },
]

const practices = [
  { title: 'Retention', body: 'Logs roll after 90 days by default; billing records follow tax requirements. Deleted listings purge from active indexes within 72 hours.' },
  { title: 'Subprocessors', body: 'Hosting, email, analytics, and error tracking vendors are reviewed quarterly. A current list ships with enterprise agreements.' },
  { title: 'International transfers', body: 'We use standard contractual clauses where GDPR applies and document transfer impact assessments for new regions.' },
]

export default function PrivacyPage() {
  return (
    <PageShell
      heroAccent
      eyebrow="Legal"
      title="Privacy Policy"
      description="Plain-language summary of what we collect, why we process it, and how you can exercise your rights across our directory and partner surfaces."
      actions={
        <Link href="/cookies" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
          Cookie Policy →
        </Link>
      }
    >
      <p className="mb-8 text-xs font-medium uppercase tracking-wide text-slate-500">Last updated · April 14, 2026</p>

      <div className="grid gap-6 lg:grid-cols-3">
        {sections.map(({ icon: Icon, title, body }) => (
          <div key={title} className="site-surface-card rounded-[var(--site-radius)] p-6">
            <Icon className="h-6 w-6 text-primary" />
            <h2 className="mt-4 text-lg font-semibold text-slate-950">{title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {practices.map((p) => (
          <div key={p.title} className="rounded-2xl border border-slate-200 bg-white/80 p-5">
            <h3 className="text-sm font-semibold text-slate-950">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-[var(--site-radius)] border border-slate-200 bg-slate-50/80 p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-slate-950">Contact & data requests</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          For privacy questions or regulated requests, reach us through the{" "}
          <Link href="/contact" className="font-semibold text-primary underline-offset-4 hover:underline">
            contact form
          </Link>{" "}
          with “Privacy” in the subject line. We respond within 30 days unless law requires faster handling.
        </p>
      </div>
    </PageShell>
  )
}
