import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: navy;
  display: flex;
  color: #fff;
  padding: 0 30px;
  justify-content: space-between;
  .right {
    display: flex;
    align-items: center;
  }
  .right > div {
    margin: 0 10px;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>MANIA</h1>
      <div className='right'>
        <div>접속인원</div>
        <div>로그인</div>
      </div>
    </Wrapper>
  );
};

export default Header;
