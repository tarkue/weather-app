class Icon extends HTMLElement {
  static observedAttributes = ["color", "glyph"];

  constructor() {
    super();
  }

  connectedCallback() {
    const color: this.getAttribute('color') || 
    this.innerHTML = `<img src='${CONTENT_PATH + }' />`;
  }
}

customElements.define("Icon", Icon);
