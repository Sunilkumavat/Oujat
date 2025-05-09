import {
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  Box,
  FormLabel,
  FormHelperText,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useRef, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Login from "../../assets/Login.png";
import A from "../../assets/A.png";
import Signup3 from "../../assets/Signup3.png";
import Pdf from "../../assets/Pdf.png";
import Pdf_Icon from "../../assets/Pdf_Icon.png";
import DeleteIcon from "@mui/icons-material/Delete";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const validationSchema = yup.object({
  certificate: yup.mixed().required("Required field"),

  addressDocument: yup.mixed().required("Required field"),

  bankStatement: yup.mixed().required("Required field"),
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
    navigate("/signup4");
  };


  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState({});
  const fileInputRefs = useRef({});

  const handleFileSelect = (e ,fieldName) =>{
    const file = e.target.files[0];
    if (file){
      setSelectedFile((prev) => ({
        ...prev,[fieldName] : file
      }));
      setValue(fieldName , file);

    }
  };

  const handleIconClick = (fieldName) => {
    if (fileInputRefs.current[fieldName]){
    fileInputRefs.current[fieldName].click();
  }
  };

  // const [selectedCertificate, setSelectedCertificate] = useState(null);
  // const [selectedAddress, setSelectedAddress] = useState(null);
  // const [selectedBankStatement, setSelectedBankStatement] = useState(null);
  
  // const certificateRef = useRef(null);
  // const addressRef = useRef(null);
  // const bankStatementRef = useRef(null);

  // const handleCertificateSelect = (e) => {
  //   const file = e.target.files[0];
  //   if (file){
  //     setSelectedCertificate(file);
  //     setValue("certificate",file);
  //   }
  // };

  // const handleAddressSelect = (e) => {
  //   const file = e.target.files[0];
  //   if (file){
  //     setSelectedAddress(file);
  //     setValue("addressDocument", file);
  //   }
  // };

  // const handleBankStatementSelect = (e) => {
  //   const file = e.target.files[0];
  //   if (file){
  //     setSelectedBankStatement(file);
  //     setValue("bankStatement", file);
  //   }
  // };

  // const handleCertificateClick = () => {
  //   certificateRef.current.click();
  // };

  // const handleCertificateClick = () => {
  //   addressRef.current.click();
  // };

  // const handleCertificateClick = () => {
  //   bankStatementRef.current.click();
  // };

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
            <strong>Create Your Agent Account</strong>
          </Typography>

          <img
            src={Signup3}
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
            Upload Essential Company Documents
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel sx={{ color: "#000000", fontWeight: "bold" }}>
              Business formation documents or certificate of incorporation
            </FormLabel>

            <TextField
              fullWidth
              variant="outlined"
              placeholder="Attach Documents Here"
              value={selectedFile.certificate ? selectedFile.certificate.name : ""}
              sx={{
                marginTop: "10px",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => handleIconClick("certificate")}>
                      <AttachFileIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                readOnly: true,
              }}
            />

            <input
            {...register("certificate")}
              type="file"
              style={{display:"none"}}
              ref={(el) => (fileInputRefs.current.certificate = el)}
        onChange={(e) => handleFileSelect(e, "certificate")}
            />

            <FormHelperText
              sx={{ color: "red", fontStyle: "italic", marginBottom: "30px" }}
            >
              {errors.certificate?.message}
            </FormHelperText>

            <FormLabel sx={{ color: "#000000", fontWeight: "bold" }}>
              Proof of Address Document
            </FormLabel>

            <TextField
              fullWidth
              variant="outlined"
              value={selectedFile.addressDocument ? selectedFile.addressDocument.name : ""}
              placeholder="Attach Documents Here"
              sx={{
                marginTop: "10px",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => handleIconClick("addressDocument")}>
                      <AttachFileIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                readOnly: true,
              }}
            />

            <input 
              {...register("addressDocument")}
              type="file"
              style={{display:"none"}}
              ref={(el) => (fileInputRefs.current.addressDocument = el)}
        onChange={(e) => handleFileSelect(e, "addressDocument")}
            />

            <FormHelperText
              sx={{ color: "red", fontStyle: "italic", marginBottom: "30px" }}
            >
              {errors.addressDocument?.message}
            </FormHelperText>

            <FormLabel sx={{ color: "#000000", fontWeight: "bold" }}>
              Bank Statements
              <Typography
                variant="caption"
                sx={{ color: "#8F9DAC", fontSize: "15px" }}
              >
                (Required for US and Canda)
              </Typography>
            </FormLabel>

            <TextField
              fullWidth
              variant="outlined"
              placeholder="Attach Documents Here"
              value={selectedFile.bankStatement ? selectedFile.bankStatement.name : ""}
              sx={{
                marginTop: "10px",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => handleIconClick("bankStatement")}>
                      <AttachFileIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                readOnly: true,
              }}
            />

            <input
            {...register("bankStatement")}
              type="file"
              style={{display:"none"}}
              ref={(el) => (fileInputRefs.current.bankStatement = el)}
        onChange={(e) => handleFileSelect(e, "bankStatement")}
            />

            <FormHelperText
              sx={{ color: "red", fontStyle: "italic", marginBottom: "30px" }}
            >
              {errors.bankStatement?.message}
            </FormHelperText>

            <Box
              sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                marginBottom: "30px",
              }}
            >
              <img src={Pdf} alt="Image not found" />
              <img src={Pdf_Icon} alt="Pdf" />
              <Typography>Info.PDF</Typography>
              <DeleteIcon sx={{ marginLeft: "auto" }} />
            </Box>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    color: "#FC5722",
                    fontWeight: "bold",
                    border: "1px solid #A1A1A1",
                  }}
                  onClick={() => navigate("/signup2")}
                >
                  Back
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  sx={{ background: "#000000", fontWeight: "bold" }}
                >
                  Review & Submit
                </Button>
              </Grid>
            </Grid>

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
                onClick={() => navigate("/")}
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
