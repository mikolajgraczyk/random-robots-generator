import { StyledSection, Title, Content } from "./styled";

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </StyledSection>
  );
};

export default Section;
