import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  margin-top: 50px;
  /* background-color: #ccc; */
  .footertop {
    padding: 15px 0;
    background-color: #fff;
    display: flex;
    justify-content: space-evenly;
    font-size: 14px;
  }
  .footerbottom {
    background-color: #0c2e51;
    color: #fff;
    font-weight: 400;
    padding: 50px 10px;
    display: flex;
    justify-content: space-around;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div className='footer footertop'>
        <div>공지사항</div>
        <div>사이트 소개</div>
        <div>운영공론장</div>
        <div>그린스마일</div>
        <div>제안/문의</div>
        <div>최근운영내역</div>
        <div>개인정보취급방침</div>
      </div>
      <div className='footer footerbottom'>
        <div>Copyright Mania Community. All right reserved.</div>
        <div>Monitored by MANiA STATUS</div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
