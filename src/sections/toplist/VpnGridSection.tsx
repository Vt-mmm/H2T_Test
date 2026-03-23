import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { VpnCard } from 'components/vpn';
import { getVpnProviders } from 'data/vpns';
import { useLocales } from 'hooks';
import { VPN_SECTION_ID } from 'routes/paths';
import { fadeInUp, staggerContainer, VIEWPORT_ONCE } from 'utils';

export function VpnGridSection() {
  const { translate } = useLocales();
  const vpnProviders = getVpnProviders(translate);

  return (
    <Box
      id={VPN_SECTION_ID.rankings}
      component={motion.section}
      variants={staggerContainer(0.09)}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...VIEWPORT_ONCE, amount: 0.08 }}
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
          component={motion.article}
          variants={fadeInUp(vpn.rank === 1 ? 34 : 22)}
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
