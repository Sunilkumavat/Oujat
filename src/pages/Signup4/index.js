import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Login from "../../assets/Login.png";
import A from "../../assets/A.png";
import Pdf from "../../assets/Pdf.png";
import Pdf_Icon from "../../assets/Pdf_Icon.png";
import { useNavigate } from "react-router-dom";

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
            marginTop: "30px",
          }}
        >
          <Typography variant="h3" gutterBottom>
            OUJ
            <img src={A} alt="A" />T
          </Typography>

          <Typography variant="h5" gutterBottom>
            <strong>Account Creation Overview</strong>
          </Typography>

          <Typography
            sx={{
              marginTop: "30px",
              marginBottom: "20px",
            }}
          >
            <strong>Company Legal Representant Information</strong>
          </Typography>

          <Divider
            variant="fullWidth"
            orientation="horizontal"
            sx={{ background: "#FC5722", marginBottom: "10px" }}
          />

          <Grid container sx={{ marginBottom: "10px" }}>
            <Grid item xs={12} sm={6}>
              <Typography>Full name</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Mariya M Warner</Typography>
            </Grid>
          </Grid>

          <Grid container sx={{ marginBottom: "10px" }}>
            <Grid item xs={12} sm={6}>
              <Typography>Company Title</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>CEO</Typography>
            </Grid>
          </Grid>

          <Grid container sx={{ marginBottom: "40px" }}>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                Upload Valid Government
                <br /> Issued Photo ID
              </Typography>
              <Typography sx={{ display: { xs: "block", sm: "none" } }}>
                Upload Valid Government Issued Photo ID
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap:"5px"
                }}
              >
                <img src={Pdf} alt="Document" />
                <img src={Pdf_Icon} alt="Document" />
                <Typography>Info.PDF</Typography>
              </Box>
            </Grid>
          </Grid>

          <Typography
            sx={{
              marginBottom: "20px",
            }}
          >
            <strong>Company Information</strong>
          </Typography>

          <Divider
            variant="fullWidth"
            orientation="horizontal"
            sx={{ background: "#FC5722", marginBottom: "10px" }}
          />

          <Grid container sx={{ marginBottom: "10px" }}>
            <Grid item xs={12} sm={6}>
              <Typography>Company Name</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Apex Global Logistics</Typography>
            </Grid>
          </Grid>

          <Grid container sx={{ marginBottom: "10px" }}>
            <Grid item xs={12} sm={6}>
              <Typography>Email</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>mariya@gmail.com</Typography>
            </Grid>
          </Grid>

          <Grid container sx={{ marginBottom: "10px" }}>
            <Grid item xs={12} sm={6}>
              <Typography>Creation Date</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>23/11/2024</Typography>
            </Grid>
          </Grid>

          <Grid container sx={{ marginBottom: "10px" }}>
            <Grid item xs={12} sm={6}>
              <Typography>Main Country(ies) of Activity </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>+1 12312312311</Typography>
            </Grid>
          </Grid>

          <Grid container sx={{ marginBottom: "10px" }}>
            <Grid item xs={12} sm={6}>
              <Typography>Preferred Language</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>English</Typography>
            </Grid>
          </Grid>

          <Grid container sx={{ marginBottom: "40px" }}>
            <Grid item xs={12} sm={6}>
              <Typography>Service Category</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Domestic Transport</Typography>
            </Grid>
          </Grid>

          <Typography
            sx={{
              marginBottom: "20px",
            }}
          >
            <strong>Upload Essential Company Documents</strong>
          </Typography>

          <Divider
            variant="fullWidth"
            orientation="horizontal"
            sx={{ background: "#FC5722", marginBottom: "10px" }}
          />

          <Grid container sx={{ marginBottom: "20px" }}>
            <Grid item xs={12} sm={6}>
              <Typography>
                Business formation documents or certificate of incorporation
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap:"5px"
                }}
              >
                <img src={Pdf} alt="Document" />
                <img src={Pdf_Icon} alt="Document" />
                <Typography>Info.PDF</Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container sx={{ marginBottom: "20px" }}>
            <Grid item xs={12} sm={6}>
              <Typography>Proof of Address Document</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap:"5px"
                }}
              >
                <img src={Pdf} alt="Document" />
                <img src={Pdf_Icon} alt="Document" />
                <Typography>Info.PDF</Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container sx={{ marginBottom: "40px" }}>
            <Grid item xs={12} sm={6}>
              <Typography>
                Bank Statements (Required for US and Canada){" "}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap:"5px"
                }}
              >
                <img src={Pdf} alt="Document" />
                <img src={Pdf_Icon} alt="Document" />
                <Typography>Info.PDF</Typography>
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap:"20px"}}
          >
            <Button
              variant="outlined"
              sx={{
                color: "#FC5722",
                fontWeight: "bold",
                border: "1px solid #A1A1A1",
              }}
              onClick={() => navigate("/signup3")}
            >
              Back
            </Button>
            <Button
              variant="contained"
              type="submit"
              sx={{ background: "#000000", fontWeight: "bold" }}
              onClick={() => navigate("/signup5")}
            >
              Submit for Verification
            </Button>
          </Box>
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
