import * as React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';

function Menu() {
    return( 
        <Box sx={{ minWidth: 320, flexGrow: 1}}>
        <AppBar position="static">
            <Toolbar sx={{ display: { xs: 'none', md: 'flex'} }}>
                <Typography variant="h5" sx={{ flexGrow: 1, marginRight: "10px"}}>Main Menu</Typography>
                <Button color="inherit" size="large">Home</Button>
                <Button color="inherit" size="large">About</Button>
                <Button color="inherit" size="large">Products</Button>
                <Button color="inherit" size="large">Services</Button>
            </Toolbar>
            <Toolbar sx={{ display: { xs: 'flex', md: 'none'} }}>
                <Button color="inherit" size="small" sx={{ flexGrow: 1}}>Home</Button>
                <Button color="inherit" size="small" sx={{ flexGrow: 1}}>About</Button>
                <Button color="inherit" size="small" sx={{ flexGrow: 1}}>Products</Button>
                <Button color="inherit" size="small" sx={{ flexGrow: 1}}>Services</Button>
            </Toolbar>
        </AppBar>
    </Box>
    )
    
}

export default Menu;