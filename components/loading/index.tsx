import React from 'react'
import Image from 'next/image'
// @ts-ignore
import { Circle } from 'better-react-spinkit'
export const LoadingScreen = () => {
	return (
		<div className="overflow-hidden min-h-screen  min-w-screen  grid place-items-center   bg-[#f8f8f8] ">
			<div
				style={{
					padding: '100px',
					paddingTop: '50px',
					textAlign: 'center',
					background: 'white',
					borderRadius: '6px',
					boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
					display: 'grid',
					placeItems: 'center',
				}}>
				<div
					className="logo"
					style={{
						position: 'relative',
						cursor: 'pointer',
						marginBottom: '3rem',
						width: '7rem',
						height: '7rem',
						display: 'block',
					}}>
					<Image
						className="logo-img"
						src="/images/Airbnb_Logo_Bélo.svg.png"
						alt="Picture of the Airbnb"
						layout="fill"
						objectFit="contain"
					/>
				</div>

				<div>
					<Circle color="#fd5b61" size={64} />
				</div>
			</div>
		</div>
	)
}

export default LoadingScreen
