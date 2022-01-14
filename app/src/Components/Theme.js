import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple} from '@mui/material/colors';

export const newTheme = createTheme({
        palette: {
            primary: {
                main: "#0082FC",
            },
            background: {
                paper: "#0F0F0F",
                default: "#131313"
            },
            text: {
                primary: "#FFFFFF"
            }
        },
    })