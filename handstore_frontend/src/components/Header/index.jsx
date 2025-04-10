import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { AppBar, Grid, Box, Container, IconButton, Typography, TextField, InputAdornment, Button, Menu, MenuItem, List, ListItem, Badge } from "@mui/material";

const Header = () => {
    const navbarTopsocial = [
        { text: "TikTok", viewBox: "0 0 24 24", link: "/", icon: "M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" },
        { text: "Instagram", viewBox: "0 0 24 24", link: "/", icon: "M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" },
        { text: "Facebook", viewBox: "0 0 30 30", link: "/", icon: "M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z" },
        { text: "Pinterest", viewBox: "0 0 50 50", link: "/", icon: "M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609825 4 46 13.390175 46 25 C 46 36.609825 36.609825 46 25 46 C 22.876355 46 20.82771 45.682142 18.896484 45.097656 C 19.75673 43.659418 20.867347 41.60359 21.308594 39.90625 C 21.570728 38.899887 22.648438 34.794922 22.648438 34.794922 C 23.348841 36.132057 25.395277 37.263672 27.574219 37.263672 C 34.058123 37.263672 38.732422 31.300682 38.732422 23.890625 C 38.732422 16.78653 32.935409 11.472656 25.476562 11.472656 C 16.196831 11.472656 11.271484 17.700825 11.271484 24.482422 C 11.271484 27.636307 12.94892 31.562193 15.634766 32.8125 C 16.041611 33.001865 16.260073 32.919834 16.353516 32.525391 C 16.425459 32.226044 16.788267 30.766792 16.951172 30.087891 C 17.003269 29.871239 16.978043 29.68405 16.802734 29.470703 C 15.913793 28.392399 15.201172 26.4118 15.201172 24.564453 C 15.201172 19.822048 18.791452 15.232422 24.908203 15.232422 C 30.18976 15.232422 33.888672 18.832872 33.888672 23.980469 C 33.888672 29.796219 30.95207 33.826172 27.130859 33.826172 C 25.020554 33.826172 23.440361 32.080359 23.947266 29.939453 C 24.555054 27.38426 25.728516 24.626944 25.728516 22.78125 C 25.728516 21.130713 24.842754 19.753906 23.007812 19.753906 C 20.850369 19.753906 19.117188 21.984457 19.117188 24.974609 C 19.117187 26.877359 19.761719 28.166016 19.761719 28.166016 C 19.761719 28.166016 17.630543 37.176514 17.240234 38.853516 C 16.849091 40.52931 16.953851 42.786365 17.115234 44.466797 C 9.421139 41.352465 4 33.819328 4 25 C 4 13.390175 13.390175 4 25 4 z" },
    ]
    const navbarTopIcons = [
        { text: "03084782036", viewBox: "0 -960 960 960", link: "/", icon: "M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" },
        { text: "info@handstore.com", viewBox: "0 -960 960 960", link: "/", icon: "M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" },
        { text: "whatsApp", link: "/", viewBox: "0 0 30 30", icon: "M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z" },
    ];
    const menuItems = [
        { text: "Home", link: "/" },
        { text: "OurStory", link: "/" },
        { text: "Contact", link: "/" },
        { text: "Store", link: "/" },
        { text: "Categories", link: "/" }
    ];
    const [searchText, setSearchText] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("Choose Category");

    // Open Dropdown Menu
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Select a Category
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setAnchorEl(null); // Close menu after selection
    };

    // Close Dropdown Menu
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar sx={{
            width: "100%",
            background: "white",
            boxShadow: "none",
            zIndex: "1100",
            position: "relative"
        }}>
            {/* 1st row of appbar contains contact icons & Social Icons */}
            <Box sx={{
                width: "100%",
                backgroundColor: "#f7f8f9",
                display: "flex",
                flexDirection: "row",  // Corrected from "colunm"
                alignItems: "center", // Ensures vertical alignment
                justifyContent: "space-between" // Spaces out items
             }}>
                <Container maxWidth="lg" sx={{ padding: "0px" }}>
                    <Grid container alignItems="center">
                        {/* Contact Icons */}
                        <Grid item xs={12} md={6} sx={{ display: "flex", gap: "10px" }}>
                            {navbarTopIcons.map((item, index) => (
                                <Grid
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
                                    }}>
                                    <IconButton aria-label={item.text} sx={{ padding: "7px", alignItems: "center" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox={item.viewBox} width="15px" fill="#37acb0">
                                            <path d={item.icon} />
                                        </svg>
                                    </IconButton>
                                    <Typography sx={{
                                        fontFamily: "'League Spartan', sans-serif",
                                        fontSize: "14px", fontWeight: 500, color: "secondary.main", "&:hover": { color: "#37acb0" }
                                    }}>
                                        {item.text}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>

                        {/* social icons */}
                        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "end", gap: "10px" }}>
                            {navbarTopsocial.map((item, index) => (
                                <Grid
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
                                    }}>
                                    <IconButton aria-label={item.text} sx={{ padding: "7px", alignItems: "center" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox={item.viewBox} width="15px" fill="#37acb0">
                                            <path d={item.icon} />
                                        </svg>
                                    </IconButton>
                                    <Typography sx={{
                                        fontFamily: "'League Spartan', sans-serif",
                                        fontSize: "14px", fontWeight: 500, color: "secondary.main", "&:hover": { color: "#37acb0" }
                                    }}>
                                        {item.text}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* 2nd row contains logo and searchbar and car, wishlist and User Icon */}
            <Box sx={{
                width: "100%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "row",  // Corrected from "colunm"
                alignItems: "center", // Ensures vertical alignment
                justifyContent: "space-between" // Spaces out items
            }}>
                <Container maxWidth="lg" sx={{ padding: "0px" }}>
                    <Grid container alignItems="center" justifyContent="flex-start">
                        {/* Logo*/}
                        <Grid item xs={12} md={2} sx={{ textAlign: "left" }}>
                            <Link to="/">
                                <img
                                    src="image/Blue and Green Flat Typographic E-Commerce Online Shop Logo (1).png"
                                    alt="Hand Store Logo"
                                    width="120px"
                                    height="auto"
                                />
                            </Link>
                        </Grid>
                        {/* Menu Items */}
                        <Grid item xs={12} md={6} sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    width: "100%",
                                    maxWidth: "500px",
                                    margin: "0px",
                                    border: "1px solid #213547",
                                    borderRadius: "5px",
                                    overflow: "hidden", // Ensures consistent alignment
                                }}
                            >
                                <TextField
                                    variant="outlined"
                                    placeholder="Search..."
                                    size="small"
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    sx={{
                                        flex: "70%",
                                        backgroundColor: "transparent",
                                        "& .MuiOutlinedInput-root": {
                                            fontFamily: "'League Spartan', sans-serif",
                                            transition: "border-color 0.3s ease-in-out",
                                            border: "none",
                                            "& fieldset": { border: "none" },
                                        },
                                        "& input": {
                                            fontSize: "16px",
                                            color: "#213547",
                                            fontWeight: "400",
                                            fontFamily: "'League Spartan', sans-serif",
                                            "&::placeholder": {
                                                color: "black",  // Placeholder text color
                                                opacity: 1,  // Ensures visibility in all browsers
                                                fontSize: "15px",
                                                fontFamily: "'League Spartan', sans-serif",
                                            },
                                        },
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon sx={{ color: "#37acb0", fontSize: "24px" }} />
                                            </InputAdornment>
                                        ),
                                        endAdornment: searchText && (
                                            <IconButton
                                                onClick={() => setSearchText("")}
                                                size="small"
                                                sx={{
                                                    color: "#213547",
                                                    "&:hover": { color: "#37acb0" },
                                                }}
                                            >
                                                <CloseIcon sx={{ fontSize: "15px" }} />
                                            </IconButton>
                                        ),
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    onClick={handleMenuOpen}
                                    endIcon={<ArrowDropDownIcon />}
                                    disableRipple={false}
                                    sx={{
                                        flex: "30%",
                                        backgroundColor: "#37acb0",
                                        color: "white",
                                        height: "100%",
                                        fontSize: "13px",
                                        fontWeight: "600",
                                        fontFamily: "'League Spartan', sans-serif",
                                        textTransform: "none",
                                        borderRadius: "0px",
                                        border: "4px solid #37acb0",
                                        minWidth: "auto",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        whiteSpace: "nowrap",
                                        gap: "5px",
                                        width: "100%",
                                        boxShadow: " none",
                                        transition: "background-color 0.3s ease-in-out, border 0.3s ease-in-out",
                                        "&:hover": {
                                            backgroundColor: "#213547",
                                            color: "white",
                                            border: "4px solid #213547",
                                            boxShadow: "none"
                                        },
                                        "&:focus": {
                                            outline: "none",
                                            backgroundColor: "#213547",
                                            color: "white",
                                            border: "4px solid #213547",
                                            boxShadow: "none"
                                        },
                                    }}
                                >
                                    {selectedCategory}
                                </Button>
                            </Box>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                sx={{ "& .MuiPaper-root": { borderRadius: "8px", minWidth: "180px" } }}
                            >
                                {["Category No 1", "Category No 2", "Category No 3", "Category No 4", "Category No 5", "Category No 6"].map(
                                    (category, index) => (
                                        <MenuItem key={index} onClick={() => handleCategorySelect(category)}>
                                            {category}
                                        </MenuItem>
                                    )
                                )}
                            </Menu>
                        </Grid>
                        {/* Cart , User, Wishlist icon */}
                        <Grid item xs={12} md={4} sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "20px" }}>
                            {/* Login/Register */}
                            <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                <IconButton aria-label="Login" sx={{ p: 0, "&:hover": { background: "transparent" } }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#37acb0">
                                        <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                                    </svg>
                                </IconButton>
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                    <Typography sx={{ fontSize: "11px", fontWeight: 400, color: "#213547", fontFamily: "'League Spartan', sans-serif" }}>
                                        Account
                                    </Typography>
                                    <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "#213547", fontFamily: "'League Spartan', sans-serif" }}>
                                        Sign In / Register
                                    </Typography>
                                </Box>
                            </Box>
                            {/* Cart */}
                            <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                <Badge
                                    badgeContent={0}
                                    showZero
                                    color="primary"
                                    sx={{ "& .MuiBadge-badge": { backgroundColor: "secondary.main", color: "#fff", fontSize: "10px", padding: "2px" } }}
                                >
                                    <IconButton aria-label="Cart" sx={{ p: 0, "&:hover": { background: "transparent" } }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#37acb0">
                                            <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
                                        </svg>
                                    </IconButton>
                                </Badge>
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                    <Typography sx={{ fontSize: "11px", color: "#213547", fontFamily: "'League Spartan', sans-serif" }}>
                                        Total
                                    </Typography>
                                    <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "#213547", fontFamily: "'League Spartan', sans-serif" }}>
                                        $0.00
                                    </Typography>
                                </Box>
                            </Box>
                            {/* Wishlist */}
                            <Badge
                                badgeContent={0}
                                showZero
                                color="primary"
                                sx={{ "& .MuiBadge-badge": { backgroundColor: "secondary.main", color: "#fff", fontSize: "10px" } }}
                            >
                                <IconButton aria-label="Wishlist" sx={{ p: 0, "&:hover": { background: "transparent" } }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#37acb0">
                                        <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                    </svg>
                                </IconButton>
                            </Badge>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* third Row for Menu Items */}
            <Box sx={{
                width: "100%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "row",  // Corrected from "colunm"
                alignItems: "center", // Ensures vertical alignment
                justifyContent: "space-between" // Spaces out items
            }}>
                <Container maxWidth="lg" sx={{ padding: "0px" }}>
                    <Grid container alignItems="center">
                        {/* Menu Items */}
                        <Grid item xs={12} md={8} sx={{ display: "flex", justifyContent: "flex-end" }}>
                            <List sx={{ display: "flex", gap: "20px" }}>
                                {menuItems.map((item, index) => (
                                    <ListItem
                                        key={index}
                                        href={item.link}
                                        sx={{
                                            textDecoration: "none",
                                            color: "inherit",
                                            padding: "5px 10px",
                                            position: "relative", // Ensure positioning for absolute pseudo-element
                                            "&::after": {
                                                content: '""',
                                                position: "absolute",
                                                width: "0%",
                                                height: "2px",
                                                backgroundColor: "primary.main", // Line color
                                                bottom: "0",
                                                rigt: "10",
                                                transition: "width 0.3s ease-in-out",
                                            },
                                            "&:hover::after": {
                                                width: "100%", // Expands from right to left
                                            },
                                            "&:hover .menu-text": {
                                                color: "#213547", // Change text color on hover
                                            },
                                        }}
                                    >
                                        <Typography
                                            className="menu-text"
                                            variant="body1" // or "subtitle1", "h6" depending on size preference
                                            sx={{
                                                fontSize: "16px",
                                                color: "secondary.main",
                                                fontFamily: "League Spartan",
                                            }}>
                                            {item.text}
                                        </Typography>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </AppBar>
    );
};
export default Header;