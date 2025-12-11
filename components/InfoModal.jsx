import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material'

export default function InfoModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        О проекте
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>О проекте</DialogTitle>
        <DialogContent>
          <Typography>
            Этот проект демонстрирует использование Material UI, адаптивных компонентов и интерактивных элементов: форма с уведомлением, карточка с изображением, всплывающее окно.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
