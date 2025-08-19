'use client'
import { withAnimationUpSlide } from '@/hoc/withAnimation'
import { motion, useMotionValue } from 'framer-motion'
import { useRef, useEffect, useState, ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const DraggableList = ({ children }: Props) => {
	const constraintsRef = useRef<HTMLDivElement>(null)
	const x = useMotionValue(0)
	const [isDragging, setIsDragging] = useState(false)
	const [limit, setLimit] = useState(2000)

	useEffect(() => {
		const observer = new ResizeObserver((entries) => {
			const target = entries[0].target as HTMLDivElement

			const containerWidth = target.scrollWidth
			const visibleWidth = target.offsetWidth
			const maxScroll = containerWidth - visibleWidth
			setLimit(maxScroll)
		})

		if (constraintsRef.current) {
			observer.observe(constraintsRef.current)
		}

		return () => {
			if (constraintsRef.current) {
				observer.unobserve(constraintsRef.current)
			}
		}
	}, [])

	return (
		<div className="p-4 flex-center">
			<div className="overflow-hidden" ref={constraintsRef}>
				<motion.div
					style={{ x }}
					drag="x"
					dragConstraints={{ right: 0, left: -limit }}
					dragElastic={0.07}
					onDragStart={() => setIsDragging(true)}
					onDragEnd={() => setIsDragging(false)}
					dragMomentum={false}
					className={`flex select-none ${
						isDragging ? 'cursor-grabbing' : 'cursor-grab'
					}`}
				>
					{children}
				</motion.div>
			</div>
		</div>
	)
}

export default withAnimationUpSlide(DraggableList)
