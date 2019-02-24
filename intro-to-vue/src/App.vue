<template>
  <div id="app">
    <div class="nav-bar"></div>
    <div class="product">
      <div class="product-image">
        <img :src="image" alt="socks image">
      </div>
      <div class="product-info">
        <h1>{{product}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    product: 'Socks',
    image: require("./assets/vmSocks-green-onWhite.jpg")
  })
}
</script>

<style>

</style>