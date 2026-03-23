import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { VPN_SECTION_ID } from '../../routes/paths';
import type { VpnProvider } from '../../types/vpn';

interface ReviewFaqProps {
  vpn: VpnProvider;
}

export function ReviewFaq({ vpn }: ReviewFaqProps) {
  return (
    <Box id={VPN_SECTION_ID.faq} mb={2}>
      <Typography variant="h4" fontSize={24} color="primary.main" mb={1.2}>
        FAQ
      </Typography>

      {vpn.faqs.map((faq) => (
        <Accordion key={faq.question} disableGutters elevation={0} sx={{ borderRadius: '12px !important', mb: 1.2 }}>
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
