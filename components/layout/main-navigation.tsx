import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'

import {
	GlobeIcon,
	SearchIcon,
	UserIcon,
	MenuIcon,
} from '@heroicons/react/solid'
import Calendar from '../calendar/calendar'

type HeaderProps = {
	placeholder?: string
}
const MainNavigation = ({ placeholder }: HeaderProps) => {
	const [redirect, setRedirect] = useState(false)
	const [searchInput, setSearchInput] = useState('')
	const router = useRouter()

	const restSearchInput = () => {
		setRedirect(false)
		setSearchInput('')
	}

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault()
		setRedirect(true)
	}

	return (
		<header className="fixed top-0 z-50 w-full bg-white shadow-md py-5 px-5 md:px-10">
			<nav className=" grid grid-cols-3   max-w-7xl mx-auto">
				<div className=" w-28 relative flex items-center h-10 cursor-pointer my-auto">
					<Image
						onClick={() => {
							router.push('/')
						}}
						src="/images/Airbnb_Logo_Bélo.svg.png"
						alt="Airbnb logo"
						layout="fill"
						objectFit="contain"
						objectPosition="left"
					/>
				</div>

				<form onSubmit={handleSubmit}>
					<div className=" flex items-center md:border-2 rounded-full py-2  md:shadow-md pr-4">
						<input
							className="hidden md:flex pl-5 pr-4 bg-transparent outline-none flex-grow
					text-gray-600 placeholder-gray-400"
							type="text"
							name=""
							id=""
							placeholder={placeholder ? placeholder : 'Start your search'}
							value={searchInput}
							onChange={(event) => setSearchInput(event.target.value)}
						/>
						<SearchIcon
							className="h-8 bg-red-400 text-white rounded-full p-2 
				cursor-pointer hidden md:inline-flex"
						/>
					</div>
				</form>
				<div className="flex  space-x-4 items-center justify-end text-gray-500">
					<p className="hidden md:inline text-lg">Become a host</p>
					<GlobeIcon className="h-6  cursor-pointer hidden md:inline" />

					<div className="flex  space-x-2 items-center border-2 p-2 rounded-full ">
						<MenuIcon className="h-6 cursor-pointer" />

						<UserIcon className="h-6  cursor-pointer" />
					</div>
				</div>
			</nav>

			{/* Calendar */}
			{searchInput && (
				<Calendar
					restSearchInput={restSearchInput}
					searchInput={searchInput}
					redirect={redirect}
				/>
			)}
		</header>
	)
}

export default MainNavigation
