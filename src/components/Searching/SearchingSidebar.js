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

const SearchingSidebar = () => {
  return (
    <div>
      <SideWrapper>
        <div className='sideBox'>
          <div className='sideBoxTitle'>페이지 소개</div>
          <div className='sideBoxText'>
            구글 검색엔진을 이용한 매니아 커뮤니티 전체 게시판을 대상으로 원하는 게시물을 쉽게
            검색하실 수 있는 기능입니다.
            <ul>
              <li>
                게시물이 언제 어디서 올라왔는지는 모르지만 중요 키워드는 알고 있을 때 유용한
                기능입니다.
              </li>
              <li>
                대상 게시물이 많고 제목/본문/닉네임 등의 검색 조건 설정이 불가능하기 때문에 검색어가
                상세할 수록 검색에 도움이 됩니다.
              </li>
            </ul>
          </div>
        </div>
        {/* <div className='sideBox'>
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
          </div> */}
        {/* </div> */}
      </SideWrapper>
    </div>
  );
};

export default SearchingSidebar;
