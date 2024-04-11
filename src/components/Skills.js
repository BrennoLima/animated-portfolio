import React, { useState, useEffect } from 'react';
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
import JsLogo from '../assets/SVGs/JsLogo.svg';
import Github from '../assets/SVGs/Github.svg';
import { ComputerSVG } from '../SVGComponents/ComputerSVG';

export const Skills = () => {
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
				SKILLS
			</Typography>
			<ComputerSVG width='12vw' />
			<Card
				sx={{
					position: 'absolute',
					left: '35%',
					top: '-10%',
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
						<img src={Figma} alt='figma' />
					</Box>
					<Divider flexItem />
					<Box sx={{ pt: 1 }}>
						<Typography align='center' variant='subtitle2' fontWeight={600}>
							UI/UX Design
						</Typography>
					</Box>
					<Collapse
						in={expanded[1]}
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
								<Typography variant='caption'>Figma</Typography>
							</Grid>
							<Grid item sx={{ px: 1 }}>
								<Typography variant='caption'>SVG Illustration</Typography>
							</Grid>
						</Grid>
					</Collapse>
					<IconButton
						size='small'
						onClick={() => handleExpandClick(1)}
						aria-expanded={expanded[1]}
						aria-label='show more'
						sx={{
							color: (theme) =>
								theme.palette.getContrastText(theme.palette.background.paper),
							transform: !expanded[1] ? 'rotate(0deg)' : 'rotate(180deg)',
							transition: 'transform 0.2s linear',
						}}
					>
						<ExpandMoreIcon />
					</IconButton>
				</Stack>
			</Card>

			<Card
				sx={{
					position: 'absolute',
					right: '5%',
					top: 0,
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
							background: (theme) => theme.palette.background.paper,
							display: 'flex',
							justifyContent: 'center',
							py: 1,
						}}
					>
						<img src={JsLogo} alt='Javascript' />
					</Box>
					<Divider flexItem />
					<Box sx={{ pt: 1 }}>
						<Typography align='center' variant='subtitle2' fontWeight={600}>
							Frontend Development
						</Typography>
					</Box>
					<Collapse
						in={expanded[0]}
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
								<Typography variant='caption'>JavaScript</Typography>
							</Grid>
							<Grid item>
								<Typography variant='caption'>TypeScript</Typography>
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
							<Grid item>
								<Typography variant='caption'>CSS</Typography>
							</Grid>
						</Grid>
						<Box
							sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
						>
							<Typography variant='caption'>
								4+ year working experience
							</Typography>
						</Box>
					</Collapse>
					<IconButton
						size='small'
						onClick={() => handleExpandClick(0)}
						aria-expanded={expanded[0]}
						aria-label='show more'
						sx={{
							color: (theme) =>
								theme.palette.getContrastText(theme.palette.background.paper),
							transform: !expanded[0] ? 'rotate(0deg)' : 'rotate(180deg)',
							transition: 'transform 0.2s linear',
						}}
					>
						<ExpandMoreIcon />
					</IconButton>
				</Stack>
			</Card>

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
				id='float-2'
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
						<img src={Github} alt='github' />
					</Box>
					<Divider flexItem />
					<Box sx={{ pt: 1 }}>
						<Typography align='center' variant='subtitle2' fontWeight={600}>
							Tools/Industry
						</Typography>
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
