import React, { useEffect } from 'react';
import {
	Box,
	Card,
	Container,
	Collapse,
	Divider,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import gsap from 'gsap';

import Seneca from '../assets/SVGs/Seneca.svg';
import Unb from '../assets/SVGs/Unb.svg';
import { SchoolSVG } from '../SVGComponents/SchoolSVG';

export const Education = () => {
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
				EDUCATION
			</Typography>
			<SchoolSVG height='25vh' />
			<Card
				sx={{
					position: 'absolute',
					right: '20%',
					top: '0',
					borderRadius: 1,
					width: '250px',
					color: (theme) =>
						theme.palette.getContrastText(theme.palette.background.paper),
				}}
				id='float-0'
			>
				<Stack sx={{ alignItems: 'center' }}>
					<img src={Seneca} alt='Seneca-College' width={140} height={70} />
					<Divider flexItem />
					<Box sx={{ pt: 1 }}>
						<Typography align='center' variant='subtitle1' fontWeight={600}>
							Seneca College (2019)
						</Typography>
						<Typography align='center' variant='body2'>
							Computer Programmer
						</Typography>
					</Box>
					<Collapse in={expanded} timeout='auto' unmountOnExit>
						<Typography align='center' variant='caption'>
							Graduation with honours
						</Typography>
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

			<Card
				sx={{
					position: 'absolute',
					right: '0',
					bottom: '20vh',
					borderRadius: 1,
					width: '250px',
					color: (theme) =>
						theme.palette.getContrastText(theme.palette.background.paper),
				}}
				id='float-1'
			>
				<Stack sx={{ alignItems: 'center' }}>
					<Box sx={{ py: 2 }}>
						<img src={Unb} alt='Unb' width={140} height={70} />
					</Box>
					<Divider flexItem />
					<Box sx={{ p: 1 }}>
						<Typography align='center' variant='subtitle1' fontWeight={600}>
							Universty of Brasilia (2017)
						</Typography>
						<Typography align='center' variant='body2'>
							Computer Science
						</Typography>
					</Box>
				</Stack>
			</Card>
		</Container>
	);
};
