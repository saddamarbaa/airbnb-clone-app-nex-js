/** @format */

import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const InfoCard = ({
	price,
	location,
	img,
	total,
	lat,
	long,
	star,
	description,
	title,
}) => {
	return (
		<div className='md:flex py-7 px-2 md:pr-4 md:border-b mb-2 cursor-pointer hover:opacity-80 transition duration-200 ease-out hover:shadow-lg first:border-t'>
			<div className='relative h-52 w-80 mb-2  min-w-[300px]'>
				<Image
					className='rounded-2xl'
					src={img}
					alt='Airbnb logo'
					layout='fill'
					objectFit='cover'
				/>
			</div>

			<div className='flex flex-col flex-grow md:pl-5'>
				<div className='flex items-center justify-between'>
					<p>{location}</p>
					<HeartIcon className='hidden md:inline h-7 cursor-pointer text-red-500' />
				</div>
				<h4>{title}</h4>
				<div className='hidden  md:block  w-10 pt-2  border-b'></div>
				<p className='pt-2 mb-2  text-gray-500 flex-grow'>{description}</p>

				<div className='md:flex items-center justify-between md:pt-5'>
					<p className='flex items-center'>
						<StarIcon className='h-5 cursor-pointer text-red-500' />
						{star}
					</p>

					<div>
						<p className='text-lg lg:text-2xl pb-2 font-semibold '>
							{price}
						</p>
						<p className='md:text-right   text-red-500'>{total}</p>
					</div>
					<HeartIcon className=' md:hidden mt-2 h-7 cursor-pointer text-red-500' />
				</div>
			</div>
		</div>
	);
};

export default InfoCard;
