import React from "react";
import { useParams } from "react-router-dom";

const WebToonPage = () => {
  const params = useParams();

  return (
    <React.Fragment>
      <div>웹툰</div>
    </React.Fragment>
  );
};

export default WebToonPage;
