import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";

function Home() {
    return(
        <Container>
        <Box sx={{ marginTop: "50px", marginBottom: "50px", padding: "20px"}}>
            <Typography variant="h1" align="center" sx={{ display: { xs: "none", md: "block"}}}>Blitz Computers</Typography>
            <Typography variant="h3" align="center" sx={{ display: { xs: "block", md: "none"}}}>Blitz Computers</Typography>
        </Box>
        <Box sx={{ marginTop: "50px", marginBottom: "20px", padding: "20px"}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}><Card><CardMedia src='/images/home01.jpg' component="img" alt="Home 1"/></Card></Grid>
                <Grid item xs={12} md={4}><Card><CardMedia src='/images/home02.jpg' component="img" alt="Home 2"/></Card></Grid>
                <Grid item xs={12} md={4}><Card><CardMedia src='/images/home03.jpg' component="img" alt="Home 3"/></Card></Grid>
            </Grid>
            <Grid container spacing={5} display="flex" align="center" justifyContent="center" alignItems="center" sx={{ marginTop: "30px", marginBottom: "30px", padding: "20px"}}>
                <Grid item xs={12} md={8}><Typography variant="h5" align="center" sx={{ display: { xs: "block", md: "block"} }}>The latest parts, at the best prices:</Typography></Grid>
                <Grid item xs={12} md={4}><Button variant="outlined" size="large">View Products</Button></Grid>
                <Grid item xs={12} md={8}><Typography variant="h5" align="center" sx={{ display: { xs: "block", md: "block"} }}>Build your own custom rig:</Typography></Grid>
                <Grid item xs={12} md={4}><Button variant="outlined" size="large" color="secondary">View Services</Button></Grid>
            </Grid>
        </Box>
        </Container>
    )
}

export default Home;