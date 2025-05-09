import React, { useState } from "react";
import A from "../assets/A.png";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  Dashboard,
  Assignment,
  ShoppingCart,
  Payment,
  Shield,
  Gavel,
  BarChart,
  ChatBubbleOutline,
  Settings,
  Logout,
  Menu,
  ChevronLeft,
} from "@mui/icons-material";

const menuItems = [
  { label: "Dashboard", icon: <Dashboard />, active: true },
  { label: "QMS", icon: <Assignment /> },
  { label: "Orders", icon: <ShoppingCart /> },
  { label: "Payments", icon: <Payment /> },
  { label: "Oujat Protection", icon: <Shield /> },
  { label: "Dispute Center", icon: <Gavel /> },
  { label: "Analytics/Reports", icon: <BarChart /> },
  { label: "Chat", icon: <ChatBubbleOutline /> },
  { label: "Settings", icon: <Settings /> },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Box
      sx={{
        width: collapsed ? 80 : 240,
        height: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "width 0.5s",
        padding: 2,
      }}
    >
      <Box>
        <Box sx={{ display: "flex", justifyContent: collapsed ? "center" : "flex-end" }}>
          <IconButton onClick={toggleSidebar}>
            {collapsed ? <Menu /> : <ChevronLeft />}
          </IconButton>
        </Box>

        {!collapsed && (
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              ml: 1,
            }}
          >
            OUJ
            <img src={A} alt="A" />
            T
          </Typography>
        )}

        <List>
          {menuItems.map((item) => (
            <Tooltip key={item.label} title={collapsed ? item.label : ""} placement="right">
              <ListItemButton
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  bgcolor: item.active ? "#F55A00" : "transparent",
                  color: item.active ? "#fff" : "#6E7A8A",
                  "&:hover": {
                    bgcolor: item.active ? "#F55A00" : "#f0f0f0",
                  },
                  justifyContent: collapsed ? "center" : "flex-start",
                }}
              >
                <ListItemIcon
                  sx={{
                    color: item.active ? "#fff" : "#6E7A8A",
                    minWidth: collapsed ? "auto" : "40px",
                    mr: collapsed ? 0 : 1,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {!collapsed && <ListItemText primary={item.label} />}
              </ListItemButton>
            </Tooltip>
          ))}
        </List>
      </Box>

      <Box sx={{marginTop:collapsed? "200px" : "80px"}}>
        <Divider />
        <Tooltip title={collapsed ? "Log Out" : ""} placement="right">
          <ListItemButton
            sx={{
              color: "#D32F2F",
              mt: 2,
              justifyContent: collapsed ? "center" : "flex-start",
            }}
          >
            <ListItemIcon
              sx={{
                color: "#D32F2F",
                minWidth: collapsed ? "auto" : "40px",
                mr: collapsed ? 0 : 1,
              }}
            >
              <Logout />
            </ListItemIcon>
            {!collapsed && <ListItemText primary="Log Out" />}
          </ListItemButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Sidebar;