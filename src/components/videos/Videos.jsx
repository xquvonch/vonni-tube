import { Grid } from "@mui/material";
import VideoCard from "../video-card/VideoCard";
import ChannelCard from "../channel-card/channel-card";
import Loader from "../loader/Loader";

const Videos = ({ videos }) => {
  if (!videos || videos.length === 0) {
    return <Loader />;
  }

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {videos?.map((item) => (
        <Grid
          key={item.id.videoId || item.id.channelId}
          item
          xs={4}
          sm={4}
          md={3}
        >
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard video={item} />}
        </Grid>
      ))}
    </Grid>
  );
};

export default Videos;
