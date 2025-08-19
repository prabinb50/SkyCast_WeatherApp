import { Location, VerticalList } from './'

type Props = {
	cities: Cities
}

const HomePage = ({ cities }: Props) => {
	return (
		<>
			<Location />
			<VerticalList cities={cities} />
		</>
	)
}

export default HomePage
