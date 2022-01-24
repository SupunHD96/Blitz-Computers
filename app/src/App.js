import Home from './Components/Home'
import About from './Components/About'
import Products from "./Components/Products"
import Services from "./Components/Services"
import Menu from './Components/Menu'
import { Route, Routes, useLocation} from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { newTheme } from './Components/Theme';
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import { Slide } from '@mui/material'
import { Zoom } from '@mui/material'
import { useEffect, useState } from 'react'

function App() { 
  
  const [time, setTime] = useState(1000)
 
  useEffect( () => {
    if (performance.navigation.type === 1) {
      setTime(0)
    }
    else {
      setTime(1000)
    }
  }, []);


  return (
    
    <div className="App">

    <ThemeProvider theme={newTheme}>
    <CssBaseline />

    <div>

      <Menu />
      
      <Container maxWidth="lg" spacing={2} sx={{ alignItems: "center" }}> 
      <Slide direction="up" in timeout={ time } mountOnEnter unmountOnExit> 
        <Box display="flex" sx={{ justifyContent: "center" }}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="services" element={<Services />} />
          </Routes>
        </Box>
      </Slide>
      </Container>
      
    </div>
    
    </ThemeProvider>

    </div>
  );
}

export default App;
