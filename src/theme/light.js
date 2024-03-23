import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#FFAD0E',
		},
		secondary: {
			main: '#413876',
			light: '#5F578A',
		},
		text: {
			primary: '#B3ADDA',
		},
	},
	typography: {
		fontFamily: "'Poppins', 'sans-serif'",
	},
});
