import { getWeather } from '@/utils/getWeather'
import { CityPage } from '@/containers'

type Props = {
	params: Promise<{ name: string }>
}

export const generateMetadata = async ({ params }: Props) => {
	const { name } = await params
	const { location } = await getWeather(name)

	return {
		title: location.name,
	}
}

const page = async ({ params }: Props) => {
	const { name } = await params

	const forecast: WeatherAPIResponse = await getWeather(name)

	return <CityPage forecast={forecast} />
}

export default page
