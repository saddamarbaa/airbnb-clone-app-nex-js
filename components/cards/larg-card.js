/** @format */

import Image from "next/image";

const LargeCard = ({ img, title, buttonText, description, isDifferent }) => {
	return (
		<section className='relative py-16 cursor-pointer'>
			<div className='relative h-96  min-w-[300px]'>
				<Image
					src={img}
					alt='large Card Image'
					layout='fill'
					objectFit='cover'
					className='rounded-2xl '
				/>
			</div>
			{!isDifferent && (
				<div className='absolute top-32 left-12'>
					<h3 className='text-4xl mb-3 w-64'>{title}</h3>
					<p className=''>{description}</p>
					<button className='txt-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>
						{buttonText}
					</button>
				</div>
			)}

			{isDifferent && (
				<div className='absolute top-32 left-12 hidden sm:inline'>
					<h3 className='text-4xl mb-3 w-64 text-white'>{title}</h3>
					<p className=' w-[300px] text-white'>{description}</p>
					<button className='txt-sm  bg-white px-4 py-2 rounded-lg mt-5'>
						{buttonText}
					</button>
				</div>
			)}
		</section>
	);
};

export default LargeCard;
