/** @format */

import "tailwindcss/tailwind.css";

import Head from "next/head";
import Router from "next/router";
import { store } from "../app/store";
import { Provider } from "react-redux";
import ProgressBar from "@badrap/bar-of-progress";
import React, { useEffect } from "react";
import Layout from "../components/layout/layout";

const progress = new ProgressBar({
	// The size (height) of the progress bar.
	// Numeric values get converted to px.
	size: 3,

	// Color of the progress bar.
	// Also used for the glow around the bar.
	color: "#006aff",

	// Class name used for the progress bar element.
	className: "bar-of-progress",

	// How many milliseconds to wait before the progress bar
	// animation starts after calling .start().
	delay: 80,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Provider store={store}>
				<Head>
					<title>Airbnb Clone app</title>
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1'
					/>
					<meta name='author' content='Saddam Arbaa' />
					<meta
						name='description'
						content='Airbnb Clone build with React + Next Js.'
					/>
				</Head>

				<Component {...pageProps} />
			</Provider>
		</Layout>
	);
}

export default MyApp;
