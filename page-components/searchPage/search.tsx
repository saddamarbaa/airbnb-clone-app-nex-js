import InfoCard from '../../components/cards/info-card'
import Map from '../../components/map/map'
import { SearchType } from '../../types'

type Props = {
	location: string | string[] | undefined
	numberOfGuest: string | string[] | undefined
	endDate: string | string[] | undefined
	startDate: string | string[] | undefined
	searchResult: SearchType[]
}

export const SearchPageComponent = ({
	location,
	numberOfGuest,
	endDate,
	startDate,
	searchResult,
}: Props) => {
	let rangeDate: string = ''
	if (
		startDate &&
		typeof startDate === 'string' &&
		endDate &&
		typeof endDate === 'string'
	) {
		rangeDate = `- ${startDate?.substr(0, 10)} - ${endDate?.substr(0, 10)}`
	}

	return (
		<main className="py-5 px-5 md:px-10 ">
			<div className=" max-w-7xl mx-auto xl:flex overflow-hidden ">
				<section className="flex-grow pt-[140px] px-6 font-semibold ">
					{startDate && (
						<p className="">
							300+ Stays {rangeDate} for numbers of {numberOfGuest} guests
						</p>
					)}
					{endDate && (
						<h2 className="font-semibold text-3xl mt-3 mb-6">
							Stays in {location}
						</h2>
					)}
					<div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
						<p className="customButton">Cancellation Flexibility</p>
						<p className="customButton">Type of places</p>
						<p className="customButton">Price </p>
						<p className="customButton">Rooms and Beds</p>
						<p className="customButton">More Filter </p>
					</div>
					<div className="flex flex-col">
						{searchResult &&
							searchResult?.map(
								(
									{
										price,
										location,
										img,
										total,
										lat,
										long,
										star,
										description,
										title,
									},
									index,
								) => {
									return (
										<InfoCard
											key={index}
											price={price}
											location={location}
											img={img}
											total={total}
											lat={lat}
											long={long}
											description={description}
											star={star}
											title={title}
										/>
									)
								},
							)}
					</div>
				</section>
				<section className="">
					<Map />
				</section>
			</div>
		</main>
	)
}

export default SearchPageComponent
