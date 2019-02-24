<template>
    <div class="product">
      <div class="product-image">
        <img :src="image" alt="socks image">
      </div>
      <div class="product-info">
        <h1>{{title}}</h1>
        <p v-if="inventory > 10">In Stocks</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost dsold out!</p>
        <p v-if="inventory === 0">Sold Out!</p>
        <p>Shipping: {{shipping}}</p>
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

      </div>
    </div>
</template>

<script>
export default {
  name: 'product',
  props: {
      premium: {
          type: Boolean,
          required: true
      }
  },
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
  }),
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant]);
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
    },
    shipping() {
        return this.premium? 'Free': '$2.99';
    }
  }
}
</script>

<style>

</style>

