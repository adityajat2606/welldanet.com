import Link from "next/link";
import { Scale } from "lucide-react";
import { PageShell } from "@/components/shared/page-shell";
import { SITE_CONFIG } from "@/lib/site-config";

const sections = [
  {
    title: "Eligibility & accounts",
    body: "You must be able to form a binding contract in your jurisdiction. You are responsible for safeguarding credentials and for all activity under your account, including listing edits made by teammates you invite.",
  },
  {
    title: "Listing content & license",
    body: "You represent that submitted business information is accurate and that you have rights to logos, photos, and text. You grant us a non-exclusive license to host, display, adapt for layout, translate where enabled, and promote listings across our surfaces and partner embeds.",
  },
  {
    title: "Acceptable use",
    body: "No impersonation, illegal goods or services, malware, scraping that degrades availability, or attempts to bypass rate limits. We may suspend accounts or remove listings that create legal risk or harm user trust.",
  },
  {
    title: "Fees & trials",
    body: "Paid features, if offered, are billed according to the plan you select. Taxes may apply. Trials convert unless cancelled before the stated cutoff; invoices are available in your owner dashboard.",
  },
  {
    title: "Disclaimers & liability",
    body: "The directory is provided “as is.” We do not guarantee uninterrupted access or specific ranking positions. To the fullest extent permitted by law, our aggregate liability arising from these terms is limited to the amounts you paid us in the twelve months preceding the claim.",
  },
  {
    title: "Changes & governing law",
    body: "We may update these terms with notice via email or in-product banners. Continued use after the effective date constitutes acceptance. Unless otherwise agreed in writing, disputes follow the governing law stated in your order form or, by default, the laws of the jurisdiction where we are incorporated.",
  },
];

export default function TermsPage() {
  return (
    <PageShell
      heroAccent
      eyebrow="Legal"
      title="Terms of Service"
      description={`Rules for using ${SITE_CONFIG.name} as a visitor, listing owner, or integration partner. If you need a signed paper copy, contact us and we will return a PDF within five business days.`}
      actions={
        <Link href="/privacy" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
          Privacy Policy →
        </Link>
      }
    >
      <p className="mb-8 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
        <Scale className="h-4 w-4 text-primary" />
        Last updated · April 14, 2026
      </p>

      <div className="space-y-4">
        {sections.map((section, i) => (
          <div key={section.title} className="site-surface-card rounded-[var(--site-radius)] p-6 sm:p-7">
            <span className="text-xs font-bold text-primary">{(i + 1).toString().padStart(2, "0")}</span>
            <h2 className="mt-2 text-lg font-semibold text-slate-950">{section.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{section.body}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
