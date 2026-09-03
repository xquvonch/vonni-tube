import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Main, Channel, Navbar, Search, VidioDetail } from "../index";

const App = () => {
  return (
    <Box>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/search" element={<Search />} />
        <Route path="/vidio" element={<VidioDetail />} />
      </Routes>
    </Box>
  );
};

export default App;
