import {  Stack } from "@mui/material";
import logo from "../../const/logo_concept_1_minimalist.png";
import { colors } from "../../const/colors";
import { Link } from "react-router-dom";
import SearchBar from "../search-bar/SearchBar";
import { ThemeButton } from "../Theme/ThemeButton";
import { useThemeStore } from "../../store/themeStore";
const Navbar = () => {


     const theme = useThemeStore((s) => s.theme);

  return (
    <Stack
      direction={"row"}
      p={2}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        position: "fixed",
        width:'100%',
        top: "0",
        zIndex: 999,
        background:theme==='dark'?colors.primaryDark:colors.primary,
      }}
    >
      <Link to={"/"}>
        <img src={logo} alt="logo" height={50} />
      </Link>
      <SearchBar />
      <ThemeButton/>
    </Stack>
  );
};

export default Navbar;
