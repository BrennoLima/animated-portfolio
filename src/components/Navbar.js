import React from 'react';
// Material UI
import { Box, Button, Container, IconButton, Grid } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
// Components
import { LogoSVG } from '../SVGComponents/LogoSVG';

export const Navbar = ({ page, setPage, toggleMode, mode }) => {
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
				<Grid item sx={{ padding: '0 2rem' }}>
					<IconButton
						onClick={() => setPage('landing')}
						sx={{ width: '50px', height: '50px', p: 0, m: 0 }}
					>
						<LogoSVG />
					</IconButton>
				</Grid>
				<Grid item sx={{ padding: '0 2rem' }}>
					<Button
						onClick={() => setPage('about')}
						sx={{
							textTransform: 'none',
							color: page === 'about' ? '#FFF' : '#B3ADDA',
							'&:hover': {
								color: '#FFFFFF',
							},
						}}
					>
						About
					</Button>
					<Button
						sx={{
							textTransform: 'none',
							color: page === 'education' ? '#FFF' : '#B3ADDA',
							'&:hover': {
								color: '#FFFFFF',
							},
						}}
						onClick={() => setPage('education')}
					>
						Education
					</Button>
					<Button
						sx={{
							textTransform: 'none',
							color: page === 'skills' ? '#FFF' : '#B3ADDA',
							'&:hover': {
								color: '#FFFFFF',
							},
						}}
						onClick={() => setPage('skills')}
					>
						Skills
					</Button>
					<Button
						sx={{
							textTransform: 'none',
							color: page === 'work' ? '#FFF' : '#B3ADDA',
							'&:hover': {
								color: '#FFFFFF',
							},
						}}
						onClick={() => setPage('work')}
					>
						Work
					</Button>
					<Button
						sx={{
							textTransform: 'none',
							color: page === 'projects' ? '#FFF' : '#B3ADDA',
							'&:hover': {
								color: '#FFFFFF',
							},
						}}
						onClick={() => setPage('projects')}
					>
						Projects
					</Button>
					<Button
						sx={{
							textTransform: 'none',
							color: page === 'contact' ? '#FFF' : '#B3ADDA',
							'&:hover': {
								color: '#FFFFFF',
							},
						}}
						onClick={() => setPage('contact')}
					>
						Contact
					</Button>
				</Grid>
				<Grid item>
					<IconButton
						onClick={toggleMode}
						sx={{
							color: (theme) => theme.palette.primary.main,
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
