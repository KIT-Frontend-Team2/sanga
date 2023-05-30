import { useState } from "react";
import styled from "styled-components";

function Comment({ user, content }) {
  const [modal, setModal] = useState(false);

  return (
    <S.CommentItem>
      <p>
        작성자: <span>{user}</span>
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
