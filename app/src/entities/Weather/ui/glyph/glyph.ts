import { WeatherGlyphLink } from '../../model';

export class WeatherGlyph extends HTMLElement {
  static observedAttributes = ['glyph'] as const;

  constructor() {
    super();
  }

  connectedCallback() {
    const glyph = this.getAttribute('glyph');

    if (!glyph) {
      return;
    }

    this.innerHTML = `
      <img 
        class="weather_glyph" 
        src="${WeatherGlyphLink[glyph]}" 
        alt="glyph" 
        width="48" 
        height="48" 
      />
    `;
  }
}
