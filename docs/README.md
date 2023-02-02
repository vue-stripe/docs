---
title: Home
desctription: Stripe Checkout & Elements for Vue.js
home: true
heroText: Vue Stripe 💳
heroImage: /images/vue-stripe-logo.png
heroAlt: Vue Stripe Logo
tagline: Stripe Checkout & Elements for Vue.js
actions:
  - text: Get Started!
    link: /guide/
    type: primary
  # - text: Get Started
  #   link: /introduction/
  #   type: secodary
features:
  - title: Payment Element
    details: Accept payment methods from around the globe with a single secure, embeddable UI component
  - title: Link Authentication Element
    details: Accept a payment with Stripe Link Payment
  - title: Pay Button Element
    details: Show multiple one-click payment buttons (including Apple Pay and Google Pay) to your customers at the same time
  - title: Address Element
    details: The Address Element is an embeddable UI component that autofills your customers’ billing and shipping addresses quickly and accurately
  - title: More Elements
    details: Implement more of Stripe's advanced UI Elements
  - title: Checkout (deprecated)
    details: A low-code integration to build a customized payment page, hosted on Stripe
# footerHtml: true
footer: MIT Licensed | Copyright © 2016 - present Joff Tiquez
---

# Installation <Badge type="tip" text="v5" vertical="top" />

:::: code-group
::: code-group-item Yarn
```sh
yarn add @vue-stripe/vue-stripe
```
:::
::: code-group-item NPM
```sh
npm install @vue-stripe/vue-stripe
```
:::
::::

# Usage

```vue
<template>
...
</template>

<script>
import { useCheckout } from '@vue-stripe/vue-stripe';
export default {
  setup () {
    const PUBLISHABLE_KEY = process.env.PUBLISHABLE_KEY;
    const { redirectToCheckout } = useCheckout(PUBLISHABLE_KEY);

    async function onCheckout () {
      const payload = {
        // See https://stripe.com/docs/js/deprecated/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options
      };
      await redirectToCheckout(payload);
    }
  }
};
</script>
```