import React from 'react';
import styled from 'styled-components';
import Editor from './Editor';
import WriteSidebar from './WriteSidebar';

const WriteWrap = styled.div`
  width: 1089px;
  margin: 30px auto 5px;
  display: flex;
  .writeRight {
    flex: 2;
  }
  .writeLeft {
    flex: 1;
  }
`;

const Write = () => {
  return (
    <WriteWrap>
      <div className='writeRight'>
        <Editor />
      </div>
      <div className='writeLeft'>
        <WriteSidebar />
      </div>
    </WriteWrap>
  );
};

export default Write;
