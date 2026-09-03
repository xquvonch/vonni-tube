import { Box, Stack } from "@mui/material";
import logo from "../../const/logo_concept_1_minimalist.png";
import { colors } from "../../const/colors";
import { Link } from "react-router-dom";
import SearchBar from "../search-bar/SearchBar";
const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      p={2}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        position: "sticky",
        top: "0",
        zIndex: 999,
        bgcolor: colors.primary,
      }}
    >
      <Link to={"/"}>
        <img src={logo} alt="logo" height={50} />
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
};

export default Navbar;
