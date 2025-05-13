import { Box, Grid, Container, Typography, IconButton, Divider } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import "../../styles/paginationStyle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const NewArrivalProducts = () => {
    const TopProduct = [
        {
            id: "1",
            productName: "Black Gaming Keyboard",
            image: "image/top seller/black gaming keyboard.webp",
            regularPrice: "$1620",
            SalePrice: "$1400",
            featured: true
        },
        {
            id: "2",
            productName: "Gaming Console Ps4",
            image: "image/top seller/gaming_console-ps4.png",
            regularPrice: "$1020",
            SalePrice: "$900"
        },
        {
            id: "3",
            productName: "Gaming Controler",
            image: "image/top seller/gaming controler.webp",
            regularPrice: "$120",
            SalePrice: "$100"
        },
        {
            id: "4",
            productName: "Google Laptop",
            image: "image/top seller/Google Laptop.png",
            regularPrice: "$120",
            SalePrice: "$100",
            featured: true
        },
        {
            id: "5",
            productName: "LED 32 Inch screen",
            image: "image/top seller/led 32 inch screen.jpg",
            regularPrice: "$860",
            SalePrice: "$720"
        },
        {
            id: "6",
            productName: "Wireless Mouse    ",
            image: "image/top seller/wireless_mouse.png",
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
                            New Arrival Products
                        </Typography>
                    </Box>
                    <Box width="100%">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={10}
                            slidesPerView={4}
                            navigation
                         >
                            {TopProduct.map((product) => (
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
                                        {/* Featured badge */}
                                        {product.featured && (
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
                                            <IconButton
                                                aria-label={`Add ${product.productName} to cart`}
                                                sx={{
                                                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                                                    padding: "12px",
                                                    color: "secondary.main",
                                                }}
                                            >
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
    )
}
export default NewArrivalProducts;