import { IconButton, Paper } from "@mui/material";
import { colors } from "../../const/colors";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useThemeStore } from "../../store/themeStore";
const SearchBar = () => {
  const [value, setvalue] = useState("");
  const theme = useThemeStore((s) => s.theme);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`);
      setvalue("");
      console.log("click");
    }
  };

  return (
    <Paper
    
      onSubmit={submitHandler}
      component={"form"}
      sx={{
        border: `1px solid ${theme === "dark" ? colors.secondary : colors.secondaryDark}`,
        pl: 2,
        display:'flex',
        alignItems:'center',

        width: { xs: "100px", sm: "400px" },
        maxWidth: { xs: "220px", sm: "400px" },
        boxShadow: "none",
        mr: { xs: 1, sm: 5 },
        background: theme === "dark" ? colors.primaryDark : colors.primary,
      }}
    >
      <input
        className={`
         ${theme === "dark" ? "darkInputBackG" : "lightInputBackG"} 
        search-bar`}
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        style={{
          color: theme === "dark" ? colors.secondary : colors.secondaryDark,
          flex: 1,
          minWidth: 0, // flex ichida input qisqara olishi uchun
          width: "100%",
          border: "none",
          outline: "none",
          fontSize: "16px",
        }}
      />

      <IconButton type="submit">
        <SearchIcon
          sx={{
            color: theme === "dark" ? colors.primary : colors.secondaryDark,
            fontSize: "28px",
            cursor: "pointer",
            "&:hover": {
              color: colors.secondary,
            },
          }}
        />
        {/* <i className="fa-solid fa-magnifying-glass"></i> */}
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
