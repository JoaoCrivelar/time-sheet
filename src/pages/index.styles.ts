import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors['gray-700']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  padding:4rem 0;
`;
