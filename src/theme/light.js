import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#FFAD0E',
			dark: '#8D671D',
		},
		secondary: {
			main: '#413876',
			light: '#5F578A',
		},
		text: {
			primary: '#B3ADDA',
			secondary: '#DCD6FF',
		},
	},
	typography: {
		fontFamily: "'Poppins', 'sans-serif'",
	},
});
