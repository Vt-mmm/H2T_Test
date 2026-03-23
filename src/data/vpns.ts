import type { VpnProvider } from '../types/vpn';

export const VPN_PROVIDERS: VpnProvider[] = [
  {
    rank: 1,
    slug: 'nordvpn',
    name: 'NordVPN',
    score: 4.9,
    topPick: true,
    summary: 'The best balance of speed, privacy, and reliability for global users.',
    highlights: [
      { icon: 'SP', label: 'Fast NordLynx performance' },
      { icon: 'NL', label: 'Independently audited no-logs policy' },
      { icon: '10', label: 'Up to 10 simultaneous devices' },
    ],
    ctaLabel: 'Get Exclusive Deal',
    ctaUrl: 'https://nordvpn.com',
    pros: ['Excellent speed consistency', 'Strong privacy posture', 'Reliable streaming access'],
    cons: ['Renewal pricing can be high', 'Some advanced settings need onboarding'],
    specs: [
      { label: 'Jurisdiction', value: 'Panama' },
      { label: 'Server Network', value: '118+ countries' },
      { label: 'Protocol', value: 'NordLynx, OpenVPN, IKEv2' },
      { label: 'Simultaneous Devices', value: '10' },
      { label: 'Money-back Guarantee', value: '30 days' },
    ],
    faqs: [
      {
        question: 'Is NordVPN suitable for streaming?',
        answer: 'Yes, it usually performs well on major platforms with stable speed and low buffering.',
      },
      {
        question: 'Can beginners use it easily?',
        answer: 'The app is straightforward, but advanced options are better explained in the help center.',
      },
    ],
  },
  {
    rank: 2,
    slug: 'expressvpn',
    name: 'ExpressVPN',
    score: 4.8,
    summary: 'Premium VPN with strong cross-region performance and polished apps.',
    highlights: [
      { icon: '105', label: 'Servers in 105 countries' },
      { icon: 'LW', label: 'Lightway protocol for fast reconnection' },
      { icon: '24', label: '24/7 live support' },
    ],
    ctaLabel: 'View Offer',
    ctaUrl: 'https://expressvpn.com',
    pros: ['Very stable apps', 'Fast support response', 'Good travel reliability'],
    cons: ['Higher price tier', 'Fewer custom controls than power-user VPNs'],
    specs: [
      { label: 'Jurisdiction', value: 'British Virgin Islands' },
      { label: 'Server Network', value: '105 countries' },
      { label: 'Protocol', value: 'Lightway, OpenVPN, IKEv2' },
      { label: 'Simultaneous Devices', value: '8' },
      { label: 'Money-back Guarantee', value: '30 days' },
    ],
    faqs: [
      {
        question: 'Does ExpressVPN work well when traveling?',
        answer: 'Its network spread and app reliability make it a strong travel option for many users.',
      },
      {
        question: 'Is it worth the premium price?',
        answer: 'If reliability and easy setup are your top priorities, many users consider it worth it.',
      },
    ],
  },
  {
    rank: 3,
    slug: 'surfshark',
    name: 'Surfshark',
    score: 4.7,
    summary: 'Great value pick with unlimited devices and competitive feature set.',
    highlights: [
      { icon: 'UD', label: 'Unlimited devices per account' },
      { icon: 'CW', label: 'Built-in ad and tracker blocking' },
      { icon: 'BV', label: 'Strong budget-to-feature ratio' },
    ],
    ctaLabel: 'View Offer',
    ctaUrl: 'https://surfshark.com',
    pros: ['Excellent value', 'Unlimited devices', 'Useful privacy extras'],
    cons: ['Occasional speed variability by region', 'Interface can feel busy'],
    specs: [
      { label: 'Jurisdiction', value: 'Netherlands' },
      { label: 'Server Network', value: '100 countries' },
      { label: 'Protocol', value: 'WireGuard, OpenVPN, IKEv2' },
      { label: 'Simultaneous Devices', value: 'Unlimited' },
      { label: 'Money-back Guarantee', value: '30 days' },
    ],
    faqs: [
      {
        question: 'Who should choose Surfshark?',
        answer: 'Users with many devices and a tighter budget usually benefit the most.',
      },
      {
        question: 'Is unlimited device support practical?',
        answer: 'Yes, it is helpful for families or users who protect all personal and work devices together.',
      },
    ],
  },
  {
    rank: 4,
    slug: 'cyberghost',
    name: 'CyberGhost',
    score: 4.5,
    summary: 'User-friendly VPN with optimized profiles for streaming and browsing.',
    highlights: [
      { icon: 'SO', label: 'Streaming-optimized server profiles' },
      { icon: '45', label: '45-day money-back guarantee' },
      { icon: 'NS', label: 'NoSpy infrastructure option' },
    ],
    ctaLabel: 'View Offer',
    ctaUrl: 'https://cyberghostvpn.com',
    pros: ['Beginner-friendly apps', 'Long refund window', 'Large server inventory'],
    cons: ['Desktop app can feel heavy', 'Some locations are less consistent at peak times'],
    specs: [
      { label: 'Jurisdiction', value: 'Romania' },
      { label: 'Server Network', value: '100 countries' },
      { label: 'Protocol', value: 'WireGuard, OpenVPN, IKEv2' },
      { label: 'Simultaneous Devices', value: '7' },
      { label: 'Money-back Guarantee', value: '45 days (long plans)' },
    ],
    faqs: [
      {
        question: 'Is CyberGhost good for beginners?',
        answer: 'Yes, presets and guided categories reduce setup friction for first-time users.',
      },
      {
        question: 'What stands out most?',
        answer: 'Its long refund period and task-focused server profiles are key differentiators.',
      },
    ],
  },
  {
    rank: 5,
    slug: 'private-internet-access',
    name: 'Private Internet Access',
    score: 4.4,
    summary: 'Privacy-focused option with advanced controls and open-source clients.',
    highlights: [
      { icon: 'OS', label: 'Open-source applications' },
      { icon: 'US', label: 'Large US server presence' },
      { icon: 'KS', label: 'Advanced kill switch options' },
    ],
    ctaLabel: 'View Offer',
    ctaUrl: 'https://privateinternetaccess.com',
    pros: ['Deep customization', 'Open-source transparency', 'Strong value on long plans'],
    cons: ['UI is less polished', 'Can be overwhelming for non-technical users'],
    specs: [
      { label: 'Jurisdiction', value: 'United States' },
      { label: 'Server Network', value: '91 countries' },
      { label: 'Protocol', value: 'WireGuard, OpenVPN, IKEv2' },
      { label: 'Simultaneous Devices', value: 'Unlimited' },
      { label: 'Money-back Guarantee', value: '30 days' },
    ],
    faqs: [
      {
        question: 'Is PIA good for power users?',
        answer: 'Yes, it offers granular controls that advanced users usually appreciate.',
      },
      {
        question: 'What is the main tradeoff?',
        answer: 'You get flexibility and value, but the interface feels less premium than top-tier competitors.',
      },
    ],
  },
];

export const METHODOLOGY_STATS = [
  { label: 'Servers tested weekly', value: '500+' },
  { label: 'Global lab locations', value: '12' },
  { label: 'Performance tracking', value: '24/7' },
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

export const LAST_UPDATED_LABEL = 'Updated: March 2026';
