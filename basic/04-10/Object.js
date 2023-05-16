const students = [
  {
    id: 1,
    name: "김철수",
    age: 18,
    gender: "male",
    grade: 3,
    class: 1,
    scores: {
      math: 85,
      english: 92,
      science: 78,
    },
  },
  {
    id: 2,
    name: "이영희",
    age: 17,
    gender: "female",
    grade: 3,
    class: 2,
    scores: {
      math: 78,
      english: 95,
      science: 87,
    },
  },
  {
    id: 3,
    name: "박민수",
    age: 16,
    gender: "male",
    grade: 2,
    class: 1,
    scores: {
      math: 92,
      english: 88,
      science: 90,
    },
  },
  {
    id: 4,
    name: "정미영",
    age: 18,
    gender: "female",
    grade: 3,
    class: 3,
    scores: {
      math: 90,
      english: 82,
      science: 93,
    },
  },
  {
    id: 5,
    name: "이영수",
    age: 17,
    gender: "male",
    grade: 2,
    class: 2,
    scores: {
      math: 80,
      english: 85,
      science: 88,
    },
  },
  {
    id: 6,
    name: "한지민",
    age: 18,
    gender: "female",
    grade: 3,
    class: 1,
    scores: {
      math: 95,
      english: 92,
      science: 96,
    },
  },
  {
    id: 7,
    name: "신동엽",
    age: 16,
    gender: "male",
    grade: 2,
    class: 3,
    scores: {
      math: 87,
      english: 89,
      science: 91,
    },
  },
  {
    id: 8,
    name: "최지우",
    age: 17,
    gender: "female",
    grade: 2,
    class: 2,
    scores: {
      math: 92,
      english: 87,
      science: 85,
    },
  },
  {
    id: 9,
    name: "장우혁",
    age: 16,
    gender: "male",
    grade: 3,
    class: 3,
    scores: {
      math: 88,
      english: 84,
      science: 90,
    },
  },
  {
    id: 10,
    name: "홍길동",
    age: 18,
    gender: "male",
    grade: 3,
    class: 2,
    scores: {
      math: 85,
      english: 90,
      science: 92,
    },
  },
];

// 모든 문제들은 스프레드 연산자를 사용하는 것을 권장합니다.

// 1. 2반의 학생들의 정보를 모두 보여주세요
// const info = students.filter((el) => el.class === 2);
// console.log(...info);

// 2. grade가 2등급 이상인 학생들을 모두 보여주세요
// const info_1 = students.filter((el) => el.grade >= 2);
// console.log(...info_1);

// 3. 이영수의 이름을 국영수로 변경해주고 바뀐 학생의 정보만 보여주세요
// const info_2 = students.filter((el) => {
//   if (el.name === "이영수") {
//     el.name = "국영수";
//     return el;
//   }
// });
// console.log(info_2);

// 4. 홍길동의 이름을 장보고로 변경해주고 모두 보여주세요
// const info_3 = students.map((el) => {
//   if (el.name === "홍길동") {
//     el.name = "장보고";
//   }
//   return el;
// });
// console.log(info_3);

// 5. 영어 점수가 80점 이상인 학생들만 보여주세요
// const info_4 = students.filter((el) => {
//   if (el.scores.english >= 80) {
//     return el;
//   }
// });
// console.log(info_4);

// 6. 나이가 17살 이하인 학생들만 보여주세요
// const info_5 = students.filter((el) => {
//   if (el.age <= 17) {
//     return el;
//   }
// });
// console.log(info_5);

// 심화 문제

// 7. 각 학생의 아이디, 이름, 점수의 합만 보여주세요
/*
ex)
  {
      id: 10,
      name: 홍길동,
      sum_score: 267,
  }
*/

// 7. 점수들의 평균값이 가장 높은 학생의 정보만 보여주세요

// 8. 과학을 제외한 점수의 평균이 가장 낮은 학생의 정보만 보여주세요
