import React from 'react';
import { GlobalStayle, AppWrapper, Container } from './styles'
import { ToDo } from './Todo'
function App() {
  return (
    <AppWrapper>
      <GlobalStayle></GlobalStayle>
      <Container>
        <ToDo></ToDo>
      </Container>
    </AppWrapper>
  );
}

export default App;
