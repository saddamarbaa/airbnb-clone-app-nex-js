/** @format */

import Head from "next/head";
import HomePageComponent from "../components/homePage/homePage";
import { Fragment } from "react";
import MainNavigation from "../components/layout/main-navigation";

const HomePage = (props) => {
	return (
		<Fragment>
			<Head>
				<title>Airbnb Clone app</title>
				<meta
					name='description'
					content='Airbnb Clone build with React + Next Js.'
				/>
			</Head>
			<MainNavigation />

			<HomePageComponent data={props?.data} cardData={props?.cardData} />
		</Fragment>
	);
};

export async function getStaticProps() {
	const response = await fetch("https://links.papareact.com/pyp");
	const data = await response.json();

	const cardData = await fetch("https://links.papareact.com/zp1").then(
		(response) => response.json(),
	);

	return {
		props: {
			data: data,
			cardData: cardData,
		},
	};
}

export default HomePage;
