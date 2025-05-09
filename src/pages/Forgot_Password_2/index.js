import { Grid, Button, Typography, Box } from "@mui/material";
import React from "react";
import Login from "../../assets/Login.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Mail from "../../assets/Mail.png";

const Index = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: "50px",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "#000000",
              border: "2px solid #F2F4F7",
              marginBottom: "200px",
              fontWeight:"bold"
            }}
            onClick={() => navigate("/forgotpassword1")}
          >
            <ArrowBackIcon />
            Back
          </Button>

          <Typography sx={{ marginBottom: "25px" }}>
            <img src={Mail} alt="Oujat" />
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            An email is on its way. Please check your inbox.
          </Typography>

          {/* <Box sx={{ display: "flex", gap: "5px", marginBottom: "20px" }}> */}
            <Typography variant="subtitle2" sx={{ color: "#6C7278" }}>
              Wunder linkl has been send to this below mail
            </Typography>
            <Typography sx={{ color: "#FC5722", fontWeight: "bold" ,marginBottom: "20px"}}>
              joohndoe@gmail.com
            </Typography>
          {/* </Box> */}

          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
          >
            <Typography sx={{ color: "#6C7278" }}>Don't find Mail? </Typography>
            <Button
              variant="text"
              sx={{ color: "#000000", fontWeight: "bold" }}
            >
              Resend Link
            </Button>
          </Box>

          <Button
            variant="contained"
            fullWidth
            sx={{ background: "#FC5722", fontWeight: "bold" }}
            onClick={() => navigate("/forgotpassword1")}
          >
            Use Another Account
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            paddingLeft: { xs: "50px", md: "0px" },
          }}
        >
          <img src={Login} alt="Oujat" />
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
