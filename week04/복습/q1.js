const user = {
  name: "김성용",
  age: 20,
  height: 190,
};

// 문제1. 위의 객체를 아래의 메소드를 이용하여 반환 값을 출력 하고 각 메소드의 기능을 정의할 것

user["key"], user.key;
console.log(user); // { name: '김성용', age: 20, height: 190 }

// 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환
console.log(Object.keys(user)); // [ 'name', 'age', 'height' ]

// 전달된 파라미터 객체가 가지는 (열거 가능한) 속성의 값들로 이루어진 배열을 리턴
console.log(Object.values(user)); // [ '김성용', 20, 190 ]

// 모든 프로퍼티와 값을 배열로 반환
console.log(Object.entries(user)); // [ [ 'name', '김성용' ], [ 'age', 20 ], [ 'height', 190 ] ]

// for in;  for ... in문은 객체의 프로토타입 체인 상에 존제하는 모든 프로토타입의 프로퍼티 중에서 프로퍼티 어트리뷰트의 값이 true인 프로퍼티를 순회하며 열거함
for (const key in user) {
  console.log(key + ":" + user[key]);
}
// name:김성용
// age:20
// height:190

// 문제2. 값이 “김성용”인 속성의 key 찾기
let result = Object.keys(user);
let key = result.find((key) => user[key] === "김성용");
console.log(key); // name

// 문제3. 깊은 복사를 통해 user 객체의 복사본을 만든 후 name을 본인의 이름으로 수정
const copyObj = { ...user }; // 스프레스 연산자 사용
copyObj.name = "배상아";

console.log(copyObj);
