import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideWrapper = styled.div`
  /* display: flex; */
  /* border: 3px dashed yellow; */
  margin-left: 20px;
  .sideBox {
    margin-bottom: 20px;
    background-color: #fff;
    text-align: left;
    border: 1px solid #aaa;
  }
  .sideBoxTitle {
    font-size: 15px;
    background-color: navy;
    color: #fff;
    padding: 10px 15px;
  }
  .sideBoxText {
    font-size: 12px;
    padding: 10px 15px;
    line-height: 20px;
  }
  .sideBoxScroll {
    max-height: 227px;
    overflow: auto;
  }
  .sideBoxScroll > div {
    text-align: left;
    padding: 5px 10px;
    border-top: 1px solid #ddd;
    font-weight: 500;
    font-size: 14px;
  }
`;

const NewsSidebar = () => {
  return (
    <SideWrapper>
      <div className='sideBox'>
        <div className='sideBoxTitle'>NBA News 소개</div>
        <div className='sideBoxText'>
          NBA 리그 관련 뉴스, 간단한 소식, 루머 등을 포스팅 하는 공간입니다.
        </div>
      </div>
      <div className='sideBox'>
        <div className='sideBoxTitle'>새로운 NBA 뉴스</div>
        <div className='sideBoxText'>
          아래는 최신 NBA 뉴스 리스트입니다. 영어가 익숙하시다면 그렇지 않은 분들을 위해 아래 최신
          소식들을 전해 주세요!
        </div>
        <div className='sideBoxScroll'>
          <div>
            <Link to='none'>source expect kyrie irving to eventually get vaccine</Link>
          </div>
          <div>
            <Link to='none'>source expect kyrie irving to eventually get vaccine</Link>
          </div>
          <div>
            <Link to='none'>source expect kyrie irving to eventually get vaccine</Link>
          </div>
          <div>
            <Link to='none'>source expect kyrie irving to eventually get vaccine</Link>
          </div>
          <div>
            <Link to='none'>source expect kyrie irving to eventually get vaccine</Link>
          </div>
        </div>
      </div>
    </SideWrapper>
  );
};

export default NewsSidebar;
