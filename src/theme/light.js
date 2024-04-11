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
			primary: '#D4CEF8',
			secondary: '#DCD6FF',
		},
		background: {
			paper: '#f5f3ff',
		},
	},
	typography: {
		fontFamily: "'Poppins', 'sans-serif'",
	},
});
