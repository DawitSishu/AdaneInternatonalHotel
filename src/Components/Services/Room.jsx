import React, { useState } from 'react';
import { Grid, Typography, IconButton, List, ListItem, ListItemIcon, Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import StarIcon from '@mui/icons-material/Star';
import h from '../../assets/1.jpg';
import j from '../../assets/2.jpg';

const RoomPage = ({roomData}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Replace these with your actual image URLs
//   const mainImage = h;

   const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % roomData.images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? roomData.images.length - 1 : prevIndex - 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <Box sx={{padding:3,margin:3}}>
    <Grid container justifyContent="center" >
        
      <Grid item xs={12} md={8}>
        {/* Main Image */}
        
        <Grid  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src={roomData.images[currentImageIndex]}
          alt="Main"
          style={{
            maxWidth: '100%',
            height: 'auto',
            maxHeight: '400px', // Set a reasonable maximum height for the main image
          }}
        />
         </Grid>
        {/* Navigation Buttons */}
        <Grid container alignItems="center" justifyContent="center" sx={{ mt: 2 }}>
          <Grid item>
            <IconButton onClick={handlePreviousImage}>
              <NavigateBeforeIcon color='primary' />
            </IconButton>
          </Grid>
          {roomData.images.map((thumbnail, index) => (
           <Grid item key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <img
             src={thumbnail}
             alt={`Thumbnail ${index}`}
             onClick={() => handleThumbnailClick(index)}
             style={{
               width: '60px',
               height: 'auto',
               border: currentImageIndex === index ? '2px solid gold' : 'none',
               cursor: 'pointer',
             }}
           />
         </Grid>
         
          ))}
          <Grid item>
            <IconButton onClick={handleNextImage}>
              <NavigateNextIcon color='primary' />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4} sx={{ mt: 2, pl: { md: 2 } }}>
        {/* Title */}
        <Typography variant="h4" color='primary'>
          {roomData.title}
        </Typography>

        {/* Description */}
        {/* <List sx={{ mt: 2 }}>
          <ListItem>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <Typography>Room feature 1</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <Typography>Room feature 2</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <Typography>Room feature 3</Typography>
          </ListItem> */}
          <List sx={{ mt: 2 }}>
             {roomData.features.map((feature, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <StarIcon color='primary' />
                </ListItemIcon>
                <Typography>{feature}</Typography>
              </ListItem>
            ))}
          </List>
          {/* Add more room features here */}
        {/* </List> */}
      </Grid>
    </Grid>
    </Box>
  );
};

export default RoomPage;
