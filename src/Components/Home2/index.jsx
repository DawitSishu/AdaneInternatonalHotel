import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import "./style.css";
import image from "../../assets/h.jpg";
import { FaPlus } from 'react-icons/fa';
import Footer from '../Footer';

const index = () => {
  return (
    <>
     <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ 
      position: 'relative',
      minHeight: '100vh', 
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      marginBottom: 5,
    }}

  >
     <div className="home2-overlay"></div>
    <Grid item justifyContent="center" zIndex={1}> 
            <Typography variant="h2" align="center" sx={{fontFamily:'cursive'}}>
             Adane International Hotel
            </Typography>
            <Typography variant="h4" align="center" className="home2-slogan" >
             Designed {'  '} For {'  '} Relaxation
            </Typography>
    </Grid>
  </Grid>
      <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              Our Special Offers
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Box
              sx={{
                width: "60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body2" align="center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut
                eos qui tenetur eveniet temporibus, pariatur, ipsam consectetur
                suscipit accusamus dolores amet hic exercitationem a omnis
                deserunt, tempore nostrum minima.
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            justifyContent="center"
            spacing={2}
            sx={{ margin: 5 }}
          >
            <Grid item xs={12} sm={4}>
              <Box className="box-container">
                <img src={image} alt="Your Image" className="box-image" />
                <div className="box-overlay">
                  <div className="box-text">Wedding</div>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className="box-container">
                <img src={image} alt="Your Image" className="box-image" />
                <div className="box-overlay">
                  <div className="box-text">st1</div>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className="box-container">
                <img src={image} alt="Your Image" className="box-image" />
                <div className="box-overlay">
                  <div className="box-text">st2</div>
                </div>
              </Box>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
          <Button
            variant="outlined"
            sx={{
              marginBottom:5,
              borderRadius: "20px",
              color: "white",
              border: "2px solid gold",
              padding: "10px 20px",
              transition: "transform 0.3s ease",
              boxShadow:" 2px 2px 8px rgba(255, 255, 255, 0.5)",
              "&:hover": {
                transform: "scale(1.1)",
                border: "2px solid gold",
              },
            }}
          >
            Explore More  <FaPlus style={{marginLeft:10}} />
          </Button>
        </Grid>
        </Grid>
      <Box>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              Our Services
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Box
              sx={{
                width: "60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body2" align="center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut
                eos qui tenetur eveniet temporibus, pariatur, ipsam consectetur
                suscipit accusamus dolores amet hic exercitationem a omnis
                deserunt, tempore nostrum minima.
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            justifyContent="center"
            spacing={2}
            sx={{ marginLeft: 5, marginRight: 5, marginTop: 3, marginBottom: 3 }}
          >
            <Grid item xs={12} sm={4}>
              <Box className="box-txt">
                <Grid item xs={12}>
                  <Typography variant="h3" align="center">
                    Resturant
                  </Typography>
                </Grid>
                <Grid container justifyContent="center">
                  <Box
                    sx={{
                      width: "60%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="body2" align="center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rem aut eos qui tenetur eveniet temporibus, pariatur,
                      ipsam consectetur suscipit accusamus dolores amet hic
                      exercitationem a omnis deserunt, tempore nostrum minima.
                    </Typography>
                  </Box>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className="box-txt">
                <Grid item xs={12}>
                  <Typography variant="h3" align="center">
                    Bar
                  </Typography>
                </Grid>
                <Grid container justifyContent="center">
                  <Box
                    sx={{
                      width: "60%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="body2" align="center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rem aut eos qui tenetur eveniet temporibus, pariatur,
                      ipsam consectetur suscipit accusamus dolores amet hic
                      exercitationem a omnis deserunt, tempore nostrum minima.
                    </Typography>
                  </Box>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className="box-txt">
                <Grid item xs={12}>
                  <Typography variant="h3" align="center">
                    Rooms
                  </Typography>
                </Grid>
                <Grid container justifyContent="center">
                  <Box
                    sx={{
                      width: "60%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="body2" align="center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rem aut eos qui tenetur eveniet temporibus, pariatur,
                      ipsam consectetur suscipit accusamus dolores amet hic
                      exercitationem a omnis deserunt, tempore nostrum minima.
                    </Typography>
                  </Box>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container justifyContent="center">
        <Button
            variant="outlined"
            sx={{
              marginBottom:5,
              borderRadius: "20px",
              color: "white",
              border: "2px solid gold",
              padding: "10px 20px",
              transition: "transform 0.3s ease",
              boxShadow:" 2px 2px 8px rgba(255, 255, 255, 0.5)",
              "&:hover": {
                transform: "scale(1.1)",
                border: "2px solid gold",
              },
            }}
          >
            Explore More  <FaPlus style={{marginLeft:10}} />
          </Button>
        </Grid>

        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              Places to Visit
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Box
              sx={{
                width: "60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body2" align="center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut
                eos qui tenetur eveniet temporibus, pariatur, ipsam consectetur
                suscipit accusamus dolores amet hic exercitationem a omnis
                deserunt, tempore nostrum minima.
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            justifyContent="center"
            spacing={2}
            sx={{ margin: 5 }}
          >
            <Grid item xs={12} sm={4}>
              <Box className="box-container">
                <img src={image} alt="Your Image" className="box-image" />
                <div className="box-overlay">
                  <div className="box-text">Lounge</div>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className="box-container">
                <img src={image} alt="Your Image" className="box-image" />
                <div className="box-overlay">
                  <div className="box-text">Bar</div>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className="box-container">
                <img src={image} alt="Your Image" className="box-image" />
                <div className="box-overlay">
                  <div className="box-text">Resturant</div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default index;
