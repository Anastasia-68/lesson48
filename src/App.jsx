// src/App.jsx — временный минимальный тест
import React from 'react'
import { CssBaseline, Container, Box, Typography } from '@mui/material'

export default function App() {
  return (
    <div className="app-root">
      <CssBaseline />
      <Container className="app-container">
        <Box sx={{ mt: 4 }}>
        <Typography sx={{ mt: 2 }}>Если вы видите это — базовая сборка работает.</Typography>
        </Box>
      </Container>
    </div>
  )
}
