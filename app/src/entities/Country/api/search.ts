import { CountryList, ICountry } from '../model/index.js';

export function searchCity(value: string): ICountry[] {
  return CountryList.filter((i) =>
    i.address.toLowerCase().includes(value.toLowerCase()),
  ).slice(0, 4);
}
