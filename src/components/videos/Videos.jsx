import { Grid, Typography } from "@mui/material";
import VideoCard from "../video-card/VideoCard";
import ChannelCard from "../channel-card/channel-card";

import Loader from "../loader/Loader";
import { useThemeStore } from "../../store/themeStore";
import { useEffect, useRef } from "react";
import { colors } from "../../const/colors";

const Videos = ({
  videos,
  suggested,
  loading = true,
  showChannels,
  loadMore,
  hasMore,
}) => {
  const theme = useThemeStore((s) => s.theme);
  const sentinel = useRef(null);
console.log({ n: videos?.length, hasMore, hasLoadMore: !!loadMore });
  useEffect(() => {
    const el = sentinel.current;
    if (!el || !loadMore) return;

    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && loadMore(),
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [loadMore, hasMore, videos?.length]);
  if (!videos || videos.length === 0) {
    if (loading || hasMore) {
      return (
        <>
          <Loader />
          <div ref={sentinel} style={{ height: 1 }} />
        </>
      );
    }
    return <Typography color="text.secondary">Videos topilmadi.</Typography>;
  }

  // if (!videos || videos.length === 0) {
  //   return (
  //     <Typography color="text.secondary">Related videos topilmadi.</Typography>
  //   );
  // }

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          background: theme === "dark" ? colors.primaryDark : colors.primary,
          // minHeight: "2000px",
        }}
      >
        {videos
          ?.filter(
            (item) => item.id.videoId || (showChannels && item.id.channelId),
          )
          .map((item) => (
            <Grid
              key={item.id.videoId || item.id.channelId}
              item
              xs={4}
              sm={4}
              md={suggested ? 12 : 3}
            >
              {item.id.videoId && <VideoCard video={item} />}
              {showChannels && item.id.channelId && (
                <ChannelCard video={item} />
              )}
            </Grid>
          ))}
      </Grid>
      {loading && loadMore && <Loader />}
      {hasMore && <div ref={sentinel} style={{ height: 1 }} />}
    </>
  );
};

export default Videos;
