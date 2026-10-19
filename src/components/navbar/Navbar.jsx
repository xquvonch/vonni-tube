import { Box, Stack, Typography } from "@mui/material";
import logo from "../../const/logo.svg";
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
        height:'86px',
        position: "fixed",
        width: "100%",
        paddingX: "32px",
        top: "0",
        zIndex: 999,
        background: theme === "dark" ? colors.primaryDark : colors.primary,
      }}
    >
      <Link
        to={"/"}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img src={logo} alt="logo" height={50} />
          <Typography
            sx={{
              fontSize: "30px",
              color:theme==='dark'?'#fff':'#000',
              fontWeight:'bold'
            }}
          >
            Vonni Tube
          </Typography>
        </Box>
      </Link>
      <SearchBar />
      <ThemeButton />
    </Stack>
  );
};

export default Navbar;
