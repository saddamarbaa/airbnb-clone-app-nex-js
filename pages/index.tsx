import { InferGetServerSidePropsType } from 'next'
import { Fragment } from 'react'
import Head from 'next/head'

import MainNavigation from '../components/layout/main-navigation'
import { HotelType } from '../types'
import { HomePageComponent } from '../page-components'

export const getServerSideProps = async () => {
	const response = await fetch('https://links.papareact.com/pyp')
	const data: HotelType[] = await response.json()

	const cardData: HotelType[] = await fetch(
		'https://links.papareact.com/zp1',
	).then((response) => response.json())

	return {
		props: {
			data: data || [],
			cardData: cardData || [],
		},
	}
}

const HomePageIndex = ({
	data,
	cardData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<Fragment>
			<Head>
				<title>Airbnb Clone app</title>
				<meta
					name="description"
					content="Airbnb Clone build with React + Next Js."
				/>
			</Head>
			<MainNavigation />
			<HomePageComponent data={data} cardData={cardData} />
		</Fragment>
	)
}

export default HomePageIndex
