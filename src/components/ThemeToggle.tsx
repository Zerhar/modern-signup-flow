import React from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useColorMode } from '../context/ThemeContext';

export const ThemeToggle = () => {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <div className="absolute top-4 right-4 z-50">
      <IconButton 
        onClick={toggleColorMode} 
        color="inherit"
        sx={{ 
          bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
          '&:hover': {
            bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
          }
        }}
      >
        {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </div>
  );
};