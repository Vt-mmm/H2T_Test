import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { VPN_SECTION_ID } from '../routes/paths';
import { MethodologySection, QuickCompareSection, TopListHero, VpnGridSection } from '../sections/toplist';
import { scrollToSection } from '../utils';

export function TopVpnPage() {
  const location = useLocation();
  const navigate = useNavigate();

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
    <Box>
      <TopListHero />
      <VpnGridSection />
      <QuickCompareSection />
      <MethodologySection />

      <Box id={VPN_SECTION_ID.faq} mt={{ xs: 7, md: 10 }}>
        <Typography variant="h3" fontSize={{ xs: 28, md: 36 }} color="primary.main" mb={1.6}>
          Buying Notes
        </Typography>
        <Typography color="text.secondary" maxWidth={780}>
          Focus on speed consistency, privacy policy transparency, and app quality across desktop/mobile before making
          a purchase decision. Use the detail pages to compare real tradeoffs, not only marketing claims.
        </Typography>
      </Box>
    </Box>
  );
}
