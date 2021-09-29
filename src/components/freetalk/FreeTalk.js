import React from 'react';
import styled from 'styled-components';
import FreeTalkHot from './FreeTalkHot';
import FreeTalkMain from './FreeTalkMain';
import FreeTalkSidebar from './FreeTalkSidebar';

const Wrapper = styled.div`
  width: 1089px;
  margin: 0 auto;
  background-color: #ccc;
  border: 1px solid #000;
  .listheader {
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
  .mainBoard {
    display: flex;
  }
  .mainBoard .board1:nth-child(1) {
    flex: 2;
  }
  .mainBoard .board2:nth-child(2) {
    flex: 1;
  }
`;

const FreeTalk = () => {
  return (
    <>
      <Wrapper>
        <div className='listheader'>
          <h2>Free-Talk</h2>
        </div>
        <div className='mainBoard'>
          <div className='board1'>
            <FreeTalkMain />
          </div>
          <div className='board2'>
            <FreeTalkSidebar />
          </div>
        </div>
        <FreeTalkHot />
      </Wrapper>
    </>
  );
};

export default FreeTalk;
