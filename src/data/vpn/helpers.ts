import type { VpnProvider, VpnUserComment } from 'types/vpn';
import type { TranslateFn, VpnCommentDefinition, VpnProviderDefinition } from './definitions';

const MOCK_REVIEW_AUTHORS = [
  'Ava Carter',
  'Noah Kim',
  'Emma Walker',
  'Liam Chen',
  'Mia Patel',
  'Ethan Brooks',
  'Sophia Reed',
  'Lucas Hill',
  'Olivia Stone',
  'James Ford',
] as const;

const MOCK_REVIEW_DATES = [
  'Mar 02, 2026',
  'Mar 01, 2026',
  'Feb 28, 2026',
  'Feb 25, 2026',
  'Feb 20, 2026',
  'Feb 14, 2026',
  'Feb 08, 2026',
  'Feb 03, 2026',
  'Jan 27, 2026',
  'Jan 18, 2026',
] as const;

export function createMockComments(ratings: number[], comments: string[]): VpnCommentDefinition[] {
  return ratings.map((rating, index) => ({
    author: MOCK_REVIEW_AUTHORS[index % MOCK_REVIEW_AUTHORS.length],
    rating,
    content: comments[index % comments.length],
    dateLabel: MOCK_REVIEW_DATES[index % MOCK_REVIEW_DATES.length],
  }));
}

export function calculateScoreFromComments(comments: VpnCommentDefinition[]): number {
  if (!comments.length) {
    return 0;
  }

  const totalScore = comments.reduce((sum, item) => sum + item.rating, 0);
  return Number((totalScore / comments.length).toFixed(1));
}

export function mapProviderToVpn(provider: VpnProviderDefinition, translate: TranslateFn): VpnProvider {
  const comments: VpnUserComment[] = provider.comments.map((comment, index) => ({
    id: `${provider.slug}-comment-${index + 1}`,
    author: comment.author,
    rating: comment.rating,
    content: comment.content,
    dateLabel: comment.dateLabel,
  }));

  return {
    rank: provider.rank,
    slug: provider.slug,
    name: provider.name,
    logoSrc: provider.logoSrc,
    logoAlt: provider.logoAlt,
    score: calculateScoreFromComments(provider.comments),
    reviewCount: comments.length,
    topPick: provider.topPick,
    summary: translate(provider.summaryKey),
    highlights: provider.highlights.map((highlight) => ({
      icon: highlight.icon,
      label: translate(highlight.labelKey),
    })),
    ctaLabel: translate(provider.ctaLabelKey),
    ctaUrl: provider.ctaUrl,
    pros: provider.prosKeys.map((key) => translate(key)),
    cons: provider.consKeys.map((key) => translate(key)),
    specs: provider.specs.map((spec) => ({
      label: translate(spec.labelKey),
      value: spec.valueKey ? translate(spec.valueKey) : spec.value,
    })),
    faqs: provider.faqs.map((faq) => ({
      question: translate(faq.questionKey),
      answer: translate(faq.answerKey),
    })),
    comments,
  };
}
