# Checkout <Badge type="tip" text="deprecated" vertical="top"/>

## Installation

Install from **Yarn** or **NPM**.


::: warning
**Checkout** is now `deprecated`. You can still use it, but better to move to either **Payment Element** or **Link Authentication Element**. While this is still supported in Stripe and Vue Stripe, lesser priority for maintenance will be spent on this module.
:::

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

## Usage

In version 5 **Checkout** is now a composable unlike in previous versions where **Checkout** is a vue component.

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

### Import

Use named import to import the Checkout composable.

```js
import { useCheckout } from '@vue-stripe/vue-stripe';
```

### Initialize

Initialize Stripe using your **Publishable Key**.

```js
const PUBLISHABLE_KEY = process.env.PUBLISHABLE_KEY;
const { redirectToCheckout } = useCheckout(PUBLISHABLE_KEY);
```

See also: [Getting the Publishable Key](/faqs/getting-the-publishable-key.md)

::: tip
Always keep your publishable key or any other client secrets to `process.env`. Not only it is safer that way, it will also be easier to maintain.
:::

### Redirect to Checkout

Prepare the payload for the checkout and call the async `redirectoToCheckout` method.

```js
async function onCheckout () {
  const payload = {...};
  await redirectToCheckout(payload);
}
```

See all the [checkout options here](https://stripe.com/docs/js/deprecated/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options).