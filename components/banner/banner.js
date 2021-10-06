/** @format */

import Image from "next/image";

const Banner = () => {
	return (
		<div className='relative  min-h-[350px] h-[70vh]'>
			<div className='absolute  z-20 top-1/2 text-center w-full  '>
				<p className='text-lg font-bold'>Not sure where to go? Perfect.</p>
				<button className='text-purple-500 bg-white shadow-md px-10 py-5 rounded-full  font-bold my-4  hover:shadow-xl  active:scale-90 transition duration-150'>
					I,m flexible
				</button>
			</div>
			<Image
				src='/images/banner.webp'
				alt='Airbnb logo'
				layout='fill'
				objectFit='cover'
			/>
		</div>
	);
};

export default Banner;
