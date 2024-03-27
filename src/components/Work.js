import React, { useState, useEffect } from 'react';
import {
	Box,
	Container,
	Stack,
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@mui/material';
import gsap from 'gsap';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { JiraboardSVG } from '../SVGComponents/JiraboardSVG';

export const Work = () => {
	const [expanded, setExpanded] = useState(1);

	const handleChange = (panel) => {
		setExpanded(expanded === panel ? null : panel);
	};

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
				WORK
			</Typography>
			<JiraboardSVG width='15vw' />
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
			>
				<Accordion
					sx={{
						color: (theme) =>
							theme.palette.getContrastText(theme.palette.background.paper),
					}}
					expanded={expanded === 1}
					onChange={() => handleChange(1)}
				>
					<AccordionSummary
						expandIcon={<ArrowDropDownIcon />}
						aria-controls='panel1-content'
						id='panel1-header'
					>
						<Stack direction='row' sx={{ alignItems: 'baseline', width: 1 }}>
							<Typography variant='subtitle2'>Frontend Developer</Typography>
							<Box sx={{ flex: 1, borderBottom: '1px dashed #ccc', mx: 1 }} />
							<Typography variant='caption' sx={{ pr: 1 }}>
								Igloo Software (2022 - current)
							</Typography>
						</Stack>
					</AccordionSummary>
					<AccordionDetails>
						<Stack gap={2}>
							<Typography variant='body2'>
								• Developed and maintained web applications using{' '}
								<b>JavaScript, TypeScript, React</b>, and Velocity
							</Typography>
							<Typography variant='body2'>
								• <b>Debug, test</b>, and <b>review</b> code PRs
							</Typography>
							<Typography variant='body2'>
								• Collaborate with other developers and teams to ensure the
								project success
							</Typography>
							<Typography variant='body2'>
								• <b>Designed</b> pages and components on <b>Figma</b>
							</Typography>
							<Typography variant='body2'>
								• Ensure that <b>user interfaces</b> are user-friendly, easy to
								navigate, and visually appealing
							</Typography>
						</Stack>
					</AccordionDetails>
				</Accordion>
				<Accordion
					sx={{
						color: (theme) =>
							theme.palette.getContrastText(theme.palette.background.paper),
					}}
					expanded={expanded === 2}
					onChange={() => handleChange(2)}
				>
					<AccordionSummary
						expandIcon={<ArrowDropDownIcon />}
						aria-controls='panel2-content'
						id='panel2-header'
					>
						<Stack direction='row' sx={{ alignItems: 'baseline', width: 1 }}>
							<Typography variant='subtitle2'>
								Junior Frontend Developer
							</Typography>
							<Box sx={{ flex: 1, borderBottom: '1px dashed #ccc', mx: 1 }} />
							<Typography variant='caption' sx={{ pr: 1 }}>
								RecruitForMe Inc (2020 - 2022)
							</Typography>
						</Stack>
					</AccordionSummary>
					<AccordionDetails>
						<Stack gap={2}>
							<Typography variant='body2'>
								• Developed and maintained the <b>frontend</b> application using
								<b>JavaScript, React, Redux</b>
							</Typography>
							<Typography variant='body2'>
								• <b>Designed</b> pages and components on <b>Figma</b>
							</Typography>
							<Typography variant='body2'>
								• Managed co-op interns, assigning small tasks and doing code
								reviews.
							</Typography>
						</Stack>
					</AccordionDetails>
				</Accordion>
				<Accordion
					sx={{
						color: (theme) =>
							theme.palette.getContrastText(theme.palette.background.paper),
					}}
					expanded={expanded === 3}
					onChange={() => handleChange(3)}
				>
					<AccordionSummary
						expandIcon={<ArrowDropDownIcon />}
						aria-controls='panel3-content'
						id='panel3-header'
					>
						<Stack direction='row' sx={{ alignItems: 'baseline', width: 1 }}>
							<Typography variant='subtitle2'>Programmer Analyst</Typography>
							<Box sx={{ flex: 1, borderBottom: '1px dashed #ccc', mx: 1 }} />
							<Typography variant='caption' sx={{ pr: 1 }}>
								Cognizant (2019 - 2020)
							</Typography>
						</Stack>
					</AccordionSummary>
					<AccordionDetails>
						<Stack gap={2}>
							<Typography variant='body2'>
								• Developed and performed <b>manual and automated tests</b>{' '}
								cases for quality assurance.
							</Typography>
							<Typography variant='body2'>
								• Collaborated with developers to <b>identify and fix</b>{' '}
								root-cause bugs.
							</Typography>
							<Typography variant='body2'>
								• <b>Troubleshoot, debug</b>, and upgrade existing software to
								meet client needs.
							</Typography>
						</Stack>
					</AccordionDetails>
				</Accordion>
			</Box>
		</Container>
	);
};
