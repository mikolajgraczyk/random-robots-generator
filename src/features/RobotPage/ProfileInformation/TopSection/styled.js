import styled from "styled-components";

export const StyledTopSection = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  margin-left: 5%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const BasicInfo = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-top: 64px;

  @media(max-width: ${({theme}) => theme.breakpoint.mobile}px){
    gap: 6px;
    margin-top: 8px;
  }
`;

export const SpecificInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Gender = styled.span``;

export const DateOfBirth = styled.span``;

export const Name = styled.span`
  font-size: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 28px;
  }
`;

export const Age = styled.span`
  font-size: 36px;

  @media(max-width: ${({theme}) => theme.breakpoint.mobile}px){
    font-size: 18px;
  }
`;

export const Picture = styled.img`
  border: 1px black solid;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 125px;
  }
`;
