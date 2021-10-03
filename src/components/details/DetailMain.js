import React from 'react';
import { GrDesktop } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DetailMainWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  h1 {
    font-size: 16px;
  }
  .detailHeader1 {
    padding: 0;
    margin: 0;
    font-size: 24px;
    font-weight: 400;
    text-align: left;
    padding: 10px 25px;
    background-color: #ddd;
    /* border: 1px solid red; */
  }
  .detailHeader2 {
    border: 1px solid #aaa;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 5px 15px; */
    div {
      margin-right: 5px;
      border-right: 1px solid #bbb;
    }
    .writeUserId {
      cursor: pointer;
    }
    div:nth-child(1) {
      /* background-color: yellowgreen; */
      padding: 10px;
    }
    div:nth-child(2) {
      padding: 10px;
      flex: 1;
      text-align: left;
      /* background-color: tomato; */
    }
    div:nth-child(3) {
      padding: 10px;
      /* background-color: violet; */
    }
    div:nth-child(4) {
      padding: 10px;
      /* background-color: violet; */
    }
  }
  .detailContent {
    padding: 40px;
    text-align: left;
    background-color: #fff;
  }
`;

const DetailMain = ({ post, error, loading }) => {
  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <DetailMainWrapper>존재하지 않는 포스트입니다.</DetailMainWrapper>;
    }
    return <DetailMainWrapper>오류 발생!!</DetailMainWrapper>;
  }
  // 로딩 중이거나 아직 포스트가 없을 때
  if (loading) {
    return <DetailMainWrapper>로딩 중</DetailMainWrapper>;
  } else if (!post) {
    return <DetailMainWrapper>포스트 없음</DetailMainWrapper>;
  }
  console.log(post, 'post에 뭐가 들었는지 보자');
  const { title, text, publichedDate } = post;
  return (
    <DetailMainWrapper>
      <div className='detailContainer'>
        <h1 className='detailHeader1'>{title}</h1>
        <div className='detailHeader2'>
          <div>
            <GrDesktop />
          </div>
          <div className='writeUserId'>
            <Link to='none'>작성자ID</Link>
          </div>
          <div>
            update at__
            {new Date(publichedDate).toLocaleDateString()}-
            {new Date(publichedDate).toLocaleTimeString()}
          </div>
          <div>Like숫자</div>
        </div>
        <div className='detailContent' dangerouslySetInnerHTML={{ __html: text }}>
          {/* <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div> */}
        </div>
        <div className='detailTail'>
          <div className='detailTag'></div>
          <div className='detailTeam'></div>
        </div>
      </div>
    </DetailMainWrapper>
  );
};

export default DetailMain;
