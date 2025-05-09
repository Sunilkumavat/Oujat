import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Tick from "../../assets/Tick.png";

const Index = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          width:"100vw",
          height:"100vh",
          
        }}
      >
        <img src={Tick} alt="Image not found" />
        <Typography variant="h6">Sent!</Typography>
        <Typography sx={{color:"#696969"}}>
        Your application will be under review and you should expect an update
        via email within 7 to 10 days.
      </Typography>
      <Button variant="contained"
      sx={{
        fontWeight:"bold",
        background: "#000000"
      }}>
okay
      </Button>
      </Box>
      
    </>
  );
};

export default Index;
