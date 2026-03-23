import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import { Box, Stack, Typography } from '@mui/material';
import { METHODOLOGY_STATS } from '../../data/vpns';
import { VPN_SECTION_ID } from '../../routes/paths';

export function MethodologySection() {
  return (
    <Box
      id={VPN_SECTION_ID.methodology}
      sx={{
        mt: { xs: 8, md: 12 },
        px: { xs: 2.5, sm: 3, md: 8 },
        py: { xs: 4.5, md: 7 },
        borderRadius: 4,
        color: '#fff',
        background: 'linear-gradient(135deg, #001944 0%, #062960 100%)',
      }}
    >
      <Stack alignItems="center" textAlign="center" maxWidth={900} mx="auto">
        <VerifiedUserRoundedIcon sx={{ fontSize: 44, color: '#fb6b00', mb: 1.5 }} />
        <Typography variant="h3" fontSize={{ xs: 26, sm: 32, md: 42 }} mb={1.6}>
          Our Rigorous Ranking Methodology
        </Typography>
        <Typography color="rgba(255,255,255,.82)" maxWidth={720}>
          We test providers with repeated speed checks, DNS leak verification, and policy review across multi-region
          scenarios before they make this list.
        </Typography>

        <Box
          sx={{
            mt: 4,
            width: '100%',
            display: 'grid',
            gap: 3,
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, minmax(0,1fr))' },
          }}
        >
          {METHODOLOGY_STATS.map((stat) => (
            <Box key={stat.label}>
              <Typography variant="h3" fontSize={44} lineHeight={1.1}>
                {stat.value}
              </Typography>
              <Typography
                sx={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: 11,
                  color: 'rgba(255,255,255,.72)',
                  fontWeight: 700,
                  mt: 0.6,
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}
