import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../../const/colors";
import { useThemeStore } from "../../store/themeStore";

const ChannelCard = ({ video, marginTop = 0 }) => {
     const theme = useThemeStore((s) => s.theme);


  const snippet = video?.snippet;
  const subs = video?.statistics?.subscriberCount;

  const channelId = video?.id?.channelId || video?.id;
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link
        to={`/channel/${channelId}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <CardMedia
            component="img"
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e33e3e",
              objectFit: "cover",
            }}
          />

          <Typography sx={{ opacity: theme==='dark' ? "1" : ".4", color: colors.textColorWhite }}>
            {snippet?.title}
            <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
          </Typography>

          {subs && (
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
            >
              {parseInt(subs, 10).toLocaleString("en-US")} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
