import { Grid, Typography } from "@mui/material";
import backgroundImage from "../../assets/h.jpg";
import "./style.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

// room
const index = () => {
  return (
    <div>
      <Navbar />
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
      <Grid container spacing={2} justifyContent="center">
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
              Bar
            </Typography>
            <Typography variant="body1" align="center">
              Our hotel provides an exceptional bar service experience for its
              patrons. The skilled bartenders are not only knowledgeable about
              the extensive selection of drinks, but also provide personalized
              recommendations based on individual preferences. Whether you are
              in the mood for a classic cocktail or want to try something new
              and innovative, the bar has a wide variety of options to choose
              from. The atmosphere is cozy and inviting, making it the perfect
              spot to unwind with friends after a long day or to enjoy a night
              out on the town. With its exceptional service and tempting
              libations, Our hotel is the ideal destination for any occasion.
            </Typography>
          </Grid>
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
              Conference and Banquet Facilities
            </Typography>
            <Typography variant="body1" align="center">
              Our hotel offers exceptional conference and banquet facilities
              that are perfect for a variety of events, from business meetings
              and conferences to weddings and other special occasions. The venue
              features a range of flexible event spaces, including elegant
              ballrooms, intimate boardrooms, and spacious conference halls.
              With state-of-the-art audio-visual equipment and reliable Wi-Fi,
              the facilities are equipped to handle any type of event, from
              small meetings to large-scale conferences. The professional and
              experienced event staff are dedicated to ensuring that every
              detail is taken care of, from catering and decorations to
              technical support and logistics. With its exceptional facilities
              and unparalleled service, Our hotel is the perfect destination for
              events of any size and type.
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
      <Grid container spacing={2} justifyContent="center">
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
              Reception and Security
            </Typography>
            <Typography variant="body1" align="center">
              Our hotel offers 24-hour reception and security service,
              ensuring that guests have access to assistance and support around
              the clock. The reception staff are always available to help with
              any needs or requests, whether it is checking in or out, arranging
              transportation, or providing recommendations for local
              attractions. Additionally, the hotel has a dedicated security team
              that is available at all times to ensure the safety and security
              of guests and their belongings. With state-of-the-art security
              systems and trained personnel, guests can be assured of a safe and
              secure stay. The combination of round-the-clock reception and
              security services provides guests with peace of mind and a
              worry-free experience during their stay at Adane International Hotel.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default index;
