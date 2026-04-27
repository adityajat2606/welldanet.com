import Link from 'next/link'
import { ArrowRight, BriefcaseBusiness, CalendarClock, CheckCircle2, Clock3, Globe, Mail, MapPin, Phone, Star, Tag } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ContentImage } from '@/components/shared/content-image'

const mockTask = {
  title: 'Mitra & Rao Legal Associates',
  category: 'Legal Services',
  rating: 4.8,
  reviews: 219,
  location: 'Banjara Hills, Hyderabad',
  phone: '+91 90007 11882',
  email: 'consult@mitrarao.example',
  website: 'https://mitrarao.example',
  summary:
    'Mitra & Rao Legal Associates handles corporate compliance, startup contracts, property disputes, and litigation support with transparent consultation workflows.',
  highlights: ['15+ years combined legal practice', 'Fixed-fee consultation options', 'Secure digital document intake', 'English, Hindi, and Telugu support'],
  hours: [
    ['Mon-Fri', '9:30 AM - 7:00 PM'],
    ['Saturday', '10:00 AM - 4:00 PM'],
    ['Sunday', 'Closed'],
  ],
  services: ['Company registration and compliance', 'Contract drafting and review', 'Trademark filing support', 'Civil and property litigation', 'Employment law advisory', 'Legal due diligence'],
  heroImage: '/placeholder.svg?height=900&width=1400',
  gallery: [
    '/placeholder.svg?height=480&width=640',
    '/placeholder.svg?height=480&width=640',
    '/placeholder.svg?height=480&width=640',
    '/placeholder.svg?height=480&width=640',
  ],
}

export default function LegalOfficeMockTaskDetailPage() {
  return (
    <PageShell heroAccent eyebrow="Mock Detail" title="Legal Office Detail Mock" description="A legal-services mock detail page with trust cues, services, and consultation actions.">
      <div className="mb-6 flex flex-wrap gap-2">
        <Link href="/mock/task-detail" className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 hover:bg-slate-50">Clinic</Link>
        <Link href="/mock/task-detail/restaurant" className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 hover:bg-slate-50">Restaurant</Link>
        <Link href="/mock/task-detail/legal-office" className="inline-flex items-center rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white">Legal Office</Link>
        <Link href="/mock/task-detail/salon" className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 hover:bg-slate-50">Salon</Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <section className="site-surface-card overflow-hidden rounded-[var(--site-radius)]">
            <div className="relative h-[340px] sm:h-[420px]">
              <ContentImage src={mockTask.heroImage} alt={mockTask.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="rounded-full bg-white text-slate-950 hover:bg-white"><Tag className="mr-1 h-3.5 w-3.5" />{mockTask.category}</Badge>
                  <Badge variant="secondary" className="rounded-full bg-slate-900/75 text-white"><BriefcaseBusiness className="mr-1 h-3.5 w-3.5" />Professional Practice</Badge>
                </div>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{mockTask.title}</h1>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-100">
                  <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 fill-current text-amber-300" />{mockTask.rating} ({mockTask.reviews} reviews)</span>
                  <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{mockTask.location}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4">
              {mockTask.gallery.map((image, index) => (
                <div key={`${image}-${index}`} className="relative h-24 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                  <ContentImage src={image} alt={`${mockTask.title} gallery ${index + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </section>

          <section className="site-surface-card rounded-[var(--site-radius)] p-6 sm:p-7">
            <h2 className="text-xl font-semibold text-slate-950">About</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{mockTask.summary}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {mockTask.highlights.map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="site-surface-card rounded-[var(--site-radius)] p-6 sm:p-7">
            <h2 className="text-xl font-semibold text-slate-950">Practice Areas</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {mockTask.services.map((service) => (
                <div key={service} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">{service}</div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="site-surface-card rounded-[var(--site-radius)] p-6">
            <h2 className="text-lg font-semibold text-slate-950">Consultation</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-slate-500" /><span>{mockTask.location}</span></div>
              <div className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-slate-500" /><a href={`tel:${mockTask.phone}`} className="hover:underline">{mockTask.phone}</a></div>
              <div className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-slate-500" /><a href={`mailto:${mockTask.email}`} className="break-all hover:underline">{mockTask.email}</a></div>
              <div className="flex items-start gap-2"><Globe className="mt-0.5 h-4 w-4 text-slate-500" /><a href={mockTask.website} target="_blank" rel="noreferrer" className="break-all hover:underline">{mockTask.website}</a></div>
            </div>
            <div className="mt-5 grid gap-2">
              <Button asChild><a href={mockTask.website} target="_blank" rel="noreferrer">Book Consultation <ArrowRight className="ml-1 h-4 w-4" /></a></Button>
              <Button variant="outline" asChild><a href={`mailto:${mockTask.email}`}>Send Case Brief</a></Button>
            </div>
          </section>

          <section className="site-surface-card rounded-[var(--site-radius)] p-6">
            <h2 className="text-lg font-semibold text-slate-950">Office Hours</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              {mockTask.hours.map(([day, time]) => (
                <div key={day} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                  <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-slate-500" />{day}</span>
                  <span className="font-medium text-slate-900">{time}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800"><CalendarClock className="h-3.5 w-3.5" />Consultation slots open this week</p>
          </section>
        </aside>
      </div>
    </PageShell>
  )
}
