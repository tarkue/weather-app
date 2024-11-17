import { getMarker } from '../../../entities/Coord/index.js';
import { WeatherCitiesStorage } from '../../../entities/Weather/index.js';

export function addCityButtonInit() {
  const weatherWidgetList = document.getElementById('weather_widget_list');
  const addCityMapButton = document.getElementById('add_city_map');

  addCityMapButton?.addEventListener('click', () => {
    const markerLngLat: string[] = JSON.parse(getMarker() || '[]');
    WeatherCitiesStorage.append({
      address: 'Метка на карте',
      lnglat: markerLngLat,
    });
    weatherWidgetList?.dispatchEvent(new Event('add-weather-widget'));
  });
}
