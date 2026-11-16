import { SITE_URL } from '@/lib/constants';

/** Absolute URL on the canonical host, from a root-relative path. */
export function absoluteUrl(path = '/'): string {
  if (/^https?:\/\//.test(path)) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return clean === '/' ? SITE_URL : `${SITE_URL}${clean}`;
}
