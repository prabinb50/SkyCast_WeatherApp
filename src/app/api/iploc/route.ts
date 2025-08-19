import axios from 'axios'
import { type NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
	const clientIp =
		process.env.NODE_ENV === 'production'
			? req.headers.get('x-forwarded-for') || ''
			: ''
	console.log('Client IP:', clientIp)

	const data = await axios
		.get(`http://ip-api.com/json/${clientIp}`)
		.then((res) => res.data)
		.catch((err) => {
			throw new Error(err.message)
		})

	return NextResponse.json(data)
}
