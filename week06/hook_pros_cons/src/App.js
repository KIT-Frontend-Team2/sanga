import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [sanga, setSanga] = useState("Hooks 함수 연습");
  const [age, setAge] = useState(27);
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
      <div style={{ margin: "100px auto", width: 300 }}>
        <div>장동민의 나이 : {age}</div>
        <div>
          <button
            onClick={() => {
              setAge(age + 1);
              console.log("렌더링이 되었습니다.");
            }}
          >
            벌써 일년
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
