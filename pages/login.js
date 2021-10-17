/** @format */

import Head from "next/head";
import React from "react";
import { Fragment } from "react";
import LogInComponent from "../components/login-page/login";

const LogInScreen = () => {
	return (
		<Fragment>
			<Head>
				<title>LogIn to Airbnb</title>
			</Head>
			<meta name='description' content='LogIn to Airbnb' />
			<LogInComponent />
		</Fragment>
	);
};

export default LogInScreen;
