import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors['gray-700']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  padding:4rem 0;
`;

export const IndicatorStack = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  gap:1rem;
  margin-top: 2.8rem;
  margin-bottom: 6.1rem;
`
