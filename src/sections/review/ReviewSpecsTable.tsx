import { Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import type { VpnProvider } from '../../types/vpn';

interface ReviewSpecsTableProps {
  vpn: VpnProvider;
}

export function ReviewSpecsTable({ vpn }: ReviewSpecsTableProps) {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        borderRadius: 3,
        mb: 3,
        overflowX: 'auto',
        '& table': {
          minWidth: 420,
        },
      }}
    >
      <Typography variant="h4" fontSize={{ xs: 21, sm: 24 }} color="primary.main" sx={{ p: { xs: 2.2, sm: 3 }, pb: 1 }}>
        Basic Information
      </Typography>
      <Table aria-label="VPN basic information">
        <TableBody>
          {vpn.specs.map((spec) => (
            <TableRow key={spec.label} hover>
              <TableCell sx={{ fontWeight: 700, width: { xs: '45%', md: '34%' } }}>{spec.label}</TableCell>
              <TableCell sx={{ wordBreak: 'break-word' }}>{spec.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
