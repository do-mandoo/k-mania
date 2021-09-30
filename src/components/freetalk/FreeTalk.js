import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FreeTalkHot from './FreeTalkHot';
import FreeTalkMain from './FreeTalkMain';
import FreeTalkSidebar from './FreeTalkSidebar';

const Wrapper = styled.div`
  width: 1089px;
  margin: 30px auto 5px;
  .freetalkHeader {
    display: flex;
    justify-content: space-between;
    padding-right: 365px;
    h2 {
      margin: 0;
      padding: 0;
    }
    .topRight {
      display: flex;
      align-items: center;
      div {
        padding: 0 10px;
      }
    }
  }
  .freetalkBoard {
    display: flex;
  }
  .freetalkRight {
    background-color: #fff;
    border: 1px solid #aaa;
    flex: 2;
  }
  .freetalkLeft {
    flex: 1;
  }
`;

const FreeTalk = () => {
  return (
    <>
      <Wrapper>
        <div className='freetalkHeader'>
          <h2>Free-Talk</h2>
        </div>
        <div className='freetalkBoard'>
          <div className='freetalkRight'>
            <FreeTalkMain />
          </div>
          <button className='writeBtn'>
            <Link to='write'>글쓰기</Link>
          </button>
          <div className='freetalkLeft'>
            <FreeTalkSidebar />
          </div>
        </div>
        <FreeTalkHot />
      </Wrapper>
    </>
  );
};

export default FreeTalk;
