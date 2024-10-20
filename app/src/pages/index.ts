import { AddCityEvent } from '../entities/City/index.js';
import { getItem as getMarker } from '../entities/Coord/index.js';
import { WeatherCitiesStorage } from '../entities/Weather/index.js';
import { toggleViewModal } from '../shared/libs/index.js';
import { InputChangeEvent } from '../shared/types/index.js';

export const InitIndexPage = () => {
  const modalAddCity = document.getElementById('add_city_modal');
  const buttonAddCity = document.getElementById('add_city_button');
  const weatherWidgetList = document.getElementById('weather_widget_list');
  const closeModal = document.getElementById('close_modal');
  const cityList = document.getElementById('city_list');
  const searchInputWrapper = document.getElementById('search_input_wrapper');
  const searchInput = document.getElementById(
    'search_input',
  ) as HTMLInputElement;

  const addCityMapButton = document.getElementById('add_city_map');

  buttonAddCity?.addEventListener('click', () => toggleViewModal(modalAddCity));
  closeModal?.addEventListener('click', () => {
    toggleViewModal(modalAddCity);
    searchInput.value = '';
  });
  searchInputWrapper?.addEventListener('click', () => searchInput?.focus());

  searchInput?.addEventListener('input', (e: InputChangeEvent) => {
    cityList?.setAttribute('search', e.target?.value || '');
  });

  cityList?.addEventListener('add-city', (e: AddCityEvent) => {
    WeatherCitiesStorage.append(e.detail);
    toggleViewModal(modalAddCity);
    searchInput.value = '';
    weatherWidgetList?.dispatchEvent(new Event('add-weather-widget'));
  });
  addCityMapButton?.addEventListener('click', () => {
    const markerLngLat: string[] = JSON.parse(getMarker() || '[]');
    WeatherCitiesStorage.append({
      address: 'Метка на карте',
      lnglat: markerLngLat,
    });
    weatherWidgetList?.dispatchEvent(new Event('add-weather-widget'));
  });
};
