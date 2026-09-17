import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import Loader from "../loader/Loader";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import parse from "html-react-parser";
import {
  CheckCircle,
  FavoriteOutlined,
  MarkChatRead,
  Tag,
  Visibility,
} from "@mui/icons-material";
import Videos from "../videos/Videos";

const VidioDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let isActive = true;
    setVideoDetail(null);
    setRelatedVideos([]);

    const getVideo = async () => {
      try {
        const data = await ApiService.fetching(
          `videos?part=snippet,statistics&id=${encodeURIComponent(id)}`,
        );
        const videoItem = data?.items?.[0];

        if (isActive) {
          setVideoDetail(videoItem || {});

          if (videoItem?.snippet?.title) {
            const relatedData = await ApiService.fetching(
              `search?part=snippet&q=${encodeURIComponent(
                videoItem.snippet.title
              )}&type=video&maxResults=10`,
            );
            if (isActive) {
              setRelatedVideos(relatedData?.items || []);
            }
          }
        }
      } catch (err) {
        console.error("Video ma'lumotlarini olishda xatolik:", err);
        if (isActive) {
          setVideoDetail({});
          setRelatedVideos([]);
        }
      }
    };

    if (id) getVideo();

    return () => {
      isActive = false;
    };
  }, [id]);

  if (!videoDetail) return <Loader />;

  if (!videoDetail?.snippet) {
    return (
      <Box minHeight="90vh" p={4} textAlign="center">
        <Typography variant="h6" color="error">
          Video topilmadi yoki API xatoligi yuz berdi!
        </Typography>
      </Box>
    );
  }

  const { snippet, statistics } = videoDetail;

  return (
    <Box minHeight="90vh" p={{ xs: 2, md: 4 }}>
      <Stack direction={{ xs: "column", md: "row" }} gap={3}>
        {/* Chap tomon: Video va Ma'lumotlar */}
        <Box flex={1} width={{ xs: "100%", md: "72%" }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#000",
            }}
          >
            <ReactPlayer
              key={id} // ⚠️ ID berilishi pleyerni yangi videoga o'tganda qayta yuklaydi
              src={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ position: "absolute", inset: 0, display: "block" }}
            />
          </Box>

          {/* Teglar */}
          {snippet?.tags?.length > 0 && (
            <Stack
              direction="row"
              flexWrap="wrap"
              gap={1}
              sx={{ marginTop: "12px" }}
            >
              {snippet.tags.map((item, key) => (
                <Chip
                  label={item}
                  key={key}
                  size="small"
                  variant="outlined"
                  icon={<Tag style={{ fontSize: 16 }} />}
                  sx={{ cursor: "pointer" }}
                />
              ))}
            </Stack>
          )}

          {/* Sarlavha */}
          <Typography variant="h5" fontWeight="bold" mt={2} mb={1}>
            {snippet.title}
          </Typography>

          {/* Ko'rishlar va Statistika */}
          <Stack
            direction="row"
            gap="20px"
            alignItems="center"
            py={1}
            sx={{ opacity: 0.8 }}
          >
            <Stack direction="row" alignItems="center" gap="4px">
              <Visibility fontSize="small" />
              <Typography variant="body2">
                {parseInt(statistics?.viewCount || 0).toLocaleString()}{" "}
                ko'rishlar
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" gap="4px">
              <FavoriteOutlined fontSize="small" />
              <Typography variant="body2">
                {parseInt(statistics?.likeCount || 0).toLocaleString()} layklar
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" gap="4px">
              <MarkChatRead fontSize="small" />
              <Typography variant="body2">
                {parseInt(statistics?.commentCount || 0).toLocaleString()}{" "}
                izohlar
              </Typography>
            </Stack>
          </Stack>

          {/* Kanal Ma'lumotlari */}
          <Stack direction="row" alignItems="center" py={2}>
            <Link
              to={`/channel/${snippet.channelId}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Stack direction="row" alignItems="center" gap={1.5}>
                <Avatar
                  alt={snippet.channelTitle}
                  src={snippet.thumbnails?.default?.url}
                />
                <Typography variant="subtitle1" fontWeight="bold">
                  {snippet.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "14px", color: "gray", ml: "6px" }}
                  />
                </Typography>
              </Stack>
            </Link>
          </Stack>

          {/* Tavsif Qutisi */}
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.05)",
              borderRadius: "12px",
              p: 2,
              mt: 1,
            }}
          >
            <Typography variant="body2">
              {parse(snippet.description || "")}
            </Typography>
          </Box>
        </Box>

        {/* O'ng tomon: O'xshash Videolar */}
        <Box
          width={{ xs: "100%", md: "28%" }}
          sx={{
            maxHeight: { md: "calc(100vh - 100px)" },
            overflowY: "auto",
          }}
        >
          <Videos videos={relatedVideos} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VidioDetail;