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
	Link,
	IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BrennoNFT from '../assets/SVGs/BrennoNFT.svg';
import Igloo from '../assets/SVGs/igloo-logo.svg';
import gsap from 'gsap';

import { RocketSVG } from '../SVGComponents/RocketSVG';

export const Projects = () => {
	const [expanded, setExpanded] = useState(true);

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
					p: 1,
					position: 'absolute',
					right: '35%',
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
							width: '150px',
							background: (theme) => theme.palette.background.paper,
							display: 'flex',
							justifyContent: 'center',
							py: 1,
						}}
					>
						<img src={Igloo} alt='igloo-software' />
					</Box>
					<Divider flexItem />
					<Box sx={{ pt: 1 }}>
						<Typography
							component={Link}
							href='https://www.igloosoftware.com/'
							target='__blank'
							align='center'
							variant='subtitle2'
							fontWeight={600}
							sx={{ color: 'black', textDecorationColor: 'black' }}
						>
							Igloo Software (Professional)
						</Typography>
					</Box>
				</Stack>
			</Card>
			<Card
				sx={{
					position: 'absolute',
					right: '5%',
					bottom: '50%',
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
						<img src={BrennoNFT} alt='BL-projects' />
					</Box>
					<Divider flexItem />
					<Box sx={{ pt: 1 }}>
						<Typography
							component={Link}
							href='https://main.d2b35kk5cgiv9g.amplifyapp.com/'
							target='__blank'
							align='center'
							variant='subtitle2'
							fontWeight={600}
							sx={{ color: 'black', textDecorationColor: 'black' }}
						>
							Small projects
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
								px: 1,
							}}
							gap={2}
						>
							<Grid item sx={{ px: 1 }}>
								<Typography
									component={Link}
									href='https://main.d2b35kk5cgiv9g.amplifyapp.com/rafa-arts'
									target='__blank'
									variant='caption'
									sx={{ color: 'black', textDecorationColor: 'black' }}
								>
									RafaArts
								</Typography>
							</Grid>
							<Grid item sx={{ px: 1 }}>
								<Typography
									component={Link}
									href='https://main.d2b35kk5cgiv9g.amplifyapp.com/luhoca-designs'
									target='__blank'
									variant='caption'
									sx={{ color: 'black', textDecorationColor: 'black' }}
								>
									HocaDesigns
								</Typography>
							</Grid>
							<Grid item sx={{ px: 1 }}>
								<Typography
									component={Link}
									href='https://main.d2b35kk5cgiv9g.amplifyapp.com/mortgage-calculator'
									target='__blank'
									variant='caption'
									sx={{ color: 'black', textDecorationColor: 'black' }}
								>
									RBC mortgage
								</Typography>
							</Grid>
							<Grid item sx={{ px: 1 }}>
								<Typography
									component={Link}
									href='https://main.d2b35kk5cgiv9g.amplifyapp.com/old-bank'
									target='__blank'
									variant='caption'
									sx={{ color: 'black', textDecorationColor: 'black' }}
								>
									Old Bank cafe
								</Typography>
							</Grid>
						</Grid>
					</Collapse>
					<IconButton
						size='small'
						onClick={() => setExpanded((prev) => !prev)}
						aria-expanded={expanded}
						aria-label='show more'
						sx={{
							color: (theme) =>
								theme.palette.getContrastText(theme.palette.background.paper),
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
