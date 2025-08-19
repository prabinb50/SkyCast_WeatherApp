import { Day, DraggableList, Temp } from '@/components'

type HourItemProps = {
	hour: HourForecast
}

type Props = {
	hours: HourForecast[]
}

const HourItem = ({ hour }: HourItemProps) => {
	return (
		<div className="min-w-[7rem] border-white flex-center flex-col">
			<img
				draggable="false"
				src={hour.condition.icon}
				alt="weather-icon"
				className="w-[3rem]"
			/>
			<Temp size="0.8rem" valueC={hour.temp_c} valueF={hour.temp_f} />
			<h3 className="text-[0.9rem] mt-[10px] mb-[2px]">
				{hour.time.split(' ')[1]}
			</h3>
			<div className="w-full border-t-[2px] border-white flex-center mt-[15px]">
				<div className="w-[1rem] h-[1rem] rounded-full translate-y-[-50%] bg-white flex-center">
					<div className="w-[0.5rem] h-[0.5rem] bg-bgColor rounded-full" />
				</div>
			</div>
		</div>
	)
}

const ForecastHours = ({ hours }: Props) => {
	return (
		<section className="mt-[30px]">
			<h2 className="flex-center text-[1.2rem]">Hourly Forecast</h2>
			<div className="flex-center flex-col mt-[10px] gap-[2px]">
				<Day date={hours[0].time} size="1rem" />
				<span className="text-[0.8rem]">{hours[0].time.split(' ')[0]}</span>
			</div>
			<DraggableList>
				{hours.map((hour) => (
					<HourItem hour={hour} key={hour.time} />
				))}
			</DraggableList>
		</section>
	)
}

export default ForecastHours
