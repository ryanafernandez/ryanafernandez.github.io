import styled from 'styled-components';

export const Box = styled.div`
    position: absolute;
    padding: 8px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f0f0f0;
    bottom: 0;
    width: 100%;
`;

export const FooterLink = styled.a`
    color: grey;

    &:hover {
        color: black;
        transition: 200ms ease-in;
    }
`;

export const Row = styled.div`

`;

export const Text = styled.p`

`;