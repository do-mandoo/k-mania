import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const WriteActionButtonWrap = styled.div`
  margin-top: 16px;
  margin-bottom: 48px;
  button + button {
    margin-left: 8px;
  }
  .added {
    background-color: skyblue;
  }
  .canceled {
    background-color: tomato;
  }
`;
const StyledButton = styled(Button)`
  height: 35px;
  border: 1px solid #aaa;
  & + & {
    margin-left: 8px;
  }
`;
const WrithActionButtons = () => {
  const onClickAdd = e => {};
  const onClickBack = () => {
    window.history.back();
  };
  return (
    <WriteActionButtonWrap>
      <StyledButton className='added' onClick={onClickAdd}>
        포스트 등록
      </StyledButton>
      <StyledButton className='canceled' onClick={onClickBack}>
        작성취소
      </StyledButton>
    </WriteActionButtonWrap>
  );
};

export default WrithActionButtons;
