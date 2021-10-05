/** @format */

import Image from "next/image";

const MediumCard = ({ img, title, description }) => {
	return (
		<div className=' m-2 mt-5  md:space-x-2 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-300 ease-out'>
			<div className='relative h-80 w-80'>
				<Image
					className='rounded-lg'
					src={img}
					alt='Airbnb logo'
					layout='fill'
					objectFit='cover'
				/>
			</div>
			<div className='mb-[30px] '>
				<h3 className='text-2xl mt-3'>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default MediumCard;
