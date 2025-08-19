import { VerticalItem } from '../components'

interface Props {
	cities: { name: string; current: Current }[]
}

const VerticalList = ({ cities }: Props) => {
	return (
		<section className="w-full flex-center my-[60px]">
			<div className="w-full overflow-hidden">
				{cities.map((city, ind) => (
					<VerticalItem city={city} ind={ind} key={ind} />
				))}
			</div>
		</section>
	)
}

export default VerticalList
