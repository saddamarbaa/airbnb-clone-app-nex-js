// this file allow us to add general structure of the page

import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta charSet="utf-8" />
					<meta name="author" content="Saddam Arbaa" />
					<meta name="description" content="Airbnb Clone" />
					<meta
						name="description"
						content="Airbnb Clone build with React + Next Js + TypeScript"
					/>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<body>
					<Main />
					<NextScript />
					{/* // for add Portal */}
					<div id="backdrop--root" />
					<div id="modal--overlay--root" />
				</body>
			</Html>
		)
	}
}

export default MyDocument
