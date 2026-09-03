import { Category } from "../index";
import {colors} from '../../const/colors'
import {
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Main = () => {
  const [sellectedCategory, setSellectedCategory] = useState("New");

  const handlesellectedCategory=(category)=>setSellectedCategory(category)
  return (
    <Stack>
     <Category handlesellectedCategory={handlesellectedCategory} sellectedCategory={sellectedCategory}/>
      <Box p={2} style={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
            {sellectedCategory} <span style={{color:colors.secondary}}>vidios</span>
          </Typography>
          Vidios
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
