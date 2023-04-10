/*
과제
로또 번호 뽑기
1 ~ 45까지 랜덤함 숫자 7자리의 배열
[1, 6, 8, 41, 45, 7]
매번 실행마다 다른 로또번호가 나와야합니다.
*/

function lotte() {
  let lotteArr = [];
  for (let i = 0; i < 7; i++) {
    let lotteNumber = Math.floor(Math.random() * 45) + 1;
    // console.log(lotteNumber);
    lotteArr.push(lotteNumber);
    lotteArr.sort(function (a, b) {
      return a - b;
    });
  }
  return lotteArr;
}
console.log(lotte());
