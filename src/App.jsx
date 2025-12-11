import React from 'react'
import { CssBaseline, Container, Box, Grid } from '@mui/material'
import Header from '../components/Header'
import FormWithSnackbar from '../components/FormWithSnackbar'
import CardWithImage from '../components/CardWithImage'
import InfoModal from '../components/InfoModal'

export default function App() {
  return (
    <div className="app-root">
      <CssBaseline />
      <Header title="My React App — Material UI" subtitle="Vite + React + MUI integration" />

      <Container className="app-container" sx={{ mt: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <InfoModal />
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FormWithSnackbar />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardWithImage />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
