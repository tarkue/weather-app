import { WeatherCitiesStorage } from '../../../entities/Weather/index.js';
import { WeatherApi } from '../../../shared/api/index.js';
import { IAdressAndWeatherData } from './types/index.js';
import { stringArrayToLngLat } from '../../../shared/libs/index.js';

export async function getData(): Promise<IAdressAndWeatherData[]> {
  const cities = WeatherCitiesStorage.get();
  const result: IAdressAndWeatherData[] = [];

  for (const city of cities) {
    const weatherData = await WeatherApi.getWeatherByLngLat(
      stringArrayToLngLat(city.lnglat),
    );
    result.push({ address: city.address, weatherData });
  }
  return result;
}
