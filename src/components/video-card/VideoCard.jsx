import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { colors } from "../../const/colors";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const videoId = video?.id?.videoId;

  if (!videoId) return null;

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "360px", md: "340px" },
        borderRadius: "10px",
      }}
    >
      <Link
        to={`/video/${videoId}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          component="img"
          sx={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
          }}
        />
      </Link>

      <CardContent
        sx={{
          background: colors.primary,
          height: "200px",
          position: "relative",
        }}
      >
        <Link
          to={`/video/${videoId}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography my={"5px"} sx={{ opacity: ".4" }}>
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {video?.snippet?.title?.slice(0, 50)}
          </Typography>
          <Typography variant="subtitle2" sx={{ opacity: ".4" }}>
            {video?.snippet?.description?.slice(0, 50)}
          </Typography>
        </Link>

        <Link to={`/channel/${video?.snippet?.channelId}`}>
          <Stack
            direction={"row"}
            position={"absolute"}
            bottom={"10px"}
            alignItems={"center"}
            gap={"5px"}
            left={"16px"}
          >
            <Avatar src={video?.snippet?.thumbnails?.high?.url} />
            <Typography variant={"subtitle2"} color={"gray"}>
              {video?.snippet?.channelTitle}
              <CheckCircle
                sx={{ fontSize: "12px", color: "grey", marginLeft: "5px" }}
              />
            </Typography>
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
