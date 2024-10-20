import { ICity } from 'app/src/entities/City';

const WEATHER_CITIES_KEY = 'weather-cities' as const;

export class WeatherCitiesStorage {
  static get(): ICity[] {
    return JSON.parse(localStorage.getItem(WEATHER_CITIES_KEY) || '[]');
  }

  static append(city: ICity): void {
    const cities = this.get();
    cities.push(city);
    localStorage.setItem(WEATHER_CITIES_KEY, JSON.stringify(cities));
  }

  static remove(index: number): void {
    const cities = this.get();
    cities.splice(index, 1);
    localStorage.setItem(WEATHER_CITIES_KEY, JSON.stringify(cities));
  }
}
