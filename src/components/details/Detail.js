import React from 'react';
import styled from 'styled-components';
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
    border: 1px solid #aaa;
    background-color: #fff;
    flex: 2;
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
          <DetailMain />
        </div>
        <div className='boardLeft'>
          <DetailSidebar />
        </div>
      </div>
    </ViewWrapper>
  );
};

export default Detail;
