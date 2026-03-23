import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { Box, Button, Link, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { getVpnProviders } from 'data/vpns';
import { useLocales } from 'hooks';
import { fadeInUp, staggerContainer, VIEWPORT_ONCE } from 'utils';

export function QuickCompareSection() {
  const { translate } = useLocales();
  const vpnProviders = getVpnProviders(translate);

  return (
    <Box
      component={motion.section}
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      mt={{ xs: 7, md: 10 }}
    >
      <Box component={motion.div} variants={fadeInUp(20)}>
        <Typography variant="h3" fontSize={{ xs: 28, md: 36 }} mb={2.5} color="primary.main">
          {translate('toplist.quickComparisonTitle')}
        </Typography>
      </Box>

      <Box component={motion.div} variants={fadeInUp(24, 0.06)}>
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            borderRadius: 3,
            overflowX: 'auto',
            '& table': {
              minWidth: { xs: 520, sm: 620 },
            },
          }}
        >
          <Table aria-label="VPN quick comparison table">
            <TableHead>
              <TableRow>
                <TableCell>{translate('toplist.tableProvider')}</TableCell>
                <TableCell>{translate('toplist.tableScore')}</TableCell>
                <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>{translate('toplist.tableTopHighlight')}</TableCell>
                <TableCell align="right">{translate('toplist.tableAction')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vpnProviders.map((vpn) => (
                <TableRow key={vpn.slug} hover>
                  <TableCell sx={{ fontWeight: 700, color: 'primary.main' }}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Box
                        component="img"
                        src={vpn.logoSrc}
                        alt={vpn.logoAlt}
                        loading="lazy"
                        sx={{
                          width: 22,
                          height: 22,
                          borderRadius: 0.8,
                          objectFit: 'cover',
                          objectPosition: 'center',
                          bgcolor: '#fff',
                          border: '1px solid',
                          borderColor: 'divider',
                          p: 0,
                          flexShrink: 0,
                        }}
                      />
                      <Box component="span">{vpn.name}</Box>
                    </Stack>
                  </TableCell>
                  <TableCell>{vpn.score.toFixed(1)}/5</TableCell>
                  <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>{vpn.highlights[0]?.label}</TableCell>
                  <TableCell align="right">
                    <Button
                      component={Link}
                      href={vpn.ctaUrl}
                      target="_blank"
                      rel="noreferrer"
                      size="small"
                      endIcon={<OpenInNewRoundedIcon />}
                      sx={{ fontWeight: 700, whiteSpace: 'nowrap' }}
                    >
                      {translate('toplist.visitSite')}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
