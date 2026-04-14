import { Building2, Headphones, MapPin, Send } from 'lucide-react'
import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { CONTACT_PAGE_OVERRIDE_ENABLED, ContactPageOverride } from '@/overrides/contact-page'

const listingContactTone = {
  panel: 'border border-slate-200 bg-white shadow-[0_24px_64px_rgba(15,23,42,0.08)]',
  soft: 'border border-slate-200 bg-slate-50/90',
  muted: 'text-slate-600',
  action: 'bg-slate-950 text-white hover:bg-slate-800',
}

const listingContactLanes = [
  {
    icon: Building2,
    title: 'Business & listings',
    body: 'Onboarding, verification, bulk imports, and merchandising for multi-location brands.',
  },
  {
    icon: Headphones,
    title: 'Product support',
    body: 'Search issues, billing, media uploads, and anything blocking your go-live checklist.',
  },
  {
    icon: MapPin,
    title: 'Partnerships & cities',
    body: 'Coverage expansion, co-marketing, data-sharing agreements, and press coordination.',
  },
]

const stats = [
  { value: '< 4h', label: 'Median first reply' },
  { value: '92%', label: 'Issues solved in one thread' },
  { value: '14', label: 'Languages supported' },
]

export default function ContactPage() {
  if (CONTACT_PAGE_OVERRIDE_ENABLED) {
    return <ContactPageOverride />
  }

  const tone = listingContactTone

  return (
    <div className="site-shell">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden border-b border-slate-200/80 bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_100%)]">
          <div className="site-container px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
                  Contact
                </span>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-[3.25rem]">
                  Tell us what you are building—we will route it fast
                </h1>
                <p className={`mt-5 max-w-2xl text-base leading-relaxed ${tone.muted}`}>
                  Whether you are publishing your first listing, syndicating data, or planning a city-wide rollout, include URLs and timelines so {SITE_CONFIG.name} specialists can respond with the right next step.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {stats.map((s) => (
                    <div key={s.label} className={`rounded-2xl p-4 ${tone.soft}`}>
                      <p className="text-2xl font-semibold text-slate-950">{s.value}</p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`rounded-[var(--site-radius)] p-6 lg:p-8 ${tone.panel}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Prefer async?</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Browse self-serve answers first—then send the ticket ID in your message so we can pick up exactly where you left off.
                </p>
                <div className="mt-6 flex flex-col gap-2 text-sm font-semibold">
                  <Link href="/help" className="text-primary hover:opacity-80">
                    Help Center →
                  </Link>
                  <Link href="/status" className="text-primary hover:opacity-80">
                    System status →
                  </Link>
                  <Link href="/developers" className="text-primary hover:opacity-80">
                    Developer guidelines →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="site-container px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Choose a lane</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">We read every message with context</h2>
              <div className="mt-8 space-y-4">
                {listingContactLanes.map((lane) => (
                  <div key={lane.title} className={`rounded-[1.6rem] p-5 sm:p-6 ${tone.soft}`}>
                    <lane.icon className="h-5 w-5 text-primary" />
                    <h3 className="mt-3 text-lg font-semibold text-slate-950">{lane.title}</h3>
                    <p className={`mt-2 text-sm leading-relaxed ${tone.muted}`}>{lane.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`rounded-[2rem] p-7 sm:p-8 ${tone.panel}`}>
              <div className="flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold text-slate-950">Send a message</h2>
              </div>
              <p className="mt-2 text-sm text-slate-600">Fields below are visual only—wire your form handler when backend is ready.</p>
              <form className="mt-6 grid gap-4">
                <input className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 placeholder:text-slate-400" placeholder="Your name" />
                <input className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 placeholder:text-slate-400" placeholder="Email address" />
                <input className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 placeholder:text-slate-400" placeholder="Topic (e.g., verification, API, press)" />
                <textarea className="min-h-[180px] rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400" placeholder="Share URLs, screenshots, and what a great outcome looks like." />
                <button type="submit" className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${tone.action}`}>
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
