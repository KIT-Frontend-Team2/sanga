import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const WebPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const onClickWeb = () => {
    navigate("/web/1");
  };

  return (
    <React.Fragment>
      <button onClick={onClickWeb}>웹툰페이지로 이동</button>
      <Link to="/web/1">베스트도전으로 1번 이동하기 </Link>
      <Link to="/web/2">베스트도전으로 2번 이동하기</Link>
    </React.Fragment>
  );
};
export default WebPage;
