import { colors, Grid, Typography } from "@mui/material";
import VideoCard from "../video-card/VideoCard";
import ChannelCard from "../channel-card/channel-card";
import Loader from "../loader/Loader";
import { useThemeStore } from "../../store/themeStore";

const Videos = ({ videos, suggested, loading = true }) => {
  const theme= useThemeStore()
  if (loading && (!videos || videos.length === 0)) {
    return <Loader />;
  }

  if (!videos || videos.length === 0) {
    return (
      <Typography color="text.secondary">Related videos topilmadi.</Typography>
    );
  }

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{background:theme==='dark'?colors.primaryDark:colors.primary , minHeight:'2000px'}}

    >
      {videos?.map((item) => (
        <Grid
          key={item.id.videoId || item.id.channelId}
          item
          xs={4}
          sm={4}
          md={suggested ? 12 : 3}
        >
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard video={item} />}
        </Grid>
      ))}
    </Grid>
  );
};

export default Videos;
