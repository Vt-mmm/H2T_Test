import type { VpnProvider } from 'types/vpn';

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

interface VpnProviderDefinition {
  rank: number;
  slug: string;
  name: string;
  score: number;
  topPick?: boolean;
  summaryKey: string;
  highlights: VpnHighlightDefinition[];
  ctaLabelKey: string;
  ctaUrl: string;
  prosKeys: string[];
  consKeys: string[];
  specs: VpnSpecDefinition[];
  faqs: VpnFaqDefinition[];
}

const VPN_PROVIDER_DEFINITIONS: VpnProviderDefinition[] = [
  {
    rank: 1,
    slug: 'nordvpn',
    name: 'NordVPN',
    score: 4.9,
    topPick: true,
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
    score: 4.8,
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
    score: 4.7,
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
    score: 4.5,
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
    score: 4.4,
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
  return VPN_PROVIDER_DEFINITIONS.map((provider) => ({
    rank: provider.rank,
    slug: provider.slug,
    name: provider.name,
    score: provider.score,
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
  }));
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
