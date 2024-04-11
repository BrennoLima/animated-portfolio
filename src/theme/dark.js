import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#77c4ff',
			dark: '#254965',
		},
		secondary: {
			main: '#1c1c1c',
			light: '#434343',
		},
		text: {
			primary: '#bbbbbb',
			secondary: '#FFF',
		},
		background: {
			paper: '#F1F1F1',
		},
	},
	typography: {
		fontFamily: "'Poppins', 'sans-serif'",
	},
});
