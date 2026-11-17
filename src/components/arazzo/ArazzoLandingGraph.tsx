'use client';

import '@connethics/arazzo-flow/style.css';
import { useEffect, useMemo, useState } from 'react';
import { parse as parseYaml } from 'yaml';
import { parseArazzo } from '@connethics/arazzo-core';
import { ArazzoGraphFromDocument, createOpenApiResolver } from '@connethics/arazzo-flow';
import type { Locale } from '@/i18n/config';

/**
 * Client-only graph of one landing example (`@connethics/arazzo-flow`, vendored).
 * Never import this file statically: `ArazzoGraphSection` loads it with
 * `next/dynamic` + `ssr: false`, so React Flow, the flow CSS and the YAML parser
 * stay out of the page's initial JS. ELK runs in `public/arazzo/elk-worker.js`
 * (same origin) and falls back to the main thread if the worker fails.
 */

const ELK = { workerUrl: '/arazzo/elk-worker.js' } as const;

interface Loaded {
  id: string;
  doc: unknown;
  sources: Record<string, unknown>;
}

export interface ArazzoLandingGraphProps {
  exampleId: string;
  workflowId: string;
  locale: Locale;
  compact: boolean;
  errorLabel: string;
  loadingLabel: string;
}

export default function ArazzoLandingGraph({ exampleId, workflowId, locale, compact, errorLabel, loadingLabel }: ArazzoLandingGraphProps) {
  const [loaded, setLoaded] = useState<Loaded | null>(null);
  const [failed, setFailed] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const base = `/arazzo/examples/${exampleId}`;
    const text = (url: string) =>
      fetch(url).then((res) => {
        if (!res.ok) throw new Error(`${res.status} ${url}`);
        return res.text();
      });

    Promise.all([text(`${base}/${exampleId}.arazzo.yaml`), text(`${base}/openapi.yaml`).catch(() => null)])
      .then(([arazzoText, openApiText]) => {
        if (cancelled) return;
        const { doc } = parseArazzo(arazzoText);
        if (!doc) throw new Error(`Unreadable Arazzo document: ${exampleId}`);
        // Method badges (GET/POST…) come from the example's OpenAPI source.
        const openApiSource = doc.sourceDescriptions?.find((s) => (s.type ?? 'openapi') === 'openapi');
        const sources: Record<string, unknown> = {};
        if (openApiText && openApiSource) sources[openApiSource.name] = parseYaml(openApiText);
        setLoaded({ id: exampleId, doc, sources });
        setFailed(null);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        console.error('Arazzo landing graph:', err);
        setFailed(exampleId);
      });

    return () => {
      cancelled = true;
    };
  }, [exampleId]);

  const resolveOperation = useMemo(
    () => (loaded && Object.keys(loaded.sources).length > 0 ? createOpenApiResolver(loaded.sources) : undefined),
    [loaded],
  );

  if (failed === exampleId) {
    return (
      <div role="alert" className="flex h-full items-center justify-center p-6 text-center text-sm text-slate-600">
        {errorLabel}
      </div>
    );
  }

  if (!loaded || loaded.id !== exampleId) {
    return (
      <div role="status" className="flex h-full items-center justify-center text-sm text-slate-500">
        {loadingLabel}
      </div>
    );
  }

  return (
    <ArazzoGraphFromDocument
      key={`${exampleId}:${workflowId}`}
      doc={loaded.doc}
      workflowId={workflowId}
      resolveOperation={resolveOperation}
      theme="connethics-light"
      lang={locale}
      elk={ELK}
      showMinimap={!compact}
      showSearch={!compact}
      showToolbar={!compact}
      density={compact ? 'compact' : 'auto'}
      style={{ height: '100%', width: '100%' }}
      fallback={<div className="flex h-full items-center justify-center text-sm text-slate-500">{errorLabel}</div>}
    />
  );
}
