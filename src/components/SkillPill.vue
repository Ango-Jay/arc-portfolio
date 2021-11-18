<template>
  <div class="about-skill-pill">
    <p>{{ pillValue }}</p>
  </div>
</template>

<script>
export default {
  name: "SkillPill",
  props: ["pillValue"],
};
</script>