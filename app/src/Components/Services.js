import { Box, Button, Card, CardContent, CardMedia, Container, MobileStepper, Paper, Typography} from "@mui/material"
import { maxWidth } from "@mui/system";
import { useReducer } from "react";

const reducer = (state, action) => {

    switch (action.type) {

        case 'next' :
            if (state.id == 2) {
                return {id: state.id + 1, toggleNext: true};
            }
            else {
                return {id: state.id + 1};
            }

        case 'back' :
            if (state.id == 1){
                return {id: state.id - 1, toggleBack: true};
            }
            else {
                return {id: state.id - 1};
            }
    }
}

function Services() {

    const ServicesList = [
        {
            id: 0,
            title: "Custom Builds:",
            description: "Build the gaming rig of your dreams or a new workstations to get your job done faster. Our team will help you pick and choose whichever parts best suit your budget.",
            image: "services01"
        },
        {
            id: 1,
            title: "Upgrades:",
            description: "Upgrade your processor, GPU or any other part of your current rig with a wide selection of parts. Our most loyal customers will also get additional benefits!",
            image: "services02"
        },
        {
            id: 2,
            title: "PC Repairs:",
            description: "Did your computer stop working? Bring it to our shop so that our team can bring it back online in record time. We also handle laptop repairs of any kind, ranging from office units to gaming laptops.",
            image: "services03"
        },
        {
            id: 3,
            title: "Home Delivery:",
            description: "Due to the prevailing situation, it is quite risky to venture outdoors. But don't worry: you can order new parts from the comfort of your home. Our team will see that they get delivered to your doorstep.",
            image: "services04"
        }
    ]

    const initialState = {id: 0, toggleNext: false, toggleBack: true};

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Container>
            <Box sx={{ marginTop: "70px", padding: "10px"}}>
                <Typography variant="h2" align="center" sx={{ display: { xs: "none", md: "block"}}}>Services</Typography>
                <Typography variant="h3" align="center" sx={{ display: { xs: "block", md: "none"}}}>Services</Typography>
            </Box>

            <Box display="flex" sx={{padding: "20px", paddingBottom: "0px", alignItems: "center", justifyContent: "center", display: { xs: "flex", sm: "flex" } }}>
                <Typography paragraph variant="body1">Feel free to check out some of the services that are currently offered at our shop:</Typography>
            </Box>

            <Box display="flex" flexDirection="column" sx={{ marginBottom: "20px", padding: "20px", alignItems: "center", justifyContent: "center"}}>
                <Card sx={{ maxWidth: "800px", padding:"20px", border: "1px solid"}}><CardContent><CardMedia sx={{ minHeight: "100px", paddingBottom: "20px" }} src={'/images/' + ServicesList[state.id].image + '.jpg'} component="img" alt="Custom Build"/><Typography gutterBottom variant="h5">{ServicesList[state.id].title}</Typography><Typography paragraph variant="body2">{ServicesList[state.id].description}</Typography></CardContent>
                <Box display="flex" sx={{justifyContent: "center"}}>
                <MobileStepper 
                    variant="dots"
                    steps={4}
                    position="static"
                    activeStep={state.id}
                    nextButton={
                        <Button size="small" disabled={state.toggleNext} onClick={() => dispatch({type: 'next'})}>Next</Button> 
                    }
                    backButton={
                        <Button size="small" disabled={state.toggleBack} onClick={() => dispatch({type: 'back'})}>Back</Button>
                    }
                    sx={{ maxWidth: "400px", flexGrow: 1 }}
                />
                </Box>
                </Card>
            </Box>

        </Container>
    );
}

export default Services;