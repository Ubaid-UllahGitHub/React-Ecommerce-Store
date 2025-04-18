import React from "react";
import { Box, Grid, Container, Typography, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import "./style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useTheme } from "@mui/material/styles"; // Import the useTheme hook
const FeaturedProducts = () => {
    const Product = [
        {
            id: "1",
            productName: "Gaming Console Rt00023",
            image: "image/Gamingconsole.png",
            regularPrice: "$1220",
            SalePrice: "$1050",
            featuredProduct: true
        },
        {
            id: "2",
            productName: "Wireless Headphones X500",
            image: "    image/wirelessheadphones.jpg",
            regularPrice: "$220",
            SalePrice: "$180"
        },
        {
            id: "3",
            productName: "Smartwatch Pro S2",
            image: "image/Smartwatch.png",
            regularPrice: "$120",
            SalePrice: "$100"
        },
        {
            id: "4",
            productName: "Foldable HP Laptop",
            image: "image/hplaptop.png",
            regularPrice: "$120",
            SalePrice: "$100",
            featuredProduct: true
        },
        {
            id: "5",
            productName: "Usb Kingston",
            image: "image/Kingstone.jpg",
            regularPrice: "$120",
            SalePrice: "$100"
        },
        {
            id: "6",
            productName: "Mouse Logitech Rtx0098",
            image: "image/mouse.webp",
            regularPrice: "$120",
            SalePrice: "$100"
        }
    ];

    return (
        <Box sx={{ width: "100%", padding: "50px 0px" }}>
            <Container maxWidth="lg" sx={{ padding: "0px" }}>
                <Grid container spacing={0} justifyContent="center">
                    <Box width="100%" mb={4}>
                        <Typography
                            variant="h5"
                            color="secondary"
                            fontSize="35px"
                            fontWeight="bold"
                            textAlign="center"
                        >
                            Featured Products
                        </Typography>
                    </Box>
                    <Box width="100%">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={10}
                            slidesPerView={4}
                            navigation
                        >
                            {Product.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <Box
                                        sx={{
                                            padding: 2,
                                            '&:hover .cart-icon': {
                                                opacity: 1,
                                                transform: 'scale(1)',
                                            },
                                        }}
                                    >
                                        {/* Discount Badge */}
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: 10,
                                                right: 10,
                                                backgroundColor: "primary.main",
                                                color: "#fff",
                                                px: 1.2,
                                                py: 0.5,
                                                fontSize: "12px",
                                                borderRadius: "8px",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {Math.round(
                                                ((parseFloat(product.regularPrice.replace("$", "")) -
                                                    parseFloat(product.SalePrice.replace("$", ""))) /
                                                    parseFloat(product.regularPrice.replace("$", ""))) *
                                                100
                                            )}
                                            %OFF
                                        </Box>
                                        {product.featuredProduct && (
                                            <Box sx={{
                                                position: "absolute",
                                                top: 10,
                                                left: 10,
                                                backgroundColor: "gold",
                                                color: "black",
                                                px: 1.2,
                                                py: 0.5,
                                                fontSize: "12px",
                                                borderRadius: "8px",
                                                fontWeight: "bold",
                                            }}>
                                                 Featured
                                            </Box>
                                        )}
                                        <Box className="cart-icon" sx={{
                                            position: "absolute",
                                            top: 60,
                                            right: 10,
                                            opacity: 0,
                                            transform: 'scale(0.9)',
                                            transition: 'all 0.3s ease-in-out',
                                            zIndex: 100,
                                            cursor: 'pointer',
                                        }}>
                                            <IconButton sx={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", padding: "12px", color: "secondary.main", size: "10px" }}>
                                                <ShoppingBagIcon sx={{ fontSize: 20 }} />
                                            </IconButton>
                                        </Box>
                                        <Box
                                            component="img"
                                            src={product.image}
                                            alt={product.productName}
                                            sx={{
                                                width: "250px",
                                                height: "250px",
                                                objectFit: "cover",
                                                borderRadius: "10px",
                                                mb: 2,
                                            }}
                                        />
                                        <Typography textAlign="center" fontWeight="bold" color="secondary">
                                            {product.productName}
                                        </Typography>

                                        {/* Prices in one line */}
                                        <Box
                                            sx={{
                                                display: "flex",
                                                gap: 1,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mt: 1,
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    textDecoration: "line-through",
                                                    color: "gray",
                                                    fontSize: "14px",
                                                }}
                                            >
                                                {product.regularPrice}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontWeight: "bold",
                                                    color: "primary.main",
                                                    fontSize: "16px",
                                                }}
                                            >
                                                {product.SalePrice}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Grid>
            </Container>
        </Box >
    );
};
export default FeaturedProducts;