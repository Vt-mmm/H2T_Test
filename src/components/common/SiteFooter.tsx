import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material';
import { vaultColors } from '../../theme';
import h2tLogo from '../../assets/H2TLogo.jpg';

const RESOURCE_LINKS = ['VPN for Gaming', 'Privacy Laws 2026', 'Encryption Guides', 'Routers for VPN'];
const COMPANY_LINKS = ['About Our Lab', 'Affiliate Disclosure', 'Privacy Policy', 'Contact'];

export function SiteFooter() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 9 }, mt: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box
                component="img"
                src={h2tLogo}
                alt="H2T logo"
                sx={{ width: 24, height: 24, borderRadius: 1, objectFit: 'cover', flexShrink: 0 }}
              />
              <Typography fontFamily="Manrope, Inter, sans-serif" fontWeight={800} color="primary.main">
                The Digital Vault
              </Typography>
            </Stack>
            <Typography color="text.secondary" mt={2.5} maxWidth={460}>
              Your trusted guide to digital privacy. We provide transparent, data-driven reviews to help international
              users compare VPN services quickly.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="overline" color="primary.main" fontWeight={700} letterSpacing="0.08em">
              Resources
            </Typography>
            <Stack spacing={1.2} mt={1.4}>
              {RESOURCE_LINKS.map((item) => (
                <Link
                  key={item}
                  underline="none"
                  color="text.secondary"
                  sx={{ fontSize: 14, fontWeight: 500, width: 'fit-content' }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="overline" color="primary.main" fontWeight={700} letterSpacing="0.08em">
              Company
            </Typography>
            <Stack spacing={1.2} mt={1.4}>
              {COMPANY_LINKS.map((item) => (
                <Link
                  key={item}
                  underline="none"
                  color="text.secondary"
                  sx={{ fontSize: 14, fontWeight: 500, width: 'fit-content' }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
          gap={1.4}
          mt={7}
          pt={2}
          borderTop={`1px solid ${vaultColors.surfaceHigh}`}
        >
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
            © 2026 The Digital Vault. All rights reserved.
          </Typography>
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
            Rankings are periodically updated using internal performance checks.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
