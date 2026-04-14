import Link from 'next/link'
import { LifeBuoy, Search, ShieldCheck } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { mockFaqs } from '@/data/mock-data'

const journeys = [
  {
    icon: Search,
    title: 'Find the right listing',
    body: 'Start broad with category chips, narrow with location, then compare cards side-by-side. Saves sync when you sign in.',
    links: [
      { label: 'Search tips', href: '/listings' },
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Claim & verify a business',
    body: 'Proof of ownership keeps duplicates down. We walk you through documents, phone PIN, or domain email—pick what fits.',
    links: [
      { label: 'Contact verification', href: '/contact' },
    ],
  },
  {
    icon: LifeBuoy,
    title: 'Get unstuck fast',
    body: 'Priority routing for outages, billing, or policy questions. Include URLs and screenshots so we can reproduce in one pass.',
    links: [
      { label: 'System status', href: '/status' },
    ],
  },
]

export default function HelpPage() {
  return (
    <PageShell
      heroAccent
      eyebrow="Help Center"
      title="Answers that match how you actually use the product"
      description="Pick your lane—discovery, publishing, or integrations. Each path links to the next best action so you are not bounced between generic forms."
      actions={
        <Button className="rounded-full bg-slate-950 text-white hover:bg-slate-800" asChild>
          <Link href="/contact">Contact support</Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {journeys.map(({ icon: Icon, title, body, links }) => (
          <div key={title} className="site-surface-card flex flex-col rounded-[var(--site-radius)] p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-slate-950">{title}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{body}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="text-sm font-semibold text-primary hover:opacity-80">
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.05fr]">
        <div className="rounded-[var(--site-radius)] border border-slate-200 bg-gradient-to-b from-white to-slate-50/80 p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-slate-950">Popular this week</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            <li className="flex justify-between gap-4 border-b border-slate-100 pb-3">
              <span>Resetting owner access</span>
              <span className="shrink-0 text-xs uppercase tracking-wide text-slate-400">2 min</span>
            </li>
            <li className="flex justify-between gap-4 border-b border-slate-100 pb-3">
              <span>Photo size & formats</span>
              <span className="shrink-0 text-xs uppercase tracking-wide text-slate-400">3 min</span>
            </li>
            <li className="flex justify-between gap-4 border-b border-slate-100 pb-3">
              <span>Embedding listings externally</span>
              <span className="shrink-0 text-xs uppercase tracking-wide text-slate-400">5 min</span>
            </li>
            <li className="flex justify-between gap-4 pt-1">
              <span>Cookie & privacy controls</span>
              <span className="shrink-0 text-xs uppercase tracking-wide text-slate-400">4 min</span>
            </li>
          </ul>
        </div>
        <div className="site-surface-card rounded-[var(--site-radius)] p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-slate-950">FAQ</h3>
          <Accordion type="single" collapsible className="mt-4">
            {mockFaqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-slate-200">
                <AccordionTrigger className="text-left text-slate-950 hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-slate-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </PageShell>
  )
}
