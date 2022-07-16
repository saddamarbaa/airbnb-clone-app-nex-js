import React from 'react'

import Footer from './footer'
import MainNavigation from './main-navigation'

function Layout(props: {
	children:
		| string
		| number
		| boolean
		| React.ReactElement<any, string | React.JSXElementConstructor<any>>
		| React.ReactFragment
		| React.ReactPortal
		| null
		| undefined
}) {
	return (
		<React.Fragment>
			{/* <MainNavigation /> */}
			<main>{props.children}</main>
			<Footer />
		</React.Fragment>
	)
}

export default Layout
