<template>
  <div v-if="project">
    <p>{{ project.description }}</p>
    <p>{{ project.deadline }}</p>
    <p>{{ project.type }}</p>
  </div>
</template>
<script>
export default {
  props: ["project"],
};
</script>
<style></style>
