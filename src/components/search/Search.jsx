import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { Box, Container, Typography } from "@mui/material";
import { colors } from "../../const/colors";
import Videos from "../videos/Videos";
import { useThemeStore } from "../../store/themeStore";

const Search = () => {
  const [videos, setvideos] = useState();
  const { id } = useParams();
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`);
        setvideos(data.items);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [id]);
  return (
    <Box p={2} sx={{ height: "90vh" }}>
      <Container maxWidth={"90%"}>
        <Typography variant={"h4"} fontWeight={"bold"} mb={2} sx={{color:theme==='dark'?colors.primary:colors.primaryDark}}>
          Search results for{" "}
          <span style={{ color: theme==='dark'?colors.secondary:colors.secondaryDark }}> {id}</span> videos
        </Typography>

        <Videos videos={videos} showChannels />
      </Container>
    </Box>
  );
};

export default Search;
