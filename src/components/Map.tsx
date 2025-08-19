'use client'
import { RefObject, useEffect, useRef, useState } from 'react'
import {
	MapContainer,
	Marker,
	TileLayer,
	useMap,
	useMapEvent,
	Popup,
} from 'react-leaflet'
import { Icon, Marker as MarkerType, Popup as PopupType } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import { Temp } from './'

type Props = {
	isDark: boolean
	loc: Loc
	enSelect: boolean
	weatherData?: ShortWeatherData
	handleLoc?: (loc: Loc) => void
}

type MarkerCompProps = {
	weatherData?: ShortWeatherData
	loc: Loc
}

const blackIcon = new Icon({
	iconUrl: '/marker.png',
	iconSize: [20, 35],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
})

const Recenter = ({ loc }: { loc: Loc }) => {
	const map = useMap()
	useEffect(() => {
		map.setView([loc.lat, loc.lon])
	}, [loc])

	return null
}

const MovingMarker = ({ handleLoc }: { handleLoc: (loc: Loc) => void }) => {
	useMapEvent('click', (event) => {
		handleLoc({ lat: event.latlng.lat, lon: event.latlng.lng })
	})
	return null
}

const MarkerComp = ({ weatherData, loc }: MarkerCompProps) => {
	const refMarker = useRef<MarkerType>(null)

	useEffect(() => {
		if (refMarker.current) refMarker.current.openPopup()
	}, [])

	return (
		<Marker ref={refMarker} position={[loc.lat, loc.lon]} icon={blackIcon}>
			{weatherData && (
				<Popup>
					<div className="flex-center flex-col">
						<h3 className="text-[0.8rem]">{weatherData.name}</h3>
						<div className="flex-center">
							<img
								className="w-[2rem]"
								src={weatherData.icon}
								alt="weather-icon"
							/>
							<Temp
								size="0.8rem"
								valueC={weatherData.valueC}
								valueF={weatherData.valueF}
							/>
						</div>
					</div>
				</Popup>
			)}
		</Marker>
	)
}

const Map = ({ isDark, enSelect, loc, weatherData, handleLoc }: Props) => {
	return (
		<MapContainer
			center={[29, 29]}
			zoom={10}
			scrollWheelZoom={true}
			style={{
				height: '120%',
				width: '100%',
				zIndex: 0,
				background: isDark ? '#222' : '',
			}}
			zoomControl={false}
		>
			<TileLayer
				url={
					isDark
						? `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${process.env.NEXT_PUBLIC_STADIAMAPS_API_KEY}`
						: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				}
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>'
			/>
			<Recenter loc={loc} />
			<MarkerComp weatherData={weatherData} loc={loc} />
			{enSelect && handleLoc && <MovingMarker handleLoc={handleLoc} />}
		</MapContainer>
	)
}

export default Map
