<template>
  <div id="app">
    <div class="nav-bar"></div>
    <product :premium="premium" @add-to-cart="updateCart"></product>
        <div class="cart">
          <p>Cart: {{cart.length}}</p>
    </div>
  </div>
  
</template>

<script>
import Product from './Product';

export default {
  name: 'app',
  components: {
    Product,
  },
  data: function() {
    return {
      premium: true,
      cart: []
    }
  },
  methods: {
    updateCart(variant) {
      this.cart.push(variant);
    }
  }
}
</script>

<style>

</style>