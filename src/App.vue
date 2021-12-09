<template>
  <Home />
</template>

<script>
import "./styles/main.scss";
import "materialize-css/dist/css/materialize.min.css";
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>
<style lang="scss">
#app {
  color: #fff;
  background-color: #0f0f0f;
}
</style>

