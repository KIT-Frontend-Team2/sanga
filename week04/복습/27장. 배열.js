/* 
  배열은 여러 개의 값을 순차적으로 나열한 자료구조다. 
  배열은 사용 빈도가 매우 높은 가장 기본적인 자료구조다. 
  자바스크립트는 배열을 다루기 위한 유용한 메서드를 다수 제공한다. 
  배열은 사용 빈도가 높다 -> 배열 메서드를 능숙하게 다루는게 목표
*/

const arr = ["apple", "banana", "orange"];
// 배열이 가지고 있는 값을 요소라고 부른다.
// 자바스크립트의 모든 값은 배열의 요소가 될 수 있다.
// 배열의 요소는 배열에서 자신의 위치를 나타내는 0 이상의 정수인 인덱스를 갖는다.
// 인덱스는 배열의 요소에 접근할 때 사용한다.
// 대부분의 프로그래밍 언어에서 인덱스는 0부터 사용한다.

arr[0]; // apple
arr[1]; // banana
arr[2]; // orange

// 배열의 요소의 개수, 즉 배열의 길이를 나타내는 length 프로퍼티를 갖는다.

// 배열의 순회
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 변수 arr의 인덱스 i번째 길이만큼 for문 실행한다.
}

// 자바스크립트에 배열이라는 타입은 존재하지 X
// 배열의 타입은 객체 타입이다.

typeof arr; // Object

/*
  일반 객체와 배열을 구분하는 가장 명확한 차이는 값의 순서와 length 프로퍼티이다. 
*/

const arr2 = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1,2,3
}

/* 
  배열의 장점 
  1. 처음부터 순차적으로 요소에 접근할 수 있음 
  2. 마지막부터 역순으로 요소에 접근할 수 있음 
  3. 특정 위치부터 순차적으로 요소에 접근할 수 있음 

  왜? 배열이 인덱스, 즉 값의 순서와 length 프로퍼티를 갖기 때문에 가능한 것이다. 
*/

console.log([].length); // 0
console.log([1, 2, 3].length); // 3

// Array.of 메서드는 전달된 인수를 요소로 갖는 배열을 생성
Array.of(1); // [1]
Array.of(1, 2, 3); // [1,2,3]
Array.of("string"); // ['string']

// Array.from 메서드는 유사 배열 객체 또는 이터러블 객체를 인수로 전달받아 배열로 반환하여 반환
// 유사 배열 객체
const arrayLike = {
  0: "apple",
  1: "banana",
  2: "orange",
  length: 3,
};
console.log(arrayLike); // { '0': 'apple', '1': 'banana', '2': 'orange', length: 3 }

/* 
배열 요소의 참조 
배열의 요소를 참조할 때에는 대괄호 표기법을 사용한다.
대괄호 안에는 인덱스가 와야 한다. 
인덱스는 값을 참조할 수 있다는 의미에서 객체의 프로퍼티 키와 같은 역할을 한다. 
*/

const arr3 = [1, 2];
console.log(arr3[4]); // undefined

/*
배열 요소의 추가와 갱신 
객체의 프로퍼티를 동적으로 추가할 수 있는 것처럼 배열에도 요소를 동적으로 추가할 수 있음 
어떻게? 존재하지 않은 인덱스를 사용해 값을 할당하면 새로운 요소가 추가된다. 
이때 length 프로퍼티 값은 자동 갱신된다.
*/

const arr4 = [0];
arr4[1] = 1;
console.log(arr4); // [0,1]
arr4[4] = 2;
console.log(arr4); // 내 예상 결과 : [0, 1, undefined, undefined, 2]
// 결과 : [ 0, 1, <2 empty items>, 2 ]

/*
배열 요소의 삭제
delete 연산자 사용함 
또는 
Array.prototype.splice(삭제를 시작할 인덱스, 삭제할 요소 수)
*/

const arr5 = [1, 2, 3, 4, 5];
delete arr5[3];
console.log(arr5); // 내 예상 결과 : 1,2,3,5
// 결과 : [ 1, 2, 3, <1 empty item>, 5 ]

/* 
******** 중요 ********
배열 메서드 

배열 메서드는 결과물을 반환하는 패턴이 두 가지임 
1. 원본 배열(배열 메서드를 호출한 배열, 즉 배열 메서드의 구현체 내부에서 this가 가리키는 객체)을 직접 변경하는 메서드 
2. 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메서드
*/

// 예시
const arr6 = [1, 2, 3, 4, 5];

// 첫번째 방법
arr6.push(10);
console.log(arr6); // 1,2,3,4,5,10

// 두번째 방법
const result = arr6.concat(11);
console.log(arr6); // 예상 결과: 1,2,3,4,5,10
console.log(result); // 예상 결과: 1,2,3,4,5,10,11

/* 
(1) Array.isArray 
전달된 인수가 배열이면 true, 배열이 아니면 false를 반환함
*/

Array.isArray([]); // true
Array.isArray({}); // false

/* 
(2) Array.indexOf 
원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환함

*주의* 
- 원본 배열에 인수로 전달한 요소와 중복되는 요소가 여러개 있을 경우 -> 첫번째로 검색된 요소의 인덱스 반환 
- 원본 배열에 인수로 전달된 요소가 존재하지 않으면 -1 반환 
*/

const arr7 = [1, 2, 3, 4, 5];
console.log(arr7.indexOf(4)); // 3
console.log(arr7.indexOf(9)); // -1

/*
이처럼 indexOf 메서드는 배열에 특정 요소가 존재하는지 확인할 때 유용하지만,
ES7에 도입된 Array.prototype.includes 메서드를 사용하면 가독성이 좋다.
*/

const foods = ["apple", "banana", "orange"];
// foods 배열에 "watermelon" 요소가 존재하는지 확인
if (!foods.includes("watermelon")) {
  // foods 배열에 watermelon 요소가 포함되지 않으면 watermelon 요소 추가
  foods.push("watermelon");
}
console.log(foods); // ["apple", "banana", "orange", "watermelon"]

/* 
(3) Array.prototype.push 
- 인수로 전달받은 모든 값을 원본 배열의 마지막 요소로 추가하고 변경된 배열의 길이를 반환한다. 
즉, 배열 끝에 새 배열값 추가 후, 바뀐 배열길이 (= 배열개수 length) 반환한다. 
- push 메서드는 원본 배열을 직접 변경
*/

const arr8 = [1, 2, 3, 4, 5];

const result1 = arr8.push(9, 10);
console.log(result1); // 7
console.log(arr8); // [1,2,3,4,5,9,10]

/* 
정리
arr8은 원본 배열이고 result1은 원본배열.push(9,10)을 했으니, 
result1에는 배열 개수의 길이가 출력되고 
원본배열 arr8에는 push한 [1,2,3,4,5,9,10]가 출력된다.
*/

/* 
근데 push 메서드는 성능 면에서 좋지 않음 
왜냐하면 마지막 요소에 추가할 요소가 1개면 push 메서드를 사용하지 않고 length 프로퍼티를 사용하여 배열의 마지막 요소에 직접 추가할 수 있다. (더 빠름)
*/

const arr9 = [1, 2, 3];
arr9[arr9.length] = 5;
console.log(arr9); // 1,2,3,5

/* 
(4) Array.prototype.pop
- 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다.
- 원본 배열이 빈 배열이면 undefined를 반환한다.
- pop 메서드는 원본 배열을 직접 변경
*/

const arr10 = [1, 2, 3];
let result2 = arr10.pop();
console.log(arr10); // 예상 결과 : [1, 2] , 왜냐하면 원본 배열이니까
console.log(result2); // 예상 결과 : 3 , 왜냐하면 마지막 요소를 제거했고 제거한 요소를 반환했으니

/* 
(5) Array.prototype.unshift
- 인수로 전달받은 모든 값을 원본 배열의 선두로 추가하고 변경된 length 프로퍼티 값을 반환한다. 
- unshift 메서드는 원본 배열을 직접 변경
*/

const arr11 = [1, 2];
const result3 = arr11.unshift(3, 4);
console.log(result3); // 4
console.log(arr11); // [3,4,1,2]

/* 
근데 unshift 메서드는 원본 배열을 직접 변경하는 부수 효과가 있다. 
따라서 스프레드 문법을 사용하면 함수 호출 없이 표현식으로 선두에 요소를 추가할 수 있으며 부수 효과도 없다. 
*/

const arr12 = [1, 2];
const result4 = [3, ...arr12];
console.log(result4); // 예상 결과 : [3, 1, 2]

/* 
(6) Array.prototype.shift
- 원본 배열에서 첫번째 요소를 제거하고 제거한 요소를 반환
- 원본 배열이 빈 배열이면 undefined 반환
- unshift 메서드는 원본 배열을 직접 변경
*/

const arr13 = [1, 2, 3, 4, 5, 6];
const result5 = arr13.shift();
console.log(arr13); // 예상 결과 : [2, 3, 4, 5, 6]
console.log(result5); // 예상 결과 : 1

/* 
(7) Array.prototype.concat
- 인수로 전달된 값들(배열 또는 원시값)을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환
- 인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가한다. 
- concat 메서드는 원본 배열은 변경되지 않음 -> 새로운 배열을 반환
*/

const arr14 = [1, 2];
const arr15 = [3, 4];

let result6 = arr14.concat(arr15);
console.log(result6); // 예상 결과 : [1, 2, 3, 4]

result6 = arr14.concat(3);
console.log(result6); // 예상 결과 : [1, 2, 3]
// 여기서 알 수 있는거 : 3이라는 숫자를 원본 배열 arr14의 마지막 요소로 추가 -> 새로운 배열 반환

result6 = arr14.concat(arr15, 5);
console.log(result6); // 예상 결과 : [1, 2, 3, 4, 5]

console.log(arr14); // [1,2]  -> 원본 배열 반환X

/*
push와 unshift 메서드는 concat 메서드로 대체할 수 있다.
하지만 차이가 있음 
push와 unshift 메서드는 원본 배열을 직접 변경하지만 concat 메서드는 원본 배열을 변경하지 않고 새로운 배열을 반환한다.
따라서 
push와 unshift 메서드를 사용할 경우, 원본 배열을 반드시 변수에 저장해두어야하고
concat 메서드를 사용할 경우, 반환값을 반드시 변수에 할당받아야함.
*/

/*
push와 unshift 메서드는 concat 메서드로 대체할 수 있다.
왜냐하면 concat 메서드는 원본 배열을 변경하지 않고 새로운 배열을 반환하기 때문이다. 

arr17.unshift(1,2)를 아래의 코드와 같이 대체할 수 있다. 
여기서 주의사항은 concat으로 대체할 경우에 인자값이 배열인 경우에 한 번만 펼칠 수 있고 중첩된 배열을 모두 펼치지는 못함
*/
const arr17 = [3, 4];
const result7 = [1, 2].concat(arr17);
console.log(result7); // 예상 결과 : [1, 2, 3, 4]

// 첫번째와 두번째 비교해보기
// 첫번째
const arr18 = [3, 4];
arr18.unshift([1, 2]);
arr18.push([5, 6]);
console.log(arr18); // 예상 결과 : [[1,2],3,4,[5,6]]

// 두번째
let result8 = [1, 2].concat([3, 4]);
result8 = result8.concat([5, 6]);
console.log(result8); // 예상 결과 : [1,2,3,4,5,6]
// 왜냐하면 인수로 전달받은 배열을 해체해서 다시 새로운 배열로 만드니까

// 근데 concat 메서드는 스프레드 문법으로 대체할 수 있음

/* 
(8) Array.prototype.splice
- 원본 배열의 중간에 요소를 추가하거나 중간에 있는 요소를 제거하는 경우 사용 
- 원본 배열을 직접 변경함 
*구문 
array.splice(start, deleteCount, item)
- start : 배열의 변경을 시작한 인덱스 
- deleteCount : 배열에서 제거할 요소의 수 
- item : 배열에 추가할 요소(보통 배열 요소를 제거할 때는 생략가능)

splice(startNum, deleteCount, insertValue)
= startNum(시작 순서) 부터, deleteCount(제거개수) 몇개를 제거하고 , insertValue(넣을 값) 값을 몇개 넣어라!
*/

const arr19 = [1, 2, 3, 4, 5];
const result9 = arr19.splice(1, 2, 20, 30); // 1번째 인덱스부터 2개의 요소를 제거하고 거기다가 20, 30 요소를 널어라
console.log(arr19); // 예상 결과 : [1, 20, 30, 4, 5]
console.log(result9); // 예상 결과 : [2, 3]

// splice 메서드의 두번째 인수, 즉 제거할 요소의 개수가 0으로 지정하면 아무런 요소도 제거하지 않고 새로운 요소를 삽입

const arr20 = [1, 2, 3, 4];
const result10 = arr20.splice(1, 0, 200);
console.log(arr20); // 예상 결과 : [1, 2, 200, 3, 4]
// 결과 : [1, 200, 2, 3, 4]
// 실제 결과가 내가 예상한 결과와 다른 이유 : 원본 배열의 인덱스 1부터 0개의 요소를 제거하고 ***그 자리***에 새로운 요소 200을 삽입했기 때문에
console.log(result10); // 예상 결과 : []

// 주의
const arr21 = [1, 2, 3];
const result11 = arr21.splice(1); // 원본 배열의 인덱스 1부터 모든 요소를 제거!!
// 원본 배열 변경
console.log(arr21); // 예상 결과 : [1]
// 제거한 요소가 배열로 반환
console.log(result11); // 예상 결과 : [2,3]

/* 
(9) Array.prototype.slice
- 인수로 전달된 범위의 요소들을 복사하여 배열로 반환
- 원본 배열은 변경되지않음 
*구문 
array.slice(start, end)
- start(생략가능) : 복사를 시작할 인덱스 
- end(생략가능) : 복사를 종료할 인덱스, 이 인덱스에 해당하는 요소는 복사되지 않음 
*/

const arr22 = [1, 2, 3];
// arr22[1]부터 arr22[2]이전(arr22[2] 미포함)까지 복사하여 반환
const result12 = arr22.slice(1, 2);
console.log(result12); // 예상 결과 : [2]
console.log(arr22); // 에상 결과 : [1,2,3]

const copy = arr22.slice();
console.log(copy); // 예상 결과 : [1,2,3]
// *주의
console.log(arr22 === copy); // false

// 얕은 복사 : 한 단계까지만 복사
// 깊은 복사 : 객체에 중첩되어 있는 객체까지 모두 복사

/* 
(10) Array.prototype.join
- 원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달받은 문자열, 즉 구분자로 연결한 문자열을 반환함 
- 구분자 생략 가능, 기본 구분자는 콤마
*/

const arr23 = [1, 2, 3, 4, "바람", "비"];
console.log(arr23.join()); // 예상 결과 : 1,2,3,4,바람,비
console.log(arr23.join("")); // 예상 결과 : 1234바람비
console.log(arr23.join("-")); // 예상 결과 : 1-2-3-4-바람-비
console.log(arr23.join(":")); // 예상 결과 : 1:2:3:4:바람:비

/* 
(11) Array.prototype.reverse
- 원본 배열의 순서를 반대로 뒤집음 
- 원본 배열 변경됨 
- 반환값은 변경된 배열
*/

const arr24 = [1, 2, 3];
const result13 = arr24.reverse();
console.log(result13); // 예상 결과 : [3,2,1]
console.log(arr24); // 예상 결과 : [3,2,1]

/* 
(12) Array.prototype.fill
- 인수로 전달받은 값을 배열의 처음부터 끝까지 요소로 채움 
- 원본 배열 변경됨 

*구문 
fill(value, start, end)
value : 배열을 채울 값 
start : value 값을 채울 배열의 시작 index 
end : value 값을 채울 배열의 종료 index (end index는 미포함)
*/

const arr25 = [1, 2, 3, 4, 5];
// 인수로 전달받은 값 0을 배열의 처음부터 끝까지 요소로 채움
arr25.fill(9);
console.log(arr25); // 예상 결과 : [9, 9, 9, 9, 9]

const arr26 = [1, 2, 3];
arr26.fill(1, 2, 3);
console.log(arr26); // 예상 결과 :[1, 2, 1]

/* 
ex) 같은 숫자가 아닌 1부터 45까지 모든 숫자 출력
array(45)
  .fill()
  .map((v, (i) => i + 1));
fill 메서드로 작성할 경우에 undefined로 배열이 채워지는데 map을 통해서 v라는 인덱스는 0부터 시작해서 i+1을 리턴하면 숫자를 1부터 시작할 수 있음 (i으로 리턴하면 0부터 44로 채워짐)
*/

/* 
(13) Array.prototype.includes
- 배열 내에 특정 요소가 포함되어 있는지 확인하여 true 또는 false를 반환
*/

const arr27 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr27.includes(4)); // 예상 결과 : true

/* 
array 에서 find()와 includes() 비교 

array.find() 
주어진 함수를 만족하는 첫번째 요소의 값 반환 
그런 요소가 없다면 undefined 반환 
찾은 요소의 값 대신 인덱스를 반환하는 것은 findIndex() 
*/

const arr28 = [5, 30, 20, 44, 3, 130];
const result14 = arr28.find((el) => el > 20); // 예상 결과 : 30
const result15 = arr28.findIndex((el) => el > 20); // 예상 결과 : 1
const result16 = arr28.filter((el) => el > 20); // 예상 결과 : [30, 44, 130]

console.log(result14);
console.log(result15);
console.log(result16);

/* 
(14) Array.prototype.flat
- 인수로 전달한 깊이만큼 재귀적으로 배열을 평탄화함 
- 기본값 : 1 (즉, flat(1) === flat())
*/

console.log([1, [2, 3, 4, 5]].flat()); // 예상 결과 : [1, 2, 3, 4, 5]

/****** 배열 고차 함수  ******/
/* 
고차 함수는 함수를 인수로 전달받거나 함수를 반환하는 함수 
*/

/*
(1) Array.prototype.sort
- 배열의 요소를 정렬 
- 원본 배열을 직접 변경하여 정렬된 배열을 반환
*/

const fruits = ["Banana", "Orange", "Apple"];

// 오름차순 정렬
fruits.sort();
console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]

// 내림차순 정렬
fruits.reverse();
console.log(fruits); // [ 'Orange', 'Banana', 'Apple' ]

/*
근데 주의할 점은 
숫자 요소들로만 이루어진 배열은 유니코드 코드 포인트의 순서를 따르기 때문에,
sort 메서드에 정렬 순서를 정의하는 비교 함수를 인수로 전달해야한다!! 
*/

const points = [40, 20, 30, 11, 304, 98, 3];
// 숫자 배열의 오름차순 정렬 (비교 함수의 반환값이 0보다 작으면 a를 우선하여 정렬)
points.sort((a, b) => a - b);
console.log(points); // [3, 11, 20, 30, 40, 98, 304]

// 숫자 배열의 내림차순 정렬 (비교 함수의 반환값이 0보다 작으면 b를 우선하여 정렬)
points.sort((a, b) => b - a);
console.log(points); // [304, 98, 40, 30, 20, 11, 3]

/*
(2) Array.prototype.forEach
- for 문을 대체할 수 있는 고차 함수 
- 자신의 내부에서 반복문을 실행함 
- 반복문을 추상화한 고차 함수로서 내부에서 반복문을 통해 자신을 호출한 배열을 순회하면서 수행해야 할 처리를 콜백 함수로 전달받아 반복 호출함 
*/

// arr는 원본 배열을 가리킴
[1, 2, 3].forEach((item, index, arr) => {
  console.log(`요소값: ${item}, 인덱스: ${index}, this: ${arr}`);
});

/*
(3) Array.prototype.map
- 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출함
- 콜백 함수의 반환값들로 구성된 새로운 배열을 반환함 
- 원본 배열은 변경되지않음 

<<forEach 메서드와 map 메서드의 공통점>>
자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다는 것 

<<forEach 메서드와 map 메서드의 차이점>>
forEach 메서드 : 언제나 undefined 반환 
map 메서드 : 콜백함수의 반환값들로 구성된 새로운 배열을 반환
=> forEach 메서드 : 단순히 반복문을 대체하기 위한 고차함수이고, 
map 메서드 : 요소값을 다른 값으로 매핑한 새로운 배열을 생성하기 위한 고차함수
*/

// arr는 원본 배열을 가리킴
[1, 2, 3].map((item, index, arr) => {
  console.log(`요소값: ${item}, 인덱스: ${index}, this: ${arr}`);
  return item;
});
