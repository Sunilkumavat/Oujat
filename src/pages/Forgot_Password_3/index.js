import { Grid, Typography, Button, FormHelperText,Box, TextField, FormLabel } from "@mui/material";
import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Login from "../../assets/Login.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import A from "../../assets/A.png";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must contain atleast 8 characters")
    .max(12, "Password should not contain more than 12 characters"),

  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Password must match"),
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
    navigate("/");
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
            onClick={() => navigate("/forgotpassword2")}
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
              <strong>Reset</strong>
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
            You can create new password here
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel sx={{ color: "#000000", fontWeight: "bold" }}>
              New Password
            </FormLabel>

            <TextField
              {...register("password")}
              fullWidth
              variant="outlined"
              type="password"
              placeholder="Enter New Password"
              sx={{ marginTop: "10px" }}
            />

            <FormHelperText
              sx={{ color: "red", fontStyle: "italic", marginBottom: "20px" }}
            >
              {errors.password?.message}
            </FormHelperText>

            <FormLabel sx={{ color: "#000000", fontWeight: "bold" }}>
              Confirm Password
            </FormLabel>

            <TextField
              {...register("confirmPassword")}
              fullWidth
              variant="outlined"
              type="password"
              placeholder="Confirm New Password"
              sx={{ marginTop: "10px", }}
            />

            <FormHelperText
              sx={{ color: "red", fontStyle: "italic", marginBottom: "20px" }}
            >
              {errors.confirmPassword?.message}
            </FormHelperText>

            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{
                background: "#FC5722",
                fontWeight: "bold",
              }}
            >
              Submit
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
