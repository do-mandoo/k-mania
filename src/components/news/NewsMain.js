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
  border-bottom: 1px solid #ddd;
  justify-content: space-around;
  padding: 5px 10px;
  cursor: pointer;
  .listBar,
  .listSub {
    display: flex;
  }
  .listBar > div {
    padding: 0 10px;
  }
  .listBar {
    align-items: center;
  }
  .listSub > div {
    padding: 0 10px;
  }
  .look {
    padding-right: 40px;
  }
`;

const NewsListItem = () => {
  return (
    <ListItemWrapper>
      {/* detail&wr_id=고유번호 */}
      <Link to='detail'>
        <div className='listBar'>
          <div className='teamLogos'>뱃지</div>
          <div className='listBarText'>
            트레벨린 퀸과 부분 보장 트레이닝 캠프 계약을 맺은 레이커스
          </div>
          <div className='listBarRight'>
            미네소타 팀버울브스
            <div className='listBarSub'>
              <span className='look'>5123</span>
              <span className='timeStamp'>{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </Link>
    </ListItemWrapper>
  );
};

const NewsMain = () => {
  return (
    <MainWrapper>
      <NewsListItem />
      <NewsListItem />
      <NewsListItem />
    </MainWrapper>
  );
};

export default NewsMain;
