import type { TranslateFn } from 'data/vpns';
import { getVpnProviderBySlug } from 'data/vpns';
import { PATH_VPN_APP } from 'routes/paths';
import { path } from './path';

export function getVpnBySlug(slug: string, translate: TranslateFn) {
  return getVpnProviderBySlug(slug, translate);
}

export function formatScore(score: number) {
  return `${score.toFixed(1)}/5`;
}

export function toReviewPath(slug: string) {
  return path(PATH_VPN_APP.review.root, `/${slug}`);
}
