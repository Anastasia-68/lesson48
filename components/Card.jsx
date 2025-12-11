import React from 'react'
import MUICard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function Card({ title = '', content = '' }) {
  return (
    <MUICard>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography sx={{ mt: 1 }}>{content}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Действие</Button>
      </CardActions>
    </MUICard>
  )
}
