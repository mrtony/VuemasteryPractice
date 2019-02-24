import Vue from "vue";
import App from "./App.vue";
import './styles.css';
import './Product-global.js';
import EventBus from './EventBus.js';

Vue.config.productionTip = false;

new Vue({
  data: function() {
    return {
      bus: EventBus
    }
  },
  render: h => h(App)
}).$mount("#app");
