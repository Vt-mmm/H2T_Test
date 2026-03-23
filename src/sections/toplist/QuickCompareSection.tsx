import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import {
  Box,
  Button,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { VPN_PROVIDERS } from '../../data/vpns';

export function QuickCompareSection() {
  return (
    <Box mt={{ xs: 7, md: 10 }}>
      <Typography variant="h3" fontSize={{ xs: 28, md: 36 }} mb={2.5} color="primary.main">
        Quick Comparison
      </Typography>

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
              <TableCell>Provider</TableCell>
              <TableCell>Score</TableCell>
              <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>Top Highlight</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {VPN_PROVIDERS.map((vpn) => (
              <TableRow key={vpn.slug} hover>
                <TableCell sx={{ fontWeight: 700, color: 'primary.main' }}>{vpn.name}</TableCell>
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
                    Visit Site
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
