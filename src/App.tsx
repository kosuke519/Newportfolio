import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { HeaderOnly } from './components/templates/HeaderOnly';
import { Router } from './router/Router';
import theme from '../src/theme/theme';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <HeaderOnly>
          <Router />
        </HeaderOnly>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
