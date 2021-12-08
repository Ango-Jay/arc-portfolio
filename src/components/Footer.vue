<template>
  <footer class="footer navbar-static-bottom">
    <div class="container">
      <a href="#top" class="back-to-top"
        ><i
          style="pointer-events: none"
          class="fa fa-angle-up fa-2x"
          aria-hidden="true"
        >
        </i
      ></a>

      <div class="social-links">
        <a rel="noreferrer" href="https://twitter.com/jay_ango" target="_blank">
          <i style="width: 30px" class="fa fa-twitter fa-inverse"></i>
        </a>
        <a rel="noreferrer" href="angojeff433@gmail.com" target="_blank">
          <i style="width: 30px" class="fa fa-envelope fa-envelope"></i>
        </a>
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/jeffrey-ango-0b194b142"
          target="_blank"
        >
          <i style="width: 30px" class="fa fa-linkedin fa-inverse"></i>
        </a>
      </div>

      <hr />

      <p class="footer__text">
        © 2021 - Designed by
        <a rel="noreferrer" href="https://github.com/Ango-Jay/" target="_blank"
          >Ango Jeffrey</a
        >
      </p>
    </div>
  </footer>
</template>

<script>
//import M from "materialize-css/dist/js/materialize.min.js";
export default {
  name: "Footer",
  /* mounted() {
    //  M.AutoInit();

    return document.addEventListener("DOMContentLoaded", function () {
      let elems = document.querySelectorAll(".scrollspy");
      let options = { throttle: 1000 };
      let instances = M.ScrollSpy.init(elems, options);
    });
  },*/
};
</script>