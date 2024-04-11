import React, { useEffect, useState } from 'react';
import { Box, Container, IconButton, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import gsap from 'gsap';

import { TorontoSVG } from '../SVGComponents/TorontoSVG';
import { ResumeSVG } from '../SVGComponents/ResumeSVG';

export const About = () => {
	const [activeChat, setActiveChat] = useState(0);
	const ALL_CHATS = [
		'Nice to meet you! I am Brenno Lima, a frontend web developer.',
		'Later on I will write something here',
		'but now, I wanna code this website',
	];

	const handleChat = () => {
		if (activeChat < ALL_CHATS.length - 1) {
			return setActiveChat((prev) => prev + 1);
		}
		return setActiveChat(0);
	};

	useEffect(() => {
		const float = gsap.fromTo(
			'#resume',
			{ y: '+=5px' },
			{
				y: '-=25px',
				yoyo: true,
				repeat: -1,
				ease: 'Power2.easeInOut',
				duration: 2,
			}
		);
		return () => {
			float.kill();
		};
	}, []);

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
					<TorontoSVG width='13vw' />
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
					height: '35vh',
					width: '40%',
					position: 'absolute',
					top: 0,
					left: '55%',
				}}
			>
				<Box
					sx={{
						height: '40%',
						background: (theme) => theme.palette.background.paper,
						borderRadius: '1rem',
						p: 2,
						boxShadow: (theme) =>
							`-12px 12px 0px ${theme.palette.background.paper}40`,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						position: 'relative',
					}}
				>
					<Typography align='center' variant='h6'>
						{ALL_CHATS[activeChat]}
					</Typography>
					<IconButton
						onClick={handleChat}
						sx={{ position: 'absolute', bottom: 10, right: 10 }}
					>
						<MoreHorizIcon />
					</IconButton>
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
			<Box
				sx={{
					position: 'absolute',
					right: '5vw',
					bottom: '20vh',
					height: '20vh',
				}}
			>
				<Box sx={{ display: 'inline-block', textAlign: 'center' }} id='resume'>
					<Box style={{ height: '15vh' }}>
						<ResumeSVG />
					</Box>
					<Typography
						color='text.primary'
						variant='h6'
						sx={{
							mt: 1,
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<DownloadIcon sx={{ mr: 1 }} /> Resume
					</Typography>
				</Box>
			</Box>
		</Container>
	);
};
