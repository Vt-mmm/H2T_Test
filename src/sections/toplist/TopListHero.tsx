import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useLocales } from 'hooks';
import { vaultColors } from 'theme';
import { fadeInUp, staggerContainer, VIEWPORT_ONCE } from 'utils';

export function TopListHero() {
  const { translate } = useLocales();

  return (
    <Box
      component={motion.section}
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      textAlign="center"
      maxWidth={760}
      mx="auto"
      mb={{ xs: 6, sm: 8, md: 11 }}
    >
      <Box component={motion.div} variants={fadeInUp(24)}>
        <Typography variant="h1" fontSize={{ xs: 34, sm: 48, md: 64 }} mb={2.1} lineHeight={1.06} color="primary.main">
          {translate('toplist.heroTitlePrefix')} <Box component="span" sx={{ color: vaultColors.accent }}>{translate('toplist.heroTitleHighlight')}</Box>
        </Typography>
      </Box>

      <Box component={motion.div} variants={fadeInUp(20, 0.06)}>
        <Typography variant="body1" fontSize={{ xs: 16, sm: 19 }} fontWeight={500} color="text.secondary" maxWidth={640} mx="auto">
          {translate('toplist.heroDescription')}
        </Typography>
      </Box>

      <Box component={motion.div} variants={fadeInUp(16, 0.12)}>
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            mt: 1.6,
            color: 'text.disabled',
            fontSize: { xs: 11, sm: 12 },
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          {translate('toplist.updatedLabel')}
        </Typography>
      </Box>
    </Box>
  );
}
