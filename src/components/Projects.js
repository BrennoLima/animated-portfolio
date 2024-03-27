import React, { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import gsap from 'gsap';

import { RocketSVG } from '../SVGComponents/RocketSVG';

export const Projects = () => {
	useEffect(() => {
		let float;
		const activateDelay = (items) => {
			items.map((item) => {
				return (float = gsap.fromTo(
					`#float-${item}`,
					{ y: '+=5px' },
					{
						y: '-=10px',
						yoyo: true,
						repeat: -1,
						ease: 'Power2.easeInOut',
						duration: 2,
						delay: 0.5 * item,
					}
				));
			});
		};
		activateDelay([0, 1, 2]);
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
				PROJECTS
			</Typography>
			<RocketSVG width='12vw' />
			<Box
				sx={{
					position: 'absolute',
					right: '-5%',
					top: '-5%',
					borderRadius: 1,
					width: '500px',
					color: (theme) =>
						theme.palette.getContrastText(theme.palette.background.paper),
				}}
				id='float-0'
			></Box>
		</Container>
	);
};
