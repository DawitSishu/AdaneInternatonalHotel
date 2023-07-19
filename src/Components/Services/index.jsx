import { Grid,Typography } from "@mui/material";
import backgroundImage from "../../assets/h.jpg";
import './style.css';

// restaurant
// bar
// room
// Conference and Banquet Facilities
// 24-hour Reception and Security
// Foods(meals)
const index = () => {
  return (
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
            Discover Our Exclusive Amenities for Unrivaled Luxury and Personalized Relaxation.
          </Typography>
        </Grid>
  </Grid>
  );
};

export default index;
