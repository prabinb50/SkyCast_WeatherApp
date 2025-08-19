import { weatherApiAxios } from '@/configs/weatherapiAxios'
import forecastData from '@/constants/forecast.json'
import citiesData from '@/constants/cities.json'

const enApi: Boolean = Boolean(Number(process.env.ENAPI))

export const getCities = async (query: string) => {
	let cities: City[]

	if (enApi) {
		const params = {
			key: process.env.WEATHERAPI_APIKEY,
			q: query,
		}
		cities = await weatherApiAxios
			.get('/search.json', { params })
			.then((res) => res.data)
			.catch(() => {
				throw new Error('Network Error!')
			})
	} else cities = citiesData

	return cities
}

export const getWeather = async (query: string) => {
	let weather: WeatherAPIResponse

	if (enApi) {
		const params = {
			key: process.env.WEATHERAPI_APIKEY,
			q: query,
			aqi: 'yes',
			days: 3,
		}
		weather = await weatherApiAxios
			.get('/forecast.json', { params })
			.then((res) => res.data)
			.catch(() => {
				throw new Error('Network Error!')
			})
	} else weather = forecastData

	return weather
}

export const getLocation = async (loc: Loc) => {
	let weather: { location: LocationRes; current: Current }

	if (enApi) {
		const params = {
			key: process.env.WEATHERAPI_APIKEY,
			q: `${loc.lat},${loc.lon}`,
		}
		weather = await weatherApiAxios
			.get('/current.json', { params })
			.then((res) => res.data)
			.catch(() => {
				throw new Error('Network Error!')
			})
	} else
		weather = {
			current: forecastData.current,
			location: forecastData.location,
		}

	return weather
}
