import { ICity } from 'app/src/entities/City/index.js';

export function generateCityList(countries: ICity[]) {
  return `
    <ul class="city_list">
      ${countries
        .map(
          (city) => `
        <li>
          <button 
            class="city_item text_16_medium" 
            data-address="${city.address}" 
            data-lnglat="${city.lnglat}"
            id="add_city_button"

          >
            ${city.address}
          </button>
        </li>
      `,
        )
        .join('')}
    </ul>
  `;
}
