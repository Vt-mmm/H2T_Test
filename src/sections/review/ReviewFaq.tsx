import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useLocales } from 'hooks';
import { VPN_SECTION_ID } from 'routes/paths';
import type { VpnProvider } from 'types/vpn';
import { fadeInUp, staggerContainer, VIEWPORT_ONCE } from 'utils';

interface ReviewFaqProps {
  vpn: VpnProvider;
}

export function ReviewFaq({ vpn }: ReviewFaqProps) {
  const { translate } = useLocales();

  return (
    <Box
      id={VPN_SECTION_ID.faq}
      component={motion.section}
      variants={staggerContainer(0.07)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      mb={2}
    >
      <Box component={motion.div} variants={fadeInUp(16)}>
        <Typography variant="h4" fontSize={24} color="primary.main" mb={1.2}>
          {translate('review.faqTitle')}
        </Typography>
      </Box>

      {vpn.faqs.map((faq) => (
        <Accordion component={motion.article} variants={fadeInUp(14)} key={faq.question} disableGutters elevation={0} sx={{ borderRadius: '12px !important', mb: 1.2 }}>
          <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
            <Typography fontWeight={700}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
