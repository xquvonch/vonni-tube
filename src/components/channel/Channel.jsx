import React, { useEffect, useState } from "react";
import { data, Link, useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { Box } from "@mui/material";
import ChannelCard from "../channel-card/channel-card";
const Channel = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const dataChannelDetail = await ApiService.fetching(
          `channels?part=snippet&id=${id}`,
        );
        setChannelDetail(dataChannelDetail.items[0]);
        console.log(dataChannelDetail);

        const dataVideo = await ApiService.fetching(
          `search?channelId=${id}&part=snippet`,
        );
        setVideos(dataVideo);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [id]);

  return (
    <Box minHeight={"95vh"} mt={"10vh"}>
      <Box>
        <ChannelCard video={channelDetail} />
      </Box>
    </Box>
  );
};

export default Channel;
