type Loc = {
	lat: number
	lon: number
}

type Cities = {
	name: string
	current: Current
}[]

type ShortWeatherData = {
	name: string
	icon: string
	valueC: number
	valueF: number
}

type City = {
	id: number
	name: string
	region: string
	country: string
	lat: number
	lon: number
	url: string
}

interface WeatherAPIResponse {
	location: LocationRes
	current: Current
	forecast: Forecast
}

interface LocationRes {
	name: string
	region: string
	country: string
	lat: number
	lon: number
	tz_id: string
	localtime_epoch: number
	localtime: string
}

interface Current {
	last_updated_epoch: number
	last_updated: string
	temp_c: number
	temp_f: number
	is_day: number
	condition: Condition
	wind_mph: number
	wind_kph: number
	wind_degree: number
	wind_dir: string
	pressure_mb: number
	pressure_in: number
	precip_mm: number
	precip_in: number
	humidity: number
	cloud: number
	feelslike_c: number
	feelslike_f: number
	vis_km: number
	vis_miles: number
	uv: number
	gust_mph: number
	gust_kph: number
	air_quality: AirQuality
}

interface Condition {
	text: string
	icon: string
	code: number
}

interface AirQuality {
	co: number
	no2: number
	o3: number
	so2: number
	pm2_5: number
	pm10: number
	'us-epa-index': number
	'gb-defra-index': number
}

interface Forecast {
	forecastday: ForecastDay[]
}

interface ForecastDay {
	date: string
	date_epoch: number
	day: DayForecast
	astro: Astro
	hour: HourForecast[]
}

interface DayForecast {
	maxtemp_c: number // Maximum temperature in Celsius (e.g., 16.0)
	maxtemp_f: number // Maximum temperature in Fahrenheit (e.g., 60.8)
	mintemp_c: number // Minimum temperature in Celsius (e.g., 8.0)
	mintemp_f: number // Minimum temperature in Fahrenheit (e.g., 46.4)
	avgtemp_c: number // Average temperature in Celsius (e.g., 12.0)
	avgtemp_f: number // Average temperature in Fahrenheit (e.g., 53.6)
	maxwind_kph: number // Maximum wind speed in kilometers per hour (e.g., 20.0)
	maxwind_mph: number // Maximum wind speed in miles per hour (e.g., 12.4)
	totalprecip_mm: number // Total precipitation in millimeters (e.g., 0.5)
	totalprecip_in: number // Total precipitation in inches (e.g., 0.02)
	totalsnow_cm: number // Total snowfall in centimeters (e.g., 0.0)
	avgvis_km: number // Average visibility in kilometers (e.g., 10.0)
	avgvis_miles: number // Average visibility in miles (e.g., 6.2)
	avghumidity: number // Average humidity percentage (e.g., 65)
	condition: Condition // Weather condition details
	uv: number // UV index (e.g., 4.0)
}

interface Astro {
	sunrise: string // Sunrise time (e.g., "06:15 AM")
	sunset: string // Sunset time (e.g., "06:45 PM")
	moonrise: string // Moonrise time (e.g., "07:30 PM")
	moonset: string // Moonset time (e.g., "06:00 AM")
	moon_phase: string // Moon phase (e.g., "Waning Gibbous")
	moon_illumination: number // Moon illumination percentage (e.g., 75)
}

interface HourForecast {
	time: string // Time of the forecast (e.g., "2025-03-23 00:00")
	temp_c: number // Temperature in Celsius (e.g., 10.0)
	temp_f: number // Temperature in Fahrenheit (e.g., 50.0)
	condition: Condition // Weather condition details
	wind_kph: number // Wind speed in kilometers per hour (e.g., 15.0)
	wind_mph: number // Wind speed in miles per hour (e.g., 9.3)
	wind_degree: number // Wind direction in degrees (e.g., 180)
	wind_dir: string // Wind direction as a string (e.g., "S")
	pressure_mb: number // Pressure in millibars (e.g., 1015)
	pressure_in: number // Pressure in inches (e.g., 29.98)
	precip_mm: number // Precipitation in millimeters (e.g., 0.1)
	precip_in: number // Precipitation in inches (e.g., 0.004)
	humidity: number // Humidity percentage (e.g., 70)
	cloud: number // Cloud cover percentage (e.g., 40)
	feelslike_c: number // Feels-like temperature in Celsius (e.g., 9.0)
	feelslike_f: number // Feels-like temperature in Fahrenheit (e.g., 48.2)
	windchill_c: number // Wind chill in Celsius (e.g., 8.0)
	windchill_f: number // Wind chill in Fahrenheit (e.g., 46.4)
	heatindex_c: number // Heat index in Celsius (e.g., 11.0)
	heatindex_f: number // Heat index in Fahrenheit (e.g., 51.8)
	dewpoint_c: number // Dew point in Celsius (e.g., 7.0)
	dewpoint_f: number // Dew point in Fahrenheit (e.g., 44.6)
	will_it_rain: number // Will it rain? (1 = Yes, 0 = No)
	will_it_snow: number // Will it snow? (1 = Yes, 0 = No)
	is_day: number // Is it day or night? (1 = Day, 0 = Night)
	vis_km: number // Visibility in kilometers (e.g., 10.0)
	vis_miles: number // Visibility in miles (e.g., 6.2)
	chance_of_rain: number // Chance of rain percentage (e.g., 20)
	chance_of_snow: number // Chance of snow percentage (e.g., 0)
	uv: number // UV index (e.g., 1.0)
}
