<template>
  <div class="projects-flex">
    <div class="projects-flex-sm">
      <a style="display: flex" href="#">
        <img
          v-lazyload
          class="projects-img-sm"
          data-img-url="/assets/pece.jpg"
          alt="work"
      /></a>
      <a style="display: flex" href="#"
        ><img
          v-lazyload
          class="projects-img-sm"
          data-img-url="/assets/pece.jpg"
          alt="work"
      /></a>
    </div>
    <div class="projects-div-big">
      <a href="#">
        <img
          v-lazyload
          class="projects-img-big"
          data-img-url="/assets/pop.jpg"
          alt="work"
      /></a>
    </div>
  </div>
  <div class="projects-flex">
    <div class="projects-div-big">
      <a href="#">
        <img
          v-lazyload
          class="projects-img-big"
          data-img-url="/assets/pop.jpg"
          alt="work"
      /></a>
    </div>
    <div class="projects-flex-sm">
      <a style="display: flex" href="#">
        <img
          v-lazyload
          class="projects-img-sm"
          data-img-url="/assets/pece.jpg"
          alt="work"
      /></a>
      <a style="display: flex" href="#"
        ><img
          v-lazyload
          class="projects-img-sm"
          data-img-url="/assets/pece.jpg"
          alt="work"
      /></a>
    </div>
  </div>
</template>
<script>
//import ImgLazyLoad from "../directives/lazyLoadImg";
export default {
  name: "Project",
  /*directives: {
    lazyload: ImgLazyLoad,
  },*/
};
</script>