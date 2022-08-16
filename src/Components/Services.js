import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Services() {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image="/mobile.webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          iOS Developer
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Native Mobile Application Development Expert
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
