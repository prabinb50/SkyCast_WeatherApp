'use client'

import { useUnit } from '@/contexts/UnitContext'

type Props = {
	valueC: number
	valueF: number
	size: string
}

const Temp = ({ valueC, valueF, size }: Props) => {
	const { isC } = useUnit()

	return <span style={{ fontSize: size }}>{isC ? valueC : valueF}&deg;</span>
}

export default Temp
