import { getLocation } from '@/utils/getWeather'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
	const { searchParams } = new URL(req.url)

	const loc: Loc = {
		lat: Number(searchParams.get('lat')),
		lon: Number(searchParams.get('lon')),
	}

	const weather: { location: LocationRes; current: Current } =
		await getLocation(loc)

	return NextResponse.json(weather)
}
