import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: darkred;
  color: #fff;
  font-weight: 500;
  display: flex;
  padding: 15px 10px;
  div {
    padding: 0 14.5px;
  }
`;

const Navigation = () => {
  return (
    <Wrapper>
      <div>News</div>
      <div>Free-Talk</div>
    </Wrapper>
  );
};

export default Navigation;
