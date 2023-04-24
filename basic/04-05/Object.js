const webtoons = [
  {
    id: 1,
    title: "웹페",
    genre: "판타지",
    contribute: {
      writer: "SIU",
      illustrator: "SIU",
      authorship: "SIU",
      company: "naver",
    },
  },
  {
    id: 2,
    title: "전지적 독자 시점",
    genre: "판타지",
    contribute: {
      writer: "싱숑",
      illustrator: "슬리피-C",
      authorship: "싱숑",
      company: "naver",
    },
  },
  {
    id: 3,
    title: "천재 타자가 강속구를 숨김",
    genre: "일상물",
    contribute: {
      writer: "황지성",
      illustrator: "스튜디오MW",
      authorship: "이블라인",
      company: "naver",
    },
  },
  {
    id: 4,
    title: "흑막 여주가 날 새엄마로 만들려고 해",
    contribute: {
      genre: "아침드라마",
      writer: ["이산시", "이지형"], //   writer: "아산시"
      illustrator: "하리힌",
      authorship: "목감기",
      company: "naver",
    },
  },
  {
    id: 5,
    title: "벼락승진",
    genre: "일상물",
    contribute: {
      writer: "이모세",
      illustrator: "이모세",
      authorship: "이모세",
      company: "kakao",
    },
  },
  {
    id: 6,
    title: "나혼자만 레벨업",
    genre: "일상물",
    contribute: {
      writer: "현군",
      illustrator: "장성락",
      authorship: "추공",
      company: "kakao",
    },
  },
  {
    id: 7,
    title: "악녀 시어머니를 그만뒀더니, 다들 내게 집착한다",
    genre: "스릴러",
    contribute: {
      writer: "소망",
      illustrator: "소망",
      authorship: "Rana",
      company: "kakao",
    },
  },
];
// 문제 1. 해당 데이터를 추가해주세요
/* 
{
        id: 8,
        title: '프론트앤드 개발자가 되는길',
        genre: '스릴러',
        contribute: {
            writer: '김성용강사',
            illustrator: '김성용강사',
            authorship: '김성용강사',
            company: 'KoreaIT',
        },
},
*/

// let added_list = webtoons.push({
//   id: 8,
//   title: "프론트앤드 개발자가 되는길",
//   genre: "스릴러",
//   contribute: {
//     writer: "김성용강사",
//     illustrator: "김성용강사",
//     authorship: "김성용강사",
//     company: "KoreaIT",
//   },
// });
// console.log(added_list);
// console.log(webtoons);

// 문제 2. title이 전지적 독자 시점인 webtoon의 정보만 보여주세요.
// let search_list = webtoons.filter((el) => el.title === "전지적 독자 시점");
// console.log(search_list);

// 문제 3. genre이 일상물인 webtoon들의 정보만 보여주세요.
// let search_list = webtoons.filter((el) => el.genre === "일상물");
// console.log(search_list);

// 문제 4. naver에서 만든 웹툰들의 정보만 보여주세요.
// let search_list = webtoons.filter(
//   (el) => el["contribute"]["company"] === "naver"
// );
// console.log(search_list);

/*
webtoons 배열에서 naver만 뽑고 싶을 때?
1번 방법
for (let i = 0; i < webtoons.length; i++) {
  if (webtoons[i]["contribute"]["company"] === "naver") {
    console.log(webtoons[i]["contribute"]["company"]);
  }
}

2번 방법
for (let el of webtoons) {
  if (el["contribute"]["company"] === "naver") {
    console.log(el["contribute"]["company"]);
  }
}

3번 map 사용
webtoons.map((el) => {
  if (el["contribute"]["company"] === "naver") {
    console.log(el["contribute"]["company"]);
  }
});
*/

// 문제 5. "나혼자만 레벨업"의 genre이 이상합니다. "판타지"로 바꿔주세요.
// let change_list = webtoons.map((el) =>
//   // 그렇지 않으면 object를 return
//   el.title === "나혼자만 레벨업" ? { ...el, genre: "판타지" } : el
// );
// console.log(change_list);

// 문제 6. 혼자서 작업하고 있는 즉, writer와 illustrator 같은 webtoon들의 정보만 보여주세요
// let search_list = webtoons.contribute.filter(
//   (el) => el.writer === el.illustrator
// );
// console.log(search_list);

// 문제 7. 작가중에 이상하게 이름(=이지형)이 올라가있는 사람을 지워주고 자연스럽게 수정해주세요 해당 작품만 보여주세요

const list = [...webtoons];
let change_list = list.find((el) => el.contribute.writer.includes("이지형"));
change_list.contribute.writer = "아산시";
console.log(change_list);
