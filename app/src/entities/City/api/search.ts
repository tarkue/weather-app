import { CityList, ICity } from '../model/index.js';

export function searchCity(value: string): ICity[] {
  return CityList.filter((i) =>
    i.address.toLowerCase().includes(value.toLowerCase()),
  ).slice(0, 4);
}
