// import {
//   Box,
//   Button,
//   Divider,
//   FormLabel,
//   Grid,
//   IconButton,
//   InputAdornment,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import Login from "../../assets/Login.png";
// import A from "../../assets/A.png";
// import { useNavigate } from "react-router-dom";
// import * as Yup from "yup";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import AttachFileIcon from "@mui/icons-material/AttachFile";
// import { useRef } from "react";
// import { countries } from "country-codes-flags-phone-codes";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// const Index = () => {
//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);
//   const [selectedFile, setSelectedFile] = useState("");
//   const fileInputRef = useRef(null);

//   const handleFileSelect = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedFile(file.name);
//     }
//   };

//   const handleIconClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors, isSubmitting },
//   } = useForm();

//   const delay = (d) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve();
//       }, d * 1000);
//     });
//   };

//   const onSubmit = async (data) => {
//     await delay(2);
//     console.log(data);
//   };

//   const [selectedCountry, setSelectedCountry] = useState("+1");
//   const handleCountryChange = (e) => {
//     const code = e.target.value;
//     setSelectedCountry(code);
//   };

//   const [phone, setPhone] = useState("+91");

//   //   const [formData, setFormData] = useState({
//   //     Email: "",
//   //     Password: "",
//   //   });

//   //   const [errors, setErrors] = useState({});

//   //   const validationSchema = Yup.object({
//   //     Email: Yup.string()
//   //       .email("Invalid email format")
//   //       .required("Email is required"),
//   //     Password: Yup.string()
//   //       .min(6, "Password must be at least 6 characters")
//   //       .required("Password is required"),
//   //   });

//   //   const handleChange = (e) => {
//   //     const { name, value } = e.target;
//   //     setFormData((prev) => ({ ...prev, [name]: value }));
//   //   };

//   //   const handleSubmit = async (e) => {
//   //     e.preventDefault();
//   //     try {
//   //       await validationSchema.validate(formData, { abortEarly: false });
//   //       console.log("Form Submitted:", formData);
//   //       setErrors({});
//   //     } catch (validationErrors) {
//   //       const formattedErrors = {};
//   //       validationErrors.inner.forEach((error) => {
//   //         formattedErrors[error.path] = error.message;
//   //       });
//   //       setErrors(formattedErrors);
//   //     }
//   //   };

//   return (
//     <>
//       <Grid container>
//         <Grid
//           item
//           xs={12}
//           md={6}
//           sx={{
//             marginTop: "200px",
//             padding: "50px",
//             // width: {xs:"100vw",sm:"50vw"}
//           }}
//         >
//           <Typography variant="h3" gutterBottom>
//             OUJ
//             <img src={A} alt="A" />T
//           </Typography>

//           <Box sx={{ display: "flex", gap: "5px" }}>
//             <Typography
//               variant="h5"
//               gutterBottom
//               sx={{
//                 fontWeight: "bold",
//               }}
//             >
//               Welcome to
//             </Typography>
//             <Typography
//               variant="h5"
//               gutterBottom
//               sx={{
//                 fontWeight: "bold",
//                 color: "#FC5722",
//               }}
//             >
//               Oujat.com
//             </Typography>
//           </Box>

//           <Typography
//             variant="subtitle2"
//             gutterBottom
//             sx={{ color: "#6C7278", marginBottom: "30px" }}
//           >
//             Enter the required information to log into your account
//           </Typography>

//           <form onSubmit={handleSubmit(onSubmit)}>
//             <FormLabel sx={{ color: "#000000", fontWeight: "bold" }}>
//               Email/User ID
//             </FormLabel>

//             <TextField
//               fullWidth
//               {...register("Email", {
//                 required: { value: true, message: "Email is required" },
//                 pattern: {
//                   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                   message: "Invalid email format",
//                 },
//               })}
//               // type="email"
//               variant="outlined"
//               //   value={formData.Email}
//               //   onChange={handleChange}
//               //   error={Boolean(errors.Email)}
//               //   helperText={errors.Email}
//               placeholder="Enter Email Address/User ID"
//               sx={{
//                 marginTop: "10px",
//                 // marginBottom: "30px",
//               }}
//             />
//             {errors.Email && (
//               <Typography sx={{ color: "red", fontStyle: "italic" }}>
//                 {errors.Email.message}
//               </Typography>
//             )}

//             <FormLabel sx={{ color: "#000000", fontWeight: "bold" }}>
//               Password
//             </FormLabel>
//             <TextField
//               {...register("Password", {
//                 required: { value: true, message: "Password is required" },
//                 minLength: {
//                   value: 8,
//                   message: "Password should contain atleast 8 characters",
//                 },
//                 maxLength: {
//                   value: 12,
//                   message: "Password should contain maximum 12 characters",
//                 },
//               })}
//               fullWidth
//               variant="outlined"
//               type={showPassword ? "text" : "password"}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={handleClickShowPassword} edge="end">
//                       {showPassword ? (
//                         <VisibilityOffIcon />
//                       ) : (
//                         <VisibilityIcon />
//                       )}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//               placeholder="Enter Password"
//               sx={{
//                 marginTop: "10px",
//               }}
//             />

//             {errors.Password && (
//               <Typography sx={{ color: "red", fontStyle: "italic" }}>
//                 {errors.Password.message}
//               </Typography>
//             )}

//             {/* Phone number field practice */}

//             <FormLabel sx={{ color: "#000000", fontWeight: "bold" }}>
//               Country Code
//             </FormLabel>

//             <Select
//               fullWidth
//               variant="outlined"
//               value={selectedCountry}
//               onChange={handleCountryChange}
//               placeholder="Select country"
//               sx={{
//                 marginTop: "10px",
//                 marginBottom: "20px",
//               }}
//             >
//               {countries.map((country) => (
//                 <MenuItem key={country.iso} value={country.dialCode}>
//                   {country.flag} {country.dialCode}
//                 </MenuItem>
//               ))}
//             </Select>

//             <PhoneInput
//              value={phone}
//               onChange={(phone) => setPhone(phone)}
//               placeholder="Select "
//             />

//             {/* Document attach icon practice */}

//             <FormLabel sx={{ color: "#000000", fontWeight: "bold" }}>
//               Attach Documents
//             </FormLabel>
//             <TextField
//               fullWidth
//               variant="outlined"
//               value={selectedFile || ""}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton edge="end" onClick={handleIconClick}>
//                       <AttachFileIcon />
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//                 readOnly: true,
//               }}
//               placeholder="Attach Documents"
//               sx={{
//                 marginTop: "10px",
//               }}
//             />
//             <input
//               type="file"
//               style={{ display: "none" }}
//               ref={fileInputRef}
//               onChange={handleFileSelect}
//             />

//             {isSubmitting && (
//               <Typography
//                 sx={{ color: "red", display: "flex", justifyContent: "center" }}
//               >
//                 Loading...
//               </Typography>
//             )}

//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "flex-end",
//                 marginTop: "10px",
//               }}
//             >
//               <Button
//                 variant="text"
//                 sx={{
//                   color: "#E56060",
//                   fontWeight: "bold",
//                 }}
//                 onClick={() => navigate("/forgotpassword1")}
//               >
//                 Forgot Password?
//               </Button>
//             </Box>
//             <Button
//               disabled={isSubmitting}
//               fullWidth
//               type="submit"
//               variant="contained"
//               sx={{
//                 background: "#FC5722",
//                 marginTop: "20px",
//                 fontWeight: "bold",
//                 // "&:hover": {
//                 //   background: "#000000",
//                 //   transform: "scale(1.05)",
//                 //   transition: "all 0.5s ease",
//                 // },
//               }}
//             >
//               Login
//             </Button>
//             <Divider
//               variant="fullWidth"
//               orientation="horizontal"
//               sx={{
//                 marginTop: "30px",
//                 marginBottom: "30px",
//               }}
//             >
//               <Typography>Or</Typography>
//             </Divider>
//             <Typography
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               Don't have an account?
//               <Button
//                 variant="text"
//                 sx={{ color: "#E56060", fontWeight: "bold" }}
//                 onClick={() => navigate("/signup1")}
//               >
//                 Signup
//               </Button>
//             </Typography>
//           </form>
//         </Grid>

//         <Grid
//           item
//           xs={12}
//           md={6}
//           sx={{
//             paddingLeft: { xs: "50px", md: "0px" },
//           }}
//         >
//           <img
//             src={Login}
//             alt="Oujat"
//             // style={{ height: "100vh", width: { xs: "100vw", sm: "50vw" } }}
//           />
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default Index;

// // import React, { useState, useRef } from 'react';
// // import {
// //   Button,
// //   Typography,
// //   Box,
// //   IconButton
// // } from '@mui/material';
// // import AttachFileIcon from '@mui/icons-material/AttachFile';
// // import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// // import DescriptionIcon from '@mui/icons-material/Description';

// // const DocumentUploader = () => {
// //   const [selectedFile, setSelectedFile] = useState(null);
// //   const fileInputRef = useRef(null);

// //   const handleFileSelect = (event) => {
// //     const file = event.target.files[0];
// //     if (file) {
// //       setSelectedFile(file);
// //       // Additional logic for file handling can be added here
// //     }
// //   };

// //   const triggerFileInput = () => {
// //     fileInputRef.current.click();
// //   };

// //   // Helper function to get file icon based on file type
// //   const getFileIcon = (fileName) => {
// //     const extension = fileName.split('.').pop().toLowerCase();
// //     switch (extension) {
// //       case 'pdf':
// //         return <PictureAsPdfIcon color="error" />;
// //       case 'doc':
// //       case 'docx':
// //         return <DescriptionIcon color="primary" />;
// //       default:
// //         return <AttachFileIcon color="action" />;
// //     }
// //   };

// //   return (
// //     <Box sx={{
// //       display: 'flex',
// //       alignItems: 'center',
// //       gap: 2,
// //       width: '100%'
// //     }}>
// //       {/* Hidden file input */}
// //       <input
// //         type="file"
// //         ref={fileInputRef}
// //         style={{ display: 'none' }}
// //         onChange={handleFileSelect}
// //       />

// //       {/* Attachment Icon Button */}
// //       <IconButton
// //         color="primary"
// //         onClick={triggerFileInput}
// //         aria-label="attach document"
// //       >
// //         <AttachFileIcon />
// //       </IconButton>

// //       {/* File Display Area */}
// //       {selectedFile ? (
// //         <Box sx={{
// //           display: 'flex',
// //           alignItems: 'center',
// //           gap: 1
// //         }}>
// //           {getFileIcon(selectedFile.name)}
// //           <Typography variant="body2">
// //             {selectedFile.name}
// //             ({Math.round(selectedFile.size / 1024)} KB)
// //           </Typography>
// //         </Box>
// //       ) : (
// //         <Typography variant="body2" color="text.secondary">
// //           No file selected
// //         </Typography>
// //       )}
// //     </Box>
// //   );
// // };

// // export default DocumentUploader;

// API integration example

// import { Box, Typography, TextField, MenuItem, Select,Button } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const AxiosAsyncExample = () => {
//   const [post, setPost] = useState([]);
//   // const [myData, setMyData] = useState(null);

//   // const handleChange = (e) => {
//   //   const myData = e.target.value;
//   //   setMyData(myData);
//   // };

//   // const handleSubmit = () => {
//   //   console.log(myData);
//   // };

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("https://restcountries.com/v3.1/all");
//       //  console.log(response.data);

//       setPost(response.data);
//     } catch (error) {
//       console.error("Invalid Request");
//     }
//   };

//   //   const fetchData = () => {

//   //   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       <Select fullWidth >
//         {post.map((post) => {
//           const { name, area } = post;
//           return <MenuItem value={name.common}>{name.common}</MenuItem>;
//         })}
//       </Select>

//       <Button
//         fullWidth
//         type="submit"
//         variant="contained"
//         sx={{
//           background: "#FC5722",
//           marginTop: "20px",
//           fontWeight: "bold",
//         }}
//         // onClick={handleSubmit}
//       >
//         Login
//       </Button>
//     </>
//   );
// };

// export default AxiosAsyncExample;



// Creating a Date field 


// import React, { useState } from 'react';
// import { 
//   TextField, 
//   InputAdornment, 
//   IconButton 
// } from '@mui/material';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// const DatePickerField = () => {
//   const [date, setDate] = useState(null);
//   const [open, setOpen] = useState(false);

//   const handleDateChange = (newDate) => {
//     setDate(newDate);
//   };

//   const handleCalendarClick = () => {
//     setOpen(true);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <DatePicker
//         value={date}
//         onChange={handleDateChange}
//         open={open}
//         onClose={() => setOpen(false)}
//         slotProps={{
//           textField: {
//             fullWidth: true,
//             variant: "outlined",
//             label: "Select Date",
//             InputProps: {
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton onClick={handleCalendarClick} edge="end">
//                     <CalendarTodayIcon />
//                   </IconButton>
//                 </InputAdornment>
//               )
//             }
//           }
//         }}
//       />
//     </LocalizationProvider>
//   );
// };

// export default DatePickerField;
