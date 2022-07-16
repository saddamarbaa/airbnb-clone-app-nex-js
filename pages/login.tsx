import Head from 'next/head'
import React from 'react'
import { Fragment } from 'react'

import { LogInScreenComponent } from '../page-components'

const LogInScreen = () => {
	return (
		<Fragment>
			<Head>
				<title>LogIn to Airbnb</title>
			</Head>
			<meta name="description" content="LogIn to Airbnb" />
			<LogInScreenComponent />
		</Fragment>
	)
}

export default LogInScreen
