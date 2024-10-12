const modal = document.getElementById('add_country_modal');
const buttonAddCountry = document.getElementById('add_country_button');
const closeModal = document.getElementById('close_modal');
const countryList = document.getElementById('country_list');

const toggleModal = () => modal?.classList.toggle('unvisible');

buttonAddCountry?.addEventListener('click', toggleModal);
closeModal?.addEventListener('click', toggleModal);

const searchInputWrapper = document.getElementById('search_input_wrapper');
const searchInput = document.getElementById('search_input');

searchInputWrapper?.addEventListener('click', () => searchInput?.focus());

class CountryList extends HTMLElement {
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

    if (oldValue != newValue) {
      const countries: string[] = [
        'Москва',
        'Санкт-Петербург',
        'Нефтеюганск',
        'Нефтекамск',
        'Махачкала',
      ].filter((e: string) => e.toLowerCase().includes(newValue.toLowerCase()));

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
                <a class="country_item text_16_medium">
                  ${country}
                </a>
              </li>
            `,
              )
              .join('')}
          </ul>
      `;
    }
  }
}

customElements.define('country-list', CountryList);

type InputChangeEvent = Event & { target: HTMLInputElement };

searchInput?.addEventListener('input', (e: InputChangeEvent) => {
  countryList?.setAttribute('search', e.target?.value || '');
});

class WeatherWidgetList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {}
}

customElements.define('weather-widget', WeatherWidget);
customElements.define('weather-widget-list', WeatherWidgetList);
customElements.define('weather-glyph', WeatherGlyphComponent);
