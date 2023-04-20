import styled from "styled-components";
import { Link } from "react-router-dom";

export const Robot = styled(Link)`
  border: 1px black solid;
  display: flex;
  align-items: center;
  gap: 16px;
  height: 100px;
  flex-grow: 1;
  padding: 0 12px;
  background-color: ${({ theme }) => theme.color.blackOpacity70};
  border-radius: 8px;

  &:link {
    text-decoration: none;
    color: black;
  }

  &:visited {
    color: black;
  }
`;

export const Picture = styled.img`
  width: 80px;
  border: 1px ${({theme}) => theme.color.doveGray} solid;
  border-radius: 50%;
  background: #44444C;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.color.white};
  font-weight: 200;
`;

export const NameSection = styled.div`
  font-weight: 700;
  letter-spacing: 0.5px;
`;

export const Name = styled.span``;

export const Surname = styled.span``;

export const Gender = styled.span`
  margin-top: 8px;
`;

export const Age = styled.span``;
