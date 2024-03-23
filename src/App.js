import { useMemo, useEffect, useState } from 'react';
import { createTheme, Button, IconButton, ThemeProvider } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { lightTheme } from './theme/light';
import { darkTheme } from './theme/dark';

function App() {
	const [mode, setMode] = useState('dark');
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
		<div className='App'>
			<ThemeProvider theme={theme}>
				<IconButton
					onClick={toggleMode}
					sx={{
						zIndex: 100,
						position: 'fixed',
						top: 16,
						right: 16,
						transition: '0.2s color ease-in',
						'&:hover': {
							color: (theme) => theme.palette.text.primary,
						},
					}}
					id='mode-switcher'
				>
					{mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
				</IconButton>
			</ThemeProvider>
		</div>
	);
}

export default App;
