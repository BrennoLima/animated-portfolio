import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Box } from '@mui/material';
// Components
import { SkillsSVG } from '../SVGComponents/SkillsSVG';
import { WorkSVG } from '../SVGComponents/WorkSVG';
import { ContactSVG } from '../SVGComponents/ContactSVG';
import { ProjectsSVG } from '../SVGComponents/ProjectsSVG';
import { EducationSVG } from '../SVGComponents/EducationSVG';
import { AboutSVG } from '../SVGComponents/AboutSVG';

const commonStyles = {
	zIndex: 100,
	position: 'absolute',
	cursor: 'pointer',
	borderRadius: '50%',
	transition: 'background 0.25s linear',
	'&:hover': {
		background: '#0000001a',
	},
};

export const FloatingMenu = ({ setPage }) => {
	let float;

	const animateItem = (item, delay) => {
		float = gsap.fromTo(
			`#span-${item}`,
			{ y: '+=5px' },
			{
				delay: delay,
				y: '-=25px',
				yoyo: true,
				repeat: -1,
				ease: 'Power2.easeInOut',
				duration: 2,
			}
		);
	};

	const initiate = () => {
		let delay = 0;
		['skills', 'work', 'contact', 'projects', 'education', 'about'].map(
			(item) => {
				delay += 0.4;
				return animateItem(item, delay);
			}
		);
	};

	const terminate = () => {
		float.kill();
	};

	useEffect(() => {
		initiate();
		return () => {
			terminate();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Box
				className='floating-item'
				onClick={() => setPage('skills')}
				id='span-skills'
				sx={{ ...commonStyles, height: '20vh', bottom: '6%', left: 0 }}
			>
				<SkillsSVG />
			</Box>
			<Box
				className='floating-item'
				onClick={() => setPage('work')}
				id='span-work'
				sx={{ ...commonStyles, height: '20vh', bottom: '40%', left: '2%' }}
			>
				<WorkSVG />
			</Box>
			<Box
				className='floating-item'
				onClick={() => setPage('contact')}
				id='span-contact'
				sx={{ ...commonStyles, height: '15vh', top: '20%', left: '20%' }}
			>
				<ContactSVG />
			</Box>
			<Box
				className='floating-item'
				onClick={() => setPage('projects')}
				id='span-projects'
				sx={{ ...commonStyles, height: '20vh', top: '15%', right: '20%' }}
			>
				<ProjectsSVG />
			</Box>
			<Box
				className='floating-item'
				onClick={() => setPage('education')}
				id='span-education'
				sx={{ ...commonStyles, height: '20vh', bottom: '40%', right: '2%' }}
			>
				<EducationSVG />
			</Box>
			<Box
				className='floating-item'
				onClick={() => setPage('about')}
				id='span-about'
				sx={{ ...commonStyles, height: '20vh', bottom: '6%', right: '0' }}
			>
				<AboutSVG />
			</Box>
		</>
	);
};
