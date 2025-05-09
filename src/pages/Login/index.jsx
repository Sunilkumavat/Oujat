import {
  Box,
  Button,
  Divider,
  FormLabel,
  Grid,
  IconButton,
  FormHelperText,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Login from "../../assets/Login.png";
import A from "../../assets/A.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const validationSchema = yup.object({
  Email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  Password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(12, "Password should not contain more than 12 characters"),
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
    console.log(data);
    navigate("/dashboard");
  };

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            marginTop: "200px",
            padding: "50px",
            // width: {xs:"100vw",sm:"50vw"}
          }}
        >
          <Typography variant="h3" gutterBottom>
            OUJ
            <img src={A} alt="A" />T
          </Typography>

          <Box sx={{ display: "flex", gap: "5px" }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "bold",
              }}
            >
              Welcome to
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "#FC5722",
              }}
            >
              Oujat.com
            </Typography>
          </Box>

          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{ color: "#6C7278", marginBottom: "30px" }}
          >
            Enter the required information to log into your account
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel sx={{ color: "#000000", fontWeight: "bold" }}>
              Email/User ID
            </FormLabel>

            <TextField
              {...register("Email")}
              fullWidth
              variant="outlined"
              placeholder="Enter Email Address/User ID"
              sx={{
                marginTop: "10px",
              }}
            />

            <FormHelperText
              sx={{ color: "red", fontStyle: "italic", marginBottom: "20px" }}
            >
              {errors.Email?.message}
            </FormHelperText>

            <FormLabel sx={{ color: "#000000", fontWeight: "bold" }}>
              Password
            </FormLabel>
            <TextField
              {...register("Password")}
              fullWidth
              variant="outlined"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              sx={{
                marginTop: "10px",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={handleClickShowPassword}>
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <FormHelperText
              sx={{ color: "red", fontStyle: "italic", marginBottom: "20px" }}
            >
              {errors.Password?.message}
            </FormHelperText>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "10px",
              }}
            >
              <Button
                variant="text"
                sx={{
                  color: "#E56060",
                  fontWeight: "bold",
                }}
                onClick={() => navigate("/forgotpassword1")}
              >
                Forgot Password?
              </Button>
            </Box>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                background: "#FC5722",
                marginTop: "20px",
                fontWeight: "bold",
              }}
            >
              Login
            </Button>
            <Divider
              variant="fullWidth"
              orientation="horizontal"
              sx={{
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              <Typography>Or</Typography>
            </Divider>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Don't have an account?
              <Button
                variant="text"
                sx={{ color: "#E56060", fontWeight: "bold" }}
                onClick={() => navigate("/signup1")}
              >
                Signup
              </Button>
            </Typography>
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
          <img
            src={Login}
            alt="Oujat"
            // style={{ height: "100vh", width: { xs: "100vw", sm: "50vw" } }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
