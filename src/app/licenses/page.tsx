import Link from 'next/link'
import { ExternalLink, Package } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'

const stack = [
  { name: 'Next.js', license: 'MIT', href: 'https://github.com/vercel/next.js/blob/canary/license.md' },
  { name: 'React', license: 'MIT', href: 'https://github.com/facebook/react/blob/main/LICENSE' },
  { name: 'Tailwind CSS', license: 'MIT', href: 'https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE' },
  { name: 'Lucide Icons', license: 'ISC', href: 'https://lucide.dev/license' },
  { name: 'Radix UI', license: 'MIT', href: 'https://github.com/radix-ui/primitives/blob/main/LICENSE' },
  { name: 'Zod', license: 'MIT', href: 'https://github.com/colinhacks/zod/blob/master/LICENSE' },
]

export default function LicensesPage() {
  return (
    <PageShell
      heroAccent
      eyebrow="Open source"
      title="Licenses & acknowledgments"
      description="We ship on top of extraordinary community software. Below are the primary packages powering this experience—each remains under its upstream license."
      actions={
        <Link
          href="https://opensource.org/licenses/MIT"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:opacity-80"
        >
          MIT summary
          <ExternalLink className="h-4 w-4" />
        </Link>
      }
    >
      <div className="site-surface-card overflow-hidden rounded-[var(--site-radius)]">
        <div className="grid border-b border-slate-100 bg-slate-50/80 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:grid-cols-[1.2fr_0.5fr_0.5fr]">
          <span>Package</span>
          <span className="hidden sm:block">License</span>
          <span className="hidden sm:block">Upstream</span>
        </div>
        {stack.map((row) => (
          <div
            key={row.name}
            className="grid gap-2 border-b border-slate-100 px-6 py-4 last:border-b-0 sm:grid-cols-[1.2fr_0.5fr_0.5fr] sm:items-center"
          >
            <div className="flex items-center gap-2 font-semibold text-slate-950">
              <Package className="h-4 w-4 text-primary" />
              {row.name}
            </div>
            <span className="text-sm text-slate-600">{row.license}</span>
            <Link href={row.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:opacity-80">
              View
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-slate-600">
        Full dependency notices ship with production builds. For compliance packets, use the{" "}
        <Link href="/contact" className="font-semibold text-primary underline-offset-4 hover:underline">
          contact form
        </Link>{" "}
        with your company name and jurisdiction.
      </p>
    </PageShell>
  )
}
