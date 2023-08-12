import { Container } from '@mantine/core';
import './App.css';
import { AppRouter } from './context/router';

function App() {
  return (
    <Container>
      <AppRouter />
    </Container>
  );
}

export default App;

