import { searchCity } from '../../../../entities/City/index.js';

export class CityList extends HTMLElement {
  static observedAttributes = ['search'];

  constructor() {
    super();
  }

  private setMessageInInnerHTML(message: string) {
    this.innerHTML = `
      <ul class="city_list">
        <li class="text_16_medium start_typing">
          ${message}
        </li>
      </ul>
    `;
  }

  private setDefaultInnerHTML() {
    this.setMessageInInnerHTML('Начните вводить город или район');
  }

  private addEventListenersOnButtons() {
    const elements = this.querySelectorAll('#add_city_button');
    elements.forEach((el) => {
      el.addEventListener('click', () => {
        const address = el.getAttribute('data-adress');
        const lnglat = el.getAttribute('data-lnglat');

        const event = new CustomEvent('add-city', {
          bubbles: true,
          detail: { address, lnglat },
        });
        this.dispatchEvent(event);
      });
    });
  }

  connectedCallback() {
    this.setDefaultInnerHTML();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name == 'search' && newValue.length == 0) {
      this.setDefaultInnerHTML();
    }
    if (name != 'search' || newValue.length < 3) {
      return;
    }

    const countries = searchCity(newValue);

    if (oldValue != newValue) {
      if (countries.length == 0) {
        this.setMessageInInnerHTML('Ничего не найдено');
        return;
      }
      this.innerHTML = `
        <ul class="city_list">
          ${countries
            .map(
              (city) => `
            <li>
              <button 
                class="city_item text_16_medium" 
                data-adress="${city.address}" 
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
      this.addEventListenersOnButtons();
    }
  }
}
