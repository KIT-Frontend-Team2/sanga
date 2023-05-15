// 1. 처음에 dom.html 페이지가 로딩 될 때 실행되는 함수를 불러와야한다. 그리고 <p>태그의 글씨가 다른 글씨로 변경되게 해야하기때문에 <p>태그만 가져오는게 아니라 <p>태그를 감싸고 있는 <div>태그의 id나 class로 속성의 값을 변경해주는 함수를 사용하면 된다.
// 예를 들어 1.페이지가 로딩 될 때 이곳의 글씨를 변경하시오. -> 오늘은 5월 5일 어린이날 입니다. 이렇게 변경하기

// 2. 각각의 탭1, 탭2, 탭3, 탭4, 탭5 텍스트를 마우스로 클릭했을 때 각각의 class명은 통일되어 있으니 따로 id를 만들어 고유의 값을 부여하고 선택한 탭의 배경과 글자 색이 변경되도록 해야하기 때문에 각각의 id를 사용해준다.
// 근데 주어진게 class만 있으니 class로만 접근하는 방법이 있을텐데..

// 3. 예를 들어 2번에서 탭1을 선택할 때, 3번에서 탭1 컨텐츠만 화면에 보이게 하고 다른 컨텐츠는 화면에서 사라지게 하는게 목표.

// 4. input태그에 글자수 제한하는 속성이 이미 있어서 maxlength 속성을 10으로 변경해주는 함수를 사용한다.

// document.querySelector("input");
const result = document.querySelector("#te_input");
result.getAttribute("maxlength");
result.setAttribute("maxlength", 10);
console.log(result);

result.addEventListener("change", (el) => {
  // console.log("숫자가 입력되었습니다.");
  // console.log(el.target.value);
  const string = el.target.value; // 가나3
  // const stringArray = string.split("");
  // const lastChar = stringArray[stringArray.length - 1];

  // if (!isNaN(parseInt(lastChar))) {
  //   alert("숫자입니다.");
  //   el.target.value = stringArray
  //     .filter((data, i) => stringArray.length - 1 !== i)
  //     .join("");
  // }

  // let stringArray = string.split("");

  // const newStringArray = stringArray
  //   .map((element) => {
  //     if (!isNaN(parseInt(element))) {
  //       alert("숫자입력");
  //       return (element = "");
  //     }
  //     return element;
  //   })
  //   .join("");
  // console.log(newStringArray);
  // el.target.value = newStringArray;

  // 입력된 마지막값이 숫자인지 아닌지 판단하는 숫자면 true 문자면 false
  // parseInt = 문자를 숫자로 변환, 그럴경우에는 NaN
  // isNaN = 이게 NaN이냐 아니냐?

  // 마지막 문자열에 접근
  // 문자열을 배열로 나눠주는
});

// 5.아래의 입력창에 입력 후 저장 버튼을 누르거나 엔터키를 누르면 입력한 내용이 아래의 list에 추가 되도록 하시오.
// 초기화 버튼을 누르면 list안의 모든 내용이 지워져야 함

const newName = ["배상아", "문다은"];

console.log(newName);
