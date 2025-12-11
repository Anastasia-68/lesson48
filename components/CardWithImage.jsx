import React from 'react'
import { Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material'

export default function CardWithImage() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="./public/project.png"
        alt="Пример изображения"
      />
      <CardContent>
        <Typography gutterBottom variant="h6">
          Карточка с изображением
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Эта карточка демонстрирует использование Material UI: изображение, текст и кнопка действия.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Действие</Button>
      </CardActions>
    </Card>
  )
}
