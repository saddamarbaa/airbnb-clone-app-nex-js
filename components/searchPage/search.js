/** @format */
import { format } from "date-fns";
import InfoCard from "../cards/info-card";

const SearchComponent = ({
	location,
	numberOfGuest,
	endDate,
	startDate,
	searchResult,
}) => {
	const rangeDate = `- ${startDate?.substr(0, 10)} - ${endDate?.substr(
		0,
		10,
	)}`;

	return (
		<min className=' py-5 px-5 md:px-10'>
			<div className='max-w-7xl mx-auto'>
				<section className='flex-grow pt-14 px-6 font-semibold'>
					{startDate && (
						<p className=''>
							300+ Stays {rangeDate} for numbers of {numberOfGuest}{" "}
							guests
						</p>
					)}
					{endDate && (
						<h2 className='font-semibold text-3xl mt-3 mb-6'>
							Stays in {location}
						</h2>
					)}
					<div className='hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
						<p className='customButton'>Cancellation Flexibility</p>
						<p className='customButton'>Type of places</p>
						<p className='customButton'>Price </p>
						<p className='customButton'>Rooms and Beds</p>
						<p className='customButton'>More Filter </p>
					</div>
					<div className='flex flex-col'>
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
									);
								},
							)}
					</div>
				</section>
				{/* <section>Map</section> */}
			</div>
		</min>
	);
};

export default SearchComponent;
