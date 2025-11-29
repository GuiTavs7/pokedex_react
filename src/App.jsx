import { AppContainer } from './styles/AppContainer.js';
import { AppRoutes } from './pages/AppRoutes.jsx';
import { ThemeProvider as ThemeContextProvider, ThemeContext } from './contexts/ThemeContext.jsx';
import { GlobalStyle } from './styles/GlobalStyle.js';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useContext } from 'react';

function ThemedApp() {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <AppRoutes />
      </AppContainer>
    </StyledThemeProvider>
  );
}

function App() {
  return (
    <ThemeContextProvider>
      <ThemedApp />
    </ThemeContextProvider>
  );
}

export default App;