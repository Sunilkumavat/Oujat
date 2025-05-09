import {
  Box,
  Grid,
  Typography,
  TextField,
  FormHelperText,
  Button,
  Divider,
  FormLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Login from "../../assets/Login.png";
import A from "../../assets/A.png";
import Signup1 from "../../assets/Signup1.png";
import { useNavigate } from "react-router-dom";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required("First Name is required")
    .min(2, "First Name should contain atleast 2 characters"),

  middleName: yup
    .string()
    .required("Middle Name is required")
    .min(2, "Middle Name should contain atleast 2 characters"),

  lastName: yup
    .string()
    .required("Last Name is required")
    .min(2, "Last Name should contain atleast 2 characters"),

  companyTitle: yup.string().required("Company Title is required"),

  document: yup.mixed().required("Document is required"),
});

const Index = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:" ,data);
    navigate("/signup2");
  };


  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setValue("document", file);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

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
          <Typography variant="h3" gutterBottom>
            OUJ
            <img src={A} alt="A" />T
          </Typography>
          <Typography variant="h5" gutterBottom>
            <strong>Create Your Agent Account</strong>
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle2"
            sx={{ color: "#6C7278" }}
          >
            Enter Basic Details according to following forms
          </Typography>

          <img
            src={Signup1}
            alt="Page1"
            style={{
              width: "42vw",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />

          <Typography
            sx={{
              color: "#FC5722",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            Company Legal Representant Information
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel sx={{ color: "#000000", fontWeight: "bold" }}>
              First Name
            </FormLabel>

            <TextField
              {...register("firstName")}
              fullWidth
              variant="outlined"
              placeholder="Enter First Name"
              sx={{
                marginTop: "10px",
              }}
            />

            <FormHelperText
              sx={{
                color: "red",
                fontStyle: "italic",
                marginBottom: "20px",
              }}
            >
              {errors.firstName?.message}
            </FormHelperText>

            <FormLabel sx={{ color: "#000000", fontWeight: "bold" }}>
              Middle Name
            </FormLabel>

            <TextField
              {...register("middleName")}
              fullWidth
              variant="outlined"
              placeholder="Enter Middle Name"
              sx={{
                marginTop: "10px",
              }}
            />

            <FormHelperText
              sx={{
                color: "red",
                fontStyle: "italic",
                marginBottom: "20px",
              }}
            >
              {errors.middleName?.message}
            </FormHelperText>

            <FormLabel sx={{ color: "#000000", fontWeight: "bold" }}>
              Last Name
            </FormLabel>

            <TextField
              {...register("lastName")}
              fullWidth
              variant="outlined"
              placeholder="Enter Last Name"
              sx={{
                marginTop: "10px",
              }}
            />

            <FormHelperText
              sx={{ color: "red", fontStyle: "italic", marginBottom: "20px" }}
            >
              {errors.lastName?.message}
            </FormHelperText>

            <FormLabel sx={{ color: "#000000", fontWeight: "bold" }}>
              Company Title
            </FormLabel>

            <TextField
              {...register("companyTitle")}
              fullWidth
              variant="outlined"
              placeholder="Enter Company Title"
              sx={{
                marginTop: "10px",
              }}
            />

            <FormHelperText
              sx={{ color: "red", fontStyle: "italic", marginBottom: "20px" }}
            >
              {errors.companyTitle?.message}
            </FormHelperText>

            <FormLabel sx={{ color: "#000000", fontWeight: "bold" }}>
              Upload Valid Government Issued Photo ID
            </FormLabel>

            <TextField
              fullWidth
              variant="outlined"
              placeholder="Attach Document Here"
              value={selectedFile ? selectedFile.name : ""}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={handleIconClick}>
                      <AttachFileIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                readOnly: true,
              }}
              sx={{
                marginTop: "10px",
              }}
            />
            <input
              {...register("document")}
              type="file"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleFileSelect}
            />

            <FormHelperText
              sx={{ color: "red", fontStyle: "italic", marginBottom: "30px" }}
            >
              {errors.document?.message}
            </FormHelperText>

            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{ background: "#000000", fontWeight: "bold" }}
              // onClick={() => navigate("/signup2")}
            >
              Next
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
              Already have an account?
              <Button
                variant="text"
                sx={{
                  color: "#E56060",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Login
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
            // style={{ minHeight: "100vh", width: "50vw" }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
