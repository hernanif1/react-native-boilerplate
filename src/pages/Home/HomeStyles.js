import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background.primary};
`;

const Button = styled.Button`
  margin-bottom: 10;
`;

const Text = styled.Text`
  color: ${props => props.theme.text.primary};
`;

export { Button, Container, Text };
