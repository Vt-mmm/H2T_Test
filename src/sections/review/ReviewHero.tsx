import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { Box, Button, Chip, Link, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { useLocales } from 'hooks';
import { PATH_VPN_APP, VPN_SECTION_ID } from 'routes/paths';
import type { VpnProvider } from 'types/vpn';
import { vaultColors } from 'theme';
import { fadeInUp, MOTION_EASE_OUT, staggerContainer, VIEWPORT_ONCE } from 'utils';

interface ReviewHeroProps {
  vpn: VpnProvider;
}

export function ReviewHero({ vpn }: ReviewHeroProps) {
  const { translate } = useLocales();
  const brandLayoutId = `vpn-brand-${vpn.slug}`;

  return (
    <Box
      component={motion.section}
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      mb={{ xs: 5, md: 7 }}
    >
      <Box component={motion.div} variants={fadeInUp(14)}>
        <Button component={RouterLink} to={PATH_VPN_APP.root} size="small" startIcon={<ArrowBackRoundedIcon />} sx={{ mb: 2 }}>
          {translate('review.backToTop5')}
        </Button>
      </Box>

      <Stack
        component={motion.div}
        variants={fadeInUp(22, 0.04)}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', md: 'center' }}
        gap={3}
      >
        <Box maxWidth={760}>
          <Chip
            label={translate('review.detailedReview')}
            sx={{
              mb: 1.3,
              bgcolor: '#d9e2ff',
              color: '#001945',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              fontSize: 11,
            }}
          />
          <Stack
            component={motion.div}
            layoutId={brandLayoutId}
            transition={{ layout: { duration: 0.36, ease: MOTION_EASE_OUT } }}
            direction="row"
            spacing={1.4}
            alignItems="center"
            mb={1.2}
          >
            <Box
              component="img"
              src={vpn.logoSrc}
              alt={vpn.logoAlt}
              loading="lazy"
              sx={{
                width: { xs: 34, sm: 40 },
                height: { xs: 34, sm: 40 },
                borderRadius: 1.2,
                objectFit: 'contain',
                objectPosition: 'center',
                bgcolor: '#fff',
                border: '1px solid',
                borderColor: 'divider',
                p: 0.2,
                flexShrink: 0,
              }}
            />
            <Typography variant="h2" fontSize={{ xs: 30, sm: 40, md: 52 }} color="primary.main">
              {translate('review.reviewTitle', { name: vpn.name })}
            </Typography>
          </Stack>
          <Typography color="text.secondary" mb={1.4} fontSize={{ xs: 15, sm: 16 }}>
            {vpn.summary}
          </Typography>
          <Typography fontWeight={700} color={vaultColors.accent}>
            {translate('review.communityScore', { score: vpn.score.toFixed(1), count: vpn.reviewCount })}
          </Typography>
        </Box>

        <Stack direction={{ xs: 'column', sm: 'row', md: 'column' }} spacing={1.2} width={{ xs: '100%', md: 'auto' }}>
          <Button
            component={Link}
            href={vpn.ctaUrl}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            fullWidth
            endIcon={<OpenInNewRoundedIcon />}
          >
            {translate('review.visitWebsite')}
          </Button>
          <Button
            component={RouterLink}
            to={PATH_VPN_APP.root}
            state={{ scrollTo: VPN_SECTION_ID.rankings }}
            variant="outlined"
            fullWidth
          >
            {translate('review.compareOthers')}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
