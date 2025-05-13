import { Box, Grid, Container, Typography, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import categoryProductData from "../../Data/mockData";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import "../../styles/paginationStyle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TopsellerProducts = () => {
    const bestSellerProducts = Object.values(categoryProductData)
    .map(category => category.Products) // ✅ get the Products array 
    .flat()
    .filter(product => product.isBestSeller);
    return (
        <Box sx={{ width: "100%", padding: "50px 0px" }}>
            <Container mxWidth="lg" sx={{ padding: "0px" }}>
                <Grid container spacing={2} justifyContent="center">
                    <Box width="100%" mb={4}>
                        <Typography
                            variant="h5"
                            color="secondary"
                            fontSize="35px"
                            fontWeight="bold"
                            textAlign="center"
                        >
                            Best Seller Products
                        </Typography>
                    </Box>
                    <Box width="100%">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={10}
                            slidesPerView={4}
                            navigation
                        >
                            {bestSellerProducts.map((product) => (
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
                                                ((parseFloat(product.regPrice.replace("$", "")) -
                                                    parseFloat(product.salePrice.replace("$", ""))) /
                                                    parseFloat(product.regPrice.replace("$", ""))) *
                                                100
                                            )}
                                            %OFF
                                        </Box>
                                        {/* Featured Badge */}
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
                                            Best Seller
                                        </Box>
                                        {/* Cart Icon */}
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
                                            <IconButton sx={{
                                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                                                padding: "12px",
                                                color: "secondary.main"
                                            }}>
                                                <ShoppingBagIcon sx={{ fontSize: 20 }} />
                                            </IconButton>
                                        </Box>
                                        {/* Product Image */}
                                        <Box
                                            component="img"
                                            src={product.image}
                                            alt={product.name}
                                            sx={{
                                                width: "250px",
                                                height: "250px",
                                                objectFit: "cover",
                                                borderRadius: "10px",
                                                mb: 2,
                                            }}
                                        />
                                        {/* Product Name */}
                                        <Typography textAlign="center" fontWeight="bold" color="secondary">
                                            {product.name}
                                        </Typography>
                                        {/* Prices */}
                                        <Box sx={{
                                            display: "flex",
                                            gap: 1,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            mt: 1,
                                        }}>
                                            <Typography sx={{
                                                textDecoration: "line-through",
                                                color: "gray",
                                                fontSize: "14px",
                                            }}>
                                                {product.regPrice}
                                            </Typography>
                                            <Typography sx={{
                                                fontWeight: "bold",
                                                color: "primary.main",
                                                fontSize: "16px",
                                            }}>
                                                {product.salePrice}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Grid>
            </Container>
        </Box>
    )
}
export default TopsellerProducts;