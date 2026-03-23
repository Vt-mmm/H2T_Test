import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLocales } from 'hooks';
import { VPN_SECTION_ID } from 'routes/paths';
import { MethodologySection, QuickCompareSection, TopListHero, TrustedBySection, VpnGridSection } from 'sections/toplist';
import { fadeInUp, pageTransitionVariants, scrollToSection, VIEWPORT_ONCE } from 'utils';

export function TopVpnPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { translate } = useLocales();

  useEffect(() => {
    const locationState = location.state as { scrollTo?: string } | null;

    if (!locationState?.scrollTo) {
      return;
    }

    requestAnimationFrame(() => {
      scrollToSection(locationState.scrollTo!, 'auto');
    });

    navigate(location.pathname, { replace: true, state: null });
  }, [location.pathname, location.state, navigate]);

  return (
    <Box component={motion.section} variants={pageTransitionVariants} initial="hidden" animate="visible" exit="exit">
      <TopListHero />
      <TrustedBySection />
      <VpnGridSection />
      <QuickCompareSection />
      <MethodologySection />

      <Box
        id={VPN_SECTION_ID.faq}
        component={motion.section}
        variants={fadeInUp(22)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        mt={{ xs: 7, md: 10 }}
      >
        <Typography variant="h3" fontSize={{ xs: 28, md: 36 }} color="primary.main" mb={1.6}>
          {translate('toplist.buyingNotesTitle')}
        </Typography>
        <Typography color="text.secondary" maxWidth={780}>
          {translate('toplist.buyingNotesDescription')}
        </Typography>
      </Box>
    </Box>
  );
}
