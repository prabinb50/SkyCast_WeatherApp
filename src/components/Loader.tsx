type Props = {
	size: string
	width: string
	height: string
	text?: string
}

const Loader = ({ size, width, height, text }: Props) => {
	return (
		<div style={{ width, height }} className="flex-center flex-col gap-[20px]">
			<div
				style={{ width: size, height: size }}
				className="border-1 border-white animate-spin"
			/>
			{text && <span className="text-white text-[1rem]">{text}</span>}
		</div>
	)
}

export default Loader
