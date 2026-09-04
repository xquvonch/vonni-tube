import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "../video-card/VideoCard";
import ChannelCard from "../channel-card/channel-card";

const Videos = ({ videos }) => {

  if (!Array.isArray(videos)) {
    return null;
  }

  return (
    <Stack
      display={"flex"}
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      alignItems={"center"}
      justifyContent={"start"}
      gap={2}
    >
      {videos?.map((item) => (
        <Box key={item.id.videoId}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
