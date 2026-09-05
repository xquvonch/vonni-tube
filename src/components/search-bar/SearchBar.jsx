import { IconButton, Paper } from "@mui/material";
import { colors } from "../../const/colors";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [value, setvalue] = useState("");
const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault();
   if(value){
    navigate(`/search/${value}`)
    setvalue('')
   }
  };

  return (
    <Paper
      onSubmit={submitHandler}
      component={"form"}
      sx={{
        border: `1px solid ${colors.secondary}`,
        pl: 2,
        boxShadow: "none",
        mr: 5,
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={value}
        onChange={e=> setvalue(e.target.value)}
      />

      <IconButton type='submit'>
        <SearchIcon />
        {/* <i className="fa-solid fa-magnifying-glass"></i> */}
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
