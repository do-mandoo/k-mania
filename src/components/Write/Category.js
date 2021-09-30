import React from 'react';
import styled from 'styled-components';

const CategoryWrapper = styled.div`
  margin-bottom: 10px;
  width: 100%;
  font-size: 13px;
  .categoryLeft {
    line-height: 35px;
    text-align: left;
    font-weight: 700;
  }
  .categoryRight {
    display: flex;
    div {
      padding: 3px 8px 7px 3px;
      background-color: #eee;
      border-radius: 3px;
      line-height: 100%;
      margin-bottom: 5px;
      margin-right: 5px;
      cursor: pointer;
      border: 1px solid #ccc;
      :hover {
        background-color: #efefef;
      }
    }
    label {
      cursor: pointer;
      :hover {
        background-color: #efefef;
      }
    }
    /* input[type='radio'] {
      cursor: default;
    } */
  }
`;

const Category = () => {
  return (
    <CategoryWrapper>
      <div className='categoryLeft'>게시물 카테고리</div>
      <div className='categoryRight'>
        <div>
          <input type='radio' id='Que' required='required' value='질문' />
          <label htmlFor='Que'>질문</label>
        </div>
        <div>
          <input type='radio' id='Nomal' required='required' value='일반' />
          <label htmlFor='Nomal'>일반</label>
        </div>
      </div>
    </CategoryWrapper>
  );
};

export default Category;
