import { Box, Typography } from '@mui/material';
import { useLocales } from '../../hooks';
import { vaultColors } from '../../theme';

export function TopListHero() {
  const { translate } = useLocales();

  return (
    <Box textAlign="center" maxWidth={760} mx="auto" mb={{ xs: 6, sm: 8, md: 11 }}>
      <Box
        component="span"
        sx={{
          display: 'inline-block',
          px: 1.8,
          py: 0.65,
          borderRadius: 999,
          bgcolor: '#d9e2ff',
          color: '#001945',
          fontWeight: 800,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          fontSize: 10,
          mb: 2.2,
        }}
      >
        {translate('toplist.updatedLabel')}
      </Box>

      <Typography variant="h1" fontSize={{ xs: 34, sm: 48, md: 64 }} mb={2.1} lineHeight={1.06} color="primary.main">
        {translate('toplist.heroTitlePrefix')} <Box component="span" sx={{ color: vaultColors.accent }}>{translate('toplist.heroTitleHighlight')}</Box>
      </Typography>

      <Typography variant="body1" fontSize={{ xs: 16, sm: 19 }} fontWeight={500} color="text.secondary" maxWidth={640} mx="auto">
        {translate('toplist.heroDescription')}
      </Typography>
    </Box>
  );
}
