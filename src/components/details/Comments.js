import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const CommentBox = styled.div`
  width: 100%;
  border-top: 1px solid #aaa;
  padding: 32px 0 10px 20px;
  text-align: left;
  border: 1px solid red;
  h4 {
    color: #000;
    margin-top: 0;
    margin-bottom: 8px;
  }
`;

const CommentForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 550px;
  border: 1px solid #aaa;
  input,
  button {
    outline: none;
    border: none;
    font-size: 16px;
  }
  input {
    padding: 8px;
    flex: 1;
    min-width: 0;
  }
  button {
    cursor: pointer;
    padding-right: 16px;
    padding-left: 16px;
    border: none;
    background: #aaa;
    color: #fff;
    font-weight: bold;
    &:hover {
      background: #757575;
    }
  }
`;
const Comment = styled.div`
  margin: 5px 8px 0;
  color: #000;
  cursor: pointer;
  border: 1px solid #bbb;
  border-radius: 4px;
  background-color: #fff;
  padding: 5px;
  &:hover {
    opacity: 0.5;
  }
`;
const CommentsListWrap = styled.div`
  /* display: flex; */
  width: 500px;
  margin-top: 8px;
`;

// React.meno를 사용해서 tag값이 바뀔때만 리렌더링 되도록 처리
const CommentItem = React.memo(({ comment, onRemove }) => (
  <Comment
    onClick={() => {
      onRemove(comment);
    }}
  >
    {comment}
  </Comment>
));

// React.meno를 사용해서 tag값이 바뀔때만 리렌더링 되도록 처리
const CommentList = React.memo(({ comments, onRemove }) => (
  <CommentsListWrap>
    {comments.map(comment => (
      <CommentItem key={comment} comment={comment} onRemove={onRemove} />
    ))}
  </CommentsListWrap>
));

const Comments = () => {
  const [input, setInput] = useState('');
  const [localComments, setLocalComments] = useState([]);

  const insertCommnet = useCallback(
    comment => {
      if (!comment) return; // 공백이면 등록안됨
      setLocalComments([...localComments, comment]);
    },
    [localComments]
  );

  const onRemove = useCallback(
    comment => {
      setLocalComments(localComments.filter(t => t !== comment));
    },
    [localComments]
  );

  const onChange = useCallback(e => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      insertCommnet(input.trim()); // 앞뒤 공백 없앰
      setInput(''); // input초기화
    },
    [input, insertCommnet]
  );

  return (
    <CommentBox>
      <h4>댓글</h4>
      <CommentForm onSubmit={onSubmit}>
        <input placeholder='댓글을 입력하세요.' value={input} onChange={onChange} />
        <button type='submit'>추가</button>
      </CommentForm>
      <CommentList comments={localComments} onRemove={onRemove} />
    </CommentBox>
  );
};

export default Comments;
