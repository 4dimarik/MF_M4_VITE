import { MantineProvider, ColorSchemeProvider, Container } from '@mantine/core';
import { AppRouter } from './context/router';
import { useState } from 'react';

function App() {
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <Container>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <AppRouter />
        </MantineProvider>
      </ColorSchemeProvider>
    </Container>
  );
}

export default App;

