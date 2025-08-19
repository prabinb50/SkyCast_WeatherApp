'use client'
import { useUnit } from '@/contexts/UnitContext'

const UnitSwitcher = () => {
	const { isC, toggleUnit } = useUnit()

	return (
		<button
			className="w-[3rem] h-[1.5rem] flex-center ring-1 ring-white rounded-full"
			onClick={toggleUnit}
		>
			<div
				className={`w-[1.5rem] h-[1.5rem] bg-white rounded-full border-[2px] border-bgColor flex-center text-[0.8em] font-bold text-bgColor duration-300 ${
					isC ? 'translate-x-[-50%]' : 'translate-x-[50%]'
				}`}
			>
				<span>&deg;{isC ? 'C' : 'F'}</span>
			</div>
		</button>
	)
}

export default UnitSwitcher
