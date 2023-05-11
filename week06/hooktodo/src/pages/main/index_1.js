import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
// useSearchParams 불러올 때 함수로 불러오기
const MainPage = () => {
  // react-router-dom 에서 쿼리 스트링 값을 가져올 수 있는 hook 으로는 useLocation, useSearchParams 두개가 있음
  // searchParams 는 URLSearchParams 객체이면서 쿼리 스트링을 다루기 위한 여러 메서드를 제공
  // setSearchParams 는 인자에 객체, 문자열을 넣어주면 현재 url 의 쿼리스트링을 변경하는 기능을 제공
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("todoId"));

  // Link는 특정 주소로 이동해주는 태그 vs Navigate는 특정 행동을 했을 때 해당 주소로 이동해줄 수 있는 태그
  const navigate = useNavigate();
  const onClickTodo = () => {
    // windows.location.href를 왜 사용하는가?
    // javascript에서 사용자가 www.naver.com으로 들어왔을때
    // 새로운 www.naver.com/home이나 www.NewNaver.com로 보내고 싶을때 href를 사용
    // 이것보다 navigate 사용 권장함

    // window.location.href = "/todo/3";

    // navigate(`내가 원하는 주소`)
    // navigate(-1) 이전 페이지로 가기
    // 방법1. 주소 변경하기
    navigate("/todo/3");

    // 방법2. TodoId 변경하기(페이지내에서 쿼리스트링이 변경됨)
    setSearchParams({
      todoId: 3,
      page: 5,
    });
  };

  return (
    <React.Fragment>
      <div>안녕하세요</div>
      <button onClick={onClickTodo}>TodoPage로 이동</button>
      <a href="/todo/3">TodoPage로 이동하기 1번</a>
      <Link to="/todo/5">TodoPage로 이동하기 2번</Link>
      {/* a태그와 link태그 차이점 
      a태그는 주소를 바꾸기때문에 뭉탱이를 달라고 요청함(새로 데이터 받아옴) 근데 link태그는 "react-router-dom"에서 요청하기 때문에 캐싱되어 있는 거에서 찾아옴 즉!!!!!!!!!!!! 리액트에서는 link태그로 이동시켜야함 */}
    </React.Fragment>
  );
};
export default MainPage;
