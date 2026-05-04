'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Compass, Globe, Mail, MapPin, Phone, ShieldCheck, Tag, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { TaskPostCard } from '@/components/shared/task-post-card'
import { RichContent, formatRichHtml } from '@/components/shared/rich-content'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'

export function DirectoryTaskDetailPage({
  task,
  taskLabel,
  taskRoute,
  post,
  description,
  category,
  images,
  mapEmbedUrl,
  related,
}: {
  task: TaskKey
  taskLabel: string
  taskRoute: string
  post: SitePost
  description: string
  category: string
  images: string[]
  mapEmbedUrl: string | null
  related: SitePost[]
}) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const location = typeof content.address === 'string' ? content.address : typeof content.location === 'string' ? content.location : ''
  const website = typeof content.website === 'string' ? content.website : ''
  const phone = typeof content.phone === 'string' ? content.phone : ''
  const email = typeof content.email === 'string' ? content.email : ''
  const highlights = Array.isArray(content.highlights) ? content.highlights.filter((item): item is string => typeof item === 'string') : []
  const categoryLabel = category || taskLabel
  const hasContactDetails = Boolean(location || phone || email || website)
  const websiteHref = website && /^https?:\/\//i.test(website) ? website : website ? `https://${website}` : ''
  const directionsHref = location ? `https://maps.google.com/?q=${encodeURIComponent(location)}` : ''
  const schemaPayload = {
    '@context': 'https://schema.org',
    '@type': task === 'profile' ? 'Organization' : 'LocalBusiness',
    name: post.title,
    description,
    image: images[0],
    url: `${taskRoute}/${post.slug}`,
    address: location || undefined,
    telephone: phone || undefined,
    email: email || undefined,
  }

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="site-shell">
      <SchemaJsonLd data={schemaPayload} />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Link href={taskRoute} className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950">
          Back to {taskLabel}
        </Link>

        {/* Hero Header Section */}
        <div className="mb-8 rounded-[2.2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-950 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  <Tag className="h-3.5 w-3.5" />
                  {categoryLabel}
                </span>
                {location ? (
                  <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                    <MapPin className="h-3.5 w-3.5" />
                    Local listing
                  </span>
                ) : null}
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  <ShieldCheck className="h-3.5 w-3.5" /> Verified
                </span>
              </div>
              <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] lg:text-5xl">{post.title}</h1>
            </div>
            <div className="flex gap-3 lg:flex-col lg:gap-2">
              {websiteHref ? (
                <a
                  href={websiteHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
                >
                  Visit website <ArrowRight className="h-4 w-4" />
                </a>
              ) : null}
              {phone ? (
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition-colors"
                >
                  Call now
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-8">
            {/* Image Gallery */}
            <div className="overflow-hidden rounded-[2.2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
              <div
                className="relative aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => openLightbox(0)}
              >
                <ContentImage src={images[0]} alt={post.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
              </div>
              {images.length > 1 ? (
                <div className="grid grid-cols-4 gap-3 p-4">
                  {images.slice(1, 5).map((image, idx) => (
                    <div
                      key={image}
                      className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 cursor-pointer hover:ring-2 hover:ring-slate-300 transition-all"
                      onClick={() => openLightbox(idx + 1)}
                    >
                      <ContentImage src={image} alt={post.title} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            {/* Image Lightbox */}
            {lightboxOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                onClick={closeLightbox}
              >
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Close lightbox"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Navigation - Previous */}
                {images.length > 1 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                )}

                {/* Navigation - Next */}
                {images.length > 1 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); goToNext(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                )}

                {/* Image Counter */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                )}

                {/* Main Image */}
                <div
                  className="relative max-h-[85vh] max-w-[90vw]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={images[currentImageIndex]}
                    alt={`${post.title} - Image ${currentImageIndex + 1}`}
                    className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
                  />
                </div>
              </div>
            )}

            {/* About Section */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">About this {task}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Overview</h2>
              <RichContent html={formatRichHtml(description, 'Details coming soon.')} className="mt-4 text-base leading-8 text-slate-600" />
              {highlights.length ? (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-slate-900">Key Highlights</h3>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {highlights.slice(0, 6).map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-[1.4rem] border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {/* Map Section */}
            {mapEmbedUrl ? (
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                <div className="border-b border-slate-200 px-6 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Location</p>
                </div>
                <iframe src={mapEmbedUrl} title={`${post.title} map`} className="h-[360px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            ) : null}
          </div>

          <div className="space-y-6 lg:sticky lg:top-24">
            {/* Contact Details Card */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Contact Information</p>
              <div className="mt-5 space-y-4">
                {location ? (
                  <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-slate-600" />
                    <span className="font-medium">{location}</span>
                  </div>
                ) : null}
                {phone ? (
                  <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-slate-600" />
                    <span className="font-medium">{phone}</span>
                  </div>
                ) : null}
                {email ? (
                  <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-slate-600" />
                    <a href={`mailto:${email}`} className="font-medium text-slate-900 hover:underline">{email}</a>
                  </div>
                ) : null}
                {website ? (
                  <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700">
                    <Globe className="mt-0.5 h-5 w-5 shrink-0 text-slate-600" />
                    <a href={websiteHref} target="_blank" rel="noreferrer" className="font-medium text-slate-900 hover:underline truncate">{website}</a>
                  </div>
                ) : null}
              </div>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {email ? (
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition-colors"
                  >
                    Send email
                  </a>
                ) : null}
                {directionsHref ? (
                  <a
                    href={directionsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition-colors"
                  >
                    Directions <Compass className="h-4 w-4" />
                  </a>
                ) : null}
                <Link href={taskRoute} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition-colors sm:col-span-2">
                  Browse more {taskLabel}
                </Link>
              </div>
            </div>

            {/* Trust Cues Card */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Trust & Verification</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  hasContactDetails ? 'Contact details available' : 'Contact details can be requested',
                  website ? 'Website reference included' : 'No public website listed',
                  mapEmbedUrl ? 'Map and location cues' : 'Location context from listing',
                  related.length ? `${related.length} related matches nearby` : 'Explore more listings',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 rounded-[1.3rem] border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {related.length ? (
          <section className="mt-14">
            <div className="flex items-end justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Related surfaces</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Continue with nearby matches.</h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                <Tag className="h-3.5 w-3.5" /> {taskLabel}
              </span>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {related.map((item) => (
                <TaskPostCard key={item.id} post={item} href={`${taskRoute}/${item.slug}`} taskKey={task} />
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </div>
  )
}
