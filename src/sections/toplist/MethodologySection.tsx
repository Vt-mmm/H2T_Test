import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import { Box, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { METHODOLOGY_STATS } from 'data/vpns';
import { useLocales } from 'hooks';
import { VPN_SECTION_ID } from 'routes/paths';
import { fadeInUp, staggerContainer, VIEWPORT_ONCE } from 'utils';

export function MethodologySection() {
  const { translate } = useLocales();

  return (
    <Box
      id={VPN_SECTION_ID.methodology}
      component={motion.section}
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      sx={{
        mt: { xs: 8, md: 12 },
        px: { xs: 2.5, sm: 3, md: 8 },
        py: { xs: 4.5, md: 7 },
        borderRadius: 4,
        color: '#fff',
        background: 'linear-gradient(135deg, #001944 0%, #062960 100%)',
      }}
    >
      <Stack component={motion.div} variants={staggerContainer(0.08)} alignItems="center" textAlign="center" maxWidth={900} mx="auto">
        <Box component={motion.div} variants={fadeInUp(18)}>
          <VerifiedUserRoundedIcon sx={{ fontSize: 44, color: '#fb6b00', mb: 1.5 }} />
        </Box>
        <Box component={motion.div} variants={fadeInUp(20, 0.04)}>
          <Typography variant="h3" fontSize={{ xs: 26, sm: 32, md: 42 }} mb={1.6}>
            {translate('toplist.methodologyTitle')}
          </Typography>
        </Box>
        <Box component={motion.div} variants={fadeInUp(22, 0.08)}>
          <Typography color="rgba(255,255,255,.82)" maxWidth={720}>
            {translate('toplist.methodologyDescription')}
          </Typography>
        </Box>

        <Box
          component={motion.div}
          variants={staggerContainer(0.09, 0.12)}
          sx={{
            mt: 4,
            width: '100%',
            display: 'grid',
            gap: 3,
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, minmax(0,1fr))' },
          }}
        >
          {METHODOLOGY_STATS.map((stat) => (
            <Box key={stat.labelKey} component={motion.div} variants={fadeInUp(16)}>
              <Typography variant="h3" fontSize={44} lineHeight={1.1}>
                {stat.value}
              </Typography>
              <Typography
                sx={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: 11,
                  color: 'rgba(255,255,255,.72)',
                  fontWeight: 700,
                  mt: 0.6,
                }}
              >
                {translate(stat.labelKey)}
              </Typography>
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}
