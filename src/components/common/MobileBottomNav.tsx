import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { useState } from 'react';

const ITEMS = [
  { label: 'Best VPNs', icon: <WorkspacePremiumRoundedIcon /> },
  { label: 'Speeds', icon: <AutoGraphRoundedIcon /> },
  { label: 'Guides', icon: <MenuBookRoundedIcon /> },
  { label: 'Labs', icon: <PersonOutlineRoundedIcon /> },
];

export function MobileBottomNav() {
  const [value, setValue] = useState(0);

  return (
    <Paper
      elevation={8}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: 'block', lg: 'none' },
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, nextValue: number) => setValue(nextValue)}
        sx={{
          '& .MuiBottomNavigationAction-root': {
            minWidth: 0,
            px: 0.5,
          },
          '& .MuiBottomNavigationAction-label': {
            fontSize: '0.62rem',
            mt: 0.3,
            fontWeight: 700,
          },
        }}
      >
        {ITEMS.map((item) => (
          <BottomNavigationAction key={item.label} label={item.label} icon={item.icon} />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
