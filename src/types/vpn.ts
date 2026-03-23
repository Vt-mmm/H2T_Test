export interface VpnHighlight {
  icon: string;
  label: string;
}

export interface VpnSpec {
  label: string;
  value: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface VpnUserComment {
  id: string;
  author: string;
  rating: number;
  content: string;
  dateLabel: string;
}

export interface VpnProvider {
  rank: number;
  slug: string;
  name: string;
  logoSrc: string;
  logoAlt: string;
  score: number;
  reviewCount: number;
  topPick?: boolean;
  summary: string;
  highlights: VpnHighlight[];
  ctaLabel: string;
  ctaUrl: string;
  pros: string[];
  cons: string[];
  specs: VpnSpec[];
  faqs: FaqItem[];
  comments: VpnUserComment[];
}
