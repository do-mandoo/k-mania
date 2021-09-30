import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SearchingMainWrap = styled.div`
  .searchingResult {
    border-bottom: 1px solid #aaa;
    padding: 30px 20px;
    text-align: left;
    color: rgba(0, 0, 0, 0.5);
    font-size: 15px;
    font-weight: 500;
  }
`;

const ListItemWrapper = styled.div`
  padding: 20px;
  text-align: left;
  .listBar {
    padding: 10px;
    border-bottom: 1px solid #aaa;
    line-height: 30px;
    :hover {
      background-color: #eee;
      cursor: default;
    }
  }
  .searchHeder {
    font-size: 15px;
    margin: 0;
    color: navy;
    font-weight: 500;
    /* padding: 10px 0; */
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .searchDetailHistory {
    font-size: 14px;
    font-weight: 600;
  }
  .searchDetailText {
    font-size: 14px;
  }
`;

const SearchLIstItem = () => {
  return (
    <ListItemWrapper>
      {/* detail&wr_id=고유번호 */}
      <Link to='detail' target='_blank'>
        <div className='listBar'>
          <h3 className='searchHeder'>윈도우10에 백신 어떤거 쓰는게 좋을까요?</h3>
          <div className='searchDetailHistory'>nbamain.com &gt; bbs &gt; board</div>
          <div className='searchDetailText'>
            윈도우 10의 디펜더는 지금까지의 디펜더들과는 다르게 성능이 우수하다고 해서 쓰고
            있습니다만, 왠지 다른 무료 백신들에 비해서는 조금 무거운 것 같아서 다른 것을 ...
          </div>
        </div>
      </Link>
    </ListItemWrapper>
  );
};

const SearchingMain = () => {
  return (
    <SearchingMainWrap>
      <div className='searchingResult'>검색결과 약 8,930개(약0.24초)</div>
      <SearchLIstItem />
      <SearchLIstItem />
      <SearchLIstItem />
    </SearchingMainWrap>
  );
};

export default SearchingMain;
