import { Day, Temp } from '@/components'
import Link from 'next/link'

type Props = {
	location: LocationRes
	current: Current
}

const Current = ({ location, current }: Props) => {
	return (
		<section className="flex-center p-[20px]">
			<div className="w-full flex justify-center gap-[30px]">
				<div>
					<Link href={`/city/${location.name}`}>
						<h1 className="text-[2rem]">{location.name}</h1>
					</Link>
					<h2 className="text-[0.9rem] mt-[10px]">{location.region}</h2>
					<h2 className="text-[0.9rem]">{location.country}</h2>
					<div className="text-[0.8rem] flex mt-[10px] gap-[20px]">
						<div>
							<h2>lat</h2>
							<span>{location.lat}</span>
						</div>
						<div>
							<h2>lon</h2>
							<span>{location.lon}</span>
						</div>
					</div>
					<div className="mt-[10px]">
						<Day date={current.last_updated} size="0.9rem" />
						<p className="text-[0.8rem]">
							Have a pleasant <b>{current.is_day ? 'Day' : 'Night'}</b>!
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<img
						src={current.condition.icon}
						alt="weather-icon"
						className="w-[4rem]"
					/>
					<h2 className="text-[0.8rem]">{current.condition.text}</h2>
					<Temp valueC={current.temp_c} valueF={current.temp_f} size="2rem" />
					<p className="text-[0.8rem] mt-[10px]">
						Feels like{' '}
						<Temp
							valueC={current.feelslike_c}
							valueF={current.feelslike_f}
							size="1rem"
						/>
					</p>
				</div>
			</div>
		</section>
	)
}

export default Current
