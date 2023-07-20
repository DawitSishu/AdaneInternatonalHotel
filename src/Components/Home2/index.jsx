import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import "./style.css";
import image from "../../assets/h.jpg";
import { FaPlus } from "react-icons/fa";
import Footer from "../Footer";

const index = () => {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          position: "relative",
          minHeight: "60vh",
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: 5,
        }}
      >
        <div className="home2-overlay"></div>
        <Grid item justifyContent="center" zIndex={1}>
          <Typography
            variant="h2"
            align="center"
            sx={{ fontFamily: "cursive" }}
          >
            Adane International Hotel
          </Typography>
          <Typography variant="h4" align="center" className="home2-slogan">
            Designed {"  "} For {"  "} Relaxation
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
              Our hotel offers a variety of special packages for different
              occasions such as weddings, vacations, and solo trips. These
              packages come with exclusive benefits such as discounted rates,
              complimentary meals, and access to top amenities. Customers can
              choose from a range of packages tailored to meet their needs and
              preferences.
            </Typography>
          </Box>
        </Grid>
        <Grid container justifyContent="center" spacing={2} sx={{ margin: 5 }}>
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
              marginBottom: 5,
              borderRadius: "20px",
              color: "white",
              border: "2px solid gold",
              padding: "10px 20px",
              transition: "transform 0.3s ease",
              boxShadow: " 2px 2px 8px rgba(255, 255, 255, 0.5)",
              "&:hover": {
                transform: "scale(1.1)",
                border: "2px solid gold",
              },
            }}
          >
            Explore More <FaPlus style={{ marginLeft: 10 }} />
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
                Our Hotel offer personalized and unique experiences, along with
                personalized concierge services, to cater to your every need.
                Our team is committed to ensuring your complete satisfaction, so
                you can relax and enjoy every moment of your stay. Discover our
                exclusive offerings today for an unforgettable luxury travel
                experience.
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            justifyContent="center"
            spacing={2}
            sx={{
              marginLeft: 5,
              marginRight: 5,
              marginTop: 3,
              marginBottom: 3,
            }}
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
                      minHeight: "300px",
                    }}
                  >
                    <Typography variant="body2" align="center">
                      Our hotel has an excellent restaurant with friendly and
                      attentive staff who are dedicated to making your visit
                      memorable. The menu offers a wide variety of expertly
                      prepared dishes using only the freshest ingredients. Our
                      comfortable and inviting atmosphere makes Adane
                      International Hotel the perfect place to enjoy a meal with
                      loved ones or celebrate a special occasion.
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
                      minHeight: "300px",
                    }}
                  >
                    <Typography variant="body2" align="center">
                      Our hotel offers an exceptional bar experience with
                      skilled bartenders who provide personalized drink
                      recommendations based on individual preferences. The cozy
                      atmosphere is perfect for unwinding with friends or
                      enjoying a night out. Our wide variety of classic and
                      innovative cocktail options make us the ideal destination
                      for any occasion.
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
                      minHeight: "300px",
                    }}
                  >
                    <Typography variant="body2" align="center">
                      Our hotel provides a comfortable and inviting room
                      experience, with a range of amenities and personalized
                      service to ensure a memorable stay. Whether you're looking
                      to unwind after a long day or enjoy a relaxing getaway, we
                      aim to make your stay exceptional.
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
              marginBottom: 5,
              borderRadius: "20px",
              color: "white",
              border: "2px solid gold",
              padding: "10px 20px",
              transition: "transform 0.3s ease",
              boxShadow: " 2px 2px 8px rgba(255, 255, 255, 0.5)",
              "&:hover": {
                transform: "scale(1.1)",
                border: "2px solid gold",
              },
            }}
          >
            Explore More <FaPlus style={{ marginLeft: 10 }} />
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
                Our hotel boasts a variety of on-site attractions and activities
                for guests to enjoy. From our luxurious spa to our
                state-of-the-art fitness center, there is something for everyone
                to indulge in. Our knowledgeable staff can provide personalized
                recommendations based on your interests, ensuring that you have
                a memorable and enjoyable stay. Whether you're looking to relax
                and unwind or stay active and energized, our hotel has
                everything you need for a fulfilling experience.
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
          <Grid container justifyContent="center">
          <Button
            variant="outlined"
            sx={{
              marginBottom: 5,
              borderRadius: "20px",
              color: "white",
              border: "2px solid gold",
              padding: "10px 20px",
              transition: "transform 0.3s ease",
              boxShadow: " 2px 2px 8px rgba(255, 255, 255, 0.5)",
              "&:hover": {
                transform: "scale(1.1)",
                border: "2px solid gold",
              },
            }}
          >
            Explore More <FaPlus style={{ marginLeft: 10 }} />
          </Button>
        </Grid>

        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default index;
