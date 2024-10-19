import { BaseApi } from './common/index.js';
import { LngLat } from '../../types/index.js';
import { GetWeatherByLngLatDTO } from './dto/get-weather-by-lnglat.js';

export class WeatherApi extends BaseApi {
  private static API_KEY = '' as const;

  static async getWeatherByLngLat(
    lngLat: LngLat,
  ): Promise<GetWeatherByLngLatDTO> {
    const url = this.buildUrlWithParams('/onecall', {
      lat: String(lngLat[1]),
      lon: String(lngLat[0]),
      exclude: 'current',
      appid: this.API_KEY,
    });
    return await this.getResponse<GetWeatherByLngLatDTO>(url);
  }
}
