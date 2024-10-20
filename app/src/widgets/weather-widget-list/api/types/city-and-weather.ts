import { GetWeatherByLngLatDTO } from 'app/src/shared/api/index.js';

export interface IAdressAndWeatherData {
  address: string;
  weatherData: GetWeatherByLngLatDTO;
}
