<template>
  <router-link
    class="goLink"
    :to="{ name: 'SingleProject', params: { id: project.project_id } }"
  >
    <div class="projectDisplayCard">
      <h4>{{ project.title }}</h4>
      <h5>{{ project.type }}</h5>
      <p>{{ project.tech }}</p>
      <p>{{ project.description }}</p>
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
  background-color: rgb(255 255 255 / 9%);
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
  padding: 2rem;
}
</style>
