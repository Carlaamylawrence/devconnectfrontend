<template>
  <div>
    <p>{{ project.description }}</p>
    <p>{{ project.deadline }}</p>
    <p>{{ project.type }}</p>
  </div>
</template>
<script>
export default {
  name: "ProjectCard",
  computed: {
    project() {
      return this.$store.state.project;
    },
  },
};
</script>
<style></style>
