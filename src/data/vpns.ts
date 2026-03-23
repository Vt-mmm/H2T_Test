import type { VpnProvider, VpnUserComment } from 'types/vpn';
import cyberghostLogo from 'assets/vpn-logos/cyberghost.png';
import expressvpnLogo from 'assets/vpn-logos/expressvpn.png';
import nordvpnLogo from 'assets/vpn-logos/nordvpn.png';
import piaLogo from 'assets/vpn-logos/private-internet-access.svg';
import surfsharkLogo from 'assets/vpn-logos/surfshark.png';

export type TranslateFn = (key: string, options?: Record<string, unknown>) => string;

interface VpnHighlightDefinition {
  icon: string;
  labelKey: string;
}

interface VpnSpecDefinition {
  labelKey: string;
  value: string;
  valueKey?: string;
}

interface VpnFaqDefinition {
  questionKey: string;
  answerKey: string;
}

interface VpnCommentDefinition {
  author: string;
  rating: number;
  content: string;
  dateLabel: string;
}

interface VpnProviderDefinition {
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

function createMockComments(ratings: number[], comments: string[]): VpnCommentDefinition[] {
  return ratings.map((rating, index) => ({
    author: MOCK_REVIEW_AUTHORS[index % MOCK_REVIEW_AUTHORS.length],
    rating,
    content: comments[index % comments.length],
    dateLabel: MOCK_REVIEW_DATES[index % MOCK_REVIEW_DATES.length],
  }));
}

function calculateScoreFromComments(comments: VpnCommentDefinition[]): number {
  if (!comments.length) {
    return 0;
  }

  const totalScore = comments.reduce((sum, item) => sum + item.rating, 0);
  return Number((totalScore / comments.length).toFixed(1));
}

const VPN_PROVIDER_DEFINITIONS: VpnProviderDefinition[] = [
  {
    rank: 1,
    slug: 'nordvpn',
    name: 'NordVPN',
    logoSrc: nordvpnLogo,
    logoAlt: 'NordVPN logo',
    topPick: true,
    comments: createMockComments(
      [5, 5, 5, 5, 5, 5, 5, 5, 5, 4],
      [
        'Fast enough for 4K streams and large file downloads.',
        'Apps are clean and stable on both laptop and phone.',
        'Connection stays reliable even when I switch regions.',
        'Privacy controls are clear and easy to trust.',
      ],
    ),
    summaryKey: 'vpnData.nordvpn.summary',
    highlights: [
      { icon: 'SP', labelKey: 'vpnData.nordvpn.highlights.speed' },
      { icon: 'NL', labelKey: 'vpnData.nordvpn.highlights.noLogs' },
      { icon: '10', labelKey: 'vpnData.nordvpn.highlights.devices' },
    ],
    ctaLabelKey: 'vpnData.common.getExclusiveDeal',
    ctaUrl: 'https://nordvpn.com',
    prosKeys: [
      'vpnData.nordvpn.pros.speedConsistency',
      'vpnData.nordvpn.pros.privacyPosture',
      'vpnData.nordvpn.pros.streamingAccess',
    ],
    consKeys: ['vpnData.nordvpn.cons.renewalPricing', 'vpnData.nordvpn.cons.advancedSettings'],
    specs: [
      {
        labelKey: 'vpnData.specLabels.jurisdiction',
        value: 'Panama',
      },
      {
        labelKey: 'vpnData.specLabels.serverNetwork',
        value: '118+ countries',
        valueKey: 'vpnData.nordvpn.specValues.serverNetwork',
      },
      {
        labelKey: 'vpnData.specLabels.protocol',
        value: 'NordLynx, OpenVPN, IKEv2',
      },
      {
        labelKey: 'vpnData.specLabels.simultaneousDevices',
        value: '10',
      },
      {
        labelKey: 'vpnData.specLabels.moneyBack',
        value: '30 days',
        valueKey: 'vpnData.common.days30',
      },
    ],
    faqs: [
      {
        questionKey: 'vpnData.nordvpn.faq.streamingQuestion',
        answerKey: 'vpnData.nordvpn.faq.streamingAnswer',
      },
      {
        questionKey: 'vpnData.nordvpn.faq.beginnerQuestion',
        answerKey: 'vpnData.nordvpn.faq.beginnerAnswer',
      },
    ],
  },
  {
    rank: 2,
    slug: 'expressvpn',
    name: 'ExpressVPN',
    logoSrc: expressvpnLogo,
    logoAlt: 'ExpressVPN logo',
    comments: createMockComments(
      [5, 5, 5, 5, 5, 5, 5, 5, 4, 4],
      [
        'Great speed consistency while traveling across regions.',
        'Setup was very quick and customer support was responsive.',
        'Streaming performance is strong with minimal buffering.',
        'Price is higher, but quality feels premium.',
      ],
    ),
    summaryKey: 'vpnData.expressvpn.summary',
    highlights: [
      { icon: '105', labelKey: 'vpnData.expressvpn.highlights.servers' },
      { icon: 'LW', labelKey: 'vpnData.expressvpn.highlights.lightway' },
      { icon: '24', labelKey: 'vpnData.expressvpn.highlights.support' },
    ],
    ctaLabelKey: 'vpnData.common.viewOffer',
    ctaUrl: 'https://expressvpn.com',
    prosKeys: [
      'vpnData.expressvpn.pros.stableApps',
      'vpnData.expressvpn.pros.supportResponse',
      'vpnData.expressvpn.pros.travelReliability',
    ],
    consKeys: ['vpnData.expressvpn.cons.higherPrice', 'vpnData.expressvpn.cons.customControls'],
    specs: [
      {
        labelKey: 'vpnData.specLabels.jurisdiction',
        value: 'British Virgin Islands',
      },
      {
        labelKey: 'vpnData.specLabels.serverNetwork',
        value: '105 countries',
        valueKey: 'vpnData.expressvpn.specValues.serverNetwork',
      },
      {
        labelKey: 'vpnData.specLabels.protocol',
        value: 'Lightway, OpenVPN, IKEv2',
      },
      {
        labelKey: 'vpnData.specLabels.simultaneousDevices',
        value: '8',
      },
      {
        labelKey: 'vpnData.specLabels.moneyBack',
        value: '30 days',
        valueKey: 'vpnData.common.days30',
      },
    ],
    faqs: [
      {
        questionKey: 'vpnData.expressvpn.faq.travelQuestion',
        answerKey: 'vpnData.expressvpn.faq.travelAnswer',
      },
      {
        questionKey: 'vpnData.expressvpn.faq.priceQuestion',
        answerKey: 'vpnData.expressvpn.faq.priceAnswer',
      },
    ],
  },
  {
    rank: 3,
    slug: 'surfshark',
    name: 'Surfshark',
    logoSrc: surfsharkLogo,
    logoAlt: 'Surfshark logo',
    comments: createMockComments(
      [5, 5, 5, 5, 5, 5, 5, 4, 4, 4],
      [
        'Excellent value for families with many devices.',
        'Unlimited connections is the biggest advantage for me.',
        'Speed is generally good, with occasional region variance.',
        'Feature set is strong for the price tier.',
      ],
    ),
    summaryKey: 'vpnData.surfshark.summary',
    highlights: [
      { icon: 'UD', labelKey: 'vpnData.surfshark.highlights.unlimitedDevices' },
      { icon: 'CW', labelKey: 'vpnData.surfshark.highlights.adBlock' },
      { icon: 'BV', labelKey: 'vpnData.surfshark.highlights.value' },
    ],
    ctaLabelKey: 'vpnData.common.viewOffer',
    ctaUrl: 'https://surfshark.com',
    prosKeys: ['vpnData.surfshark.pros.value', 'vpnData.surfshark.pros.unlimitedDevices', 'vpnData.surfshark.pros.privacyExtras'],
    consKeys: ['vpnData.surfshark.cons.speedVariability', 'vpnData.surfshark.cons.interfaceBusy'],
    specs: [
      {
        labelKey: 'vpnData.specLabels.jurisdiction',
        value: 'Netherlands',
      },
      {
        labelKey: 'vpnData.specLabels.serverNetwork',
        value: '100 countries',
        valueKey: 'vpnData.surfshark.specValues.serverNetwork',
      },
      {
        labelKey: 'vpnData.specLabels.protocol',
        value: 'WireGuard, OpenVPN, IKEv2',
      },
      {
        labelKey: 'vpnData.specLabels.simultaneousDevices',
        value: 'Unlimited',
        valueKey: 'vpnData.common.unlimited',
      },
      {
        labelKey: 'vpnData.specLabels.moneyBack',
        value: '30 days',
        valueKey: 'vpnData.common.days30',
      },
    ],
    faqs: [
      {
        questionKey: 'vpnData.surfshark.faq.audienceQuestion',
        answerKey: 'vpnData.surfshark.faq.audienceAnswer',
      },
      {
        questionKey: 'vpnData.surfshark.faq.unlimitedQuestion',
        answerKey: 'vpnData.surfshark.faq.unlimitedAnswer',
      },
    ],
  },
  {
    rank: 4,
    slug: 'cyberghost',
    name: 'CyberGhost',
    logoSrc: cyberghostLogo,
    logoAlt: 'CyberGhost logo',
    comments: createMockComments(
      [5, 5, 5, 5, 5, 4, 4, 4, 4, 4],
      [
        'Good option for beginners with straightforward setup.',
        'Streaming profiles are useful when choosing servers quickly.',
        'Server list is broad and easy to browse.',
        'Performance can fluctuate during peak hours.',
      ],
    ),
    summaryKey: 'vpnData.cyberghost.summary',
    highlights: [
      { icon: 'SO', labelKey: 'vpnData.cyberghost.highlights.streamingProfiles' },
      { icon: '45', labelKey: 'vpnData.cyberghost.highlights.guarantee' },
      { icon: 'NS', labelKey: 'vpnData.cyberghost.highlights.nospy' },
    ],
    ctaLabelKey: 'vpnData.common.viewOffer',
    ctaUrl: 'https://cyberghostvpn.com',
    prosKeys: ['vpnData.cyberghost.pros.beginnerApps', 'vpnData.cyberghost.pros.refundWindow', 'vpnData.cyberghost.pros.serverInventory'],
    consKeys: ['vpnData.cyberghost.cons.desktopHeavy', 'vpnData.cyberghost.cons.peakTimes'],
    specs: [
      {
        labelKey: 'vpnData.specLabels.jurisdiction',
        value: 'Romania',
      },
      {
        labelKey: 'vpnData.specLabels.serverNetwork',
        value: '100 countries',
        valueKey: 'vpnData.cyberghost.specValues.serverNetwork',
      },
      {
        labelKey: 'vpnData.specLabels.protocol',
        value: 'WireGuard, OpenVPN, IKEv2',
      },
      {
        labelKey: 'vpnData.specLabels.simultaneousDevices',
        value: '7',
      },
      {
        labelKey: 'vpnData.specLabels.moneyBack',
        value: '45 days (long plans)',
        valueKey: 'vpnData.cyberghost.specValues.moneyBack',
      },
    ],
    faqs: [
      {
        questionKey: 'vpnData.cyberghost.faq.beginnerQuestion',
        answerKey: 'vpnData.cyberghost.faq.beginnerAnswer',
      },
      {
        questionKey: 'vpnData.cyberghost.faq.standoutQuestion',
        answerKey: 'vpnData.cyberghost.faq.standoutAnswer',
      },
    ],
  },
  {
    rank: 5,
    slug: 'private-internet-access',
    name: 'Private Internet Access',
    logoSrc: piaLogo,
    logoAlt: 'Private Internet Access logo',
    comments: createMockComments(
      [5, 5, 5, 5, 4, 4, 4, 4, 4, 4],
      [
        'Powerful settings for users who want detailed control.',
        'Open-source approach adds confidence for privacy users.',
        'Long-term plans provide good value overall.',
        'Interface can feel technical for beginners.',
      ],
    ),
    summaryKey: 'vpnData.pia.summary',
    highlights: [
      { icon: 'OS', labelKey: 'vpnData.pia.highlights.openSource' },
      { icon: 'US', labelKey: 'vpnData.pia.highlights.usPresence' },
      { icon: 'KS', labelKey: 'vpnData.pia.highlights.killSwitch' },
    ],
    ctaLabelKey: 'vpnData.common.viewOffer',
    ctaUrl: 'https://privateinternetaccess.com',
    prosKeys: ['vpnData.pia.pros.customization', 'vpnData.pia.pros.transparency', 'vpnData.pia.pros.longPlanValue'],
    consKeys: ['vpnData.pia.cons.polish', 'vpnData.pia.cons.overwhelming'],
    specs: [
      {
        labelKey: 'vpnData.specLabels.jurisdiction',
        value: 'United States',
      },
      {
        labelKey: 'vpnData.specLabels.serverNetwork',
        value: '91 countries',
        valueKey: 'vpnData.pia.specValues.serverNetwork',
      },
      {
        labelKey: 'vpnData.specLabels.protocol',
        value: 'WireGuard, OpenVPN, IKEv2',
      },
      {
        labelKey: 'vpnData.specLabels.simultaneousDevices',
        value: 'Unlimited',
        valueKey: 'vpnData.common.unlimited',
      },
      {
        labelKey: 'vpnData.specLabels.moneyBack',
        value: '30 days',
        valueKey: 'vpnData.common.days30',
      },
    ],
    faqs: [
      {
        questionKey: 'vpnData.pia.faq.powerUserQuestion',
        answerKey: 'vpnData.pia.faq.powerUserAnswer',
      },
      {
        questionKey: 'vpnData.pia.faq.tradeoffQuestion',
        answerKey: 'vpnData.pia.faq.tradeoffAnswer',
      },
    ],
  },
];

export function getVpnProviders(translate: TranslateFn): VpnProvider[] {
  return VPN_PROVIDER_DEFINITIONS.map((provider) => {
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
  });
}

export function getVpnProviderBySlug(slug: string, translate: TranslateFn) {
  return getVpnProviders(translate).find((vpn) => vpn.slug === slug);
}

export const METHODOLOGY_STATS = [
  { labelKey: 'toplist.statServers', value: '500+' },
  { labelKey: 'toplist.statLocations', value: '12' },
  { labelKey: 'toplist.statTracking', value: '24/7' },
];

export const TRUSTED_BY_BRANDS = [
  { short: 'TR', name: 'TechRadar' },
  { short: 'PC', name: 'PCMag' },
  { short: 'TP', name: 'Toms Guide' },
  { short: 'CS', name: 'CNET Security' },
  { short: 'ZD', name: 'ZDNet' },
  { short: 'WP', name: 'Wired Privacy' },
  { short: 'DC', name: 'Digital Citizen' },
  { short: 'SL', name: 'Security Lab' },
] as const;
