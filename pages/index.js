/** @format */

import Head from "next/head";
import Header from "../compontents/header/header";

export default function Home() {
	return (
		<div className=''>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
		</div>
	);
}
