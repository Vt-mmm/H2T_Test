import cyberghostLogo from 'assets/vpn-logos/cyberghost.png';
import expressvpnLogo from 'assets/vpn-logos/expressvpn.png';
import nordvpnLogo from 'assets/vpn-logos/nordvpn.png';
import piaLogo from 'assets/vpn-logos/private-internet-access.svg';
import surfsharkLogo from 'assets/vpn-logos/surfshark.png';
import type { VpnProviderDefinition } from './definitions';
import { createMockComments } from './helpers';

export const VPN_PROVIDER_DEFINITIONS: VpnProviderDefinition[] = [
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
