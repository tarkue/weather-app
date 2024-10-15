import { searchCity } from '../../../../entities/Country/index.js';

export class CountryList extends HTMLElement {
  static observedAttributes = ['search'];

  constructor() {
    super();
  }

  private setMessageInInnerHTML(message: string) {
    this.innerHTML = `
      <ul class="country_list">
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
    const elements = this.querySelectorAll('#add_country_button');
    elements.forEach((el) => {
      el.addEventListener('click', () => {
        const address = el.getAttribute('data-adress');
        const lnglat = el.getAttribute('data-lnglat');

        const event = new CustomEvent('add-country', {
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
        <ul class="country_list">
          ${countries
            .map(
              (country) => `
            <li>
              <button 
                class="country_item text_16_medium" 
                data-adress="${country.address}" 
                data-lnglat="${country.lnglat}"
                id="add_country_button"

              >
                ${country.address}
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
