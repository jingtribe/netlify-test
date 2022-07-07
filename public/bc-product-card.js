import { css, html, LitElement } from 'https://unpkg.com/lit?module'
import { cardStyles } from './card-styles.js'

function getCookie(cname) {
  let name = cname + '='
  let ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

export class BCProductCard extends LitElement {
  static get is() {
    return 'bc-product-card'
  }

  static get properties() {
    return {
      slug: { type: String, attribute: true },
      product: { type: Object, attribute: true },
      loading: { type: Boolean },
    }
  }

  static get styles() {
    return [
      cardStyles,
      css`
        .container {
          max-width: 200px;
        }
        img {
          width: 100%;
        }
      `,
    ]
  }

  constructor() {
    super()
  }

  connectedCallback() {
    super.connectedCallback()
    this.fetchData()
  }

  async fetchData() {
    this.loading = true
    const response = await fetch(
      `https://localhost:3030/api/bigcommerce/product/${this.slug}`
    )
    const data = await response.json()
    this.product = { ...data }
    this.loading = false
  }

  async onClickButton(e) {
    const optionSelections = []
    const cartId = getCookie(e.detail)
    console.log(cartId)
    const data = {
      item: {
        optionSelections,
        quantity: 1,
        productId: this.product.entityId,
        variantId: this.product.variants.edges[0].node.entityId,
      },
      locale: 'en-US',
    }
    await fetch(`http://localhost:3030/api/bigcommerce/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `${e.detail}=${cartId}`,
      },
      credentials: 'include',
      body: JSON.stringify(data),
    })
  }

  render() {
    if (this.loading) {
      return html`<div>Loading: ${this.slug}</div>`
    }

    const productImage = this.product.images?.edges[0]?.node?.urlOriginal
    return html`<div class="container">
      <div class="card-body">
        <img class="card-image" src=${productImage} />
        ${this.product.name}
      </div>
      <div>
        <slot @add=${this.onClickButton} name="button"></slot>
      </div>
    </div>`
  }
}

window.customElements.define(BCProductCard.is, BCProductCard)
