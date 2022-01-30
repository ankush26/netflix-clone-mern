import "./listItem.scss";
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownAltOutlined } from "@mui/icons-material";
import { useState } from "react";

const ListItem = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://images.thedirect.com/media/article_full/spider-man-no-way-home-promo.jpg"
        alt=""
      />
      {isHovered && (
        <div className="hoverTrailer">
          <video src='https://www.youtube.com/embed/rt-2cxAiPJk' autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>2hr 30 mins</span>
              <span className="limit">+16</span>
              <span>2022</span>
            </div>
            <div className="desc">This is loren te sofjsdjfiods jfilsjdfiojso fssidsjfio siofjsoijfiosj kljgdklgjd fiosj</div>
            <div className="genre">Action</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListItem;
