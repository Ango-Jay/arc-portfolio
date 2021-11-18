<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s12">
          <div class="hero">
            <div class="hero-title">
              <h1 class="hero-title-text">Dami Owolabi</h1>
              <h3 class="hero-title-text-sub">Architect</h3>
              <hr class="hero-title-text-sub-line" />
            </div>
            <button class="hero-button">know more</button>
          </div>
        </div>
        <div class="col s12 center-align">
          <div class="about">
            <div class="about-title-container">
              <h1 class="about-title">About me</h1>
              <hr class="about-title-line" />
            </div>
            <img src="/assets/o.png" alt="dami" />
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
          <div class="about-skills">
            <h3>My Skills</h3>
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

        <div class="col s12">
          <div class="projects"></div>
        </div>
        <div class="col s12">
          <div class="contact">
            <h1>Contact</h1>
            <p>
              If you have a project I can help with, please get in touch and
              let's leave an imprint in society together.
            </p>
            <button class="hero-button">Send an Email</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkillPill from "../components/SkillPill";

export default {
  name: "Home",
  components: {
    SkillPill,
  },
};
</script>