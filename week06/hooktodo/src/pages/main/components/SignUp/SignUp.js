import * as S from "../style";
import BasicButton from "../../../../components/Button/Button";
import useInputs from "../../../../hooks/use-inputs";

const SignUpForm = () => {
  const [{ email, password, passwordConfirm }, onChangeForm] = useInputs({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  console.log({ email });

  // 이메일 & 비밀번호 유효성 검사
  // 이메일 검사: '@' 이 둘다 포함될것.
  const isValidEmail = email.includes("@");
  /* 
      커스텀 훅 
      : hook을 추상화된 로직으로 사용할 수 있도록 결합해주고 다른 컴포넌트 사이에서 공통의 상태 관련 로직을 재사용할 수 있도록 해줌 

        (기초)
        email은 email 양식을 지켜야하며 (@ 포함) 
        
        password는 8글자 이상 작성 되어야한다.

        password - passwordConfirm이 달라졌을 때 실시간으로
        비밀번호와 비밀번호 확인이 다르지 않은지 확인하라는 에러 메세지

        BasicButton은
        데이터가 모두 채워져있지 않으면 disabled
        유효성이 검사되지 않으면 disabled --> 아이디와 비밀번호 양식을 확인해주세요 에러 메세지
        비밀번호와 비밀번호 확인이 다르면 disabled --> CSS 속성도 변경 (회색)

        login의 email 로직에도 똑같이 useInputs를 적용하고 유호성 적용 후
        커스텀 훅으로 함수 재사용 할 것 

        (1) state 최적화
        (2) custom hook 작성법 (모듈화)
        
        +

        (심화)
        react-hook-from 이용하여 랜더링 최적화
        단, 장단점을 정리하고 원하는 대로 효과를 거뒀는지 작성할 것
        구현을 목표로 하지 말고 실무에서 자주 사용하는 라이브러리 이므로 확실하게 이해하는 것이 중요
    */

  return (
    <S.Form>
      <S.InputBox>
        <label>이메일</label>
        <input onChange={onChangeForm} name="email" />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호</label>
        <input onChange={onChangeForm} name="password" minLength={8} />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호 확인</label>
        <input onChange={onChangeForm} name="passwordConfirm" minLength={5} />
      </S.InputBox>
      <BasicButton size={"full"} shape={"default"} variant={"primary"}>
        회원가입
      </BasicButton>
    </S.Form>
  );
};
export default SignUpForm;
