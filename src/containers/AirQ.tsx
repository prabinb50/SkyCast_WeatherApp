const qIndex: Record<number, { text: string; color: string }> = {
	1: { text: 'Good', color: '#7bff48' },
	2: { text: 'Moderate', color: '#487bff' },
	3: { text: 'Unhealthy for sensitive groups', color: '#4bffd0' },
	4: { text: 'Unhealthy', color: '#d04bff' },
	5: { text: 'Very unhealthy', color: '#ffd04b' },
	6: { text: 'Hazardous', color: '#ff4b7b' },
}

type ItemProps = {
	title: string
	value: number
	sub?: string
}

const Item = ({ title, value, sub }: ItemProps) => {
	return (
		<div className="flex-center flex-col gap-[5px] text-[0.8rem]">
			<h2>
				{title}
				<sub>{sub}</sub>
			</h2>
			<span>{value}</span>
		</div>
	)
}

const AirQ = ({ airQ }: { airQ: AirQuality }) => {
	return (
		<section className="mt-[30px]">
			<h2 className="flex-center text-[1.2rem]">Air Quality</h2>
			<h3 className="text-[0.8rem] flex-center gap-[10px] mt-[10px]">
				The Air is
				<span
					className="text-[1rem]"
					style={{ color: qIndex[airQ['us-epa-index']].color }}
				>
					{qIndex[airQ['us-epa-index']].text}
				</span>
			</h3>
			<div className="flex-center gap-[20px] mt-[10px]">
				<Item value={airQ.pm2_5} title="PM2_5" />
				<Item value={airQ.pm10} title="PM10" />
				<Item value={airQ.so2} title="SO" sub="2" />
				<Item value={airQ.no2} title="NO" sub="2" />
				<Item value={airQ.o3} title="O" sub="3" />
				<Item value={airQ.co} title="CO" />
			</div>
		</section>
	)
}

export default AirQ
