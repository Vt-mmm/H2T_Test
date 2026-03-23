import { Box } from '@mui/material';
import { VpnCard } from '../../components/vpn';
import { getVpnProviders } from '../../data/vpns';
import { useLocales } from '../../hooks';
import { VPN_SECTION_ID } from '../../routes/paths';

export function VpnGridSection() {
  const { translate } = useLocales();
  const vpnProviders = getVpnProviders(translate);

  return (
    <Box
      id={VPN_SECTION_ID.rankings}
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, minmax(0, 1fr))', xl: 'repeat(3, minmax(0, 1fr))' },
        gap: { xs: 2.2, sm: 3 },
        alignItems: 'stretch',
      }}
    >
      {vpnProviders.map((vpn) => (
        <Box
          key={vpn.slug}
          sx={{
            gridColumn: vpn.rank === 1 ? { xs: 'span 1', xl: 'span 2' } : 'span 1',
            display: 'flex',
          }}
        >
          <VpnCard vpn={vpn} />
        </Box>
      ))}
    </Box>
  );
}
