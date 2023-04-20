import styled, { keyframes } from "styled-components";

const rotate = keyframes`
to {
  transform: rotate(360deg);
}
`;

export const StyledDiscover = styled.div``;

export const List = styled.div`
  display: grid;
  gap: 4px;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
`;

export const LoadingCircle = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-top: 125px;
  border: 8px white solid;
  border-top: 8px ${({ theme }) => theme.color.doveGray} solid;
  border-radius: 50%;

  animation: ${rotate} 0.5s linear infinite;
`;
