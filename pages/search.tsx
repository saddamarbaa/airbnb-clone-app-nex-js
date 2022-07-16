import { InferGetServerSidePropsType } from 'next'
import { Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import MainNavigation from '../components/layout/main-navigation'
import { SearchType } from '../types'
import { SearchPageComponent } from '../page-components'

export const getServerSideProps = async () => {
	const searchResultResponse = await fetch('https://links.papareact.com/isz')
	const data: SearchType[] = await searchResultResponse.json()

	return {
		props: {
			data: data,
		},
	}
}

const SearchPageIndex = ({
	data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const router = useRouter()
	const { location, startDate, endDate, numberOfGuest } = router.query
	let placeholder = ``
	let rangeDate: string = ''

	if (startDate && location && numberOfGuest && endDate) {
		placeholder = `${location} | ${rangeDate} | ${numberOfGuest} Guest`
	}

	if (
		startDate &&
		typeof startDate === 'string' &&
		endDate &&
		typeof endDate === 'string'
	) {
		rangeDate = `- ${startDate?.substr(0, 10)} - ${endDate?.substr(0, 10)}`
	}

	return (
		<Fragment>
			<Head>
				<title>Search</title>
				<meta
					name="description"
					content="Airbnb Clone build with React + Next Js."
				/>
			</Head>
			<MainNavigation placeholder={placeholder} />
			<SearchPageComponent
				location={location}
				numberOfGuest={numberOfGuest}
				startDate={startDate}
				endDate={endDate}
				searchResult={data}
			/>
		</Fragment>
	)
}

export default SearchPageIndex
