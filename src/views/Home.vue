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
              v-lazyload
              style="
                width: 50px;
                height: 80px;
                margin-right: 0.5rem;
                text-shadow: 1px 1px 2px #0f0f0f;
              "
              data-img-url="/assets/col1.svg"
          /></span>
          <h3 class="hero-title-text-sub">Architect</h3>
        </div>
        <!-- <hr class="hero-title-text-sub-line" /> -->
        <button class="hero-button">
          <a href="#about" class="about-link">Know more</a>
        </button>
      </div>
    </div>
    <div class="divider"></div>
    <div class="about-container">
      <div class="about scrollspy" id="about">
        <div class="about-title-container">
          <h1 class="about-title">About me</h1>
          <hr class="about-title-line" />
        </div>
        <div class="about-content-container">
          <div class="about-content-container-text">
            <p>
              My name is Damilare Owolabi. I am an Architect, 3D Visualizer, &
              Interior Designer.
            </p>
            <p class="no-margin flow-text">
              In my free time, I love learning new ways to improve my design,
              because I mean the thrill in Architecture for me is basically the
              fact that you can literally leave an imprint in society with your
              designs... and I have to say that's the runners high for me... the
              process when a random thought develops into an idea which then
              develops into a design and it moves from laptop screen or paper
              sketch into reality is something I deem truly divine...
            </p>
          </div>
          <img
            v-lazyload
            class="profile-img"
            data-img-url="/img/architect.svg"
            alt="dami"
          />
        </div>
      </div>
      <div>
        <h3 style="color: #00461b" class="about-skills-title">My Skills</h3>
        <div class="about-skills-content">
          <img
            v-lazyload
            class="about-skills-img"
            data-img-url="/img/skill.png"
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
          <img
            v-lazyload
            class="about-skills-img-lg"
            data-img-url="/img/skill.png"
            alt="skills"
          />
        </div>
      </div>
    </div>

    <div>
      <div id="projects" class="projects scrollspy">
        <h1 style="margin-bottom: 0rem">My Work</h1>
        <hr class="about-title-line" />

        <div
          style="
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 2rem;
          "
        >
          <div class="projects-btn-container">
            <button style="margin: 0rem" class="hero-button">
              <a href="#about" class="about-link">See more</a>
            </button>
          </div>
          <Project />
        </div>
      </div>
    </div>
    <div class="col s12">
      <div class="contact scrollspy" id="contact">
        <h1 class="contact-title">Contact</h1>
        <hr class="contact-line" />

        <p class="contact-txt">
          If you have a project I can help with, please get in touch and let's
          leave an imprint in society together.
        </p>
        <button
          style="
            border: 3px solid #121212;
            color: #121212;
            background-color: #00461b;
            margin-left: 0;
          "
          class="hero-button"
        >
          Send an&nbsp;<span style="color: #fff"> Email</span>
        </button>
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
import Project from "../components/Project";
//import image0 from "../img/architect.svg"
//const Project = () => ({
//component: import("../components/Project"),
// loading: LoadingComponent,
//error: ErrorComponent,
// The error component will be displayed if a timeout is
// provided and exceeded. Default: Infinity.
//timeout: 3000,
//});

export default {
  name: "Home",
  data() {
    return {
      image0: "image0",
    };
  },
  components: {
    NavBar,
    SkillPill,
    Footer,
    Project,
  },
  mounted() {
    M.AutoInit();
  },
};
</script>