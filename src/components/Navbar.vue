<template>
  <div>
    <nav>
      <div class="nav-wrapper navBar">
        <a href="#!" class="brand-logo hide-on-med-and-down logo-initials-lg"
          >DO</a
        >
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a
        >

        <ul class="right hide-on-med-and-down" style="margin-right: 2rem">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Project</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <!--  <li class="mt-2 side">
        <i style="fontsize: 42px" class="sidenav-close material-icons">close</i>
      </li>-->
      <li class="logo-container">
        <h3 style="width: 80px; height: 80px" class="logo-initials">
          D<span style="color: #fff">O</span>
        </h3>
      </li>
      <li class="side">
        <a href="#home"
          ><span
            ><img
              style="width: 15px; height: 15px; margin-right: 0.5rem"
              src="/img/home.svg" /></span
          >Home</a
        >
      </li>
      <li class="side">
        <a href="#about"
          ><span
            ><img
              style="width: 15px; height: 15px; margin-right: 0.5rem"
              src="/img/a6.svg" /></span
          >About</a
        >
      </li>
      <li class="side">
        <a href="#projects"
          ><span
            ><img
              style="width: 15px; height: 15px; margin-right: 0.5rem"
              src="/img/a.svg" /></span
          >Project</a
        >
      </li>
      <li class="side">
        <a href="#contact"
          ><span
            ><i
              style="width: 15px; height: 15px; margin-right: 0.5rem"
              class="fa fa-phone"
              aria-hidden="true"
            ></i></span
          >Contact</a
        >
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: "NavBar",
 
};
</script>