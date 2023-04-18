import { StyledSection, Title } from "./styled";

const Section = ({title, children}) => {
    return(
        <StyledSection>
            <Title>{title}</Title>
            {children}
        </StyledSection>
    );
};

export default Section;