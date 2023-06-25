import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import "../App.css";
const BasicCard: React.FC = () => {
  return (
    <Box
      component="ul"
      sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, mt: 3 }}
    >
      <div className="imgVideoWrap">
        <Card component="li" sx={{ minWidth: 400, flexGrow: 1 }}>
          <CardCover>
            <img
              src="https://cdn.getyourguide.com/img/location/5c10eb1b54130.jpeg/68.jpg"
              srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </CardCover>
          <CardContent>
            <Typography
              level="h6"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 12, sm: 18 }}
            >
              Image
            </Typography>
          </CardContent>
        </Card>
        <Card component="li" sx={{ minWidth: 400, flexGrow: 1, mt: 10 }}>
          <CardCover>
            <video
              autoPlay
              loop
              muted
              poster="https://assets.codepen.io/6093409/river.jpg"
            >
              <source
                src="https://media.istockphoto.com/id/1443933937/video/drone-shot-of-a-st-stephens-college-delhi-university-in-new-delhi-india.mp4?s=mp4-640x640-is&k=20&c=m3u3qTCx5sy_xISgK1Cmt_TJwwNyCDO3pmGgGvE9fYk="
                type="video/mp4"
              />
            </video>
          </CardCover>
          <CardContent>
            <Typography
              level="h6"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 12, sm: 18 }}
            >
              Video
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Box>
  );
};
export default BasicCard;
