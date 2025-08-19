import { getCities } from '@/utils/getWeather'
import { NextRequest, NextResponse } from 'next/server'

type Context = { params: Promise<{ query: string }> }

export const GET = async (req: NextRequest, context: Context) => {
	const { query } = await context.params

	const cities: City[] = await getCities(query)

	return NextResponse.json(cities)
}
