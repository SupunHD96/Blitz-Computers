import { Box, Container, Typography, Card, CardMedia} from "@mui/material"

function About() {
    return (
        <Container>
            <Box sx={{ marginTop: "70px", padding: "10px"}}>
                <Typography variant="h2" align="center" sx={{ display: { xs: "none", md: "block"}}}>About Us</Typography>
                <Typography variant="h3" align="center" sx={{ display: { xs: "block", md: "none"}}}>About Us</Typography>
            </Box>
            <Box sx={{ marginTop: "20px", padding: "20px"}}>
                <Typography variant="body1" align="center">The market leaders in the world of enthusiant-grade PC building ever since we began operations, our team at Blitz Computers strives to provide our customers with cutting edge hardware and impeccable service while maintaing competitive prices.</Typography>
                
            </Box>

            <Box sx={{ padding: "20px"}}>
                <Card><CardMedia src='/images/about.jpg' component="img" alt="About" sx={{  maxHeight: "500px" }}/></Card>
            </Box>

            <Box sx={{ marginBottom: "20px", padding: "20px"}}>
                <Typography variant="body1" align="center">Whether you are in need of an upgrade, a completely new system or even some new gaming accessories, don't hesitate to get in touch with us!</Typography>
            </Box>
        </Container>
    );
}

export default About;