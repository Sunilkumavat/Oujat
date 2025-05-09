import {
  Box,
  Button,
  Grid,
  TextField,
  FormHelperText,
  Typography,
  FormLabel,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Login from "../../assets/Login.png";
import A from "../../assets/A.png";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  Email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
});

const Index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:" ,data);
    navigate("/forgotpassword2");
  };


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
              fontWeight: "bold",
            }}
            onClick={() => navigate("/")}
          >
            <ArrowBackIcon />
            Back
          </Button>

          <Typography variant="h3" gutterBottom>
            OUJ
            <img src={A} alt="A" />T
          </Typography>

          <Box sx={{ display: "flex", gap: "10px" }}>
            <Typography variant="h4">
              <strong>Forgot</strong>
            </Typography>
            <Typography gutterBottom variant="h4" sx={{ color: "#FC5722" }}>
              <strong>Password</strong>
            </Typography>
          </Box>

          <Typography
            variant="subtitle2"
            sx={{
              color: "#6C7278",
              marginBottom: "30px",
            }}
          >
            Enter you registered email id
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel sx={{ color: "#000000", fontWeight: "bold" }}>
              Email ID
            </FormLabel>
            <TextField
              {...register("Email")}
              fullWidth
              variant="outlined"
              placeholder="Enter Email Address/User ID"
              sx={{ marginTop: "10px" }}
            />

            <FormHelperText
              sx={{ color: "red", fontStyle: "italic", marginBottom: "20px" }}
            >
              {errors.Email?.message}
            </FormHelperText>

            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{
                background: "#FC5722",
                fontWeight: "bold",
              }}
              // onClick={() => navigate("/forgotpassword2")}
            >
              Reset Password
            </Button>
          </form>
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
