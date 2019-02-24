<template>
  <div id="app">
    <div class="nav-bar"></div>
    <product :premium="premium"></product>
    <product-global-component :premium=false></product-global-component>
  </div>
</template>

<script>
import Product from './Product';

export default {
  name: 'app',
  components: {
    Product
  },
  data: function() {
    return {
    premium: true
  }
  }
}
</script>

<style>

</style>