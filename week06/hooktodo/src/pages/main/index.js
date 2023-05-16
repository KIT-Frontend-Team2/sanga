import styled from "styled-components";
import { flexCenter } from "../../styles/common";
import SignUpForm from "./components/SignUp/SignUp";
import SignInForm from "./components/SignIn/SignIn";
import { PALETTE } from "../../styles/theme";
import { useState } from "react";

const MainPage = () => {
  // let isFormLogin = true;
  const [isFormLogin, setIsFormLogin] = useState(true);

  // 함수 이름 앞에 on또는 handle을 붙이면 이벤트 함수인걸 의미
  const onClickFormHeader = (e) => {
    const { innerText } = e.target;
    console.log(innerText);
    if (innerText === "LOGIN") return setIsFormLogin(true);
    setIsFormLogin(false);
  };
  console.log(isFormLogin);

  // const handleClickFormHeader = () => {};

  // Container는 스타일 컴포넌트고 SignInForm는 일반컴포넌트이다. -> 구분 X -> 객체 생성
  // 즉, 객체를 생성해줌으로써 <Container> -> <S.Container>으로 변경해서 구분 가능
  return (
    <S.Container>
      {/* Header 컴포넌트에 isFormLogin변수가 전달됨 속성으로! */}
      <S.Header>
        <S.LoginHeader isFormLogin={isFormLogin} onClick={onClickFormHeader}>
          LOGIN
        </S.LoginHeader>
        <S.SignUpHeader isFormLogin={isFormLogin} onClick={onClickFormHeader}>
          SIGN
        </S.SignUpHeader>
      </S.Header>
      {/* isFormLogin이 true면 SignInForm을 보여주고 false면 SignUpForm을 보여주기 */}
      {isFormLogin ? <SignInForm /> : <SignUpForm />}
    </S.Container>
  );
};
export default MainPage;

// styled.div는 꾸며진 div을 만든거임
const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  /* 공용 css에서 받아옴 */
  ${flexCenter}
  flex-direction: column;
`;

const Header = styled.div`
  width: 360px;
  height: 48px;
  display: flex;
  /* background-color: ${PALETTE.primary[300]}; */
  // 콜백함수로 갖다사용할 수 있음, 구조분해할당함
  background-color: ${({ theme }) => theme.PALETTE.primary[300]};

  div {
    ${flexCenter}
    width: 50%;
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  }
`;

// LOGIN과 SING은 같은 컴포넌트기 때문에 나눠줘야함
const LoginHeader = styled.div`
  background-color: ${({ theme, isFormLogin }) =>
    isFormLogin ? "#e0e0e0" : "#f5f5f5"};
`;
// styled-component는 변수를 속성으로 전달받아
// 해당 변수 값에 따라서 스타일을 조정할 수 있다 = style 변경을 위해 DOM API에 접근할 필요가 없다

const SignUpHeader = styled.div`
  background-color: ${({ theme, isFormLogin }) =>
    isFormLogin ? "#f5f5f5" : "#e0e0e0"};
`;

// 일반 컴포넌트랑 스타일 컴포넌트를 구분하기 위해서 객체화시켜줌!!!!!! 그래서 객체는 . 으로 접근가능하잖아
const S = {
  Container,
  Header,
  LoginHeader,
  SignUpHeader,
};
