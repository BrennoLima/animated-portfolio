import { useMemo, useEffect, useState } from 'react';
import { createTheme, Box, ThemeProvider } from '@mui/material';

import { Navbar } from './components/Navbar';
import { Landing } from './components/Landing';
import { lightTheme } from './theme/light';
import { darkTheme } from './theme/dark';

function App() {
	const [page, setPage] = useState('landing');
	const [mode, setMode] = useState('light');
	const theme = useMemo(
		() => createTheme(mode === 'light' ? lightTheme : darkTheme),
		[mode]
	);

	const toggleMode = () => {
		if (mode === 'dark') {
			localStorage.setItem('theme-mode', 'light');
			return setMode('light');
		}
		localStorage.setItem('theme-mode', 'dark');
		return setMode('dark');
	};

	useEffect(() => {
		if (localStorage.getItem('theme-mode')) {
			setMode(localStorage.getItem('theme-mode'));
		}
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Box
				className='App'
				sx={{
					background: (theme) =>
						`radial-gradient(${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
					overflow: 'hidden',
					height: '100vh',
					position: 'relative',
				}}
			>
				<Navbar
					page={page}
					setPage={setPage}
					mode={mode}
					toggleMode={toggleMode}
				/>
				<Landing page={page} setPage={setPage} />
			</Box>
		</ThemeProvider>
	);
}

export default App;
