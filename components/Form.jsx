import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function Form({ onSubmit }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const data = { name, email }
    if (onSubmit) onSubmit(data)
    setName('')
    setEmail('')
  }

  return (
    <Paper elevation={2} sx={{ p: 2 }}>
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
  )
}
