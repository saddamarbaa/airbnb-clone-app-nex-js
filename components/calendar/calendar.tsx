import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRangePicker } from 'react-date-range'
import { useState, useEffect, SetStateAction } from 'react'
import { UserIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { format } from 'date-fns'

type CalendarComponentT = {
	restSearchInput: () => void
	searchInput: string
	redirect: boolean
}

const CalendarComponent = ({
	restSearchInput,
	searchInput,
	redirect,
}: CalendarComponentT) => {
	const [startDate, setStartDate] = useState(new Date())
	const [endDate, setEndDate] = useState(new Date())
	const [numberOfGuest, setNumberOfGuest] = useState(1)
	const router = useRouter()

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: 'selection',
	}

	useEffect(() => {
		if (redirect) {
			handleClick()
		}
	}, [redirect])

	const handleClick = () => {
		router.push({
			pathname: '/search',
			query: {
				location: searchInput,
				startDate:
					startDate?.toISOString()?.split('T')[0] || startDate.toISOString(),
				endDate: endDate?.toISOString()?.split('T')[0] || endDate.toISOString(),
				numberOfGuest: numberOfGuest,
			},
		})

		restSearchInput()
	}

	const handleSelect = (ranges: {
		selection: {
			startDate: SetStateAction<Date>
			endDate: SetStateAction<Date>
		}
	}) => {
		setStartDate(ranges.selection.startDate)
		setEndDate(ranges.selection.endDate)
	}

	return (
		<div className="max-w-[600px] mx-auto flex flex-col col-span-3 mt-8  transition">
			<DateRangePicker
				ranges={[selectionRange]}
				//  @ts-ignore
				onChange={handleSelect}
				minDate={new Date()}
				rangeColors={['#fd5b61']}
			/>
			<div className="flex items-center border-b mb-8">
				<h1 className="text-2xl  flex-grow font-semibold">Number of Guest</h1>
				<UserIcon className="h-5" />
				<input
					type="number"
					min={1}
					value={numberOfGuest}
					onChange={(event) => setNumberOfGuest(+event.target.value)}
					placeholder="1"
					className="w-16 pl-2 outline-none text-red-400  placeholder-red-400 "
				/>
			</div>

			<div className="flex  ">
				<button onClick={restSearchInput} className="flex-grow text-gray-500 ">
					Cancel
				</button>
				<button onClick={handleClick} className="flex-grow  text-red-400">
					Search
				</button>
			</div>
		</div>
	)
}

export default CalendarComponent
