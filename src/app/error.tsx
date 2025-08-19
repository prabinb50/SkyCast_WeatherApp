'use client'

import { ErrorIcon } from "@/icons"

const Error = ({ error }: { error: Error }) => {
	return (
		<section className="min-h-[45vh] flex-center flex-col gap-[20px] text-[1.2rem]">
			<ErrorIcon className="text-[4rem]"/>
			{error.message}
		</section>
	)
}

export default Error
