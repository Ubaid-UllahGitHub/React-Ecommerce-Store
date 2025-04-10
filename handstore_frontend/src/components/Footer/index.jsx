import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material"
import HeadphonesIcon from '@mui/icons-material/Headphones';


const Footer = () => {
    const navbarTopsocial = [
        { viewBox: "0 0 24 24", link: "/", icon: "M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" },
        { viewBox: "0 0 24 24", link: "/", icon: "M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" },
        { viewBox: "0 0 30 30", link: "/", icon: "M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z" },
        { viewBox: "0 0 50 50", link: "/", icon: "M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609825 4 46 13.390175 46 25 C 46 36.609825 36.609825 46 25 46 C 22.876355 46 20.82771 45.682142 18.896484 45.097656 C 19.75673 43.659418 20.867347 41.60359 21.308594 39.90625 C 21.570728 38.899887 22.648438 34.794922 22.648438 34.794922 C 23.348841 36.132057 25.395277 37.263672 27.574219 37.263672 C 34.058123 37.263672 38.732422 31.300682 38.732422 23.890625 C 38.732422 16.78653 32.935409 11.472656 25.476562 11.472656 C 16.196831 11.472656 11.271484 17.700825 11.271484 24.482422 C 11.271484 27.636307 12.94892 31.562193 15.634766 32.8125 C 16.041611 33.001865 16.260073 32.919834 16.353516 32.525391 C 16.425459 32.226044 16.788267 30.766792 16.951172 30.087891 C 17.003269 29.871239 16.978043 29.68405 16.802734 29.470703 C 15.913793 28.392399 15.201172 26.4118 15.201172 24.564453 C 15.201172 19.822048 18.791452 15.232422 24.908203 15.232422 C 30.18976 15.232422 33.888672 18.832872 33.888672 23.980469 C 33.888672 29.796219 30.95207 33.826172 27.130859 33.826172 C 25.020554 33.826172 23.440361 32.080359 23.947266 29.939453 C 24.555054 27.38426 25.728516 24.626944 25.728516 22.78125 C 25.728516 21.130713 24.842754 19.753906 23.007812 19.753906 C 20.850369 19.753906 19.117188 21.984457 19.117188 24.974609 C 19.117187 26.877359 19.761719 28.166016 19.761719 28.166016 C 19.761719 28.166016 17.630543 37.176514 17.240234 38.853516 C 16.849091 40.52931 16.953851 42.786365 17.115234 44.466797 C 9.421139 41.352465 4 33.819328 4 25 C 4 13.390175 13.390175 4 25 4 z" },
    ];
    const categories = [
        { name: "Laptops & Computers", link: "/" },
        { name: "Cameras & Photography", link: "/" },
        { name: "Smart Phones & Tablets", link: "/smartphones-tablets" },
        { name: "Video Games & Consoles", link: "/video-games-consoles" },
        { name: "TV & Audio", link: "/tv-audio" },
        { name: "Gadgets", link: "/gadgets" },
        { name: "Waterproof Headphones", link: "/waterproof-headphones" },
    ];
    return (
        <Box sx={{
            width: "100%",
            padding: "50px 0px 0px 0px"
        }}>
            <Container maxWidth="lg" sx={{ padding: "0px" }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={4} sx={{ textAlign: "left", display: "flex", flexDirection: "column", gap: "20px" }}>
                        <Box>
                            <Link to="/">
                                <img
                                    src="image/Blue and Green Flat Typographic E-Commerce Online Shop Logo (1).png"
                                    alt="Hand Store Logo"
                                    width="150px"
                                    height="auto"
                                />
                            </Link>
                        </Box>
                        <Box display="flex" gap="10px">
                            <HeadphonesIcon />
                            <Box container spacing={1}>
                                <Typography sx={{ fontSize: "11px", fontWeight: 400, color: "#213547", fontFamily: "'League Spartan', sans-serif" }}>
                                    Got questions? Call us 24/7!
                                </Typography>
                                <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "#213547", fontFamily: "'League Spartan', sans-serif" }}>
                                    (800) 8001-8588, (0600) 874 548
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" gap="10px">
                            <Box container spacing={1}>
                                <Typography sx={{ fontSize: "16px", fontWeight: 700, color: "#213547", fontFamily: "'League Spartan', sans-serif" }}>
                                    Contact Info                            </Typography>
                                <Typography sx={{ fontSize: "14px", fontWeight: 400, color: "#213547", fontFamily: "'League Spartan', sans-serif" }}>
                                    17 Princess Road, London, Greater London NW1 8JR, UK
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "25px",
                                flexWrap: "wrap" // Optional: allows wrapping on smaller screens
                            }}
                        >
                            {navbarTopsocial.map((item, index) => (
                                <Box
                                    key={index}
                                    component="a"
                                    href={item.link}
                                    target="_blank"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "4px",
                                        textDecoration: "none",
                                        cursor: "pointer",
                                        "&:hover": { color: "#37acb0" }
                                    }}
                                >
                                    <IconButton
                                        aria-label={item.text}
                                        sx={{
                                            padding: 0,
                                            display: "flex",
                                            alignItems: "center",
                                            transition: "transform 0.3s ease",
                                            backgroundColor: "transparent",
                                            "&:hover": {
                                                backgroundColor: "transparent", // remove default hover background
                                                transform: "scale(1.4)",         // grow slightly
                                            }
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="30px"
                                            viewBox={item.viewBox}
                                            width="30px"
                                            fill="#37acb0"
                                        >
                                            <path d={item.icon} />
                                        </svg>
                                    </IconButton>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{ textAlign: "start" }}>
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    color: "#213547",
                                    fontFamily: "'League Spartan', sans-serif",
                                    marginBottom: "10px"
                                }}
                            >
                                Find It Fast
                            </Typography>
                            <Box sx={{ display: "flex", gap: "90px" }}>
                                <Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0, fontFamily: "'League Spartan', sans-serif" }}>
                                    {categories.map((item, index) => (
                                        <Box key={index} component="li" sx={{ margin: "6px 0" }}>
                                            <Box
                                                component="a"
                                                href={item.link}
                                                sx={{
                                                    fontSize: "14px",
                                                    color: "#555",
                                                    fontWeight: 400,
                                                    textDecoration: "none",
                                                    transition: "color 0.3s",
                                                    cursor: "pointer",
                                                    "&:hover": {
                                                        color: "#37acb0",
                                                    },
                                                }}
                                            >
                                                {item.name}
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                                <Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0, fontFamily: "'League Spartan', sans-serif" }}>
                                    {categories.map((item, index) => (
                                        <Box key={index} component="li" sx={{ margin: "6px 0" }}>
                                            <Box
                                                component="a"
                                                href={item.link}
                                                sx={{
                                                    fontSize: "14px",
                                                    color: "#555",
                                                    fontWeight: 400,
                                                    textDecoration: "none",
                                                    transition: "color 0.3s",
                                                    cursor: "pointer",
                                                    "&:hover": {
                                                        color: "#37acb0",
                                                    },
                                                }}
                                            >
                                                {item.name}
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={3} sx={{ textAlign: "left" }}>
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    color: "#213547",
                                    fontFamily: "'League Spartan', sans-serif",
                                    marginBottom: "10px"
                                }}
                            >
                                Customer
                            </Typography>
                            <Box sx={{ display: "flex", gap: "8 0px" }}>
                                <Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0, fontFamily: "'League Spartan', sans-serif" }}>
                                    {categories.map((item, index) => (
                                        <Box key={index} component="li" sx={{ margin: "6px 0" }}>
                                            <Box
                                                component="a"
                                                href={item.link}
                                                sx={{
                                                    fontSize: "14px",
                                                    color: "#555",
                                                    fontWeight: 400,
                                                    textDecoration: "none",
                                                    transition: "color 0.3s",
                                                    cursor: "pointer",
                                                    "&:hover": {
                                                        color: "#37acb0",
                                                    },
                                                }}
                                            >
                                                {item.name}
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ backgroundColor: "#f7f8f9", mt: "50px", py: 1.5 }}>
                <Container>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: "flex", justifyContent: "flex-start", px: 2 }}>
                            <Typography color="seondary.main">
                                © HandStore - All Rights Reserved
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2 }}>
                            <Link>
                            <img
                                src="image/PaymentGateway.webp"
                                alt="Payment Icon"
                                style={{ maxHeight: "40px", objectFit: "contain" }}
                            />
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                </Container>
            </Box>
        </Box>
    );
};
export default Footer;