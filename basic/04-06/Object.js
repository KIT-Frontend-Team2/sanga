const movies = [
  {
    id: 001,
    제목: "너의 이름은",
    이미지:
      "https://i.namu.wiki/i/C02hYdptybe03pah6H-_pWyci2AFa-uvFMqZeFThs_MtlMtD9eZxuRSnAUt0yFYZaKisZiyEvXeBhnajiJLVH5f_syiJLMYrAmY2QMcUSA2woZS94zN0eryY7TPiAbRWvh1t5iNc1k3UqsVtHGdY1Q.webp",
    감독: "신카이 마코토",
    프로듀서: ["타케이 카츠히로(武井克弘)", "이토 코이치로(伊藤耕一郎)"],
    제작사: "코믹스 웨이브 필름",
    개봉년도: 2016,
    장르: ["애니메이션", "드라마", "로맨스", "미스터리", "판타지", "재난물"],
  },
  {
    id: 002,
    제목: "센과 치히로의 행방불명",
    이미지:
      "https://namu.wiki/jump/wkERdYdEhu4MrpIFyA6%2F4sCL0CtBoUSrkotV1NUu5Apv4uHNTTOE2Gg2kW1z3QaszsiSadZx%2F2oRFDFChS49PLb%2FZjEji5SlExXETwd%2F2o4%3D",
    감독: "미야자키 하야오",
    프로듀서: "스즈키 토시오",
    제작사: "스튜디오 지브리",
    개봉년도: 2001,
    장르: ["애니메이션", "판타지", "어드벤쳐"],
  },
  {
    id: 003,
    제목: "하울의 움직이는 성",
    이미지:
      "https://i.namu.wiki/i/VQZwuZCZJwBjgA3hC2lFol1vKPoMUhVtGC-Z8bbSN3xtBG9c8MGUxGM1C0pHJvpOgJyNZGu1XjsswG7DkmuMPcoiw5Q6qgdNmiPLQu2c1iLKVE4FgOSSS2Ang6vmjaRWKRDgbPKdkclcVCnYGwUCPA.webp",
    감독: "미야자키 하야오",
    프로듀서: "스즈키 토시오",
    제작사: "스튜디오 지브리",
    개봉년도: 2004,
    장르: ["애니메이션", "판타지", "로멘스", "멜로", "스팀펑크"],
  },
  {
    id: 004,
    제목: "날씨의 아이",
    이미지:
      "https://i.namu.wiki/i/ESjxEfk4u2OWtok2opk_vC8mTlNw0JJLRjkV_IiO3TM4uRnySwJFOwZGYO1zik8A0UU8NcnYgXbmVatyiKmXxNpisLIaAYhxYV0Ng_COxPGWFgNx-709PYpN0mZGaETXn1I6GEaVxpTR5c_vbWO2LA.webp",
    감독: "신카이 마코토",
    프로듀서: ["오카무라 와카나(岡村和佳菜)", "이토 키누에(伊藤絹恵)"],
    제작사: "코믹스 웨이브 필름",
    개봉년도: 2019,
    장르: [
      "애니메이션",
      "로맨스",
      "판타지",
      "드라마",
      "재난",
      "세카이계",
      "어드벤처",
      "성장",
    ],
  },
  {
    id: 005,
    제목: "스즈메의 문단속",
    이미지:
      "https://i.namu.wiki/i/A5GZJAw4w9BuXUYcd1pP7KK1fM1uFhk3tPvhnikGymz6z4wA1dcuz6iVdv0EML8tUQipB0bS5k6hBsY8BFxDioPqynAXe3sctFAiSFAe1d1D9cXVfkhuzSCvcYWxtr91G54S9GWYXz9aIIYMkZR3vA.webp",
    감독: "신카이 마코토",
    프로듀서: [
      "오카무라 와카나(岡村和佳菜)",
      "이토 키누에(伊藤絹恵)",
      "이토 코이치로(伊藤耕一郎)",
    ],
    제작사: "코믹스 웨이브 필름",
    개봉년도: 2022,
    장르: [
      "액션",
      "어드벤처",
      "재난",
      "판타지",
      "로맨스",
      "드라마",
      "포스트 아포칼립스",
    ],
  },
];

// {
//   // 1. 장르가 어드벤쳐인 영화의 제목만 보여주세요.
//   const movies.foreach(장르 === 어드벤처){
//     movies.title
//     console.log(movies.id)
//   }
// }
{
  // 2. 신카이 마코토 감독이 만든 영화들의 장르를 보여주세요.
  const input_data = movies;
  const ouput_data = input_data.filter((el) => el.감독 === "신카이 마코토");
  console.log(ouput_data);
}
// {
//   // 3. 개봉년도가 3번째인 영화의 정보를 모두 출력해주세요
//   const input_data = movies;
//   const ouput_data = input_data;
//   console.log(ouput_data);
// }
// {
//   // 4. 스튜디오 지브리에서 만든 영화들의 정보만 출력하는데 제작사를 코믹스 웨이브 필름으로 바꿔서 출력해주세요
//   const input_data = movies;
//   const ouput_data = input_data;
//   console.log(ouput_data);
// }
