import { Category } from "../index";
import { colors } from "../../const/colors";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Videos from "../videos/Videos";
import { ApiService } from "../../service/api.service";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("News");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const data = await ApiService.fetching(
          `search?part=snippet&q=${encodeURIComponent(selectedCategory)}`,
        );
        setVideos(data.items || []);
      } catch (err) {
        console.log(err);
        setVideos([]);
      }
    };
    getVideos();
  }, [selectedCategory]);

  const handleSelectedCategory = (category) => setSelectedCategory(category);
  return (
    <Stack>
      <Category
        handlesellectedCategory={handleSelectedCategory}
        sellectedCategory={selectedCategory}
      />
      <Box p={2} style={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
            {selectedCategory}{" "}
            <span style={{ color: colors.secondary }}>vidios</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
