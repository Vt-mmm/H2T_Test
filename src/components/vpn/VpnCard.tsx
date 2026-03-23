import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { Box, Button, Card, CardContent, Chip, Link, List, ListItem, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { useLocales } from 'hooks';
import { vaultColors } from 'theme';
import type { VpnProvider } from 'types/vpn';
import { formatScore, MOTION_EASE_OUT, toReviewPath } from 'utils';

interface VpnCardProps {
  vpn: VpnProvider;
}

export function VpnCard({ vpn }: VpnCardProps) {
  const { translate } = useLocales();
  const brandLayoutId = `vpn-brand-${vpn.slug}`;

  return (
    <Card
      elevation={0}
      sx={{
        width: '100%',
        minWidth: 0,
        borderRadius: 3,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'visible',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 10px 30px -10px rgba(0, 25, 68, 0.08)',
        borderTop: vpn.topPick ? `8px solid ${vaultColors.accent}` : 'none',
        transition: 'transform .25s ease, box-shadow .25s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 24px 40px -18px rgba(0, 25, 68, 0.22)',
        },
      }}
    >
      {vpn.topPick && (
        <Chip
          label={translate('vpnCard.editorsChoice')}
          size="small"
          sx={{
            position: 'absolute',
            top: -12,
            left: { xs: 14, sm: 20 },
            bgcolor: vaultColors.accent,
            color: '#fff',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            borderRadius: 999,
            maxWidth: { xs: 'calc(100% - 28px)', sm: 'none' },
            '& .MuiChip-label': {
              px: 1.2,
            },
          }}
        />
      )}
      <CardContent
        sx={{
          p: 'clamp(18px, 2.4vw, 26px)',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 2.2,
          flexGrow: 1,
        }}
      >
        {vpn.topPick && (
          <>
            <Chip
              label={translate('vpnCard.bestForTopPick')}
              size="small"
              sx={{
                display: { xs: 'inline-flex', sm: 'none' },
                alignSelf: 'flex-end',
                bgcolor: 'rgba(251, 107, 0, 0.12)',
                color: 'primary.main',
                fontWeight: 800,
                borderRadius: 999,
                letterSpacing: '0.01em',
                maxWidth: '100%',
              }}
            />
            <Chip
              label={translate('vpnCard.bestForTopPick')}
              size="small"
              sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                position: 'absolute',
                top: 18,
                right: 22,
                bgcolor: 'rgba(251, 107, 0, 0.12)',
                color: 'primary.main',
                fontWeight: 800,
                borderRadius: 999,
                letterSpacing: '0.01em',
              }}
            />
          </>
        )}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '44px minmax(0, 1fr)', sm: '52px minmax(0, 1fr)' },
            columnGap: { xs: 1.2, sm: 1.6 },
            rowGap: 0.55,
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: { xs: 44, sm: 52 },
              height: { xs: 44, sm: 52 },
              borderRadius: 2,
              bgcolor: vpn.topPick ? 'primary.main' : 'grey.100',
              color: vpn.topPick ? '#fff' : 'primary.main',
              display: 'grid',
              placeItems: 'center',
              fontWeight: 800,
              fontSize: { xs: 20, sm: 24 },
              fontFamily: 'Manrope, Inter, sans-serif',
            }}
          >
            {vpn.rank}
          </Box>

          <Box
            component={motion.div}
            layoutId={brandLayoutId}
            transition={{ layout: { duration: 0.36, ease: MOTION_EASE_OUT } }}
            sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 0 }}
          >
            <Box
              component="img"
              src={vpn.logoSrc}
              alt={vpn.logoAlt}
              loading="lazy"
              sx={{
                width: 30,
                height: 30,
                borderRadius: 1,
                objectFit: 'contain',
                objectPosition: 'center',
                bgcolor: '#fff',
                border: '1px solid',
                borderColor: 'divider',
                p: 0.15,
                flexShrink: 0,
              }}
            />
            <Typography
              variant="h5"
              fontSize="clamp(1.35rem, 2.35vw, 1.5rem)"
              color="primary.main"
              lineHeight={1.2}
              sx={{
                textAlign: 'left',
                minWidth: 0,
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                wordBreak: 'break-word',
              }}
            >
              {vpn.name}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            color={vaultColors.accent}
            fontWeight={700}
            sx={{ gridColumn: '2 / 3', justifySelf: 'end', textAlign: 'right' }}
          >
            {translate('vpnCard.score', { score: formatScore(vpn.score) })}
          </Typography>
        </Box>

        <Typography color="text.secondary" fontSize="clamp(0.95rem, 1.35vw, 1rem)">
          <Box
            component="span"
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              lineHeight: 1.5,
              minHeight: { xs: 'auto', xl: '3em' },
            }}
          >
            {vpn.summary}
          </Box>
        </Typography>

        <List disablePadding sx={{ display: 'grid', gap: 1.2, minHeight: { xs: 'auto', xl: 152 } }}>
          {vpn.highlights.map((highlight) => (
            <ListItem key={highlight.label} disableGutters sx={{ alignItems: 'flex-start', gap: 1.2 }}>
              <Box
                aria-hidden="true"
                sx={{
                  minWidth: 30,
                  width: 30,
                  height: 30,
                  borderRadius: 99,
                  bgcolor: vaultColors.surfaceLow,
                  color: 'primary.main',
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: 11,
                  fontWeight: 800,
                }}
              >
                {highlight.icon}
              </Box>
              <Typography variant="body2" color="text.secondary" fontWeight={600} lineHeight={1.45}>
                {highlight.label}
              </Typography>
            </ListItem>
          ))}
        </List>

        <Stack spacing={1.1} mt="auto" pt={0.8}>
          <Button
            component={RouterLink}
            to={toReviewPath(vpn.slug)}
            variant={vpn.topPick ? 'contained' : 'outlined'}
            color="primary"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{ py: 1.3 }}
          >
            {translate('vpnCard.viewDetails')}
          </Button>

          <Link href={vpn.ctaUrl} target="_blank" rel="noreferrer" underline="hover" color="text.secondary" fontWeight={600}>
            {vpn.ctaLabel}
          </Link>
        </Stack>
      </CardContent>
    </Card>
  );
}
