'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { IconSearch } from '@/icons'
import { Loader } from './'
import Link from 'next/link'

const fetchSearch = async (search: string) => {
	const data: City[] = await axios
		.get(`/api/search/${search}`)
		.then((res) => res.data)
		.catch(() => {
			throw new Error('Network Error!')
		})

	return data
}

const Item = ({
	item,
	setSearch,
}: {
	item: City
	setSearch: Dispatch<SetStateAction<string>>
}) => {
	return (
		<Link href={`/city/${item.name}`} className="w-full">
			<div
				onClick={() => setSearch('')}
				className="text-[0.7rem] w-full text-white hover:opacity-50 px-[10px] py-[5px]"
			>
				{item.name} - {item.region} - {item.country}
			</div>
		</Link>
	)
}

const Search = () => {
	const [search, setSearch] = useState<string>('')

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['searchData', search],
		queryFn: () => fetchSearch(search),
		enabled: search.length > 2,
		staleTime: 24 * 60 * 60 * 1000, // 1 day
		networkMode: 'always',
		refetchOnMount: false,
		refetchOnReconnect: true,
		refetchOnWindowFocus: false,
		retry: 1
	})

	return (
		<div className="w-full max-w-[350px]">
			<label className="w-full flex-center">
				<input
					type="text"
					value={search}
					onChange={(event) => setSearch(event.target.value)}
					placeholder="Search Location"
					className="t-input"
				/>
				<IconSearch className="text-white text-[20px] translate-x-[-25px]" />
			</label>
			{isLoading && (
				<div className="absolute mt-[10px]">
					<Loader width="30px" height="40px" size="20px" />
				</div>
			)}
			{isError && (
				<span className="text-white text-[0.8rem] p-[10px] h-[20px] mt-[10px] absolute">
					{error.message}
				</span>
			)}
			{data && (
				<section className="w-[30%] min-w-[150px] max-w-[300px] bg-black/95 rounded absolute mt-[10px]">
					{data.map((item) => (
						<Item key={item.id} item={item} setSearch={setSearch} />
					))}
				</section>
			)}
		</div>
	)
}

export default Search
