import { Typography, Box } from "@mui/material";
import React from "react";

import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import DashboardMain from "../../components/mainContainer";

const index = () => {
  return (
    <>
      <Box display="flex">
        <Sidebar />
        <Box flexGrow={1}>
          <Header />
          <DashboardMain/>
        </Box>
        
      </Box>
    </>
  );
};

export default index;
