import React from 'react';
// Material UI
import { Box, Button, Container, IconButton, Grid } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
// Components
import { LogoSVG } from '../SVGComponents/LogoSVG';

export const Navbar = ({ page, setPage, toggleMode, mode }) => {
	const navItems = [
		'About',
		'Education',
		'Skills',
		'Work',
		'Projects',
		'Contact',
	];

	return (
		<Box
			sx={{
				width: '100%',
				position: 'fixed',
				top: 0,
				height: '50px',
				boxShadow: '1px 2px 3px rgba(0,0,0,0.3)',
				background: '#FFFFFF0D',
				zIndex: 1000,
			}}
		>
			<Container
				direction='row'
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Grid item>
					<IconButton
						onClick={() => setPage('landing')}
						sx={{ width: '50px', height: '50px', p: 0, m: 0 }}
					>
						<LogoSVG />
					</IconButton>
				</Grid>
				<Grid item>
					{navItems.map((navItem) => (
						<Button
							onClick={() => setPage(navItem.toLowerCase())}
							sx={{
								textTransform: 'none',
								color: (theme) => {
									if (page === navItem.toLowerCase())
										return theme.palette.primary.main;
									return theme.palette.text.primary;
								},
								'&:hover': {
									color: (theme) => theme.palette.primary.main,
								},
							}}
						>
							{navItem}
						</Button>
					))}
				</Grid>
				<Grid item>
					<IconButton
						onClick={toggleMode}
						sx={{
							color: (theme) => theme.palette.text.secondary,
							transition: '0.2s color ease-in',
						}}
						id='mode-switcher'
					>
						{mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
					</IconButton>
				</Grid>
			</Container>
		</Box>
	);
};
