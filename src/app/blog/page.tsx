import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, LineChart, MapPin } from "lucide-react";
import { PageShell } from "@/components/shared/page-shell";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";

const featured = {
  title: "The quiet playbook for trustworthy listings",
  dek: "How accurate hours, human-written descriptions, and structured categories compound into better discovery—without gaming the algorithm.",
  readTime: "8 min read",
};

const columns = [
  {
    icon: MapPin,
    title: "Local discovery lab",
    posts: [
      { title: "Photography that converts on mobile", body: "Aspect ratios, lighting, and caption patterns that keep cards scannable in one thumb scroll." },
      { title: "Seasonal refreshes owners actually finish", body: "Checklists for holidays, pop-ups, and limited menus that sync with search demand curves." },
    ],
  },
  {
    icon: LineChart,
    title: "Growth & measurement",
    posts: [
      { title: "Beyond vanity clicks: quality signals", body: "Saves, return visits, and completed actions tell a clearer story than raw traffic spikes." },
      { title: "Attribution when listings live everywhere", body: "UTM hygiene, partner embeds, and consistent branding across syndicated surfaces." },
    ],
  },
  {
    icon: BookOpen,
    title: "Product notes",
    posts: [
      { title: "Designing calmer filters", body: "Progressive disclosure, chip patterns, and map handoffs that mirror our home page rhythm." },
      { title: "Accessibility for dense directories", body: "Focus order, contrast, and screen reader labels that scale across thousands of cards." },
    ],
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: "/blog",
    title: `Insights & guides | ${SITE_CONFIG.name}`,
    description: `Ideas, field notes, and practical guides from the ${SITE_CONFIG.name} team—listings, discovery, and partnerships.`,
  });
}

export default function BlogPage() {
  return (
    <PageShell
      heroAccent
      eyebrow="Blog & field notes"
      title="Ideas worth shipping—then measuring"
      description="Longer perspectives and tactical guides for teams who care about local trust, not just impressions."
      actions={
        <Button variant="outline" className="rounded-full border-slate-200 bg-white" asChild>
          <Link href="/listings" className="inline-flex items-center gap-2">
            Browse live examples
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      }
    >
      <div className="site-surface-card overflow-hidden rounded-[var(--site-radius)]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border-b border-slate-100 bg-gradient-to-br from-primary/10 via-white to-slate-50 p-8 sm:p-10 lg:border-b-0 lg:border-r">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Featured</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{featured.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{featured.dek}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">{featured.readTime}</p>
            <Button className="mt-6 rounded-full bg-slate-950 text-white hover:bg-slate-800" asChild>
              <Link href="/contact">Notify me when it drops</Link>
            </Button>
          </div>
          <div className="flex flex-col justify-center gap-4 p-8 sm:p-10">
            <p className="text-sm text-slate-600">
              We publish on a steady cadence—deep dives alternate with short tactical memos. Want a topic covered?{" "}
              <Link href="/contact" className="font-semibold text-primary underline-offset-4 hover:underline">
                Pitch us a story angle
              </Link>
              .
            </p>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-sm text-slate-600">
              <span className="font-semibold text-slate-950">Newsletter (soon):</span> one digest per month—no listicles, no fluff.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {columns.map((col) => (
          <div key={col.title}>
            <div className="flex items-center gap-2 text-slate-950">
              <col.icon className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">{col.title}</h2>
            </div>
            <div className="mt-5 space-y-4">
              {col.posts.map((post) => (
                <div key={post.title} className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm transition-transform hover:-translate-y-0.5">
                  <h3 className="font-semibold text-slate-950">{post.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{post.body}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-slate-600">
        Need implementation help today?{" "}
        <Link href="/help" className="font-semibold text-primary underline-offset-4 hover:underline">
          Help Center
        </Link>{" "}
        ·{" "}
        <Link href="/developers" className="font-semibold text-primary underline-offset-4 hover:underline">
          Developer notes
        </Link>
      </p>
    </PageShell>
  );
}
