import React from 'react';
import styled from 'styled-components';
import NewsHot from './NewsHot';
import NewsMain from './NewsMain';
import NewsSidebar from './NewsSidebar';

const Wrapper = styled.div`
  /* background-color: #ccc; */
  .container {
    width: 1089px;
    margin: 0 auto 5px;
  }
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
    border: 4px dashed green;
    background-color: #fff;
    flex: 2;
  }
  .mainBoard .board2:nth-child(2) {
    margin-left: 20px;
    flex: 1;
  }
`;

const News = () => {
  return (
    <>
      <Wrapper>
        <div className='container'>
          <div className='listheader'>
            <h2>NBA News</h2>
            <div className='topRight'>
              <div>달력</div>
              <div>링크</div>
            </div>
          </div>
          <div className='mainBoard'>
            <div className='board1'>
              <NewsMain />
            </div>
            <div className='board2'>
              <NewsSidebar />
            </div>
          </div>
          <NewsHot />
        </div>
      </Wrapper>
    </>
  );
};

export default News;
