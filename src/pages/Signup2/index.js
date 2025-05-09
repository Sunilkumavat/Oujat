import {
  Grid,
  Typography,
  TextField,
  Box,
  Button,
  Divider,
  FormLabel,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Login from "../../assets/Login.png";
import A from "../../assets/A.png";
import Signup2 from "../../assets/Signup2.png";
import { useNavigate } from "react-router-dom";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";

const validationSchema = yup.object({
  companyName: yup.string().required("Company Name is required"),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),

  // date: yup.date().required("Select the date of creation"),

  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")
    .min(10, "Phone number should contain atleast 10 digits"),

  activity: yup.string().required("Select Country"),

  language: yup.string().required("Select language"),
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
    navigate("/signup3");
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const dateInputRef = useRef(null);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    setValue("date", newDate);
  };

  const handleIconClick = () => {
    dateInputRef.current.click();
  };

  const [phone, setPhone] = useState("+91");

  const handlePhoneChange = (value) => {
    setPhone(value);
    setValue("phoneNumber", value);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup3");
  };

  const [country, setCountry] = useState([]);
  

  const fetchCountry = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountry(response.data);
    } catch (error) {
      console.error("Invalid request");
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  const [language, setLanguage] = useState([]);

  const fetchLanguage = async () => {
    try {
      const response = await axios.get("https://libretranslate.com/languages");
      console.log(response.data);
      setLanguage(response.data);
    } catch (error) {
      console.error("Invalid request");
    }
  };

  useEffect(() => {
    fetchLanguage();
  }, []);

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
          <Typography
            gutterBottom
            variant="subtitle2"
            sx={{ color: "#6C7278" }}
          >
            Enter Basic Details according to following forms
          </Typography>

          <img
            src={Signup2}
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
            Company Information
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel sx={{ color: "#000000", fontWeight: "bold" }}>
              Company Name
            </FormLabel>

            <TextField
              {...register("companyName")}
              fullWidth
              variant="outlined"
              placeholder="Enter Company Name"
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
              {errors.companyName?.message}
            </FormHelperText>

            <Grid container columnSpacing={5}>
              <Grid item xs={12} sm={6}>
                <FormLabel sx={{ color: "#000000", fontWeight: "bold" }}>
                  Email
                </FormLabel>
                <TextField
                  {...register("email")}
                  fullWidth
                  variant="outlined"
                  placeholder="Enter Email"
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
                  {errors.email?.message}
                </FormHelperText>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormLabel sx={{ color: "#000000", fontWeight: "bold" }}>
                  Phone Number
                </FormLabel>
                {/* <Box
                  sx={{
                    display: "flex",
                    gap: "5px",
                  }}
                > */}
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  {/* <Select
                      {...register("countryCode")}
                      variant="outlined"
                      sx={{
                        marginTop: "10px",
                        width: "8vw",
                      }}
                    >
                      <MenuItem value="" disabled>
                        Select Country Code
                      </MenuItem>

                      <MenuItem value="+1">+1</MenuItem>
                      <MenuItem value="+91">+91</MenuItem>
                      <MenuItem value="+44">+44</MenuItem>
                      <MenuItem value="+61">+61</MenuItem>
                      <MenuItem value="+49">+49</MenuItem>
                      <MenuItem value="+33">+33</MenuItem>
                      <MenuItem value="+55">+55</MenuItem>
                      <MenuItem value="+27">+27</MenuItem>
                      <MenuItem value="+81">+81</MenuItem>
                      <MenuItem value="+971">+971</MenuItem>
                    </Select> */}

                  <PhoneInput
                    {...register("phoneNumber")}
                    value={phone}
                    placeholder="Select country code"
                    onChange={handlePhoneChange}
                    enableSearch={true}
                    inputStyle={{
                      width: "100%",
                      height: "55px",
                    }}
                    containerStyle={{
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
                    {errors.phoneNumber?.message}
                  </FormHelperText>
                </Box>

                {/* <TextField
                    required
                    variant="outlined"
                    // type="number"
                    placeholder="+91"
                    sx={{
                      marginTop: "10px",
                      marginBottom: "30px",
                      width: "8vw",
                    }}
                  /> */}

                {/* <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <TextField
                      {...register("phoneNumber")}
                      fullWidth
                      variant="outlined"
                      placeholder="Enter Phone Number"
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
                      {errors.phoneNumber?.message}
                    </FormHelperText>
                  </Box> */}
                {/* </Box> */}
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormLabel sx={{ color: "#000000", fontWeight: "bold" }}>
                  Creation Date
                </FormLabel>

                <TextField
                  fullWidth
                  variant="outlined"
                  type="date"
                  placeholder="Select Date"
                  onClick={handleIconClick}
                  value={selectedDate}
                  sx={{
                    marginTop: "10px",
                  }}
                  // InputProps={{
                  //   endAdornment: (
                  //     <InputAdornment position="end">
                  //       <IconButton edge="end" onClick={handleIconClick}>
                  //         <CalendarTodayIcon />
                  //       </IconButton>
                  //     </InputAdornment>
                  //   ),
                  //   readOnly: true,
                  // }}
                />

                <input
                  {...register("date")}
                  type="date"
                  style={{ display: "none" }}
                  ref={dateInputRef}
                  onChange={handleDateChange}
                />

                <FormHelperText
                  sx={{
                    color: "red",
                    fontStyle: "italic",
                    marginBottom: "20px",
                  }}
                >
                  {errors.date?.message}
                </FormHelperText>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormLabel sx={{ color: "#000000", fontWeight: "bold" }}>
                  Main Country(ies) of Activity
                </FormLabel>

                <Select
                  {...register("activity")}
                  fullWidth
                  variant="outlined"
                  sx={{
                    marginTop: "10px",
                  }}
                >
                  {country.map((value) => {
                    const { name } = value;
                    return (
                      <MenuItem value={name.common}>{name.common}</MenuItem>
                    );
                  })}
                  {/* <MenuItem value="" disabled>
                    Select Activity
                  </MenuItem>

                  <MenuItem value="UK">UK</MenuItem>
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="Spain">Spain</MenuItem>
                  <MenuItem value="Germany">Germany</MenuItem>
                  <MenuItem value="France">France</MenuItem>
                  <MenuItem value="China">China</MenuItem> */}
                </Select>

                <FormHelperText
                  sx={{
                    color: "red",
                    fontStyle: "italic",
                    marginBottom: "20px",
                  }}
                >
                  {errors.activity?.message}
                </FormHelperText>

                {/* <TextField
                  fullWidth
                  select
                  required
                  variant="outlined"
                  type="text"
                  placeholder="Select Activity "
                  sx={{
                    marginTop: "10px",
                    marginBottom: "30px",
                  }}
                /> */}
              </Grid>
            </Grid>

            <FormLabel sx={{ color: "#000000", fontWeight: "bold" }}>
              Preferred Language
            </FormLabel>

            <Select
              {...register("language")}
              fullWidth
              variant="outlined"
              sx={{
                marginTop: "10px",
              }}
            >
              {language.map((value) => {
                const { name } = value;
                return (<MenuItem value={name}>{name}</MenuItem>);
              })}
              {/* <MenuItem value="" disabled>
                Select a language
              </MenuItem>

              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Hindi">Hindi</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
              <MenuItem value="German">German</MenuItem>
              <MenuItem value="French">French</MenuItem>
              <MenuItem value="Chinese">Chinese</MenuItem> */}
            </Select>

            <FormHelperText
              sx={{
                color: "red",
                fontStyle: "italic",
                marginBottom: "20px",
              }}
            >
              {errors.language?.message}
            </FormHelperText>

            {/* <TextField
              // select
              fullWidth
              required
              variant="outlined"
              placeholder="Select Language"
              sx={{
                marginTop: "10px",
                marginBottom: "30px",
              }}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Hindi">Hindi</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
              <MenuItem value="German">German</MenuItem>
              <MenuItem value="French">French</MenuItem>
              <MenuItem value="Chinese">Chinese</MenuItem>
            </TextField> */}

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
                  onClick={() => navigate("/signup1")}
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
                  // onClick={handleClick}
                >
                  Next
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
