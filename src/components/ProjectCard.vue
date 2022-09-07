<template>
  <router-link
    class="goLink"
    :to="{ name: 'SingleProject', params: { id: project.project_id } }"
  >
    <div class="projectDisplayCard">
      <h4>{{ project.title }}</h4>
      <p>{{ project.description }}</p>
      <p>{{ project.deadline }}</p>
      <p>{{ project.type }}</p>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "ProjectCard",
  props: ["project"],
};
</script>
<style>
.projectDisplayCard {
  max-width: 440px;
  margin: auto;
  position: relative;
  z-index: 1;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
}
</style>
