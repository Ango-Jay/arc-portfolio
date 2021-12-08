<template>
  <NavBar />
  <div class="scrollspy" id="top"></div>

  <div>
    <div class="hero scrollspy" id="home">
      <div class="hero-title">
        <h1 class="hero-title-text">
          <span style="color: #00461b"> DAMI</span> OWOLABI
        </h1>
        <div class="hero-title-text-flex">
          <span class="hero-title-text-flex-span"
            ><img
              style="width: 50px; height: 80px; margin-right: 0.5rem"
              src="/assets/col1.svg"
          /></span>
          <h3 class="hero-title-text-sub">Architect</h3>
        </div>
        <!-- <hr class="hero-title-text-sub-line" /> -->
        <button class="hero-button">
          <a href="#about" class="about-link">Know more</a>
        </button>
      </div>
    </div>

    <div class="col s12 center-align">
      <div class="about scrollspy" id="about">
        <div class="about-title-container">
          <h1 class="about-title">About me</h1>
          <hr class="about-title-line" />
        </div>
        <img class="profile-img" src="/assets/o.png" alt="dami" />
        <p>
          My name is Damilare Owolabi. I am an Architect, 3D Visualizer, &
          Interior Designer.
        </p>
        <p class="no-margin flow-text">
          In my free time, I love learning new ways to improve my design,
          because I mean the thrill in Architecture for me is basically the fact
          that you can literally leave an imprint in society with your
          designs... and I have to say that's the runners high for me... the
          process when a random thought develops into an idea which then
          develops into a design and it moves from laptop screen or paper sketch
          into reality is something I deem truly divine...
        </p>
      </div>
      <div class="mb-2">
        <h3 style="color: #00461b" class="about-skills-title">My Skills</h3>
        <img
          style="width: 100px; fill: #00461b"
          src="/assets/a.svg"
          alt="skills"
        />

        <div class="about-skills">
          <SkillPill pillValue="AutoCAD" />
          <SkillPill pillValue="ArchiCAD" />
          <SkillPill pillValue="Revit" />
          <SkillPill pillValue="Lumion" />
          <SkillPill pillValue="Cinema4D" />
          <SkillPill pillValue="Corona renderer" />
          <SkillPill pillValue="Blender" />
          <SkillPill pillValue="Photoshop" />
          <SkillPill pillValue="AutoCAD" />
        </div>
      </div>
    </div>

    <div class="col s12">
      <div class="projects"></div>
    </div>
    <div class="col s12">
      <div class="contact scrollspy" id="contact">
        <h1 class="contact-title">Contact</h1>
        <hr class="contact-line" />

        <p>
          If you have a project I can help with, please get in touch and let's
          leave an imprint in society together.
        </p>
        <button class="hero-button">Send an Email</button>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import NavBar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import SkillPill from "../components/SkillPill";
import M from "materialize-css/dist/js/materialize.min.js";

export default {
  name: "Home",
  components: {
    NavBar,
    SkillPill,
    Footer,
  },
  mounted() {
    M.AutoInit();
  },
};
</script>