import React from 'react';
import styled from 'styled-components';

const SideWrapper = styled.div`
  margin-left: 20px;
  .sideBox {
    margin-bottom: 20px;
    background-color: #fff;
    text-align: left;
    border: 1px solid #aaa;
  }
  .sideBoxTitle {
    background-color: navy;
    color: #fff;
    font-size: 15px;
    padding: 10px 15px;
  }
  .sideBoxText {
    padding: 10px 15px;
    display: flex;
    font-size: 12px;
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
  button {
    border: 1px solid #000;
    font-size: 14px;
    margin: 5px;
    cursor: pointer;
  }
`;

const FreeTalkSidebar = () => {
  return (
    <SideWrapper>
      <div className='sideBox'>
        <div className='sideBoxTitle'>Free-Talk소개</div>
        <div className='sideBoxText'>
          타게시판에 속하지 않는 모든 주제(단, 정치, 종교관련 주제는 금지)에 대해 이야기를 나누는
          공간입니다.
        </div>
      </div>
      <div className='sideBox'>
        <div className='sideBoxTitle'>카테고리 별 보기</div>
        <div className='sideBoxText'>
          <div className='viewAll'>
            <button>전체</button>
          </div>
          <div className='viewQuestion'>
            <button>질문</button>
          </div>
          <div className='viewNomal'>
            <button>일반</button>
          </div>
        </div>
      </div>
    </SideWrapper>
  );
};

export default FreeTalkSidebar;
