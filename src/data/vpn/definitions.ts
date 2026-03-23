export type TranslateFn = (key: string, options?: Record<string, unknown>) => string;

export interface VpnHighlightDefinition {
  icon: string;
  labelKey: string;
}

export interface VpnSpecDefinition {
  labelKey: string;
  value: string;
  valueKey?: string;
}

export interface VpnFaqDefinition {
  questionKey: string;
  answerKey: string;
}

export interface VpnCommentDefinition {
  author: string;
  rating: number;
  content: string;
  dateLabel: string;
}

export interface VpnProviderDefinition {
  rank: number;
  slug: string;
  name: string;
  logoSrc: string;
  logoAlt: string;
  topPick?: boolean;
  summaryKey: string;
  highlights: VpnHighlightDefinition[];
  ctaLabelKey: string;
  ctaUrl: string;
  prosKeys: string[];
  consKeys: string[];
  specs: VpnSpecDefinition[];
  faqs: VpnFaqDefinition[];
  comments: VpnCommentDefinition[];
}
