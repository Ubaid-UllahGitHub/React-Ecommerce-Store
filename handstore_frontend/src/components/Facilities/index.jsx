import React from "react";
import { useTheme } from "@mui/material/styles"; // Import the useTheme hook
import { Box, Grid, Container, Icon, Typography } from "@mui/material";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';  // Cargo Van
import ReplayIcon from '@mui/icons-material/Replay';               // Return
import LockIcon from '@mui/icons-material/Lock';                   // Secure Payment
import SupportAgentIcon from '@mui/icons-material/SupportAgent';   // Customer Support
import Inventory2Icon from '@mui/icons-material/Inventory2';       // Parcel / Box
import CreditCardIcon from '@mui/icons-material/CreditCard';       // Payment Option

const Facilities = () => {
    const theme = useTheme();  // Using the hook
    const iconBox = [
        { icon: <LocalShippingIcon fontSize="medium" />, title: "Fast Delivery", text: "Quick & reliable shipping." },
        { icon: <ReplayIcon fontSize="medium" />, title: "Easy Returns", text: "Hassle-free return policy." },
        { icon: <LockIcon fontSize="medium" />, title: "Secure Payment", text: "Your data is safe with us." },
        { icon: <SupportAgentIcon fontSize="medium" />, title: "24/7 Support", text: "We're here to help anytime." },
        { icon: <Inventory2Icon fontSize="medium" />, title: "Open Parcel", text: "Open pacel before payment."},
        { icon: <CreditCardIcon fontSize="medium" />, title: "Secure Payments", text: "Your payment is 100% secure."},
    ];
    return (
        <Box sx={{
            width: "100%",
            padding: "50px 0px"
        }}>
            <Container maxWidth="lg" sx={{ padding: "0px" }}>
                <Grid container spacing={1}>
                    {iconBox.map((item, index) => (
                        <Grid item xs={6} sm={6} md={2} key={index}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    padding: '20px',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '10px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                        transform: 'translateY(-4px)',
                                    },
                                }}
                            >
                                <Icon color="primary">
                                {item.icon}
                                </Icon>
                                <Typography variant="h7" sx={{ mt: 2, fontWeight: 'bold' }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="secondary" sx={{ mt: 1 }}>
                                    {item.text}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};
export default Facilities;
