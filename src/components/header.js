import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Profile from "../assets/Profile.png";
const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#F1F2F3",
        color: "#fff",
        paddingX: 2,
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{ display: "flex", fontWeight: "bold", color: "#F55A00" }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
            Hello,
          </Typography>
          Mariya Warner
        </Typography>

        <Box display="flex" alignItems="center" gap={2}>
          <IconButton
            sx={{ backgroundColor: "#F9FAFC", border: "1px solid #e0e0e0" }}
          >
            <NotificationsNoneIcon sx={{ color: "#000" }} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              border: "1px solid #e0e0e0",
              borderRadius: "10px",
              padding: "5px",
              height: "40px",
              alignItems: "center",
            }}
          >
            <IconButton>
              <Avatar alt="User Avatar" src={Profile} />
            </IconButton>
            <ExpandMoreIcon sx={{ cursor: "pointer", color: "#94A9B4" }} />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
