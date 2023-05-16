import Button from "./style";

// props 는 속성의 줄임말, 매개변수의 이름을 props라고 함
const BasicButton = ({ size, shape, variant, children, ...rest }) => {
  return (
    <Button size={size} shape={shape} variant={variant} {...rest}>
      {children}
    </Button>
  );
};
export default BasicButton;

//  <BasicButton size={"full"} color={"red"}>
// 함수형 컴포넌트는 함수이기 때문에 매개변수를 전달 받을 수 있고
// 매개변수는 컴포넌트에 설정한 속성과 속성값의 형태가 객체로 전달

/* 
<BasicButton  size={"full"} onClick={onPressLogin} onMouseOver={}>
    ... children
</BasicButton>

========================================================================

나머지 매개변수 --> ...rest

function print(name, ...rest){
    console.log(name, ...rest)
}
print("김성용", 20, 190)
김성용은 name에 들어가고 나머지 20 과 190은 ...rest에 들어감 
========================================================================

💡 KeyPoint

1. 함수형 컴포넌트는 매개변수로 전달된 *속성값*을 객체 형태로 받는다
2. styled-component는 속성으로 전달된 값을 콜백함수의 인자로 꺼내쓸 수 있다
3. 이를 이용하여 유동적인 css 변경이 가능하며 이를 통해 유동적인 공통 컴포넌트 만들 수 있다
4. 나머지 매개변수를 통해 props를 통해 명시하지 않은 key 값도 전달 받을 수 있다

========================================================================
*/
