import { css, html, LitElement } from 'https://unpkg.com/lit?module'

export class BCAddToCart extends LitElement {
  static get is() {
    return 'bc-add-to-cart'
  }

  static get properties() {
    return {
      cartId: { type: String, attribute: true },
    }
  }

  static get styles() {
    return []
  }

  constructor() {
    super()
  }

  createRenderRoot() {
    return this
  }

  onAdd() {
    this.dispatchEvent(
      new CustomEvent('add', {
        bubbles: true,
        composed: true,
        detail: this.cartId,
      })
    )
  }

  render() {
    return html`<button @click=${this.onAdd}>Add To Cart</button>`
  }
}

window.customElements.define(BCAddToCart.is, BCAddToCart)
