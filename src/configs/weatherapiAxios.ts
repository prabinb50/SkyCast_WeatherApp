import axios from 'axios'

export const weatherApiAxios = axios.create({
	baseURL: 'http://api.weatherapi.com/v1',
})
