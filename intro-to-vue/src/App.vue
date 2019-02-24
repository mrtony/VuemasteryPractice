<template>
  <div id="app">
    <div class="nav-bar"></div>
    <div class="product">
      <div class="product-image">
        <img :src="image" alt="socks image">
      </div>
      <div class="product-info">
        <h1>{{title}}</h1>
        <p v-if="inventory > 10">In Stocks</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost dsold out!</p>
        <p v-if="inventory === 0">Sold Out!</p>

        <ul>
          <li v-for="detail in details" :key="detail">
            {{detail}}
          </li>
        </ul>

        <div 
        v-for="(variant, index) in variants" 
        :key="variant.variantId"
        class="color-box"
        :style="{'background-color': variant.variantColor}"
        @mouseover="updateProductImage(index)">
        </div>
        <button @click="addToCart" 
        :disabled="!inStock"
        :class="{disabledButton: !inStock}"
        >Add To Cart</button>
        <div class="cart">
          <p>Cart: {{cart}}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    brand: 'VueMastery',
    product: 'Socks',
    selectedVariant: 0,
    inventory: 0,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 234, 
        variantColor: 'green', 
        variantImage: require("./assets/vmSocks-green-onWhite.jpg"),
        variantQuantity: 10
      },
      {
        variantId: 235, 
        variantColor: 'blue', 
        variantImage: require("./assets/vmSocks-blue-onWhite.jpg"),
        variantQuantity: 0
      },
    ],
    cart: 0
  }),
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProductImage(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    }
  }
}
</script>

<style>

</style>