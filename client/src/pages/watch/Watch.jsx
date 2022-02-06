import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";

import React from "react";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video className="video" autoPlay controls src="" />
    </div>
  );
};

export default Watch;
