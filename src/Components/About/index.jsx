import { useEffect, useRef, Suspense } from "react";
import "./style.css";
import { Grid, Typography } from "@mui/material";
import { gsap } from "gsap";
import Loader from "../Loader";

const index = () => {
  const tl = useRef();
  useEffect(() => {
    tl.current = gsap.timeline({});
    tl.current.fromTo(
      ".about-img",
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        ease: "elastic",
        duration: 3,
      }
    );

    tl.current.fromTo(
      ".logo",
      {
        opacity: 0,
        x: "-100vh",
      },
      {
        opacity: 1,
        x: 0,
        duration: 3,
      },
      0
    );
    tl.current.fromTo(
      ".about-content-text",
      {
        opacity: 0,
        x: "200vh",
      },
      {
        opacity: 1,
        x: 0,
        duration: 3,
      },
      0
    );
  });

  return (
    <div style={{ overflowX: "hidden" }}>
      <Suspense fallback={<Loader />}>
        <div class="images">
          <div class="main-title">
            <h1>Welcome</h1>
            <br />
            <h1>To</h1>
            <br />
            <h1>Our Hotel</h1>
            <br />
          </div>
          <div className="container">
            <input type="radio" name="slider" id="item-1" defaultChecked />
            <input type="radio" name="slider" id="item-2" />
            <input type="radio" name="slider" id="item-3" />
            <div className="cards">
              <label className="card" htmlFor="item-1" id="song-1">
                <img
                  src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
                  alt="song"
                  className="about-img"
                />
              </label>
              <label className="card" htmlFor="item-2" id="song-2">
                <img
                  src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
                  alt="song"
                  className="about-img"
                />
              </label>
              <label className="card" htmlFor="item-3" id="song-3">
                <img
                  src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                  alt="song"
                  className="about-img"
                />
              </label>
            </div>
          </div>
        </div>
        <div style={{ flexGrow: 1, margin: "16px" }}>
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
                  Adane International Hotel
                </Typography>
                <Typography variant="body1" align="center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugit odio sint veniam recusandae commodi quasi voluptate?
                  Repudiandae quo ipsam non perferendis. Eligendi at modi eaque
                  error temporibus dolorem eveniet ipsa. Lorem ipsum dolor sit,
                  amet consectetur adipisicing elit. Fugit odio sint veniam
                  recusandae commodi quasi voluptate? Repudiandae quo ipsam non
                  perferendis. Eligendi at modi eaque error temporibus dolorem
                  eveniet ipsa. Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Fugit odio sint veniam recusandae commodi
                  quasi voluptate? Repudiandae quo ipsam non perferendis.
                  Eligendi at modi eaque error temporibus dolorem eveniet
                  ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugit odio sint veniam recusandae commodi quasi voluptate?
                  Repudiandae quo ipsam non perferendis. Eligendi at modi eaque
                  error temporibus dolorem eveniet ipsa.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Suspense>
    </div>
  );
};

export default index;