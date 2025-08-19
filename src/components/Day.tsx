type Props = {
	date: string
	size: string
}

const Day = ({ date, size }: Props) => {
	const day: string = new Date(date).toLocaleDateString('en-US', {
		weekday: 'long',
	})

	return <span style={{ fontSize: size }}>{day}</span>
}

export default Day
