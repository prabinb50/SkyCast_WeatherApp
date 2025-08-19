'use client'
import { FC } from 'react'
import { motion } from 'framer-motion'

export const withAnimationUpSlide = <P extends Object>(Component: FC<P>) => {
	const WithAnimationComp: FC<P> = (props) => {
		return (
			<motion.div
				initial={{
					opacity: 0,
					y: 80,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 0.5,
				}}
			>
				<Component {...props} />
			</motion.div>
		)
	}
	return WithAnimationComp
}

export const withAnimationRightSlide = <P extends Object>(Component: FC<P>) => {
	const WithAnimationComp: FC<P> = (props) => {
		return (
			<motion.div
				initial={{
					opacity: 0,
					x: 80,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
				}}
				transition={{
					duration: 0.5,
				}}
			>
				<Component {...props} />
			</motion.div>
		)
	}
	return WithAnimationComp
}
