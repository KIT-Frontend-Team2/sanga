// Array

// {
//   let input_data = ["웹페", "이지", "단순", "한보", "조기"];
//   let output_data = input_data.slice(0, 2).join("");

//   console.log(output_data); // 웹페이지
//   //   output = 웹페이지
// }

// {
//   let input_data = ["웹페", "이지", "단순", "한보", "조기"];
//   let output_data = input_data.slice(2, 4);

//   console.log(output_data); // ["단순", "한보"]
// }

// {
//   let input_data = [1, 2, 3, 4, 5];
//   // 방법
//   // let output_data = input_data.pop();
//   // let output_data = input_data[4];
//   // let output_data = input_data.splice(4);
//   console.log(output_data); // 5
// }

// {
//   // for 사용
//   let input_data = [1, 2, 3, 4, 5];

//   for (let i = 0; i < input_data.length; i++) {
//     input_data[i] += 10;
//   }

//   console.log(input_data); // [11,12,13,14,15]
// }

{
  //   // forEach 사용
  //   // 배열(이터러블)객체들을 모두 순회를 하기위해 사용을 한다
  let input_data = [10, 20, 30, 40, 50];
  let result = [];

  input_data.forEach((item) => result.push(item / 2));
  console.log(result); // [5, 10, 15, 20, 25]
}

// {
// map 사용
// 원본 배열 손상x
// let input_data = [10, 20, 30, 40, 50];
// let output_data = input_data.map((el) => {
//   if (el <= 30) {
//     return el / 10;
//   } else {
//     return  el / 2;
//   }
// });
//   console.log(output_data); // [1, 2, 3, 20, 25]
// }

// {
//   let input_data = [10, 20, 30, 40, 50];
//   let output_data = input_data.slice(2, 4);
//   console.log(output_data); // [30, 40]
// }

// {
//   let input_data = [10, 20, 30, 40, 50];
//   input_data.splice(2, 2);
//   console.log(input_data); // [10, 20, 50]
// }

// {
//   let input_data = [10, 20, 30, 40, 50];
//   let output_data = input_data.findIndex((el) => el === 40);
//   console.log(output_data); // 3 *인덱스 번호
// }

// {
//   let input_data = "오늘 날씨는 매우 맑음";
//   let output_data = input_data.split(" ");
// 1. 배열의 인덱스를 이용해서 변경하는 방법
// output_data[3] = "흐림";

// 2. splice() 메소드 사용하는 방법
//   output_data.splice(3, 1, "흐림");
//   console.log(output_data); // ["오늘", "날씨는", "매우", "흐림"]
// }

// {
// '=' 금지
// let input_data = "오늘 날씨는 매우 맑음";
// let output_data = input_data.split(" ");
// console.log(output_data);
/* 
  *주의* 
  .splice(0, 0, "내일"); 의 결과는 [ '내일', '오늘', '날씨는', '매우', '맑음' ]
  splice(배열의 변경을 시작할 index, 배열에서 제거할 요소의 수, 배열에 추가할 요소)
  <배열에서 제거할 요소의 수는 배열의 변경을 시작할 인덱스부터 제거할 요소의 수를 의미함>
  */
//   output_data.splice(0, 1, "내일");
//   console.log(output_data); // ["내일", "날씨는", "매우", "맑음]
// }
