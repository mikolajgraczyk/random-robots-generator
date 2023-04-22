import styled from "styled-components";

export const StyledProfileInformation = styled.section`
  color: ${({theme}) => theme.color.white};
  background: ${({ theme }) => theme.color.blackOpacity70};
  margin-top: 96.5px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media(max-width: ${({theme}) => theme.breakpoint.mobile}px){
    gap: 8;
  }
`;
