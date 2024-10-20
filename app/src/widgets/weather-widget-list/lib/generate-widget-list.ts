import { IAdressAndWeatherData } from '../api/index.js';

export function generateWidgetList(widgets: IAdressAndWeatherData[]) {
  return `
    <div class="weather-widget-list">
      ${widgets
        .reverse()
        .map((i, key) => {
          const { weatherData } = i;
          const temp_symb = weatherData.main.temp > 0 ? '+' : '';
          const feels_like_symb = weatherData.main.feels_like > 0 ? '+' : '';
          const time = new Date(weatherData.dt * 1000)
            .toLocaleTimeString()
            .slice(0, 5);

          const weather_type =
            weatherData.weather[0].description[0].toUpperCase() +
            weatherData.weather[0].description.slice(1);

          return `
            <weather-widget
              key="${widgets.length - key - 1}"
              city="${i.address}"
              temperature="${temp_symb}${Math.round(weatherData.main.temp)}°"
              glyph="${weatherData.weather[0].icon}"
              weather_type="${weather_type}"
              temperature_fell="${feels_like_symb}${Math.round(weatherData.main.feels_like)}°"
              wind_force="${Math.round(weatherData.wind.speed)}"
              mercury="${weatherData.main.pressure}"
              humidity="${weatherData.main.humidity}"
              time="${time}"
            ></weather-widget>
          `;
        })
        .join('')}
    </div>
  `;
}
