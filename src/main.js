import { createApp } from "vue";
import App from "./App.vue";
import ImgLazyLoad from "./directives/lazyLoadImg";



createApp(App).directive("lazyload", ImgLazyLoad).mount("#app");

/*var app = new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});*/
