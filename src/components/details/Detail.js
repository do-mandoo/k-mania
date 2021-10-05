import React from 'react';
import styled from 'styled-components';
// import DetailContainer from '../../container/DetailContainer';
import Comments from './Comments';
import DetailMain from './DetailMain';

import DetailSidebar from './DetailSidebar';

const ViewWrapper = styled.div`
  width: 1089px;
  margin: 30px auto 5px;
  /* background-color: #ccc; */
  .detailHeader {
    display: flex;
    /* padding-left: 10px; */
    h2 {
      padding: 0;
      margin: 0;
    }
  }
  .detailBorder {
    display: flex;
  }
  .boardRight {
    flex: 2;
  }
  .boarderRightMain {
    border: 1px solid #aaa;
    background-color: #fff;
  }
  .boardLeft {
    margin-left: 20px;
    flex: 1;
  }
`;

const Detail = () => {
  return (
    <ViewWrapper>
      <div className='detailHeader'>
        <h2>{'news' ? 'NBA News' : 'Free-Talk'}</h2>
      </div>
      <div className='detailBorder'>
        <div className='boardRight'>
          <div className='boarderRightMain'>
            {/* <DetailContainer /> */}
            <DetailMain />
          </div>
          <div>
            <Comments />
          </div>
        </div>
        <div className='boardLeft'>
          <DetailSidebar />
        </div>
      </div>
    </ViewWrapper>
  );
};

export default Detail;
