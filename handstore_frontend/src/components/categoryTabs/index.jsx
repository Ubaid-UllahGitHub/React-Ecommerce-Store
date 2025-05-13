import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { useState } from "react";
import categoryProductData from "../../Data/mockData";

const CategoryTabs = () => {
    const categoryNames = Object.keys(categoryProductData);
    const [hoveredCategory, setHoveredCategory] = useState(categoryNames[0]);

    // Check if we have a preview image for the hovered category
    const previewImage = hoveredCategory && categoryProductData[hoveredCategory]?.featuredImage;
    return (
        <Box>
            <Container maxWidth="lg" sx={{ padding: 0 }}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} mb={4}>
                        <Typography
                            variant="h5"
                            color="secondary"
                            fontSize="35px"
                            fontWeight="bold"
                            textAlign="center"
                        >
                            Category Tabs
                        </Typography>
                        <Typography
                            variant="body1"
                            color="secondary"
                            textAlign="center"
                            mt={2}
                            fontSize="16px"
                        >
                            Hover over a category to preview featured products and explore what's available.
                        </Typography>
                    </Grid>

                    {/* Left Column - Buttons */}
                    <Grid item xs={12} md={6}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" gap={3} flexWrap="wrap">
                            {categoryNames.map((category) => (
                                <Button
                                    key={category}
                                    variant="outlined"
                                    color="secondary"
                                    onMouseEnter={() => setHoveredCategory(category)}
                                    sx={{
                                        justifyContent: "flex-start",
                                        padding: "6px 19px",
                                        fontFamily: "'League Spartan', sans-serif",
                                        fontSize: "15px",
                                        textTransform: "none",
                                        borderRadius: "8px",
                                        fontWeight: 500,
                                        boxShadow: "none",
                                        transition: "all 0.3s ease",
                                        borderColor: "secondary.main",
                                        color: "secondary.main",
                                        "&:hover": {
                                            backgroundColor: "primary.main",
                                            color: "#ffffff",
                                            borderColor: "primary.main",
                                        },
                                    }}
                                >
                                    {categoryProductData[category]?.displayName}
                                </Button>
                            ))}
                        </Box>
                    </Grid>

                    {/* Right Column - Image Preview */}
                    <Grid item xs={12} md={6}>
                        {previewImage && (
                            <Box
                                component="img"
                                src={previewImage} // Use the preview image based on hovered category
                                alt="Preview"
                                width="100%"
                                height="auto"
                                sx={{
                                    borderRadius: 2,
                                    boxShadow: 3,
                                    maxHeight: "400px",
                                    objectFit: "contain",
                                }}
                            />
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CategoryTabs;
