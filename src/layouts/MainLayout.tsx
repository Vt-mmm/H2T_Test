import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { MobileBottomNav, SiteFooter, SiteHeader } from 'components/common';

export function MainLayout() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <SiteHeader />

      <Box component="main" sx={{ pb: { xs: 13, lg: 8 }, pt: { xs: 12, sm: 13, lg: 16 } }}>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>

      <SiteFooter />
      <MobileBottomNav />
    </Box>
  );
}
