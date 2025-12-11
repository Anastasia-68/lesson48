import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export default function Header({ title = 'Title', subtitle = '' }) {
  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Box sx={{ ml: 1 }}>
            <Typography variant="h6">{title}</Typography>
            {subtitle && <Typography variant="caption">{subtitle}</Typography>}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
