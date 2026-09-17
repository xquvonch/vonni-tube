import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ChannelCard = ({ video,marginTop }) => {
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
        marginTop:marginTop
      }}
    >
      <Link to={`/channel/${video?.snippet?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <CardMedia
            image={video?.snippet?.thumbnails?.high?.url}
            alt={video?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e33e3e",
            }}
          />

          <Typography variant="h6">
            {video?.snippet?.title}{" "}
            <CheckCircle
              sx={{ fontsize: "14px", color: "gray", ml: "5px" }}
            />{" "}
          </Typography>

          {video?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontsize: "15px", fontWeight: "500", color: "gray" }}
            >
              {parseInt(video?.statistics?.subscriberCount).toLocaleString(
                "en-US",
              )}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
