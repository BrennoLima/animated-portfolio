import React, { useEffect } from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import gsap from 'gsap';

import { LandingBlob } from '../SVGComponents/LandingBlob';
import { BrennoSVG } from '../SVGComponents/BrennoSVG';

export const MobileLanding = ({ page, setPage }) => {
	useEffect(() => {
		if (page !== 'landing') floatLeft();
		else back();
	}, [page]);

	const floatLeft = () => {
		gsap.to('.floating-item', { opacity: 0 });
		gsap.to('.floating-item', { x: '-1000%', duration: 2 });
		gsap.to('#intro', { opacity: 0 });
		gsap.to('#back-btn', { opacity: 1, delay: 0.5 });
		gsap.to('#new-page', { opacity: 1, delay: 0.5 });
	};

	const back = () => {
		gsap.to('#new-page', { opacity: 0 });
		gsap.to('.floating-item', { opacity: 1, delay: 0.25 });
		gsap.to('.floating-item', { x: 0, duration: 2 });
		gsap.to('#intro', { opacity: 1, delay: 1.5 });
		gsap.to('#back-btn', { opacity: 0 });
	};

	const navbar_height = '50px';

	return (
		<Container
			maxWidth='lg'
			sx={{
				position: 'relative',
				height: '100vh',
				mt: navbar_height,
			}}
		>
			<LandingBlob />
			<Stack
				sx={{
					height: '55vh',
					width: '100%',
					position: 'absolute',
					bottom: '10vh',
				}}
			>
				<Box id='intro' sx={{ pb: 3 }}>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Typography
							color='text.secondary'
							fontWeight='700'
							variant='h4'
							sx={{ mr: 2 }}
						>
							I'M
						</Typography>
						<Typography color='primary' fontWeight='700' variant='h3'>
							Brenno
						</Typography>
					</Box>

					<Typography
						color='text.secondary'
						align='center'
						fontWeight='700'
						variant='h6'
					>
						Creative UI/UX developer
					</Typography>
				</Box>
				<BrennoSVG width='25vw' />
			</Stack>
		</Container>
	);
};
