/*
  커스텀 훅이란?
  훅을 사용하고 있는 재사용 가능한 로직을 모듈화
  
  재사용 가능성이 없을 훅을 커스텀 훅으로 만드는 것은 옳을까요? 옳지 않을까요?
 */

import { useState } from "react";

const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange, setValue];
};
export default useInput;

// const a = useInput(); // 리턴하고 있는 값은 [value, onChange, setValue] --> 배열이니까 구조분해할당 할 수 있음
// const b = useInput(); // 리턴하고 있는 값은 a와 같을까 다를까? 나는 같다 (정답은 다름, 즉 재사용이 가능하다)

// const [email, onChangeEmail, setEmail] = useInput(); // 구조분해할당가능하니까 SignIn.js 에서도 사용가능
