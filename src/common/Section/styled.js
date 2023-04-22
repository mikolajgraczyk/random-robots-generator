import styled from "styled-components";

export const StyledSection = styled.section`

`;

export const Title = styled.h1`
  font-size: 34px;
  color: ${({ theme }) => theme.color.white};
  text-shadow: 0px 0px 2px ${({ theme }) => theme.color.white};
  letter-spacing: 2.5px;
`;

export const Content = styled.div`
  background-color: white;
  height: 370px;
  overflow-y: scroll;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.blackOpacity70};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.deepBlack};
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.doveGray};
    border-radius: 4px;
  }
`;
