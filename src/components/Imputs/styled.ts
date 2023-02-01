import styled from "styled-components";

export const Container = styled.div`
    margin-top: 3.6rem;
    margin-left: 3%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const H1 = styled.text`
    font-size: 2.2rem;

`
export const H2 = styled.text`
    font-size: 1.6rem;
`
export const H3 = styled.text`
    font-size: 2.2rem;
    color: ${props => props.theme.colors['blue-500']};
`

export const Card = styled.div`
    background: ${props => props.theme.colors['gray-600']};
    width: 20rem;
    height: 8rem;
    margin-right: 4.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.8rem;
`