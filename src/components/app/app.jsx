import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Main, Channel, Navbar, Search, VidioDetail } from "../index";
import { colors } from "../../const/colors";

const App = () => {
  return (
    <Box sx={{ background: colors.primary, minHeight: "100vh"  }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/search/:id" element={<Search />} />
        <Route path="/video/:id" element={<VidioDetail />} />
      </Routes>
    </Box>
  );
};

export default App;
