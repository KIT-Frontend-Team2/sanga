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

  // 곡명
  const [title, setTitle] = useState("");

  // 가수/작곡
  const [singer, setSinger] = useState("");

  const onUpdate = (e) => {
    e.preventDefault();
    const newAdd = {
      title: e.target.title.value,
      singer: e.target.singer.value,
    };
    setPlayList((playList) => [...playList, newAdd]);
    console.log(title, singer); // 곡명이랑 가수/작곡 다 잘 넘어왔는데 화면에는 곡명만 찍힘 이유가 뭘까?
    // 이유 찾았음 -> PlayListMock 에 singer 오타
    console.log(playList);
    // 추가를 했으면 다시 빈문자열로 초기화하기
    setTitle("");
    setSinger("");
  };

  const onDelete = (index) => {
    const onDeleteAdd = playList.filter((playList, el) => el !== index);
    setPlayList(onDeleteAdd);
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
            <p>{item.singer}</p>
            <button onClick={() => onDelete(index)}>삭제</button>
          </li>
        ))}
      </ul>
      <div>
        <form
          onSubmit={(e) => {
            onUpdate(e);
          }}
        >
          <p>
            곡명 :
            <input name="title" />
          </p>
          <p>
            가수/작곡 :
            <input name="singer" />
          </p>
          <p>
            <button>추가</button>
          </p>
        </form>
      </div>
    </>
  );
}
export default State1;
