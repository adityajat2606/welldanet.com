'use client'

import type { ReactNode } from 'react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export function PageShell({
  title,
  description,
  actions,
  children,
  heroAccent = false,
  eyebrow,
}: {
  title: string
  description?: string
  actions?: ReactNode
  children?: ReactNode
  /** Match directory home: soft sky gradient, larger type, optional badge. */
  heroAccent?: boolean
  eyebrow?: string
}) {
  return (
    <div className="site-shell">
      <NavbarShell />
      <main>
        {heroAccent ? (
          <section className="relative overflow-hidden border-b border-slate-200/80 bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_100%)]">
            <div className="site-container px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
              <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                <div className="max-w-3xl">
                  {eyebrow ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
                      {eyebrow}
                    </span>
                  ) : null}
                  <h1 className={`text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-[3.25rem] ${eyebrow ? 'mt-6' : ''}`}>
                    {title}
                  </h1>
                  {description ? (
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600">{description}</p>
                  ) : null}
                </div>
                {actions ? <div className="flex flex-shrink-0 flex-wrap gap-3">{actions}</div> : null}
              </div>
            </div>
          </section>
        ) : (
          <section className="site-page-header">
            <div className="site-page-header-inner">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-950">{title}</h1>
                {description && (
                  <p className="mt-2 max-w-2xl text-slate-600">{description}</p>
                )}
              </div>
              {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
            </div>
          </section>
        )}
        <section className="site-container px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          {children}
        </section>
      </main>
      <Footer />
    </div>
  )
}
