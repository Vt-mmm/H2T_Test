import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import type { MouseEvent } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { useLocales } from 'hooks';
import { PATH_VPN_APP, VPN_SECTION_ID } from 'routes/paths';
import { vaultColors } from 'theme';
import { scrollToSection } from 'utils';
import h2tLogo from 'assets/H2TLogo.jpg';
import { LanguageSwitcher } from './LanguageSwitcher';

export function SiteHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const { translate } = useLocales();
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);

  const NAV_ITEMS = [
    { label: translate('header.vpnRankings'), sectionId: VPN_SECTION_ID.rankings },
    { label: translate('header.speedTests'), sectionId: VPN_SECTION_ID.methodology },
    { label: translate('header.securityGuides'), sectionId: VPN_SECTION_ID.faq },
  ];

  const navigateToSection = (sectionId: string) => {
    if (location.pathname !== PATH_VPN_APP.root) {
      navigate(PATH_VPN_APP.root, { state: { scrollTo: sectionId } });
      return;
    }

    scrollToSection(sectionId);
  };

  const openMobileMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const closeMobileMenu = () => {
    setMobileMenuAnchor(null);
  };

  const handleMobileMenuNavigate = (sectionId: string) => {
    closeMobileMenu();
    navigateToSection(sectionId);
  };

  return (
    <AppBar
      elevation={0}
      sx={{
        bgcolor: 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${vaultColors.surfaceHigh}`,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, sm: 72, md: 76 }, justifyContent: 'space-between', gap: 2 }}>
          <Button
            component={RouterLink}
            to={PATH_VPN_APP.root}
            disableRipple
            sx={{
              px: 0,
              minWidth: 0,
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              '&:hover': { bgcolor: 'transparent' },
            }}
          >
            <Box
              component="img"
              src={h2tLogo}
              alt="H2T logo"
              sx={{ width: 30, height: 30, borderRadius: 1, objectFit: 'cover', flexShrink: 0 }}
            />
            <Typography
              fontFamily="Manrope, Inter, sans-serif"
              fontStyle="italic"
              fontWeight={800}
              fontSize={{ xs: '1rem', sm: '1.22rem' }}
              letterSpacing="-0.01em"
            >
              {translate('header.brandName')}
            </Typography>
          </Button>

          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ display: { xs: 'none', lg: 'flex' } }}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                component="button"
                onClick={() => navigateToSection(item.sectionId)}
                underline="none"
                color="text.secondary"
                sx={{
                  fontWeight: 600,
                  fontSize: 14,
                  px: 1.2,
                  border: 0,
                  bgcolor: 'transparent',
                  cursor: 'pointer',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher />
            <Button onClick={() => navigateToSection(VPN_SECTION_ID.rankings)} variant="contained" sx={{ ml: 0.4, px: 2.4, py: 1 }}>
              {translate('header.getStarted')}
            </Button>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center" sx={{ display: { xs: 'flex', lg: 'none' } }}>
            <LanguageSwitcher />
            <Button onClick={() => navigateToSection(VPN_SECTION_ID.rankings)} variant="contained" size="small" sx={{ px: 1.5, minWidth: 0 }}>
              {translate('header.start')}
            </Button>
            <IconButton aria-label={translate('header.openNavigation')} color="primary" size="small" onClick={openMobileMenu}>
              <MenuRoundedIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      <Menu
        anchorEl={mobileMenuAnchor}
        open={Boolean(mobileMenuAnchor)}
        onClose={closeMobileMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              minWidth: 220,
              borderRadius: 2,
              border: `1px solid ${vaultColors.surfaceHigh}`,
              boxShadow: '0 12px 28px rgba(0, 25, 68, 0.18)',
            },
          },
        }}
      >
        {NAV_ITEMS.map((item) => (
          <MenuItem key={item.sectionId} onClick={() => handleMobileMenuNavigate(item.sectionId)} sx={{ py: 1.1 }}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
}
