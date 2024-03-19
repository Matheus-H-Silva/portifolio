import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className='h-screen bg-secondary mx-0' >
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
