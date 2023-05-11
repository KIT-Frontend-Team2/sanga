import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
// function MainPage (){

// }

// 화살표 함수를 자주 사용함
const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("todoId"));
  const navigate = useNavigate();

  const onClickNavigateTodo = () => {
    // window.location.href = "/todo/3";
    // navigate(-1);  // 뒤로가기
    // navigate("/todo/3");
    setSearchParams({
      todoId: 3,
      page: 5,
    }); //주소를 바꾸고 싶은게 아니고 id를 바꾸고 싶으면 이렇게 작성하기!
  };
  return (
    // <> 이거나 <React.fragment> 둘 중 사용 가능
    <React.Fragment>
      {/** 태그명이 없는 태그를 Fragment 라고 부른다. 만약 해당 Fragment에 속성을 줄 경우 React.fragment.id 이런식으로 React.fragment를 붙여준다. */}
      <div>main</div>
      <div>:)</div>
      <button onClick={onClickNavigateTodo}>TodoPage로 이동</button>
      {/* a태그와 Link태그 차이점 알아보기 */}
      {/* 랜더링에서 데이터를 받아와서 다시 요청안함 */}
      <a href="/todo/3">TODOPAGE</a>
      <Link to="/todo/5">TODOPAGE</Link>
    </React.Fragment>
  );
};

export default MainPage;
