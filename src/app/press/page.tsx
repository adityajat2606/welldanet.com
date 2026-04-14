'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Download, Newspaper } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'
import { mockPressAssets, mockPressCoverage } from '@/data/mock-data'

export default function PressPage() {
  const { toast } = useToast()
  const [activeAssetId, setActiveAssetId] = useState<string | null>(null)
  const activeAsset = mockPressAssets.find((asset) => asset.id === activeAssetId)

  return (
    <PageShell
      heroAccent
      eyebrow="Press"
      title="Brand assets, facts, and coverage in one lane"
      description="Journalists, producers, and conference organizers: grab approved visuals, short product descriptions, and leadership bios—then reach us for quotes or data checks."
      actions={
        <Button variant="outline" className="rounded-full border-slate-200 bg-white" asChild>
          <Link href="/contact" className="inline-flex items-center gap-2">
            <Newspaper className="h-4 w-4" />
            Request a briefing
          </Link>
        </Button>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="site-surface-card rounded-[var(--site-radius)] p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-slate-950">Press kit</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Logos lock to our primary wordmark on light backgrounds. Screenshots reflect the latest directory UI—swap seasonally when we publish refreshes.
          </p>
          <div className="mt-6 space-y-3">
            {mockPressAssets.map((asset) => (
              <div key={asset.id} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 sm:p-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="font-semibold text-slate-950">{asset.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{asset.description}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="rounded-full">{asset.fileType}</Badge>
                    <Button size="sm" variant="outline" className="rounded-full" onClick={() => setActiveAssetId(asset.id)}>
                      Preview
                    </Button>
                    <Button
                      size="sm"
                      className="rounded-full bg-slate-950 text-white hover:bg-slate-800"
                      onClick={() =>
                        toast({
                          title: 'Download started',
                          description: `${asset.title} is downloading.`,
                        })
                      }
                    >
                      <Download className="mr-1 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Recent coverage</h2>
          <div className="mt-4 space-y-4">
            {mockPressCoverage.map((item) => (
              <div
                key={item.id}
                className="site-surface-card rounded-[var(--site-radius)] p-5 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">{item.outlet}</p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-slate-950">{item.headline}</p>
                <p className="mt-2 text-xs text-slate-500">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-[var(--site-radius)] border border-slate-200 bg-gradient-to-r from-primary/10 via-white to-slate-50 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Fact sheet</p>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Need verified metrics, leadership spelling, or boilerplate in Spanish and English? We respond same-day during business hours in CET and US Eastern.
          </p>
        </div>
        <Button className="mt-4 shrink-0 rounded-full bg-slate-950 text-white hover:bg-slate-800 sm:mt-0" asChild>
          <Link href="/contact">Email the press desk</Link>
        </Button>
      </div>

      <Dialog open={Boolean(activeAsset)} onOpenChange={() => setActiveAssetId(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{activeAsset?.title}</DialogTitle>
          </DialogHeader>
          {activeAsset?.previewUrl && (
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-muted">
              <Image
                src={activeAsset.previewUrl}
                alt={activeAsset.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <p className="text-sm text-muted-foreground">{activeAsset?.description}</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setActiveAssetId(null)}>
              Close
            </Button>
            <Button
              className="bg-slate-950 text-white hover:bg-slate-800"
              onClick={() =>
                toast({
                  title: 'Download started',
                  description: `${activeAsset?.title} is downloading.`,
                })
              }
            >
              Download {activeAsset?.fileType}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageShell>
  )
}
