import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { useLocales } from 'hooks';
import { PATH_VPN_APP } from 'routes/paths';
import { pageTransitionVariants } from 'utils';

export function NotFoundPage() {
  const { translate } = useLocales();

  return (
    <Box component={motion.section} variants={pageTransitionVariants} initial="hidden" animate="visible" exit="exit" textAlign="center" py={10}>
      <Typography variant="h2" fontSize={{ xs: 34, md: 48 }} color="primary.main" mb={1.6}>
        {translate('notFound.title')}
      </Typography>
      <Typography color="text.secondary" mb={3}>
        {translate('notFound.description')}
      </Typography>
      <Button component={RouterLink} to={PATH_VPN_APP.root} variant="contained" startIcon={<HomeRoundedIcon />}>
        {translate('notFound.backToHomepage')}
      </Button>
    </Box>
  );
}
