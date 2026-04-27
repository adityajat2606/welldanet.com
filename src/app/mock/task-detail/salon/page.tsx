import Link from 'next/link'
import { ArrowRight, CalendarClock, CheckCircle2, Clock3, Globe, Mail, MapPin, Phone, Scissors, Star, Tag } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ContentImage } from '@/components/shared/content-image'

const mockTask = {
  title: 'Halo Studio Salon & Spa',
  category: 'Salon & Spa',
  rating: 4.8,
  reviews: 538,
  location: 'Koramangala 5th Block, Bengaluru',
  phone: '+91 99002 22558',
  email: 'bookings@halostudio.example',
  website: 'https://halostudio.example',
  summary:
    'Halo Studio offers hair styling, skin treatments, and bridal packages with experienced artists, premium products, and personalized appointments.',
  highlights: ['Certified stylists and therapists', 'Bridal and event-ready packages', 'Dedicated lounge and refreshments', 'Online pre-booking with reminder alerts'],
  hours: [
    ['Mon-Fri', '10:00 AM - 9:00 PM'],
    ['Saturday', '9:00 AM - 9:30 PM'],
    ['Sunday', '9:00 AM - 8:00 PM'],
  ],
  services: ['Haircut and styling', 'Hair color and highlights', 'Skin cleanup and facials', 'Nail art and extensions', 'Bridal makeup', 'Head and shoulder spa'],
  heroImage: '/placeholder.svg?height=900&width=1400',
  gallery: [
    '/placeholder.svg?height=480&width=640',
    '/placeholder.svg?height=480&width=640',
    '/placeholder.svg?height=480&width=640',
    '/placeholder.svg?height=480&width=640',
  ],
}

export default function SalonMockTaskDetailPage() {
  return (
    <PageShell heroAccent eyebrow="Mock Detail" title="Salon Detail Mock" description="A beauty and salon mock detail page for appointment-first local business flows.">
      <div className="mb-6 flex flex-wrap gap-2">
        <Link href="/mock/task-detail" className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 hover:bg-slate-50">Clinic</Link>
        <Link href="/mock/task-detail/restaurant" className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 hover:bg-slate-50">Restaurant</Link>
        <Link href="/mock/task-detail/legal-office" className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 hover:bg-slate-50">Legal Office</Link>
        <Link href="/mock/task-detail/salon" className="inline-flex items-center rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white">Salon</Link>
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
                  <Badge variant="secondary" className="rounded-full bg-slate-900/75 text-white"><Scissors className="mr-1 h-3.5 w-3.5" />Premium Studio</Badge>
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
            <h2 className="text-xl font-semibold text-slate-950">Popular Services</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {mockTask.services.map((service) => (
                <div key={service} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">{service}</div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="site-surface-card rounded-[var(--site-radius)] p-6">
            <h2 className="text-lg font-semibold text-slate-950">Appointments</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-slate-500" /><span>{mockTask.location}</span></div>
              <div className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-slate-500" /><a href={`tel:${mockTask.phone}`} className="hover:underline">{mockTask.phone}</a></div>
              <div className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-slate-500" /><a href={`mailto:${mockTask.email}`} className="break-all hover:underline">{mockTask.email}</a></div>
              <div className="flex items-start gap-2"><Globe className="mt-0.5 h-4 w-4 text-slate-500" /><a href={mockTask.website} target="_blank" rel="noreferrer" className="break-all hover:underline">{mockTask.website}</a></div>
            </div>
            <div className="mt-5 grid gap-2">
              <Button asChild><a href={mockTask.website} target="_blank" rel="noreferrer">Book Session <ArrowRight className="ml-1 h-4 w-4" /></a></Button>
              <Button variant="outline" asChild><a href={`https://maps.google.com/?q=${encodeURIComponent(mockTask.location)}`} target="_blank" rel="noreferrer">Get Directions</a></Button>
            </div>
          </section>

          <section className="site-surface-card rounded-[var(--site-radius)] p-6">
            <h2 className="text-lg font-semibold text-slate-950">Working Hours</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              {mockTask.hours.map(([day, time]) => (
                <div key={day} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                  <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-slate-500" />{day}</span>
                  <span className="font-medium text-slate-900">{time}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800"><CalendarClock className="h-3.5 w-3.5" />Next slot opens at 4:45 PM</p>
          </section>
        </aside>
      </div>
    </PageShell>
  )
}
