import { useState } from "react";
import PlayListMock from "../../__mock__/playList.json";

function State1() {
  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */

  // PlayListMock 데이터 가져오기
  const [playList, setPlayList] = useState(PlayListMock.playlist);

  const [title, setTitle] = useState("");
  const [singer, setSinger] = useState("");

  const Add = () => {
    const newAdd = { title, singer };
    setPlayList((playList) => [...playList, newAdd]);
    console.log(PlayListMock.playlist);
  };

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {/* list */}
        {/* 예시 데이터입니다 */}
        {/* key 사용하면 배열이 업데이트될 때마다 변경되지 않은 값들은 그대로 두고, 원하는 내용을 삽입하거나 삭제할 수 있다. */}
        {/* 고유값이 없으니 인덱스로 key 줘도되나? */}
        {playList.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.signer}</p>
          </li>
        ))}
      </ul>
      <div>
        <p>
          곡명 :
          <input
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={title}
          />
        </p>
        <p>
          가수/작곡 :
          <input
            onChange={(event) => {
              setSinger(event.target.value);
            }}
            value={singer}
          />
        </p>
        <p>
          <button onClick={Add}>추가</button>
        </p>
      </div>
    </>
  );
}
export default State1;
