import React from "react";
import Slider from "react-slick";
import { Box, Button, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import { useTheme } from "@mui/material/styles"; // Import the useTheme hook
import "./style.css";


// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    
    sx={{
      position: "absolute",
      top: "49%",
      left: "20px",
      height: "100%",
      borderRadius: "0px",
      transform: "translateY(-50%)",
      // backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "secondary.main",
      zIndex: 10,
      // "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" }
      outline: "none", // prevent focus outline
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      boxShadow: "none",
    },
    }}
  >
    <ArrowBackIos />
  </IconButton>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "49%",
      right: "20px",
      height: "100%",
      borderRadius: "0px",
      transform: "translateY(-50%)",
      // backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "secondary.main",
      zIndex: 10,
      // "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" }
      outline: "none", // prevent focus outline
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      boxShadow: "none",
    },
    }}
  >
    <ArrowForwardIos />
  </IconButton>
);

const Main = () => {
  const theme = useTheme();  // Using the hook

  const mainContent = [
    { image: "image/slider-banner-4d.webp", heading: "Samsung Galaxy S22 & Smart Watch", text: "Upgrade your tech game with the latest Samsung Galaxy S22 and a cutting-edge digital smart watch. Limited-time discount – grab yours now!" },
    { image: "image/slider-banner-4c.webp", heading: "Enhance Your Setup with Top Qaulity", text: "From mechanical keyboards to high-performance gaming mice, find the best accessories to boost your productivity and gaming experience." },
    { image: "image/slider-banner-4b.webp", heading: "Lifestyle with the Latest Smartwatch", text: "Stay connected and track your health with the newest smartwatch. Featuring a sleek design, fitness tracking, and seamless notifications – all at an exclusive discount!" }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200, // Increase this value for smoother sliding
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out", // Use a smooth easing function
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        marginTop: "0px",
      }}
    >
      <Slider {...settings}>
        {mainContent.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              width: "100%",
              height: "450px", // Ensures full height
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay layout */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: "80px",
                width: "43%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                color: "white",

              }}
            >
              <Typography variant="h3" sx={{
                mb: 2,
                textAlign: "left",
                fontFamily: theme.fonts.secondary,
                fontWeight: "bold", // Make text bold
                color: "secondary.main", // Ensure text is visible
                fontSize: "40px"
                // textShadow: "1px 1px 1px rgba(0, 0, 0, 0.7)", // Add shadow for contrast
              }}>
                {item.heading}
              </Typography>
              <Typography variant="body1" sx={{
                mb: 2,
                textAlign: "left",
                fontFamily: theme.fonts.primary,
                color: "secondary.main", // Ensure text is visible
                fontSize: "16px",
                fontWeight: "400"
                // textShadow: "0px 0.4px 1px rgba(0, 0, 0, 0.7)", // Add shadow for contrast
              }}>
                {item.text}
              </Typography>

              {/* Buttons */}
              <Box sx={{ display: "flex", gap: "20px" }}>
                <Button variant="contained" color="primary" sx={{
                  padding: "8px 25px",
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "15px",
                  textTransform: 'none',
                  borderRadius: '8px',
                  fontWeight: 500,
                  boxShadow: "none"
                }}>
                  Button 1
                </Button>
                <Button variant="contained" color="secondary" sx={{
                  padding: "8px 25px",
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "15px",
                  textTransform: 'none',
                  borderRadius: '8px',
                  fontWeight: 500,
                  boxShadow: "none"
                }}>
                  Button 2
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>

  );
};

export default Main;
