import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import CurrentCompany from './CurrentCompany'

export default function Introduction() {
	return (
		<Container className='mb-12'>
			<Box
				className='flex flex-col items-center justify-center h-96'
			>
				<Typography variant="h1" className='text-center'>
						Hello, I'm <span className='text-primary'>Matheus Silva</span>
				</Typography>
				<Typography variant="h2" className='text-center'>
						Full Stack Developer
				</Typography>
				<Typography variant="h3" className='text-center'>
						Welcome to my personal portfolio
				</Typography>
			</Box>
			<CurrentCompany />
		</Container>
	)
}