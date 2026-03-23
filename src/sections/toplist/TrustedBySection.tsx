import { Box, Paper, Typography } from '@mui/material';
import { TRUSTED_BY_BRANDS } from 'data/vpns';
import { useLocales } from 'hooks';
import { vaultColors } from 'theme';

const MARQUEE_DURATION_SECONDS = 28;

export function TrustedBySection() {
  const { translate } = useLocales();
  const trustedItems = [...TRUSTED_BY_BRANDS, ...TRUSTED_BY_BRANDS];

  return (
    <Box mb={{ xs: 6, md: 8 }}>
      <Typography
        variant="overline"
        sx={{
          display: 'block',
          textAlign: 'center',
          letterSpacing: '0.14em',
          color: 'primary.main',
          fontWeight: 800,
          mb: 1.4,
        }}
      >
        {translate('toplist.trustedByTitle')}
      </Typography>

      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          py: 0.8,
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: { xs: 28, sm: 40, md: 64 },
            zIndex: 1,
            pointerEvents: 'none',
          },
          '&::before': {
            left: 0,
            background: 'linear-gradient(90deg, #f6fafe 0%, rgba(246,250,254,0) 100%)',
          },
          '&::after': {
            right: 0,
            background: 'linear-gradient(270deg, #f6fafe 0%, rgba(246,250,254,0) 100%)',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            width: 'max-content',
            animation: `trustedByMarquee ${MARQUEE_DURATION_SECONDS}s linear infinite`,
            '@keyframes trustedByMarquee': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' },
            },
            '&:hover': {
              animationPlayState: 'paused',
            },
            '@media (prefers-reduced-motion: reduce)': {
              animation: 'none',
            },
          }}
        >
          {trustedItems.map((brand, index) => (
            <Paper
              key={`${brand.name}-${index}`}
              elevation={0}
              sx={{
                px: { xs: 1.4, sm: 2 },
                py: 1,
                borderRadius: 999,
                border: `1px solid ${vaultColors.surfaceHigh}`,
                bgcolor: 'background.paper',
                display: 'flex',
                alignItems: 'center',
                gap: 1.1,
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: 999,
                  bgcolor: vaultColors.surfaceLow,
                  color: 'primary.main',
                  fontSize: 12,
                  fontWeight: 800,
                  display: 'grid',
                  placeItems: 'center',
                  letterSpacing: '0.04em',
                }}
              >
                {brand.short}
              </Box>

              <Typography color="text.secondary" fontSize={{ xs: 13, sm: 14 }} fontWeight={700}>
                {brand.name}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
