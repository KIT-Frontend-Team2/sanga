// {
// 객체 선언
// 나머지 문제들 전부 해당 객체를 복사 붙여넣기해서 사용합니다
// 각각의 id와 name의 값으로 '웹페', '이지' ,'단순' 을 가지고 있는 객체를 만드시오
// }

let obj1 = [
  {
    id: 1,
    name: "웹페",
  },
  {
    id: 2,
    name: "이지",
  },
  {
    id: 3,
    name: "단순",
  },
];

// {
//   객체 접근
//   console.log(output_data); // 이지
// }

// 방법1. 대괄호 표기법에 의한 프로퍼티 접근
// const output_data = obj1[1]["name"];

// 방법2. 마침표 표기법에 의한 프로퍼티 접근
// const output_data = obj1[1].name;
// console.log(output_data);

// {
//   객체 값 변경
//   2번째 id의 값을 '이퍼'로 변경하시오
// // }
// obj1[1].id = "이퍼";
// console.log(obj1);

// {
//   객체 찾기
//   3번째 단순만 Key, value를 둘 다 출력하시오
// }
// for (let i = 0; i < obj1.length; i++) {
//   if (obj1[i].name === "단순") {
//     // console.log(obj1[i]);
//     for (let key in obj1[i]) {
//       console.log(obj1[i]);
//       if (key !== "id") {
//         // console.log(obj1[i]);
//         console.log(key, obj1[i][key]);
//       }
//     }
//   }
// }

{
  const array = [1, 2, 3, 4, 5];
  // 위의 배열의 값을 가지고 객체의 '단순'을 출력하시오
  array.splice(1, 1);
  console.log(array);
}
