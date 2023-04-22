import styled from "styled-components";

export const StyledBottomSection = styled.div`
  display: flex;
  padding: 0 12px;
  background: ${({ theme }) => theme.color.blackOpacity70};
  border-top: 1px black solid;

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
    gap: 20px;
  }
`;

export const AdressInfoSection = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
`;

export const EmploymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  padding: 11px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    border-top: 1px black solid;
    gap: 20px;
  }
`;

export const EmploymentInfoSection = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`;
