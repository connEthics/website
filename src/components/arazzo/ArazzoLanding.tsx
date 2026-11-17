import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowTopRightOnSquareIcon,
  BeakerIcon,
  ChatBubbleLeftRightIcon,
  CommandLineIcon,
  CpuChipIcon,
  CubeTransparentIcon,
  DocumentTextIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { ConnEthicsHero } from '@/components/mui';
import ArazzoGraphSection from '@/components/arazzo/ArazzoGraphSection';
import { buildAlternates } from '@/i18n/alternates';
import { ogLocales, type Locale } from '@/i18n/config';
import { SEO } from '@/lib/constants';
import { FAQPageJsonLd, SoftwareApplicationJsonLd } from '@/lib/seo/jsonld';
import {
  ARAZZO_LINKS,
  ARAZZO_PATHS,
  arazzoLanding,
  type PainIcon,
  type UseCaseIcon,
} from '@/content/landing/arazzo';

/**
 * Arazzo landing (`/arazzo`, `/fr/arazzo`): server component, content from
 * `src/content/landing/arazzo.ts`. Only the graph block is a client island,
 * and its heavy part is loaded on demand (see ArazzoGraphSection).
 */

const SCREENSHOT = { src: '/images/arazzo/arazzo-vscode-graph-light.webp', width: 1400, height: 941 };

export function buildArazzoMetadata(locale: Locale): Metadata {
  const c = arazzoLanding[locale].meta;
  const path = ARAZZO_PATHS[locale];
  return {
    title: c.title,
    description: c.description,
    keywords: c.keywords,
    ...buildAlternates(ARAZZO_PATHS.en, ARAZZO_PATHS.fr, locale),
    openGraph: {
      title: c.title,
      description: c.description,
      type: 'website',
      siteName: SEO.openGraph.siteName,
      locale: ogLocales[locale],
      alternateLocale: [ogLocales[locale === 'fr' ? 'en' : 'fr']],
      url: path,
      images: [{ url: c.ogImage, width: 1200, height: 630, alt: c.ogAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.title,
      description: c.description,
      images: [c.ogImage],
    },
  };
}

const painIcons: Record<PainIcon, typeof CubeTransparentIcon> = {
  intent: CubeTransparentIcon,
  tribal: ChatBubbleLeftRightIcon,
  tests: BeakerIcon,
  agents: CpuChipIcon,
};

const useCaseIcons: Record<UseCaseIcon, typeof CubeTransparentIcon> = {
  mcp: CpuChipIcon,
  e2e: CommandLineIcon,
  partners: UserGroupIcon,
};

const toolIcons = [WrenchScrewdriverIcon, CubeTransparentIcon, DocumentTextIcon, CommandLineIcon];

function SectionHeader({ eyebrow, title, intro, dark = false, id }: { eyebrow: string; title: string; intro?: string; dark?: boolean; id: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-wider ${dark ? 'text-blue-300' : 'text-blue-700'}`}>
        {/* Brand orange: decorative only (BRAND.md §2.1). */}
        <span aria-hidden="true" className="inline-block h-1 w-8 rounded-full bg-orange-500" />
        {eyebrow}
      </p>
      <h2 id={id} className={`mt-3 text-3xl font-bold tracking-tight md:text-4xl ${dark ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{intro}</p>}
    </div>
  );
}

function External({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <ArrowTopRightOnSquareIcon aria-hidden="true" className="ml-1 inline h-4 w-4 align-[-2px]" />
    </a>
  );
}

export default function ArazzoLanding({ locale }: { locale: Locale }) {
  const c = arazzoLanding[locale];

  return (
    <div className="bg-white">
      <FAQPageJsonLd items={c.faq.items} inLanguage={locale} />
      <SoftwareApplicationJsonLd
        name="Arazzo for VS Code — by ConnEthics"
        description={c.software.description}
        url={ARAZZO_LINKS.marketplace}
        downloadUrl={ARAZZO_LINKS.marketplace}
        operatingSystem="Windows, macOS, Linux (Visual Studio Code)"
        softwareVersion="2.0.0"
        image={SCREENSHOT.src}
        inLanguage={locale}
      />

      {/* 1. Hero */}
      <ConnEthicsHero
        variant="deep-ocean"
        subtitle={c.hero.overline}
        title={c.hero.title}
        description={c.hero.description}
        primaryAction={c.hero.primary}
        secondaryAction={c.hero.secondary}
      />

      {/* 2. Pains */}
      <section aria-labelledby="arazzo-pains" className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader id="arazzo-pains" eyebrow={c.pains.eyebrow} title={c.pains.title} intro={c.pains.intro} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.pains.items.map((pain) => {
              const Icon = painIcons[pain.icon];
              return (
                <article key={pain.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 inline-flex rounded-lg bg-blue-50 p-2.5">
                    <Icon aria-hidden="true" className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{pain.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{pain.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. What Arazzo 1.1 adds */}
      <section aria-labelledby="arazzo-new" className="bg-slate-50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader id="arazzo-new" eyebrow={c.whatsNew.eyebrow} title={c.whatsNew.title} intro={c.whatsNew.intro} />
          <div className="grid gap-8 lg:grid-cols-3">
            <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:col-span-2">
              {c.whatsNew.items.map((item) => (
                <div key={item.label} className="border-l-2 border-blue-200 pl-4">
                  <dt className="font-semibold text-slate-900">{item.label}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-slate-600">{item.body}</dd>
                </div>
              ))}
            </dl>
            <aside className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">{c.whatsNew.compatTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.whatsNew.compat}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">{c.whatsNew.roadmap}</p>
              <External href={ARAZZO_LINKS.spec} className="mt-4 inline-block text-sm font-semibold text-blue-700 hover:underline">
                {c.whatsNew.specLabel}
              </External>
            </aside>
          </div>
        </div>
      </section>

      {/* 4. Use cases */}
      <section aria-labelledby="arazzo-use-cases" className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader id="arazzo-use-cases" eyebrow={c.useCases.eyebrow} title={c.useCases.title} intro={c.useCases.intro} />
          <div className="grid gap-6 lg:grid-cols-3">
            {c.useCases.items.map((uc) => {
              const Icon = useCaseIcons[uc.icon];
              return (
                <article key={uc.title} className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 inline-flex w-fit rounded-lg bg-blue-600 p-2.5">
                    <Icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{uc.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{uc.body}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {uc.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <External
                    href={ARAZZO_LINKS.example(uc.example)}
                    className="mt-auto pt-6 text-sm font-semibold text-blue-700 hover:underline"
                  >
                    {uc.exampleLabel}
                  </External>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Interactive graph */}
      <section aria-labelledby="arazzo-graph" className="bg-slate-50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader id="arazzo-graph" eyebrow={c.graph.eyebrow} title={c.graph.title} intro={c.graph.intro} />
          <ArazzoGraphSection
            locale={locale}
            examples={c.graph.examples}
            examplesLabel={c.graph.examplesLabel}
            loadLabel={c.graph.loadLabel}
            loadingLabel={c.graph.loadingLabel}
            errorLabel={c.graph.errorLabel}
            wheelHint={c.graph.wheelHint}
            touchActivate={c.graph.touchActivate}
            touchDone={c.graph.touchDone}
            openInStudio={c.graph.openInStudio}
            studioExampleBase={ARAZZO_LINKS.example('')}
          />
          {c.graph.note && <p className="mt-2 text-xs text-slate-500">{c.graph.note}</p>}
        </div>
      </section>

      {/* 6. ConnEthics tools */}
      <section aria-labelledby="arazzo-tools" className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader id="arazzo-tools" eyebrow={c.tools.eyebrow} title={c.tools.title} intro={c.tools.intro} />
          <div className="grid items-start gap-10 lg:grid-cols-5">
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
              {c.tools.items.map((tool, i) => {
                const Icon = toolIcons[i % toolIcons.length];
                return (
                  <article key={tool.name} className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-start justify-between gap-3">
                      <Icon aria-hidden="true" className="h-6 w-6 flex-none text-blue-700" />
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">{tool.badge}</span>
                    </div>
                    <h3 className="mt-3 font-bold text-slate-900">{tool.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{tool.body}</p>
                    <External href={tool.cta.href} className="mt-auto pt-4 text-sm font-semibold text-blue-700 hover:underline">
                      {tool.cta.label}
                    </External>
                  </article>
                );
              })}
            </div>
            <figure className="lg:col-span-2 lg:sticky lg:top-8">
              <div className="overflow-hidden rounded-xl border border-slate-200 shadow-lg">
                <Image
                  src={SCREENSHOT.src}
                  width={SCREENSHOT.width}
                  height={SCREENSHOT.height}
                  alt={c.tools.screenshotAlt}
                  sizes="(min-width: 1024px) 440px, 100vw"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm text-slate-500">{c.tools.screenshotCaption}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 7. ConnEthics support */}
      <section aria-labelledby="arazzo-services" className="bg-slate-900 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader id="arazzo-services" dark eyebrow={c.services.eyebrow} title={c.services.title} intro={c.services.intro} />
          <div className="grid gap-6 lg:grid-cols-3">
            {c.services.items.map((item) => (
              <article key={item.title} className="flex flex-col rounded-xl border border-slate-700 bg-slate-800/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">{item.model}</p>
                <h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.body}</p>
                <Link href={item.link.href} className="mt-auto pt-5 text-sm font-semibold text-blue-300 hover:text-white hover:underline">
                  {item.link.label} →
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-slate-400">{c.services.note}</p>
        </div>
      </section>

      {/* 8. FAQ */}
      <section aria-labelledby="arazzo-faq" className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeader id="arazzo-faq" eyebrow={c.faq.eyebrow} title={c.faq.title} />
          <div className="divide-y divide-slate-200 rounded-xl border border-slate-200">
            {c.faq.items.map((item) => (
              <details key={item.question} className="group p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-slate-900">
                  <span>{item.question}</span>
                  <span aria-hidden="true" className="mt-0.5 text-xl leading-none text-blue-700 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact CTA */}
      <section aria-labelledby="arazzo-cta" className="border-t border-slate-200 bg-slate-50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="arazzo-cta" className="text-3xl font-bold tracking-tight text-slate-900">
            {c.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{c.cta.body}</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={c.cta.primary.href}
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 font-bold text-white shadow-lg transition-colors hover:bg-blue-700"
            >
              {c.cta.primary.label}
            </Link>
            <External
              href={c.cta.secondary.href}
              className="inline-flex items-center justify-center rounded-lg border-2 border-slate-300 bg-white px-8 py-4 font-bold text-slate-700 transition-colors hover:border-slate-500"
            >
              {c.cta.secondary.label}
            </External>
          </div>
        </div>
      </section>
    </div>
  );
}
