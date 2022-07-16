import Banner from '../../components/banner/banner'
import SmallCard from '../../components/cards/small-card'
import MediumCard from '../../components/cards/medium-card'
import LargeCard from '../../components/cards/larg-card'
import { HotelType } from '../../types'

type HomePageProps = {
	data: HotelType[]
	cardData: HotelType[]
}
export const HomePageComponent = ({ data, cardData }: HomePageProps) => {
	return (
		<div>
			<Banner />
			<div className="max-w-7xl mx-auto px-8 sm:px-16 ">
				<section className="pt-16">
					<h2 className="text-4xl font-semi-bold pb-5 pt-6 ">Explore Nearby</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{data &&
							data?.map((item, index) => {
								return (
									<SmallCard
										key={index}
										location={item?.location}
										img={item?.img}
										distance={item?.distance}
									/>
								)
							})}
					</div>
				</section>

				<section className="mt-2">
					<h2 className="text-4xl font-semi-bold  py-8 ">Live Anywhere</h2>

					<div className="sm:flex space-x-3  overflow-scroll scrollbar-hide sm:p-3 sm:ml-3 ">
						{cardData &&
							cardData?.map((item, index) => {
								return (
									<MediumCard key={index} img={item?.img} title={item?.title} />
								)
							})}
					</div>
				</section>

				<section className="mt-2">
					<h2 className="text-4xl font-semi-bold  py-8 ">
						Discover things to do
					</h2>

					<div className="sm:flex space-x-3 justify-between  overflow-scroll scrollbar-hide sm:p-3 sm:ml-3 ">
						<MediumCard
							img="/images/card3.webp"
							title="Experiences"
							description="Find unforgettable activities near you."
						/>

						<MediumCard
							img="/images/card2.webp"
							title="Online Experiences"
							description="Live, interactive activities led by Hosts."
						/>

						<MediumCard
							img="/images/card1.webp"
							title="Featured collection: Wanderlust"
							description="Travel from home with Online Experiences."
						/>

						<MediumCard
							img="/images/img.webp"
							title="Try hosting"
							description="Earn extra income and unlock new opportunities"
						/>
					</div>
				</section>

				<section className="hidden sm:block">
					<LargeCard
						img="https://links.papareact.com/4cj"
						title="The Greatest Outdoors"
						buttonText="Get  Inspired"
						description="Wishlists Curated by Airbnb"
					/>

					<LargeCard
						img="/images/img.webp"
						title="Try hosting"
						buttonText="Learn More"
						description="Earn extra income and unlock new opportunities by sharing your space."
						isDifferent="isDifferent"
					/>
				</section>
			</div>
		</div>
	)
}

export default HomePageComponent
