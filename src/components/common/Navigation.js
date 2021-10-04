import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: darkred;
  font-weight: 500;
  display: flex;
  padding: 15px 10px;
  div {
    padding: 0 14.5px;
    cursor: pointer;
    color: #fff;
    transition: color 0.35s;
    :hover {
      color: #0c2e51;
    }
  }
`;

const Navigation = () => {
  return (
    <Wrapper>
      <div>
        <Link to='/news' className='news'>
          News
        </Link>
      </div>
      <div>
        <Link to='/freeTalk' className='freetalk'>
          Free-Talk
        </Link>
      </div>
    </Wrapper>
  );
};

export default Navigation;
