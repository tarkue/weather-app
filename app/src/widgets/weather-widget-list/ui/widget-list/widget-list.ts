import { getData } from '../../api/index.js';
import { generateWidgetList } from '../../lib/generate-widget-list.js';

export class WeatherWidgetList extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('add-weather-widget', () => {
      this.render();
    });
  }

  connectedCallback() {
    this.render();
  }

  private render() {
    getData().then((data) => {
      this.innerHTML = generateWidgetList(data);
    });
  }
}
