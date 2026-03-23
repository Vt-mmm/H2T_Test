import { Avatar, Box, Divider, LinearProgress, Rating, Stack, Typography } from '@mui/material';
import { useLocales } from 'hooks';
import type { VpnProvider } from 'types/vpn';

interface ReviewCommunityFeedbackProps {
  vpn: VpnProvider;
}

const STAR_LEVELS = [5, 4, 3, 2, 1] as const;

export function ReviewCommunityFeedback({ vpn }: ReviewCommunityFeedbackProps) {
  const { translate } = useLocales();

  const starCountMap = STAR_LEVELS.reduce<Record<number, number>>(
    (acc, level) => ({
      ...acc,
      [level]: vpn.comments.filter((comment) => Math.round(comment.rating) === level).length,
    }),
    {},
  );

  return (
    <Box sx={{ mt: { xs: 5, md: 7 }, p: { xs: 2.2, sm: 3 }, borderRadius: 3, bgcolor: 'background.paper' }}>
      <Typography variant="h4" fontSize={{ xs: 22, sm: 27 }} color="primary.main" mb={2.2}>
        {translate('review.communityRatingTitle')}
      </Typography>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2.4, md: 4 }} mb={2.4}>
        <Box minWidth={{ md: 190 }}>
          <Typography fontSize={{ xs: 36, sm: 42 }} fontWeight={800} color="primary.main" lineHeight={1}>
            {vpn.score.toFixed(1)}
          </Typography>
          <Rating value={vpn.score} precision={0.1} readOnly />
          <Typography variant="body2" color="text.secondary" mt={0.5}>
            {translate('review.basedOnComments', { count: vpn.reviewCount })}
          </Typography>
        </Box>

        <Box flex={1}>
          <Stack spacing={0.8}>
            {STAR_LEVELS.map((level) => {
              const count = starCountMap[level];
              const percentage = vpn.reviewCount ? (count / vpn.reviewCount) * 100 : 0;

              return (
                <Stack key={level} direction="row" alignItems="center" spacing={1.2}>
                  <Typography variant="body2" color="text.secondary" width={30}>
                    {level}★
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={percentage}
                    sx={{ flex: 1, height: 8, borderRadius: 99, bgcolor: 'grey.100' }}
                  />
                  <Typography variant="body2" color="text.secondary" width={18} textAlign="right">
                    {count}
                  </Typography>
                </Stack>
              );
            })}
          </Stack>
        </Box>
      </Stack>

      <Divider sx={{ mb: 2.2 }} />

      <Typography variant="h5" fontSize={{ xs: 19, sm: 22 }} color="primary.main" mb={1.4}>
        {translate('review.recentComments')}
      </Typography>

      <Stack spacing={1.4}>
        {vpn.comments.slice(0, 6).map((comment) => (
          <Box key={comment.id} sx={{ p: 1.6, borderRadius: 2, bgcolor: 'grey.50' }}>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start" gap={1.2}>
              <Stack direction="row" spacing={1.2} alignItems="center">
                <Avatar sx={{ width: 34, height: 34, bgcolor: 'primary.main', fontSize: 14 }}>{comment.author.charAt(0)}</Avatar>
                <Box>
                  <Typography fontWeight={700} lineHeight={1.2}>
                    {comment.author}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {comment.dateLabel}
                  </Typography>
                </Box>
              </Stack>
              <Rating size="small" value={comment.rating} precision={0.5} readOnly />
            </Stack>
            <Typography color="text.secondary" mt={1}>
              {comment.content}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
