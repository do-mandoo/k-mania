import React from 'react';
import styled from 'styled-components';
// import NewsHot from './NewsHot';
// import NewsMain from './NewsMain';
// import NewsSidebar from './NewsSidebar';
import { BiCalendar, BiLink } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import SearchingMain from './SearchingMain';
import SearchingSidebar from './SearchingSidebar';

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
    position: relative;
  }
  .rightBtn {
    position: absolute;
    bottom: -30px;
    right: 0;
  }
  .boardLeft {
    flex: 1;
  }
`;

const Search = () => {
  return (
    <>
      <Wrapper>
        <div className='container'>
          <div className='listHeader'>
            <h2>NBA News</h2>
            {/* <div className='topRight'>
              <div>
                <BiCalendar />
              </div>
              <div>
                <BiLink />
              </div>
            </div> */}
          </div>
          <div className='mainBoard'>
            <div className='boardRight'>
              <div className='rightItems'>
                <SearchingMain />
              </div>
              <div className='rightBtn'></div>
            </div>
            <div className='boardLeft'>
              <SearchingSidebar />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Search;
