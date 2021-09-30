import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 4px 16px;
  color: #fff;
  outline: none;
  cursor: pointer;
  background-color: skyblue;
  :hover {
    background-color: #56b666;
  }
`;

const Button = props => <StyledButton {...props} />;

export default Button;
