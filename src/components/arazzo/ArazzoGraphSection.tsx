'use client';

import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { Locale } from '@/i18n/config';
import type { GraphExample } from '@/content/landing/arazzo';

/**
 * Interactive graph block of the Arazzo landing.
 *
 * Weight: nothing of the graph is in the page's initial JS. The graph chunk
 * (React Flow, arazzo-flow and its CSS, the YAML parser) is fetched only when
 * the block approaches the viewport (IntersectionObserver), or on the
 * "Load the graph" button (always shown when the browser asks to save data).
 *
 * Page scroll is never trapped:
 * - mouse wheel: a capture-phase listener stops the event before React Flow
 *   (no preventDefault, so the page scrolls); Ctrl/⌘ + wheel and trackpad
 *   pinch (ctrlKey) still zoom;
 * - touch screens: an overlay keeps one-finger swipes for the page until the
 *   visitor taps "Tap to explore"; "Done" gives the page back.
 */

const ArazzoLandingGraph = dynamic(() => import('./ArazzoLandingGraph'), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-slate-50" aria-hidden="true" />,
});

export interface ArazzoGraphSectionProps {
  locale: Locale;
  examples: GraphExample[];
  examplesLabel: string;
  loadLabel: string;
  loadingLabel: string;
  errorLabel: string;
  wheelHint: string;
  touchActivate: string;
  touchDone: string;
  openInStudio: string;
  studioExampleBase: string;
}

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const update = () => setMatches(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, [query]);
  return matches;
}

export default function ArazzoGraphSection({
  locale,
  examples,
  examplesLabel,
  loadLabel,
  loadingLabel,
  errorLabel,
  wheelHint,
  touchActivate,
  touchDone,
  openInStudio,
  studioExampleBase,
}: ArazzoGraphSectionProps) {
  const [current, setCurrent] = useState(examples[0]);
  const [requested, setRequested] = useState(false);
  const [touchActive, setTouchActive] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const coarse = useMediaQuery('(pointer: coarse)');
  const narrow = useMediaQuery('(max-width: 640px)');

  // Lazy load when the block is about to be seen, unless the visitor saves data.
  useEffect(() => {
    if (requested) return;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    const el = frameRef.current;
    if (saveData || !el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRequested(true);
          io.disconnect();
        }
      },
      { rootMargin: '300px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [requested]);

  // Wheel: let the page scroll unless Ctrl/⌘ is held (zoom).
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (!e.ctrlKey && !e.metaKey) e.stopPropagation();
    };
    el.addEventListener('wheel', onWheel, { capture: true, passive: true });
    return () => el.removeEventListener('wheel', onWheel, { capture: true });
  }, []);

  const select = useCallback((example: GraphExample) => {
    setCurrent(example);
    setRequested(true);
  }, []);

  return (
    <div>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div role="group" aria-label={examplesLabel} className="flex flex-wrap gap-2">
          {examples.map((example) => {
            const active = example.id === current.id;
            return (
              <button
                key={example.id}
                type="button"
                aria-pressed={active}
                onClick={() => select(example)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? 'border-blue-600 bg-blue-600 text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-700'
                }`}
              >
                {example.label}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-4 text-sm">
          {coarse && touchActive && (
            <button
              type="button"
              onClick={() => setTouchActive(false)}
              className="rounded-md border border-slate-300 bg-white px-3 py-1.5 font-semibold text-slate-700"
            >
              {touchDone}
            </button>
          )}
          <a
            href={`${studioExampleBase}${current.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-700 underline-offset-4 hover:underline"
          >
            {openInStudio} ↗
          </a>
        </div>
      </div>

      <div
        ref={frameRef}
        className="relative h-[520px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:h-[640px] lg:h-[720px]"
      >
        {requested ? (
          <ArazzoLandingGraph
            exampleId={current.id}
            workflowId={current.workflowId}
            locale={locale}
            compact={narrow}
            errorLabel={errorLabel}
            loadingLabel={loadingLabel}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4 bg-slate-50 p-6 text-center">
            <button
              type="button"
              onClick={() => setRequested(true)}
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow hover:bg-blue-700"
            >
              {loadLabel}
            </button>
          </div>
        )}

        {requested && coarse && !touchActive && (
          <button
            type="button"
            onClick={() => setTouchActive(true)}
            className="absolute inset-0 z-10 flex items-center justify-center bg-slate-900/5"
            style={{ touchAction: 'pan-y' }}
          >
            <span className="rounded-full bg-slate-900/80 px-4 py-2 text-sm font-semibold text-white shadow">{touchActivate}</span>
          </button>
        )}
      </div>
      <p className="mt-3 text-xs text-slate-500 pointer-coarse:hidden">{wheelHint}</p>
    </div>
  );
}
