import { Category } from "../index";
import { colors } from "../../const/colors";
import { Box, Container, Stack, Typography } from "@mui/material";
import {  useState } from "react";
import Videos from "../videos/Videos";
import { useThemeStore } from "../../store/themeStore";
import { useInfiniteVideos } from "../../hooks/useInfiniteVideos";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("News");
  // const [videos, setVideos] = useState([]);
   const theme = useThemeStore((s) => s.theme);
const { videos, loading, hasMore, loadMore } =
    useInfiniteVideos(selectedCategory);

  // const handleSelectedCategory = (category) => setSelectedCategory(category);
  // useEffect(() => {
  //   const getVideos = async () => {
  //     try {
  //       const data = await ApiService.fetching(
  //         `search?part=snippet&q=${encodeURIComponent(selectedCategory)}`,
  //       );
  //       setVideos(data.items || []);
  //     } catch (err) {
  //       console.log(err);
  //       setVideos([]);
  //     }
  //   };
  //   getVideos();
  // }, [selectedCategory]);

  const handleSelectedCategory = (category) => setSelectedCategory(category);
  return (
    <Stack >
      <Category
        handlesellectedCategory={handleSelectedCategory}
        sellectedCategory={selectedCategory}
      />
      <Box p={2} style={{ height: "90vh" }} >
        <Container maxWidth={"90%"}>
          <Typography variant={"h4"} fontWeight={"bold"} mb={2} sx={{color:theme==='dark'?colors.primary:colors.primaryDark}}>
            {selectedCategory}{" "}
            <span style={{ color:theme==='dark'? colors.secondary :colors.secondaryDark}}>Vidios</span>
          </Typography>
          <Videos videos={videos} loading={loading} hasMore={hasMore} loadMore={loadMore} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
