import React, { useEffect } from 'react';
import {
	Box,
	Card,
	Container,
	Collapse,
	Divider,
	Grid,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import gsap from 'gsap';

import Figma from '../assets/SVGs/Figma.svg';

export const Skills = () => {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	useEffect(() => {
		let float;
		const activateDelay = (items) => {
			items.map((item) => {
				return (float = gsap.fromTo(
					`#float-${item}`,
					{ y: '+=5px' },
					{
						y: '-=25px',
						yoyo: true,
						repeat: -1,
						ease: 'Power2.easeInOut',
						duration: 2,
						delay: 0.5 * item,
					}
				));
			});
		};
		activateDelay([0, 1]);
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
				SKILLS
			</Typography>
			<Card
				sx={{
					position: 'absolute',
					right: '0',
					top: '0',
					borderRadius: 1,
					width: '250px',
					color: (theme) =>
						theme.palette.getContrastText(theme.palette.background.paper),
				}}
				id='float-0'
			>
				<Stack sx={{ alignItems: 'center' }}>
					<Box
						sx={{
							width: '100%',
							background: '#1E1E1E',
							display: 'flex',
							justifyContent: 'center',
							py: 1,
						}}
					>
						<img src={Figma} alt='figma' />
					</Box>
					<Divider flexItem />
					<Box sx={{ py: 1 }}>
						<Typography align='center' variant='subtitle1' fontWeight={600}>
							UI/UX Design
						</Typography>
					</Box>
				</Stack>
			</Card>

			<Card
				sx={{
					position: 'absolute',
					left: '0',
					bottom: '20vh',
					borderRadius: 1,
					width: '250px',
					color: (theme) =>
						theme.palette.getContrastText(theme.palette.background.paper),
				}}
				id='float-1'
			>
				<Stack sx={{ alignItems: 'center' }}>
					<Box
						sx={{
							width: '100%',
							background: '#1E1E1E',
							display: 'flex',
							justifyContent: 'center',
							py: 1,
						}}
					>
						<img src={Figma} alt='figma' />
					</Box>
					<Divider flexItem />
					<Box sx={{ pt: 1 }}>
						<Typography align='center' variant='subtitle1' fontWeight={600}>
							Frontend Development
						</Typography>
					</Box>
					<Collapse
						in={expanded}
						timeout='auto'
						unmountOnExit
						sx={{ width: '100%' }}
					>
						<Grid
							container
							direction='row'
							alignItems='center'
							justifyContent='space-around'
							sx={{
								py: 2,
								px: 2,
							}}
							gap={3}
						>
							<Grid item>
								<Typography variant='caption'>React</Typography>
							</Grid>
							<Grid item>
								<Typography variant='caption'>Redux</Typography>
							</Grid>
							<Grid item>
								<Typography variant='caption'>Material UI</Typography>
							</Grid>
							<Grid item>
								<Typography variant='caption'>React</Typography>
							</Grid>
							<Grid item>
								<Typography variant='caption'>Redux</Typography>
							</Grid>
							<Grid item>
								<Typography variant='caption'>Material UI</Typography>
							</Grid>
						</Grid>
					</Collapse>
					<IconButton
						size='small'
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label='show more'
						sx={{
							transform: !expanded ? 'rotate(0deg)' : 'rotate(180deg)',
							transition: 'transform 0.2s linear',
						}}
					>
						<ExpandMoreIcon />
					</IconButton>
				</Stack>
			</Card>
		</Container>
	);
};
