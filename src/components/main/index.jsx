import React from "react";
import Slider from "react-slick";
import { Box, Button, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./style.css";


// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "49%",
      left: "0",
      height: "100%",
      borderRadius: "0px",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "white",
      zIndex: 10,
      "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" }
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
      right: "0",
      height: "100%",
      borderRadius: "0px",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "white",
      zIndex: 10,
      "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" }
    }}
  >
    <ArrowForwardIos />
  </IconButton>
);

const Main = () => {
  const mainContent = [
    { image: "image/Banner-1.png", heading: "Samsung Galaxy S22 & Smart Watch Discount", text: "Upgrade your tech game with the latest Samsung Galaxy S22 and a cutting-edge digital smart watch. Limited-time discount – grab yours now!" },
    { image: "image/banner-2.png", heading: "Enhance Your Setup with Top Qaulity", text: "From mechanical keyboards to high-performance gaming mice, find the best accessories to boost your productivity and gaming experience." },
    { image: "image/Banner-3.png", heading: "Lifestyle with the Latest Smartwatch", text: "Stay connected and track your health with the newest smartwatch. Featuring a sleek design, fitness tracking, and seamless notifications – all at an exclusive discount!" }
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
              height: "100vh", // Ensures full height
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
                left: "115px",
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
                fontWeight: "bold", // Make text bold
                color: "#fff", // Ensure text is visible
                textShadow: "1px 1px 1px rgba(0, 0, 0, 0.7)", // Add shadow for contrast
              }}>
                {item.heading}
              </Typography>
              <Typography variant="body1" sx={{
                mb: 2, 
                textAlign: "left",
                textShadow: "0px 0.4px 1px rgba(0, 0, 0, 0.7)", // Add shadow for contrast
              }}>
                {item.text}
              </Typography>

              {/* Buttons */}
              <Box sx={{ display: "flex", gap: "20px" }}>
                <Button variant="contained" color="primary">
                  Button 1
                </Button>
                <Button variant="contained" color="secondary">
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
