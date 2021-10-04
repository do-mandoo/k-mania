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

const TalkListItem = ({ postFun }) => {
  console.log(postFun, 'postFun은 뭔데!!ㅋㅋㅋ');
  const { publichedDate, title, text, _id } = postFun._doc;
  return (
    <ListItemWrapper>
      <Link to={`/@${_id}`}>
        <div className='listBar'>
          <div>{title}</div>
          <div>{new Date(publichedDate).toLocaleDateString()}</div>
          <div className='like'>likeNum</div>
          <div>{text}</div>
          <div>{_id}</div>
          <div className='look'>visitNum</div>
        </div>
      </Link>
    </ListItemWrapper>
  );
};

const FreeTalkMain = ({ postsFun, loading, errorFun }) => {
  console.log(postsFun, 'postsFun뭐가넘어오냐');
  // 에러 발생 시
  if (errorFun) {
    return <MainWrapper>에러가 발생 했습니다.</MainWrapper>;
  }
  return (
    <MainWrapper>
      {!loading && postsFun && (
        <div>
          {postsFun.map(postFun => (
            <TalkListItem postFun={postFun} key={postFun.id} />
          ))}
        </div>
      )}
    </MainWrapper>
  );
};

export default FreeTalkMain;
