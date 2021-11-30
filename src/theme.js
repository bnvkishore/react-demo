import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#395F8C',
        },
        secondary: {
            main: '#F0F0F0',
            dark: '#8692A6'
        },
    }
});
theme = responsiveFontSizes(theme);
export default theme;