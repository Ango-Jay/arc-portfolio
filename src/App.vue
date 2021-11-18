<template>
  <NavBar />
  <Home />
  <Footer />
</template>

<script>
import "./styles/main.scss";
import "materialize-css/dist/css/materialize.min.css";
import NavBar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Home,
    Footer,
  },
};
</script>

