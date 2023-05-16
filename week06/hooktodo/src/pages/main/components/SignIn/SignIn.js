// import { Form, InputBox } from "../style";
// 스타일 컴포넌트와 일반 컴포넌트 구분하기 위해서 아래 코드와 같이 작성해줌
import * as S from "../style";
import BasicButton from "../../../../components/Button/Button";
import { useState } from "react";
import useInput from "../../../../hooks/use-input";

const SignInForm = () => {
  // 나는 input 요소에 접근하지않고도 데이터를 가져오고 싶어(즉, DOM 요소에 접근하지 않고싶다)
  const [email, onChangeEmail] = useInput();
  const [password, onChangePassword] = useInput();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // 위의 코드처럼 모든 input 마다 useState를 적용하면 코드가 길어짐 -> 이게 맞아? -> ㄴㄴ 이게 반복되는 로직이니까 모듈화하기 (다른 함수로 빼기)

  const onPressSignIn = (e) => {
    e.preventDefault();
    console.log(
      "이메일 :",
      e.target.email.value,
      "비밀번호 :",
      e.target.password.value
    );
    // console.log("sign-in");
  };

  // const onChangeEmail = (e) => {
  //   setEmail(e.target.value);
  //   console.log(email);
  // };

  return (
    <S.Form onSubmit={onPressSignIn}>
      <S.InputBox>
        <label>이메일</label>
        {/* onChange 속성은 input의 value가 변경될 때마다 실행할 이벤트를 넣어줌  */}
        <input name="email" />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호</label>
        <input name="password" minLength={8} />
      </S.InputBox>
      <BasicButton size={"full"} shape={"default"} variant={"primary"}>
        로그인
      </BasicButton>
    </S.Form>

    // 위에 코드랑 비교해서 보기
    // <S.Form>
    //   <S.InputBox>
    //     <label>이메일</label>
    //     {/* onChange 속성은 input의 value가 변경될 때마다 실행할 이벤트를 넣어줌  */}
    //     <input value={email} onChange={onChangeEmail} />
    //   </S.InputBox>
    //   <S.InputBox>
    //     <label>비밀번호</label>
    //     <input value={password} onChange={onChangePassword} />
    //   </S.InputBox>
    //   <BasicButton
    //     size={"full"}
    //     shape={"default"}
    //     variant={"primary"}
    //     onClick={onPressSignIn}
    //   >
    //     로그인
    //   </BasicButton>
    // </S.Form>
  );
};
export default SignInForm;
