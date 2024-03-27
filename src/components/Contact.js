import React, { useEffect } from 'react';
import { Stack, Container, Card, Typography, Link } from '@mui/material';
import gsap from 'gsap';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import { PhoneEmail } from '../SVGComponents/PhoneEmail';

export const Contact = () => {
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
				CONTACT
			</Typography>
			<PhoneEmail width='12vw' />
			<Link
				href='https://www.linkedin.com/in/brennocesarlima/'
				target='__blank'
			>
				<Card
					sx={{
						position: 'absolute',
						right: '5%',
						top: '30%',
						borderRadius: 1,
						py: 1,
						px: 2,
						color: (theme) =>
							theme.palette.getContrastText(theme.palette.background.paper),
					}}
					id='float-0'
				>
					<Stack gap={1} sx={{ alignItems: 'center' }}>
						<LinkedInIcon
							sx={{
								color: '#0077B5',
								width: '65px',
								height: '65px',
							}}
						/>
						<Typography variant='body2'>brennocesarlima</Typography>
					</Stack>
				</Card>
			</Link>
			<Link href='mailto:brennocesar@live.com' target='__blank'>
				<Card
					sx={{
						position: 'absolute',
						right: '25%',
						top: '-5%',
						borderRadius: 1,
						py: 1,
						px: 2,
						color: (theme) =>
							theme.palette.getContrastText(theme.palette.background.paper),
					}}
					id='float-1'
				>
					<Stack gap={1} sx={{ alignItems: 'center' }}>
						<EmailIcon
							sx={{
								color: (theme) =>
									theme.palette.getContrastText(theme.palette.background.paper),
								width: '65px',
								height: '65px',
							}}
						/>
						<Typography variant='body2'>brennocesar@live.com</Typography>
					</Stack>
				</Card>
			</Link>
		</Container>
	);
};
