import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import type { MouseEvent } from 'react';
import { useLocales } from 'hooks';

export function LanguageSwitcher() {
  const { allLang, currentLang, onChangeLang, translate } = useLocales();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title={translate('language.label')}>
        <IconButton
          onClick={handleOpen}
          size="small"
          color="primary"
          sx={{
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 999,
            px: 1.1,
          }}
          aria-label={translate('language.label')}
        >
          <LanguageRoundedIcon sx={{ fontSize: 18 }} />
          <Typography variant="caption" fontWeight={800} sx={{ ml: 0.5 }}>
            {currentLang.label}
          </Typography>
        </IconButton>
      </Tooltip>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {allLang.map((lang) => (
          <MenuItem
            key={lang.value}
            selected={lang.value === currentLang.value}
            onClick={() => {
              onChangeLang(lang.value);
              handleClose();
            }}
            sx={{ minWidth: 148 }}
          >
            <Box sx={{ width: 28, fontWeight: 800 }}>{lang.label}</Box>
            <Typography variant="body2" color="text.secondary">
              {lang.value === 'en' ? translate('language.english') : translate('language.vietnamese')}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
