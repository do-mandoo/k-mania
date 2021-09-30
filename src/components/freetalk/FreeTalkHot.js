import React from 'react';
import styled from 'styled-components';

const TalkHotWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  .hotBox {
    width: 350px;
    background-color: #fff;
    font-size: 12px;
    text-align: left;
    border: 1px solid #aaa;
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

const FreeTalkHot = () => {
  return (
    <TalkHotWrapper>
      <div className='hotBox'>
        <div className='hotBoxTitle'>community 섹션 최다 추천</div>
        <div className='hotBoxText'>
          <div>1. 저에게도 이런 날이 오는군요...</div>
          <div>2. 감사한 마음에 후기 아닌 후기 써보겠습니다</div>
          <div>3. 퇴직하던 날 받았던 문자</div>
          <div>4. 저에게도 이런 날이 오는군요...</div>
          <div>5. 감사한 마음에 후기 아닌 후기 써보겠습니다</div>
          <div>6. 퇴직하던 날 받았던 문자</div>
        </div>
      </div>
      <div className='hotBox'>
        <div className='hotBoxTitle'>community 섹션 최다 코멘트</div>
        <div className='hotBoxText'>
          <div>1. 저에게도 이런 날이 오는군요...</div>
          <div>2. 감사한 마음에 후기 아닌 후기 써보겠습니다</div>
          <div>3. 퇴직하던 날 받았던 문자</div>
          <div>4. 저에게도 이런 날이 오는군요...</div>
          <div>5. 감사한 마음에 후기 아닌 후기 써보겠습니다</div>
          <div>6. 퇴직하던 날 받았던 문자</div>
        </div>
      </div>
      <div className='hotBox'>
        <div className='hotBoxTitle'>community 섹션 최다 조회</div>
        <div className='hotBoxText'>
          <div>1. 저에게도 이런 날이 오는군요...</div>
          <div>2. 감사한 마음에 후기 아닌 후기 써보겠습니다</div>
          <div>3. 퇴직하던 날 받았던 문자</div>
          <div>4. 저에게도 이런 날이 오는군요...</div>
          <div>5. 감사한 마음에 후기 아닌 후기 써보겠습니다</div>
          <div>6. 퇴직하던 날 받았던 문자</div>
        </div>
      </div>
    </TalkHotWrapper>
  );
};

export default FreeTalkHot;
