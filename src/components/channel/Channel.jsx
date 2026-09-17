import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { Box, Container } from "@mui/material";
import ChannelCard from "../channel-card/channel-card";
import Videos from "../videos/Videos";

const Channel = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const dataChannelDetail = await ApiService.fetching(
          `channels?part=snippet,brandingSettings,statistics&id=${id}`
        );
        setChannelDetail(dataChannelDetail?.items?.[0] || null);

        const dataVideo = await ApiService.fetching(
          `search?channelId=${id}&part=snippet&type=video&order=date&maxResults=20`
        );
        setVideos(dataVideo?.items || []);
      } catch (err) {
        console.error("Kanal ma'lumotlarini olishda xatolik:", err);
      }
    };

    if (id) getData();
  }, [id]);

  const bannerUrl =
    channelDetail?.brandingSettings?.image?.bannerExternalUrl ||
    channelDetail?.brandingSettings?.image?.bannerImageUrl;

  return (
    <Box minHeight="95vh">
      <Box>
        <Box
          width="100%"
          height="300px"
          zIndex={10}
          sx={{
            backgroundImage: bannerUrl ? `url(${bannerUrl})` : "none",
            backgroundColor: "#272727",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <ChannelCard video={channelDetail} marginTop="-110px" />
      </Box>

      <Container maxWidth="xl" sx={{ mt: 5 }}>
        <Videos videos={videos} marginTop={"-100px"} />
      </Container>
    </Box>
  );
};

export default Channel;