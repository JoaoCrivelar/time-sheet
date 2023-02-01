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


export const Brant = styled.div`
    position: absolute;
    width: 134px;
    height: 40px;
    top: 124px;
    left: 200px;
`;

export const Clock = styled.div`
    position: absolute;
    left: 1136px;
    right: 256px;
    top: 120px;
`;

export const List = styled.div`
    position: absolute;
    left: 1192px;
    right: 200px;
    top: 120px;
`;