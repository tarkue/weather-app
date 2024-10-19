import { InitIndexPage } from '../pages/index.js';
import { WeatherGlyph, WeatherWidget } from '../entities/Weather/index.js';
import { CityList } from '../widgets/city-list/index.js';
import { WeatherWidgetList } from '../widgets/weather-widget-list/index.js';
import { initMap } from '../widgets/yandex-map/index.js';

function initApp() {
  InitIndexPage();
  initMap();

  customElements.define('city-list', CityList);
  customElements.define('weather-widget', WeatherWidget);
  customElements.define('weather-widget-list', WeatherWidgetList);
  customElements.define('weather-glyph', WeatherGlyph);
}

initApp();
