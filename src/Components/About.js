import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CardMedia, Typography } from '@mui/material';

export default function About() {
    return<div>
<Typography>About function</Typography>
<CardMedia
component="img"
maxWidth = "10"
image="/img2.jpg"
alt="Nature"
/>
<Box sx={{width : 500}}> 
<BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
<BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />   

</Box>
</div>
}