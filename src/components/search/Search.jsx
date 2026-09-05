import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { Box, Container, Typography } from "@mui/material";
import { colors } from "../../const/colors";
import Videos from "../videos/Videos";

const Search = () => {
  const [videos, setvideos] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`);
        setvideos(data.data.items);
      } catch (err) {
        console.log(err);
      }
    };
    console.log(getData());
  }, [id]);
  console.log(id);
  return (
    <Box p={2} sx={{ height: "90vh" }}>
      <Container maxWidth={"90%"}>
        <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
          Search results fro{" "}
          <span style={{ color: colors.secondary }}> {id}</span> videos
        </Typography>

        <Videos videos={videos} />
      </Container>
    </Box>
  );
};

export default Search;
