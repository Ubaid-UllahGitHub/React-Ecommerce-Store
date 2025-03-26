import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { AppBar, Grid, Box, Container, IconButton, Typography, TextField, InputAdornment, Button, Menu, MenuItem, List, ListItem } from "@mui/material";


const Navbar2nd = () => {
    const navbarTopIcons = [
        { text: "03084782036", link: "/", icon: "M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" },
        { text: "info@handstore.com", link: "/", icon: "M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" },
        { text: "whatsApp", link: "/", icon: "M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" },
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
            {/* 1st row of appbar contains contact icons */}
            <Box sx={{
                width: "100%",
                backgroundColor: "#1c2028",
                display: "flex",
                flexDirection: "row",  // Corrected from "colunm"
                alignItems: "center", // Ensures vertical alignment
                justifyContent: "space-between" // Spaces out items
            }}>
                <Container maxWidth="lg" sx={{ padding: "0px" }}>
                    <Grid container alignItems="center">
                        {/* Contact Icons */}
                        <Grid item xs={12} md={4} sx={{ display: "flex", gap: "10px" }}>
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
                                        <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#37acb0">
                                            <path d={item.icon} />
                                        </svg>
                                    </IconButton>
                                    <Typography sx={{
                                        fontFamily: "'League Spartan', sans-serif",
                                        fontSize: "13px", fontWeight: 300, color: "white", "&:hover": { color: "#37acb0" }
                                    }}>
                                        {item.text}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>

                        {/* Search Bar */}
                        <Grid item xs={12} md={8} sx={{ display: "flex", justifyContent: "flex-end" }}>
                            {/* Search Input (Add the search component here) */}

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
                    <Grid container alignItems="center">
                        {/* Logo*/}
                        <Grid item xs={12} md={2} sx={{}}>
                            <img
                                src="image/HandstoreLogo2.png"
                                alt="Hand Store Logo"
                                width="160px"
                                height="auto"
                            />
                        </Grid>
                        {/* Menu Items */}
                        <Grid item xs={12} md={9} sx={{
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
                        <Grid item xs={12} md={1} sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "2px" }}>
                            <IconButton aria-label="Cart">
                                {/* Cart Button */}
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    height="25px" viewBox="0 -960 960 960" width="25px" fill="#37acb0">
                                    <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
                                </svg>
                            </IconButton>
                            <IconButton aria-label="Wish List">
                                {/* User or Admin Login Button */}
                                <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#37acb0">
                                    <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                </svg>
                            </IconButton>
                            <IconButton aria-label="User Login">
                                {/* User or Admin Login Button */}
                                <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#37acb0">
                                    <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                                </svg>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* third Row for Menu Items */}
            <Box sx={{
                width: "100%",
                backgroundColor: "#37acb0",
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
                                                backgroundColor: "#37acb0", // Line color
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
                                                color: "white",
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
export default Navbar2nd;