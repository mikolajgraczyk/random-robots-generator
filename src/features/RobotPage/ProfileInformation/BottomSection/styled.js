import styled from "styled-components";

export const StyledBottomSection = styled.div`
  display: flex;
  padding: 0 12px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-direction: column;
  }
`;

export const AdressInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px black solid;
  flex-basis: 100%;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    border-right: none;
    padding: 11px 0;
  }
`;

export const Country = styled.span``;

export const City = styled.span``;

export const Street = styled.span``;

export const EmploymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    border-top: 1px black solid;
    padding: 11px 0;
  }
`;

export const Title = styled.span``;

export const KeySkill = styled.span``;

export const Email = styled.span``;

export const PhoneNumber = styled.span``;
