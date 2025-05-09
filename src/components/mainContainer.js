import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  IconButton,
  MenuItem,
  Select,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React from "react";
import Revenue_Chart_Section from "../assets/Revenue Chart Section.png";
import Customer_Chart_Section from "../assets/Customer Chart Section.png";


const DashboardMain = () => {
  return (
    <Box p={3} bgcolor="#f5f6fa">
      <Grid container spacing={2} mb={2}>
        {[
          { title: "Total Active Orders", value: 242 },
          { title: "Pending Quotations", value: 242 },
          { title: "Total revenues", value: "$45000.00" },
          { title: "Wallet balance", value: "$2200.00" },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="subtitle2">{item.title}</Typography>
                <Typography variant="h5" fontWeight="bold">
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} mb={2}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Orders Progress
              </Typography>
              {[
                { status: "Delivered", color: "success" },
                { status: "In Progress", color: "warning" },
                { status: "Failed", color: "error" },
                { status: "In Progress", color: "warning" },
              ].map((order, i) => (
                <Box
                  key={i}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  mb={1}
                >
                  <Typography>Package Shipment - #01243</Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Button
                      variant="contained"
                      color={order.color}
                      size="small"
                      sx={{ minWidth: "115px" }}
                    >
                      {order.status}
                    </Button>
                    <IconButton size="small">
                      <VisibilityIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <Typography variant="h6" fontWeight="bold">
                  Order Request
                </Typography>
                <Button
                  variant="text"
                  size="small"
                  sx={{ textTransform: "none" }}
                >
                  View all
                </Button>
              </Box>
              {[1, 2, 3, 4].map((_, i) => (
                <Box
                  key={i}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={1}
                >
                  <Typography>Package Shipment - #01243</Typography>
                  <IconButton size="small">
                    <VisibilityIcon fontSize="small" />
                  </IconButton>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6} component="img" src={Revenue_Chart_Section} sx={{height:"350px"}} />
        <Grid item xs={12} md={6} component="img" src={Customer_Chart_Section} sx={{height:"350px"}}/>
      </Grid>

     
    </Box>
  );
};

export default DashboardMain;
