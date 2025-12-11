import React, { useState } from 'react'
import { Paper, Box, TextField, Button, Typography, Snackbar, Alert } from '@mui/material'

export default function FormWithSnackbar() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submit:', { name, email })
    setOpenSnackbar(true)
    setName('')
    setEmail('')
  }

  return (
    <>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Контактная форма
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Имя" value={name} onChange={(e) => setName(e.target.value)} fullWidth required />
          <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth required type="email" />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="submit" variant="contained">Отправить</Button>
          </Box>
        </Box>
      </Paper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity="success" onClose={() => setOpenSnackbar(false)}>
          Форма успешно отправлена!
        </Alert>
      </Snackbar>
    </>
  )
}
