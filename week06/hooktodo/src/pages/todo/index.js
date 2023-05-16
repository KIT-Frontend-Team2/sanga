import React from "react";
import { useParams } from "react-router-dom";
import BasicButton from "../../components/Button/Button";
import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../styles/common";
import TodoAddModal from "./componetns/Modal/add-modal";
import TodoList from "./componetns/List/todo-list";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoPage = () => {
  const params = useParams();
  console.log(params);

  /**
   * 
    const resolveAfter3Sec = new Promise(resolve =>   setTimeout(resolve, 3000));
      toast.promise(
        resolveAfter3Sec,
        {
          pending: 'Promise is pending',
          success: 'Promise resolved 👌',
          error: 'Promise rejected 🤯'
        }
      )
   */
  // 앞에 on 또는 handle 이 붙이면 이벤트 함수라는걸 의미함

  const addTodo = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
  };

  const showTodoToastMessage = (e) => {
    // preventDefault() : 이벤트의 기본동작은 동작하지 않게 됨, 즉 form태그의 submit 속성을 제거
    e.preventDefault();
    toast.promise(addTodo, {
      pending: "TODO LOADING",
      success: "TODO SUCCESS",
      error: "TODO ERROR",
    });
  };

  // 객체로 선언해서 따로 빼줌 왜냐하면 ToastContainer 컴포넌트를 다른 컴포넌트에서 사용할 때마다 다시 이 옵션을 선언해줘야하기 때문에
  const toastOption = {
    autoClose: 2000,
    theme: "colored",
  };
  return (
    <>
      <TodoAddModal onAddToDo={showTodoToastMessage} />
      <S.Wrapper>
        <S.Container>
          <S.Title>List</S.Title>
          <S.Content>
            <TodoList />
          </S.Content>
          <S.ButtonBox>
            <BasicButton variant={"primary"} size={"full"}>
              추가
            </BasicButton>
          </S.ButtonBox>
        </S.Container>
      </S.Wrapper>
      {/* {...toastOption} : 전개연산자 사용해서 옵션 따로 빼서 사용가능 */}
      <ToastContainer {...toastOption} />
    </>
  );
};
export default TodoPage;

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter};
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: ${({ theme }) => theme.PALETTE.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h1`
  background-color: ${({ theme }) => theme.PALETTE.primary[300]};
  color: ${({ theme }) => theme.PALETTE.fontColor};
  padding-left: 32px;
  height: 32px;
  ${flexAlignCenter};
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 32px);
  padding-bottom: 64px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const S = {
  Wrapper,
  Container,
  Title,
  ButtonBox,
  Content,
};
