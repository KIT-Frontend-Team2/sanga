import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Comment from "../../components/2.state/comment";

function State2() {
  /*  
    문제 2.

    Q1. 아래 작성된 state의 mock data를 활용하여
        댓글 목록을 화면에 랜더링 해보세요 :)
        Components는 src/components/state/comment.js를 활용하세요
        
    Q2. 댓글 작성 수정 삭제 기능을 구현해보세요 :)
            1. 댓글 작성 기능
            2. 댓글 수정 기능
            3. 댓글 삭제 기능 ( 본인이 작성한 댓글만 삭제할 수 있습니다, myComment 활용 )
    */

  const [post, setPost] = useState({
    title: "안녕하세요 여러분 김성용 강사입니다 :)",
    content: "오늘도 모두 화이팅입니다!",
    User: {
      nickname: "김성용",
      age: 20,
      height: 190,
    },
    Comments: [
      {
        User: {
          nickname: "김사과",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "반하나",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "오렌지",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "이멜론",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "박수박",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
    ],
  });

  // 사용자가 입력한 값들 저장
  const [value, setValue] = useState({
    name: "",
    content: "",
  });

  // 댓글 작성 버튼 누르면 실행되는 로직
  // 사용자가 입력한 작성자, 댓글 내용이 화면에 보여지게하기
  const onCommentWrite = (e) => {
    e.preventDefault();
    const newComment = {
      User: {
        nickname: value.name,
      },
      content: value.content,
      myComment: true,
    };

    // Comment -> Comments 로 수정했더니 화면에 내가 입력한 댓글 보여짐

    // 사용자가 input에 값을 입력하면 화면에 보여짐
    setPost({
      ...post,
      Comments: [...post.Comments, newComment],
    });

    console.log(newComment);

    setValue({
      name: "",
      content: "",
    });
  };

  // 피드백 : 삭제가 안된 이유는 데이터를 받아오는 형태를 객체로 받아와야하는데, 배열로 받아오고 있어서 오류가 났다.
  const onRemove = (user) => {
    setPost({
      ...post,
      Comments: post.Comments.filter(
        (newComment) => newComment.User.nickname !== user
      ),
    });
  };

  console.log({ post });

  // name의 change받아오는 컴포넌트 생성하기
  // 콘솔에는 새로운 데이터가 잘 받아오는데 화면에 원래 데이터만 출력되고 새로운 데이터가 출력이 안됨ㅠㅠ
  const onChangeName = (e) => {
    setValue({
      name: e.target.value,
      content: value.content,
    });
  };

  const onChangeContent = (e) => {
    setValue({
      name: value.name,
      content: e.target.value,
    });
  };

  return (
    <S.Wrapper>
      <h1>문제2</h1>
      <S.PostBox>
        <S.PostTitle>제목: {post.title}</S.PostTitle>
        <S.PostContent>내용: {post.content}</S.PostContent>
      </S.PostBox>

      <S.PostInfo>
        <p>
          작성자: <span>{post.User.nickname}</span>
        </p>
        <p>
          작성자 나이: <span>{post.User.age}</span>
        </p>
        <p>
          작성자 키: <span>{post.User.height}</span>
        </p>
      </S.PostInfo>
      <div>
        <p>
          댓글 수: <span>{post.Comments.length}</span>
        </p>
        <form onSubmit={onCommentWrite}>
          <input
            placeholder="작성자"
            value={value.name}
            onChange={onChangeName}
          />
          <input
            placeholder="댓글 내용"
            value={value.content}
            onChange={onChangeContent}
          />

          <button type="submit">댓글 작성</button>
        </form>
      </div>
      <S.CommentList>
        {/* Comments 데이터 화면에 출력하기
         */}
        {post.Comments.map((comment, index) => (
          <Comment
            key={index}
            // comment.js 파일에 props로 user와 content보내기
            nickName={comment.User.nickname}
            content={comment.content}
            // myComment={comment.myComment}
            onRemove={onRemove}
          />
        ))}
      </S.CommentList>
    </S.Wrapper>
  );
}

export default State2;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PostBox = styled.div`
  background-color: #999;
  width: 360px;
  padding: 10px;
`;

const PostTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const PostContent = styled.p`
  color: #fff;
`;

const PostInfo = styled.div`
  width: 360px;
  border: 3px solid #f00;
  padding: 10px;
  margin: 10px;

  p {
    display: flex;
    justify-content: space-around;
  }

  span {
    font-weight: bold;
  }
`;

const CommentList = styled.ul`
  width: 960px;
`;

const S = {
  Wrapper,
  PostBox,
  PostTitle,
  PostContent,
  PostInfo,
  CommentList,
};
