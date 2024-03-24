import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#77c4ff',
			dark: '#254965',
		},
		secondary: {
			main: '#000',
			light: '#2f2f2f',
		},
		text: {
			primary: '#bbbbbb',
			secondary: '#FFF',
		},
		background: {
			paper: '#212121',
		},
	},
	typography: {
		fontFamily: "'Poppins', 'sans-serif'",
	},
});
