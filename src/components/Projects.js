import React, { useState, useEffect } from 'react';
import {
	Box,
	Card,
	Stack,
	Divider,
	Container,
	Typography,
	Collapse,
	Grid,
	IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import gsap from 'gsap';

import { RocketSVG } from '../SVGComponents/RocketSVG';

export const Projects = () => {
	const [expanded, setExpanded] = useState([true, false, false]);

	const handleExpandClick = (index) => {
		var newState = [false, false, false];
		newState[index] = !expanded[index];
		setExpanded(newState);
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
			<RocketSVG width='13vw' />
			<Card
				sx={{
					position: 'absolute',
					right: '-5%',
					bottom: '15%',
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
							background: (theme) => theme.palette.background.paper,
							display: 'flex',
							justifyContent: 'center',
							py: 1,
						}}
					>
						<img src={'Github'} alt='github' />
					</Box>
					<Divider flexItem />
					<Box sx={{ pt: 1 }}>
						<Typography
							align='center'
							variant='subtitle2'
							fontWeight={600}
						></Typography>
					</Box>
					<Collapse
						in={expanded[2]}
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
							gap={2}
						>
							<Grid item sx={{ px: 1 }}>
								<Typography variant='caption'>GitHub</Typography>
							</Grid>
							<Grid item sx={{ px: 1 }}>
								<Typography variant='caption'>Jira</Typography>
							</Grid>
							<Grid item sx={{ px: 1 }}>
								<Typography variant='caption'>Agile</Typography>
							</Grid>
							<Grid item sx={{ px: 1 }}>
								<Typography variant='caption'>VS Code</Typography>
							</Grid>
							<Grid item sx={{ px: 1 }}>
								<Typography variant='caption'>Postman</Typography>
							</Grid>
						</Grid>
					</Collapse>
					<IconButton
						size='small'
						onClick={() => handleExpandClick(2)}
						aria-expanded={expanded[2]}
						aria-label='show more'
						sx={{
							color: (theme) =>
								theme.palette.getContrastText(theme.palette.background.paper),
							transform: !expanded[2] ? 'rotate(0deg)' : 'rotate(180deg)',
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
