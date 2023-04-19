import styled from "styled-components";

export const StyledHomepage = styled.main`
    display: grid;
    grid-template-columns: 4fr auto;
    gap: 12px;

    @media(max-width: ${({theme}) => theme.breakpoint.mobile}px){
        grid-template-columns: auto;
    }
`;