import { useRef, useState } from "react";
const UseRef = () => {
  const count = useRef(10);
  const [render, setForceReRender] = useState(true);
  const NumberCount = () => {
    count.current += 1;
    console.log(count.current);
  };

  const onForceReRender = () => {
    setForceReRender((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <button onClick={NumberCount}>콘솔에만 찍히는 버튼</button>
      {count.current}
      <button onClick={onForceReRender}>화면에 보이는 버튼</button>
    </>
  );
};
export default UseRef;
// 다른 강의나 서치한거 개념만 보고 아~ 이해했다 ~ ==> 내가 이해한거X
// 강사님이 수업시간에 한거 텍스트로만 복습하고 다시 빈화면에 내가 코딩을 해보고 아~이해했다 ~ --> 내가 이해한거O
