import * as React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from "./Products"
import Services from "./Services"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';

function Menu() {

    return( 
        <div>
        <Box sx={{ minWidth: 320, flexGrow: 1}}>
        <AppBar position="fixed">
            <Toolbar sx={{ display: { xs: 'none', md: 'flex'} }}>
                <Typography variant="h5" sx={{ flexGrow: 1, marginRight: "10px"}}>Main Menu</Typography>
                <Button color="inherit" size="large" href="/">Home</Button>
                <Button color="inherit" size="large" href="about">About</Button>
                <Button color="inherit" size="large" href="products">Products</Button>
                <Button color="inherit" size="large" href="services">Services</Button>
            </Toolbar>
            <Toolbar sx={{ display: { xs: 'flex', md: 'none'} }}>
                <Button color="inherit" size="small" sx={{ flexGrow: 1}} href="/">Home</Button>
                <Button color="inherit" size="small" sx={{ flexGrow: 1}} href="about">About</Button>
                <Button color="inherit" size="small" sx={{ flexGrow: 1}} href="products">Products</Button>
                <Button color="inherit" size="small" sx={{ flexGrow: 1}} href="services">Services</Button>
            </Toolbar>
        </AppBar>
    </Box>
    </div>
    )
    
}

export default Menu;