import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Button = ({ children, onClick }) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};

export default Button;
