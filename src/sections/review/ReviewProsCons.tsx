import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import { Box, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useLocales } from 'hooks';
import type { VpnProvider } from 'types/vpn';
import { fadeInUp, staggerContainer, VIEWPORT_ONCE } from 'utils';

interface ReviewProsConsProps {
  vpn: VpnProvider;
}

export function ReviewProsCons({ vpn }: ReviewProsConsProps) {
  const { translate } = useLocales();

  return (
    <Box
      component={motion.section}
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
        gap: 2,
      }}
      mb={3}
    >
      <Paper component={motion.article} variants={fadeInUp(18)} elevation={0} sx={{ borderRadius: 3, p: { xs: 2.2, sm: 3.2 } }}>
        <Typography variant="h4" fontSize={{ xs: 21, sm: 24 }} color="primary.main" mb={1.2}>
          {translate('review.advantages')}
        </Typography>
        <List disablePadding>
          {vpn.pros.map((item) => (
            <ListItem key={item} disableGutters>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <CheckCircleRoundedIcon fontSize="small" color="success" />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Paper component={motion.article} variants={fadeInUp(18, 0.05)} elevation={0} sx={{ borderRadius: 3, p: { xs: 2.2, sm: 3.2 } }}>
        <Typography variant="h4" fontSize={{ xs: 21, sm: 24 }} color="primary.main" mb={1.2}>
          {translate('review.limitations')}
        </Typography>
        <List disablePadding>
          {vpn.cons.map((item) => (
            <ListItem key={item} disableGutters>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <RemoveCircleRoundedIcon fontSize="small" color="warning" />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
