import { useState } from "react";
import styled from "styled-components";

function Comment({ nickName, content, onRemove }) {
  return (
    <S.CommentItem>
      <button>수정</button>
      <button onClick={() => onRemove(nickName)}>삭제</button>

      <p>
        작성자: <span>{nickName}</span>
      </p>

      <p>
        댓글 내용: <span>{content}</span>
      </p>
    </S.CommentItem>
  );
}
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;

const S = {
  CommentItem,
};
