import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DetailSidebarWrapper = styled.div`
  border: 1px solid #aaa;
  margin-bottom: 20px;
  background-color: #fff;
  text-align: left;
  font-size: 15px;
  .sideBoxTitle {
    background-color: navy;
    color: #fff;
    padding: 10px 15px;
  }
  .sideBoxText {
    padding: 10px 15px;
    line-height: 20px;
    div {
      width: 100%;
    }
    text-align: left;
  }
  .userNicName,
  .userSignDate {
    border-bottom: 1px solid #bbb;
    padding: 10px;
  }
  .userNicName > span:nth-child(1),
  .userSignDate > span:nth-child(1) {
    border-right: 1px solid #bbb;
    padding-right: 10px;
    display: inline-block;
    width: 100px;
  }
  .userNicName > span:nth-child(2),
  .userSignDate > span:nth-child(2) {
    padding-left: 10px;
  }
  .nicName {
    cursor: pointer;
  }
  .userActiveChart {
    padding: 10px;
  }
`;

const DetailSidebar = () => {
  return (
    <DetailSidebarWrapper>
      <div className='sideBoxTitle'>작성자 프로필</div>
      <div className='sideBoxText'>
        <div className='userNicName'>
          <span>
            <Link to='none' target='_blank'>
              닉네임(프사)
            </Link>
          </span>
          <span className='nicName'>
            <Link to='none'>HelloWorld</Link>
          </span>
        </div>
        <div className='userSignDate'>
          <span>가입일</span>
          <span>2013-7-19</span>
        </div>
        <div className='userActiveChart'>활동차트</div>
      </div>
    </DetailSidebarWrapper>
  );
};

export default DetailSidebar;
