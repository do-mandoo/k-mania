import React from 'react';
import styled from 'styled-components';

const WriteSideWrapper = styled.div`
  margin-left: 20px;
  .sideBox {
    margin-bottom: 20px;
    background-color: #fff;
    text-align: left;
    border: 1px solid #aaa;
  }
  .sideBoxTitle {
    font-size: 15px;
    background-color: navy;
    color: #fff;
    padding: 10px 15px;
  }
  .sideBoxText {
    font-size: 12px;
    padding: 10px 15px;
    line-height: 20px;
  }

  .notice1 {
    border-bottom: 1px solid #aaa;
  }
`;

const WriteSidebar = () => {
  return (
    <WriteSideWrapper>
      <div className='sideBox'>
        <div className='sideBoxTitle'>Free-Talk 글쓰기 안내</div>
        <div className='sideBoxText'>
          <div className='notice1'>
            타 사이트의 게시물을 옮겨오실 경우 저작권 보호를 위해 내용을 그대로 붙여넣지 마시고 내용
            요약 및 원문링크(또는 출처)를 삽입해 주세요.
          </div>
          <div className='notice2'>
            매니아 커뮤니티에서는 회원분들간의 지나친 분쟁을 예방하기 위해서 정치/종교 관련 게시물을
            포스팅 하는 것을 금지하고 있습니다.
          </div>
        </div>
      </div>
    </WriteSideWrapper>
  );
};

export default WriteSidebar;
