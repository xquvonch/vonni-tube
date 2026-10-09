import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

import { colors } from "../../const/colors";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useThemeStore } from "../../store/themeStore";

const VideoCard = ({ video }) => {
    const theme = useThemeStore((s) => s.theme);


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
          background:theme==='dark'?colors.primaryDark:colors.primary,
          height: "200px",
          position: "relative",
        }}
      >
        <Link
          to={`/video/${videoId}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography
            my={"5px"}
            sx={{
              //  opacity: theme==='dark' ? "1" : ".4", 
               color: theme==='dark'?colors.primary:colors.primaryDark }}
          >
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography sx={{ 
            // opacity: theme==='dark' ? "1" : ".4",
             color: theme==='dark'?colors.primary:colors.primaryDark  }} variant="subtitle1" fontWeight={"bold"}>
            {video?.snippet?.title?.slice(0, 50)}
          </Typography>
          <Typography sx={{ 
            // opacity: theme==='dark' ? "1" : ".4", 
            color: theme==='dark'?colors.primary:colors.primaryDark }} variant="subtitle2" >
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
            <Typography sx={{ 
              // opacity:theme==='dark' ? "1" : ".4",
               color: theme==='dark'?colors.primary:colors.primaryDark }} variant={"subtitle2"}>
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
