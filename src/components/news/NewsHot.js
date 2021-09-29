import React from 'react';
import styled from 'styled-components';

const NewsHotWrapper = styled.div`
  margin-top: 50px;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  .hotBox {
    /* margin-left: 20px; */
    width: 350px;
    background-color: #fff;
    font-size: 12px;
    text-align: left;
  }
  .hotBoxTitle {
    background-color: navy;
    padding: 10px 15px;
    color: #fff;
  }
  .hotBoxText {
    padding: 10px 15px;
    line-height: 20px;
    div {
      border-bottom: 1px solid #ccc;
      padding: 5px 0;
    }
  }
`;

const NewsHot = () => {
  return (
    <NewsHotWrapper>
      <div className='hotBox'>
        <div className='hotBoxTitle'>NBA 섹션 최다 추천</div>
        <div className='hotBoxText'>
          <div>1. 21-22필리 미디어데이 이모저모 (시몬스사가)</div>
          <div>2. 풀조지는 진짜 입이 무거운 거였네요</div>
          <div>3. 스퍼스 미디어데이 정리</div>
          <div>4. 21-22필리 미디어데이 이모저모 (시몬스사가)</div>
          <div>5. 풀조지는 진짜 입이 무거운 거였네요</div>
          <div>6. 스퍼스 미디어데이 정리</div>
        </div>
      </div>
      <div className='hotBox'>
        <div className='hotBoxTitle'>NBA 섹션 최다 코멘트</div>
        <div className='hotBoxText'>
          <div>1. 21-22필리 미디어데이 이모저모 (시몬스사가)</div>
          <div>2. 풀조지는 진짜 입이 무거운 거였네요</div>
          <div>3. 스퍼스 미디어데이 정리</div>
          <div>4. 21-22필리 미디어데이 이모저모 (시몬스사가)</div>
          <div>5. 풀조지는 진짜 입이 무거운 거였네요</div>
          <div>6. 스퍼스 미디어데이 정리</div>
        </div>
      </div>
      <div className='hotBox'>
        <div className='hotBoxTitle'>NBA 섹션 최다 조회</div>
        <div className='hotBoxText'>
          <div>1. 21-22필리 미디어데이 이모저모 (시몬스사가)</div>
          <div>2. 풀조지는 진짜 입이 무거운 거였네요</div>
          <div>3. 스퍼스 미디어데이 정리</div>
          <div>4. 21-22필리 미디어데이 이모저모 (시몬스사가)</div>
          <div>5. 풀조지는 진짜 입이 무거운 거였네요</div>
          <div>6. 스퍼스 미디어데이 정리</div>
        </div>
      </div>
    </NewsHotWrapper>
  );
};

export default NewsHot;
