<template>
  <div id="app">
    <div class="nav-bar"></div>
    <div class="product">
      <div class="product-image">
        <img :src="image" alt="socks image">
      </div>
      <div class="product-info">
        <h1>{{product}}</h1>
        <p v-if="inventory > 10">In Stocks</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost dsold out!</p>
        <p v-if="inventory === 0">Sold Out!</p>

        <ul>
          <li v-for="detail in details" :key="detail">
            {{detail}}
          </li>
        </ul>

        <div 
        v-for="variant in variants" 
        :key="variant.variantId"
        class="color-box"
        :style="{'background-color': variant.variantColor}"
        @mouseover="updateProductImage(variant.variantImage)">
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
    product: 'Socks',
    image: require("./assets/vmSocks-green-onWhite.jpg"),
    inStock: true,
    inventory: 0,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 234, 
        variantColor: 'green', 
        variantImage: require("./assets/vmSocks-green-onWhite.jpg")
      },
      {
        variantId: 235, 
        variantColor: 'blue', 
        variantImage: require("./assets/vmSocks-blue-onWhite.jpg")
      },
    ],
    cart: 0
  }),
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProductImage(variantImage) {
      this.image = variantImage;
    }
  }
}
</script>

<style>

</style>