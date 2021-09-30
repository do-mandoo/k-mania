import React from 'react';
import styled from 'styled-components';
import NewsHot from './NewsHot';
import NewsMain from './NewsMain';
import NewsSidebar from './NewsSidebar';
import { BiCalendar, BiLink } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  /* margin-top: 30px; */
  .container {
    width: 1089px;
    margin: 30px auto 5px;
  }
  .listHeader {
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

  .boardRight {
    border: 1px solid #aaa;
    background-color: #fff;
    flex: 2;
  }
  .boardLeft {
    flex: 1;
  }
`;

const News = () => {
  return (
    <>
      <Wrapper>
        <div className='container'>
          <div className='listHeader'>
            <h2>NBA News</h2>
            <div className='topRight'>
              <div>
                <BiCalendar />
              </div>
              <div>
                <BiLink />
              </div>
            </div>
          </div>
          <div className='mainBoard'>
            <div className='boardRight'>
              <NewsMain />
            </div>
            <div>
              <button className='writeBtn'>
                <Link to='write'>글쓰기</Link>
              </button>
            </div>
            <div className='boardLeft'>
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
