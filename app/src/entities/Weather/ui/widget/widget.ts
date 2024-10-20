import { serializeAttributes } from '../../../../shared/libs/index.js';
import { WeatherCitiesStorage } from '../../model/index.js';
import { observedAttributes } from './attrubutes.js';

export class WeatherWidget extends HTMLElement {
  public static readonly observedAttributes = observedAttributes;
  private readonly props: Record<
    (typeof observedAttributes)[number],
    string | null
  >;

  constructor() {
    super();
    this.props = serializeAttributes<typeof observedAttributes>(this);
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue == newValue) return;

    this.props[name] = newValue;
    this.render();
  }

  private render() {
    this.innerHTML = `
      <div class="weather_widget">
        <div class="weather_widget__header">
          <span class="text_16_semibold weather_widget__city">
            ${this.props.city}
          </span>
          <button class="icon_button" data-delete="${this.props.key}">
            <span class="icon_close"></span>
          </button>
        </div>
        <div class="weather_widget__content">
          <div>
            <span class="weather_widget__temp">${this.props.temperature}</span>
            <weather-glyph glyph="${this.props.glyph}"></weather-glyph>
          </div>
          <div>
            <span class="text_16_medium weather_widget__type">
              ${this.props.weather_type}
            </span>
            <span class="text_16_regular">
              Ощущается как: ${this.props.temperature_fell}
            </span>
          </div>
        </div>
        <div class="weather_widget__footer">
          <span class="text_16_regular">Сила ветра: ${this.props.wind_force} м/с</span>
          <span class="text_16_regular">мм.рт.ст: ${this.props.mercury}</span>
          <span class="text_16_regular">Время: ${this.props.time}</span>
          <span class="text_16_regular">Влажность: ${this.props.humidity}%</span>
        </div>
      </div>
    `;

    this.addEventListenerToDeleteButton();
  }

  private addEventListenerToDeleteButton() {
    const deleteButton = this.querySelector('[data-delete]') as HTMLElement;
    deleteButton.addEventListener('click', () => {
      const key = deleteButton.getAttribute('data-delete');
      if (!key) return;

      WeatherCitiesStorage.remove(Number.parseInt(key));
      this.remove();
    });
  }
}
