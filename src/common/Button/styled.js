import styled from "styled-components";

export const Button = styled.button`
  font-family: "Roboto Flex", sans-serif;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 2px;
  width: 100%;
  margin-top: 4px;
  padding: 8px;
  border-radius: 8px;
  border: none;
  background: ${({theme}) => theme.color.blackOpacity70};
  color: ${({theme}) => theme.color.white};
  transition: 0.1s;

  &:hover{
    cursor: pointer;
    background: ${({theme}) => theme.color.deepBlackOpacity70};
  }

  &:active{
    transform: scale(1.01);
    background: ${({theme}) => theme.color.deepBlackOpacity80};
  }
`;
