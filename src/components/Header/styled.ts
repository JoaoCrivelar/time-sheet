import styled, { css } from "styled-components";
import nextLink from "next/link";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 4rem;
`

export const Navigation = styled.aside``

type LinkProps = {
    isActive:boolean
}

const linkModifier = {
    active: () => css`
        color:${props => props.theme.colors['blue-500']};
    `
}

export const Link = styled(nextLink)<LinkProps>`
  ${(props) => css`
    color: ${props.theme.colors["gray-300"]};
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;

    transition: border-bottom 0.5s;
    :hover {
      border-bottom: 1px solid ${props.theme.colors["blue-500"]};
    }

    :first-child {
      margin-right: 2.5rem;
    }
    
    ${props.isActive && linkModifier.active()}
  `}
`;
