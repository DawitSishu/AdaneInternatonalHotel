import { Grid, Typography } from "@mui/material";
import backgroundImage from "../../assets/h.jpg";
import "./style.css";

// bar
// room
// Conference and Banquet Facilities
// 24-hour Reception and Security
// Foods(meals)
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
          minHeight: "40vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: 5,
        }}
      >
        <div className="special-overlay"></div>
        <Grid item justifyContent="center" zIndex={1}>
          <Typography
            variant="h3"
            align="center"
            sx={{ fontFamily: "cursive" }}
          >
            Discover Our Exclusive Amenities for Unrivaled Luxury and
            Personalized Relaxation.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: 5,
            }}
            className="about-content-text"
          >
            <Typography
              variant="h3"
              align="center"
              className="about-text-title"
            >
              Restaurant
            </Typography>
            <Typography variant="body1" align="center">
              Our Hotel offers an exceptional dining experience with its
              top-notch restaurant service. From the moment you step through the
              door, you will be greeted by a friendly and attentive staff who
              are dedicated to making your visit a memorable one. With an
              extensive menu of delicious and expertly prepared dishes, you are
              sure to find something that satisfies your taste buds. The
              restaurant prides itself on using only the freshest ingredients,
              so you can be sure that your meal will be of the highest quality.
              Combined with a comfortable and inviting atmosphere, Adane
              international Hotel is the perfect place to enjoy a meal with
              friends and family or to celebrate a special occasion.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="logo"
        >
          <img
            src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            alt="logp"
            style={{ width: "40%", height: "80%" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default index;
