'use client'
import { withAnimationRightSlide } from '@/hoc/withAnimation'
import { IconGps } from '@/icons'
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('./Map'), {
	ssr: false,
})

type Props = {
	loc: Loc
	enSelect: boolean
	enGps: boolean
	weatherData?: ShortWeatherData
	handleLoc?: (loc: Loc) => void
	handleCurrentLocation?: () => void
}

const Map = (props: Props) => {
	return (
		<div className="flex-center flex-col">
			<div className="w-[300px] h-[300px] overflow-hidden rounded-[20px] border-2 border-primary relative">
				<DynamicMap isDark={true} {...props} />
				<h3 className="absolute left-[50%] translate-x-[-50%] bottom-[5px] select-none font-[Tektur] text-[0.7rem]">
					SkyCast
				</h3>
				{props.enGps && (
					<button
						className="absolute right-[10px] top-[10px] hover:opacity-50"
						type="button"
						onClick={() => {
							if (props.handleCurrentLocation) props.handleCurrentLocation()
						}}
					>
						<IconGps className="text-[25px]" />
					</button>
				)}
			</div>
		</div>
	)
}

export default withAnimationRightSlide(Map)
