import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

import { TorontoSVG } from '../SVGComponents/TorontoSVG';
import { ResumeSVG } from '../SVGComponents/ResumeSVG';

export const About = () => {
	return (
		<Container maxWidth='lg'>
			<Typography
				color='text.primary'
				fontWeight='bold'
				variant='h4'
				sx={{
					letterSpacing: '0.4rem',
					my: 8,
				}}
			>
				ABOUT ME
			</Typography>
			<Box sx={{ mt: 8 }}>
				<Box sx={{ display: 'inline-block', textAlign: 'center' }}>
					<TorontoSVG height='25vh' />
					<Typography
						color='text.primary'
						variant='h6'
						sx={{
							mt: 2,
						}}
					>
						Toronto, CA.
					</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					position: 'absolute',
					right: 0,
					bottom: '20vh',
					height: '20vh',
				}}
			>
				<Box sx={{ display: 'inline-block', textAlign: 'center' }}>
					<Box style={{ height: '15vh' }}>
						<ResumeSVG />
					</Box>

					<Typography
						color='text.primary'
						variant='h6'
						sx={{
							mt: 2,
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<DownloadIcon sx={{ mr: 1 }} /> Resume
					</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					height: '35vh',
					width: '40%',
					position: 'absolute',
					top: '8vh',
					left: '55%',
				}}
			>
				<Box
					sx={{
						height: '40%',
						background: (theme) => theme.palette.text.primary,
						borderRadius: '1rem',
						p: 2,
						boxShadow: (theme) =>
							`-12px 12px 0px ${theme.palette.text.primary}40`,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Typography align='center' variant='h6'>
						Nice to meet you! I am Brenno Lima, a frontend web developer.
					</Typography>
				</Box>
				<Box
					sx={{
						width: '3.5vh',
						height: '3.5vh',
						borderRadius: '50%',
						border: '3px solid',
						borderColor: (theme) => theme.palette.text.primary,
						mt: 3,
						mb: 2,
						ml: 4,
					}}
				/>
				<Box
					sx={{
						width: '2vh',
						height: '2vh',
						borderRadius: '50%',
						border: '3px solid',
						borderColor: (theme) => theme.palette.text.primary,
						ml: 2,
					}}
				/>
			</Box>
		</Container>
	);
};
