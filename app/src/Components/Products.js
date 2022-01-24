import { Box, Container, Card, CardContent, CardMedia, Divider, Grid, Typography} from "@mui/material"

function Products() {
    return (
        <Container>
            <Box sx={{ marginTop: "70px", padding: "10px" }}>
                <Typography variant="h2" align="center" sx={{ display: { xs: "none", md: "block"}}}>Products</Typography>
                <Typography variant="h3" align="center" sx={{ display: { xs: "block", md: "none"}}}>Products</Typography>
            </Box>

            <Box sx={{ padding: "20px", marginBottom:"20px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{ marginBottom: "1px"}}><Typography variant="h5" sx={{ marginLeft: "5px"}}>Processors:</Typography></Grid>
                    <Grid item xs={6} sm={4} md={3}><Card><CardMedia sx={{ padding: "20px" }} src='/images/r7.jpg' component="img" alt="Ryzen 7" /><CardContent><Typography variant="h6" align="center">AMD Ryzen 7 5800X</Typography></CardContent></Card></Grid>
                    <Grid item xs={6} sm={4} md={3}><Card><CardMedia sx={{ padding: "20px" }} src='/images/r5.jpg' component="img" alt="Ryzen 5" /><CardContent><Typography variant="h6" align="center">AMD Ryzen 5 5600X</Typography></CardContent></Card></Grid>
                    <Grid item xs={6} sm={4} md={3}><Card><CardMedia sx={{ padding: "20px" }} src='/images/r9.jpg' component="img" alt="Ryzen 9" /><CardContent><Typography variant="h6" align="center">AMD Ryzen 5 5950X</Typography></CardContent></Card></Grid>
                    <Grid item xs={6} sm={4} md={3}><Card><CardMedia sx={{ padding: "20px" }} src='/images/i9.jpg' component="img" alt="Intel i9" /><CardContent><Typography variant="h6" align="center">Intel Core i9 12900KF</Typography></CardContent></Card></Grid>
                    <Grid item xs={6} sm={4} md={3}><Card><CardMedia sx={{ padding: "20px" }} src='/images/i7.jpg' component="img" alt="Intel i7" /><CardContent><Typography variant="h6" align="center">Intel Core i7 12700K</Typography></CardContent></Card></Grid>
                    <Grid item xs={6} sm={4} md={3}><Card><CardMedia sx={{ padding: "20px" }} src='/images/i5.jpg' component="img" alt="Intel i5" /><CardContent><Typography variant="h6" align="center">Intel Core i5 12600K</Typography></CardContent></Card></Grid>
                </Grid>
            </Box>

            <Box sx={{ padding: "20px" }}>
                <Grid container spacing={2}>
                <Grid item xs={12} sx={{ marginBottom: "1px"}}><Typography variant="h5" sx={{ marginLeft: "5px"}}>Motherboards:</Typography></Grid>
                <Grid item xs={6} sm={4} md={3}><Card><CardMedia sx={{ padding: "20px" }} src='/images/asusZ690.jpg' component="img" alt="Asus Z690" /><CardContent><Typography variant="h6" align="center">ASUS TUF Z690-Plus</Typography></CardContent></Card></Grid>
                <Grid item xs={6} sm={4} md={3}><Card><CardMedia sx={{ padding: "20px" }} src='/images/gigabyteZ690.jpg' component="img" alt="Gigabyte Z690" /><CardContent><Typography variant="h6" align="center">Gigabyte Z690 Aorus Elite</Typography></CardContent></Card></Grid>
                <Grid item xs={6} sm={4} md={3}><Card><CardMedia sx={{ padding: "20px" }} src='/images/msiB550.jpg' component="img" alt="MSI B550" /><CardContent><Typography variant="h6" align="center">MSI B550-A Pro</Typography></CardContent></Card></Grid>
                <Grid item xs={6} sm={4} md={3}><Card><CardMedia sx={{ padding: "20px" }} src='/images/asusB550.jpg' component="img" alt="Asus B550" /><CardContent><Typography variant="h6" align="center">ASUS Prime B550-Plus</Typography></CardContent></Card></Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Products;