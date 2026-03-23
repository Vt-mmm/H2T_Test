import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useLocales } from 'hooks';
import { ReviewFaq, ReviewHero, ReviewProsCons, ReviewSpecsTable } from 'sections/review';
import { getVpnBySlug } from 'utils';
import { NotFoundPage } from './NotFoundPage';

export function VpnReviewPage() {
  const { slug = '' } = useParams();
  const { translate } = useLocales();
  const vpn = getVpnBySlug(slug, translate);

  if (!vpn) {
    return <NotFoundPage />;
  }

  return (
    <Box>
      <ReviewHero vpn={vpn} />
      <ReviewProsCons vpn={vpn} />
      <ReviewSpecsTable vpn={vpn} />
      <ReviewFaq vpn={vpn} />

      <Box sx={{ p: { xs: 2.2, sm: 3.2 }, borderRadius: 3, bgcolor: 'background.paper' }}>
        <Typography variant="h4" fontSize={{ xs: 21, sm: 24 }} color="primary.main" mb={1}>
          {translate('review.finalVerdictTitle')}
        </Typography>
        <Typography color="text.secondary">
          {translate('review.finalVerdictDescription', { name: vpn.name })}
        </Typography>
      </Box>
    </Box>
  );
}
