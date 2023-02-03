import styled from 'styled-components';

export const Container = styled.div`
  width: 20rem;
  height: 8rem;
  background: ${props => props.theme.colors['gray-600']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TimeContent = styled.div`
  span {
    font-family: "Roboto Mono", monospace;
    font-size: 2.2rem;
    font-weight: bold;
  }
  strong {
    font-family: "Roboto Mono", monospace;
    font-size: 2.2rem;
    color:${props => props.theme.colors['blue-500']}
  }
`;

const STATUS_COLORS = {
  red:'red-500',
  green:'green-500'
} as const

type TypeTextProps = {
  color: keyof typeof STATUS_COLORS
}

export const TypeText = styled.span<TypeTextProps>`
  margin-top: 0.5rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  ::after {
    content: '';
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: ${props => props.theme.colors[STATUS_COLORS[props.color]]};
  }
`;