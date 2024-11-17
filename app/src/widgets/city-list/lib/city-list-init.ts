import { AddCityEvent } from '../../../entities/City/index.js';
import { WeatherCitiesStorage } from '../../../entities/Weather/index.js';
import { toggleViewModal } from '../../../shared/libs/index.js';

export function cityListInit() {
  const weatherWidgetList = document.getElementById('weather_widget_list');
  const cityList = document.getElementById('city_list');
  const modalAddCity = document.getElementById('add_city_modal');
  const searchInput = document.getElementById(
    'search_input',
  ) as HTMLInputElement;

  cityList?.addEventListener('add-city', (e: AddCityEvent) => {
    WeatherCitiesStorage.append(e.detail);
    toggleViewModal(modalAddCity);
    searchInput.value = '';
    weatherWidgetList?.dispatchEvent(new Event('add-weather-widget'));
  });
}
