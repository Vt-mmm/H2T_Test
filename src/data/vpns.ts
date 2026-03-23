import type { VpnProvider } from 'types/vpn';
import type { TranslateFn } from './vpn/definitions';
import { mapProviderToVpn } from './vpn/helpers';
import { VPN_PROVIDER_DEFINITIONS } from './vpn/providers';
import { METHODOLOGY_STATS, TRUSTED_BY_BRANDS } from './vpn/stats';

export type { TranslateFn };
export { METHODOLOGY_STATS, TRUSTED_BY_BRANDS };

export function getVpnProviders(translate: TranslateFn): VpnProvider[] {
  return VPN_PROVIDER_DEFINITIONS.map((provider) => mapProviderToVpn(provider, translate));
}

export function getVpnProviderBySlug(slug: string, translate: TranslateFn) {
  return getVpnProviders(translate).find((vpn) => vpn.slug === slug);
}
