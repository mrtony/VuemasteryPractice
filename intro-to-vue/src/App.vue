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

        <div>
          <p v-for="variant in variants" :key="variant.variantId">
            {{variant.variantColor}}
          </p>
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
    inventory: 0,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {variantId: 234, variantColor: 'green'},
      {variantId: 235, variantColor: 'blue'},
    ]
  })
}
</script>

<style>

</style>