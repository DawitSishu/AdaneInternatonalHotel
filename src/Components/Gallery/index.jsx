import React, { useState } from "react";
import "./style.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CloseIcon from "@mui/icons-material/Close";
import h from "../../assets/h.jpg";
import Navbar from '../Navbar';
import Footer from '../Footer';


const images = [
  h,
  "https://picsum.photos/200/300",
  "https://picsum.photos/300/300",
  h,
  "https://picsum.photos/3000/3000",
  "https://picsum.photos/3000/3000",
  "https://picsum.photos/300/500",
  "https://picsum.photos/3000/3000",
  "https://picsum.photos/300/300",
  "https://picsum.photos/300/300",
];

const index = () => {
  const [data, setData] = useState({ img: "", i: 0 });

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const imgAction = (action) => {
    let i = data.i;
    if (action == "next") {
      setData({ img: images[i + 1], i: i + 1 });
    } else if (action == "prev") {
      setData({ img: images[i - 1], i: i - 1 });
    } else if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  return (
    <div style={{overflow:'hidden'}}>
      <Navbar />
      {data.img ? (
        <div className="img-displayer">
          <IconButton
            onClick={() => imgAction()}
            sx={{ position: "absolute", right: "4%", top: "4%" }}
          >
            <CloseIcon sx={{ color: "gold", fontSize: "2.5rem" }} />
          </IconButton>
          <Grid
            container
            justifyContent="center"
            sx={{ position: "absolute", bottom: "5%" }}
            spacing={10}
          >
            <Grid item>
              <IconButton
                onClick={() => imgAction("prev")}
                sx={{
                  backgroundColor: "black !important",
                  borderColor: "black",
                }}
              >
                <NavigateBeforeIcon sx={{ color: "gold" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => imgAction("next")}
                sx={{
                  backgroundColor: "black !important",
                  borderColor: "black",
                }}
              >
                <NavigateNextIcon sx={{ color: "gold" }} />
              </IconButton>
            </Grid>
          </Grid>
          <img
            src={data.img}
            style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }}
          />
        </div>
      ) : null}
      <Grid container direction="column"
    alignItems="center"
    justifyContent="center">
      <Grid item justifyContent="center" sx={{margin: 10}}>
              <Typography align="center" variant="h4" className= "gallery-text">
              Get A Glimpse Of Our Exquisite Hotel
              </Typography>
      </Grid>
        </Grid>
      <div style={{ padding: "20px" }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block" }}
                alt=""
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <Footer />
    </div>
  );
};

export default index;
