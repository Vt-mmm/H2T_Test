import { Box, Typography } from '@mui/material';
import { useLocales } from 'hooks';
import { vaultColors } from 'theme';

export function TopListHero() {
  const { translate } = useLocales();

  return (
    <Box textAlign="center" maxWidth={760} mx="auto" mb={{ xs: 6, sm: 8, md: 11 }}>
      <Typography variant="h1" fontSize={{ xs: 34, sm: 48, md: 64 }} mb={2.1} lineHeight={1.06} color="primary.main">
        {translate('toplist.heroTitlePrefix')} <Box component="span" sx={{ color: vaultColors.accent }}>{translate('toplist.heroTitleHighlight')}</Box>
      </Typography>

      <Typography variant="body1" fontSize={{ xs: 16, sm: 19 }} fontWeight={500} color="text.secondary" maxWidth={640} mx="auto">
        {translate('toplist.heroDescription')}
      </Typography>

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
  );
}
