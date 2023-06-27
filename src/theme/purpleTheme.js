import { createTheme } from "@mui/material";
import { red } from '@mui/material/colors';

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#893168'
        },
        secondary: {
            main: '#EAEAEA'
        },
        error: {
            main: red.A400
        }
    }
})