'use client'

import { motion } from 'framer-motion'

import { Temp } from './'
import Link from 'next/link'

interface ItemProps {
	city: { name: string; current: Current }
	ind: number
}

const VerticalItem = ({ city, ind }: ItemProps) => {
	const isLeft = ind % 2 !== 0
	return (
		<motion.div
			initial={{
				opacity: 0,
				x: isLeft ? -100 : 100,
			}}
			whileInView={{
				opacity: 1,
				x: 0,
			}}
			transition={{
				duration: 0.5,
				delay: 0.1,
			}}
			className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
		>
			<div
				className={`w-5/12 md:gap-[20px] py-[20px] flex flex-col ${
					isLeft
						? 'items-end justify-center md:flex-row-reverse md:items-start md:justify-normal'
						: 'md:flex-row'
				}`}
			>
				<div className="flex flex-col gap-[2px]">
					<Link href={`/city/${city.name}`}>
						<h2 className="text-[1rem]">{city.name}</h2>
					</Link>
					<h3 className="text-[0.8rem]">{city.current.condition.text}</h3>
					<Temp
						valueC={city.current.temp_c}
						valueF={city.current.temp_f}
						size="0.9rem"
					/>
				</div>
				<div>
					<img
						src={city.current.condition.icon}
						alt="weather-icon"
						className="w-[4rem]"
					/>
				</div>
			</div>

			<div className="w-2/12 flex justify-center items-center relative">
				<div className="h-full w-0.5 bg-white absolute top-0"></div>
				<div className="z-[1] w-4 h-4 rounded-full bg-bgColor border-4"></div>
			</div>
		</motion.div>
	)
}

export default VerticalItem
