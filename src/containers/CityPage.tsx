import Link from 'next/link'
import { AirQ, Current, ForecastDays, ForecastHours } from './'
import { IconBack } from '@/icons'
import { Map } from '@/components'

interface Props {
	forecast: WeatherAPIResponse
}

const CityPage = ({ forecast }: Props) => {
	return (
		<>
			<div className="w-[1.5rem] fixed top-[60px] left-[10px] bg-black/50 rounded">
				<Link href="/">
					<IconBack className="w-full h-full" />
				</Link>
			</div>
			<section className="flex-center flex-col md:flex-row gap-[50px] my-[40px] overflow-hidden">
				<Current location={forecast.location} current={forecast.current} />
				<Map
					enGps={false}
					enSelect={false}
					weatherData={{
						name: forecast.location.name,
						icon: forecast.current.condition.icon,
						valueC: forecast.current.temp_c,
						valueF: forecast.current.temp_f,
					}}
					loc={{ lat: forecast.location.lat, lon: forecast.location.lon }}
				/>
			</section>
			<ForecastDays forecastDay={forecast.forecast.forecastday} />
			<ForecastHours hours={forecast.forecast.forecastday[0].hour} />
			<AirQ airQ={forecast.current.air_quality} />
		</>
	)
}

export default CityPage
