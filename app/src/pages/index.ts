import { cityListInit, addCityModalInit } from '../widgets/city-list/index.js';
import { addCityButtonInit } from '../widgets/weather-widget-list/index.js';

export const InitIndexPage = () => {
  addCityModalInit();
  cityListInit();
  addCityButtonInit();
};
