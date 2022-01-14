import Home from './Components/Home'
import Menu from './Components/Menu'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { newTheme } from './Components/Theme';
import { Box, Container, CssBaseline, Typography } from '@mui/material';

function App() {

  return (
    <ThemeProvider theme={newTheme}>
      <CssBaseline />
    <div className="App">
      <Menu />
      <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginTop: "50px"}}>
      <Container maxWidth="lg" spacing={2} justifyContent="center" alignItems="center"> 
      <Home />
      </Container>
      </Box>
    </div>
    </ThemeProvider>
  );
}

export default App;
