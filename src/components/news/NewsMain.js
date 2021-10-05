import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { boardList } from '../../Data';

const MainWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border-top: 8px solid #0c2e51;
  width: 750px;
`;

const ListItemWrapper = styled.div`
  /* display: flex; */
  border-bottom: 1px solid #ddd;
  padding: 5px 10px;
  cursor: pointer;
  text-align: left;
  .listBar,
  .listSub {
    display: flex;
    justify-content: space-around;
  }
  .listBar > div {
    padding: 0 10px;
  }
  .listBar {
    align-items: center;
  }
  .listBarText {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    background-color: #eee;
    margin-right: 10px;
    width: 400px;
  }
  .teamLogos {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100px;
    background-color: #eee;
    margin-right: 10px;
  }
  .listBarSub > div {
    padding: 0 10px;
  }
  .look {
    padding-right: 40px;
  }
`;

const NewsListItem = ({ data }) => {
  console.log(data, '받아온 이거 확인해');
  return (
    <ListItemWrapper>
      {/* detail&wr_id=고유번호 */}
      <Link to={`/@${data.id}`}>
        <div className='listBar'>
          <div className='teamLogos'>{data.title}</div>
          <div className='listBarText'>{data.text}</div>
          <div className='listBarRight'>
            userId-{data.id}
            <div className='listBarSub'>
              {/* <span className='look'>5123</span> */}
              <span className='timeStamp'>{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </Link>
    </ListItemWrapper>
  );
};

const NewsMain = () => {
  const datas = boardList;
  console.log(datas, '이거 확인해');
  return (
    <MainWrapper>
      {datas.map(data => (
        <NewsListItem data={data} key={data.id} />
      ))}
    </MainWrapper>
  );
};

export default NewsMain;
