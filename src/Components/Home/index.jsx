import React, { useEffect, useRef, useState, Suspense } from "react";
import { Box, Typography, Grid,Button } from "@mui/material";
import { IconButton } from "@mui/material";
import { VolumeOff, VolumeUp } from "@mui/icons-material";
import background from "../../assets/homevid.mp4";
import "./style.css";
import Loader from "../Loader";

const Home = ({stop}) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoLoaded = () => {
      videoElement.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    };

    videoElement.addEventListener("loadeddata", handleVideoLoaded);

    return () => {
      videoElement.removeEventListener("loadeddata", handleVideoLoaded);
    };
  }, []);

  const toggleAudio = () => {
    const videoElement = videoRef.current;
    videoElement.muted = !videoElement.muted;
    setIsMuted(!isMuted);
  };

  return (
    <Suspense fallback={<Loader />}>
      <div className="main">
        <video ref={videoRef} src={background} autoPlay  muted={isMuted} onEnded={stop} />
        <div className="overlay">
        <IconButton onClick={toggleAudio} style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 99,
        fontSize: "32px",

      }}   >
        {isMuted ? (
        <VolumeOff style={{ borderRadius: "50%", border: "2px solid #fff", color: "#fff" }} />
      ) : (
        <VolumeUp style={{ borderRadius: "50%", border: "2px solid #fff", color: "#fff" }} />
      )}
    </IconButton>
        </div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "100%",
          }}
        >
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Typography
                variant="h3"
                sx={{ fontFamily: "myCursive", color: "white" }}
                align="center"
              >
                Adane
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h3"
                sx={{ fontFamily: "myCursive", color: "white" }}
                align="center"
                xs={12}
              >
                International
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h3"
                sx={{ fontFamily: "myCursive", color: "white" }}
                align="center"
                xs={12}
              >
                Hotel
              </Typography>
            </Grid>
        <Button
      variant="outlined"
      style={{ backgroundColor: "transparent",borderRadius: "20px", border: "1px solid #fff", color: "#fff",position: "fixed",
      bottom: "20px",
      zIndex: 99, }}
      onClick={stop}
    >
      Skip & continue
    </Button>
          </Grid>
        </Box>
      </div>
    </Suspense>
  );
};

export default Home;
