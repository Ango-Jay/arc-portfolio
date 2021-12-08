<template>
  <div class="about-skill-pill">
    <p class="about-skill-pill-txt">{{ pillValue }}</p>
  </div>
</template>

<script>
export default {
  name: "SkillPill",
  props: ["pillValue"],
};
</script>