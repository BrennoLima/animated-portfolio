import React from 'react';
import { Container, Typography } from '@mui/material';

export const Education = () => {
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
		</Container>
	);
};
