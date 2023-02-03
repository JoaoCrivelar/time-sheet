import styled from 'styled-components';

export const Container = styled.div`    
  width: 50rem;
  height: 20rem;
  background: ${props => props.theme.colors['gray-600']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6rem;
`;

export const TimeContent = styled.div`
  span {
    font-family: "Roboto Mono", monospace;
    font-size: 10rem;
    font-weight: bold;
  }
  strong {
    font-family: "Roboto Mono", monospace;
    font-size: 10rem;
    color:${props => props.theme.colors['blue-500']}
  }
`;

export const TypeText = styled.span`
  margin-top: 0.5rem;
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`;