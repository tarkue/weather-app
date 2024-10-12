import { serializeAttributes } from '@/shared/libs';
import { observedAttributes } from './attrubutes';

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
        <div class="weather_widget__header>
          <span class="text_16_semibold">${this.props.city}</span>
          <button class="icon_button">
            <span class="icon_close"></span>
          </button>
        </div>
        <div class="weather_widget__content>
          <div>
            <span>${this.props.temperature}</span>
            <widget-glyph glyph="${this.props.glyph}"></widget-glyph>
          </div>
          <div>
            <span>${this.props.weatherType}</span>
            <span>${this.props.temperatureFell}</span>
          </div>
        </div>
        <div class="weather_widget__footer>
          <span>${this.props.windForce}</span>
          <span>${this.props.mercury}</span>
          <span>${this.props.time}</span>
          <span>${this.props.humidity}</span>
        </div>
      </div>
    `;
  }
}
