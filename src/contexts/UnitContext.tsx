'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface UnitContextType {
	isC: Boolean
	toggleUnit: () => void
}

const UnitContext = createContext<UnitContextType | undefined>(undefined)

export const UnitProvider = ({ children }: { children: ReactNode }) => {
	const [isC, setIsC] = useState<Boolean>(true)

	const toggleUnit = () => {
		setIsC((prev) => !prev)
	}

	return (
		<UnitContext.Provider value={{ isC, toggleUnit }}>
			{children}
		</UnitContext.Provider>
	)
}

export const useUnit = () => {
	const context = useContext(UnitContext)
	if (context === undefined) {
		throw new Error('UnitContextProvider is undefined!')
	}
	return context
}
