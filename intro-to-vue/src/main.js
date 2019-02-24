import Vue from "vue";
import App from "./App.vue";
import './styles.css';
import './Product-global.js';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
