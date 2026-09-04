import { Category } from "../index";
import { colors } from "../../const/colors";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Videos from "../videos/Videos";
import { ApiService } from "../../service/api.service";

const Main = () => {
  const [sellectedCategory, setSellectedCategory] = useState("Movie");
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `search?part=snippet&q=${sellectedCategory}`,
        );
        setvideos(data.data.items);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [sellectedCategory]);

  const handlesellectedCategory = (category) => setSellectedCategory(category);
  return (
    <Stack>
      <Category
        handlesellectedCategory={handlesellectedCategory}
        sellectedCategory={sellectedCategory}
      />
      <Box p={2} style={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
            {sellectedCategory}{" "}
            <span style={{ color: colors.secondary }}>vidios</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
