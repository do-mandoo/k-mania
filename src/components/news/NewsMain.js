import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const NewsListItem = ({ post }) => {
  console.log(post, 'post도 보까~');
  const { publichedDate, title, text, _id } = post._doc;
  return (
    <ListItemWrapper>
      {/* detail&wr_id=고유번호 */}
      <Link to={`/@${_id}`}>
        <div className='listBar'>
          <div className='teamLogos'>{title}</div>
          <div className='listBarText'>{text}</div>
          <div className='listBarRight'>
            {_id}
            <div className='listBarSub'>
              <span className='look'>5123</span>
              <span className='timeStamp'>{new Date(publichedDate).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </Link>
    </ListItemWrapper>
  );
};

const NewsMain = ({ posts, loading, error }) => {
  console.log(posts, 'posts뭐가넘어오냐');
  // 에러 발생 시
  if (error) {
    return <MainWrapper>에러가 발생 했습니다.</MainWrapper>;
  }
  return (
    <MainWrapper>
      {!loading && posts && (
        <div>
          {posts.map(post => (
            <NewsListItem post={post} key={post.id} />
          ))}
        </div>
      )}
    </MainWrapper>
  );
};

export default NewsMain;
