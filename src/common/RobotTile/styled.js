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
`;

export const Picture = styled.img`
  width: 80px;
  border: 1px red solid;
`;

export const Information = styled.div``;

export const NameSection = styled.div`
`;

export const Name = styled.span``;

export const Surname = styled.span``;

export const Gender = styled.span``;

export const Age = styled.span``;
