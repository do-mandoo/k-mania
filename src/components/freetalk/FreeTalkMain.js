import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border-top: 8px solid #0c2e51;
`;

const ListItemWrapper = styled.div`
  display: flex;
  /* width: 1089px; */
  border-bottom: 1px solid #aaa;
  justify-content: space-between;
  padding: 5px 10px;
  .listBar {
    display: flex;
  }
  .listBar > div {
    padding: 0 10px;
  }
  .listBar {
    align-items: center;
  }
  .look,
  .like {
    padding-right: 40px;
  }
`;

const TalkListItem = () => {
  return (
    <ListItemWrapper>
      <Link to='detail'>
        <div className='listBar'>
          <div>{new Date().toLocaleTimeString()}</div>
          <div className='like'>좋아요숫자</div>
          <div>디즈니 신작 엔칸토 티저</div>
          <div>작성자</div>
          <div className='look'>작성글방문숫자</div>
        </div>
      </Link>
    </ListItemWrapper>
  );
};

const FreeTalkMain = () => {
  return (
    <MainWrapper>
      <TalkListItem />
      <TalkListItem />
    </MainWrapper>
  );
};

export default FreeTalkMain;
