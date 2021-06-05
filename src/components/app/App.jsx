import React from 'react';
import MaterialComponents from '../MaterialComponents';
import Button from '@material-ui/core/Button';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['ZCOOL KuaiLe', 'cursive'].join(','),
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <MaterialComponents />
    </ThemeProvider>
  );
}
