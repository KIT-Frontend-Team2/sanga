import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import UseRef from "./hooks/useRef";
import UseMemo from "./hooks/useMemo";

function App() {
  const [sanga, setSanga] = useState("Hooks 함수 연습");
  console.log("렌더링이 되보겠습니다.");

  return (
    <div className="App">
      {/* 위에서 정의한 변수를 return안에 사용하기 위해서는 중괄호로 가져오기 */}
      <div>{sanga}</div>
      <button
        onClick={() => {
          setSanga("useState 연습");
        }}
      >
        버튼
      </button>
      <UseRef />
      <UseMemo />
    </div>
  );
}

export default App;
