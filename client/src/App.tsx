import React, { FC } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import ProductCard from './pages/ProductCard';

type Props = {}

const App: FC<Props> = () => {

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        component="main"
        maxWidth="lg">
        <CssBaseline/>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ProductCard />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
