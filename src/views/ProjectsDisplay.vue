<template>
  <section id="projectDisplay">
    <!-- Tech stack -->
    <div class="form-floating experience">
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="technology"
      >
        <option value="Cplus">C++</option>
        <option value="Csharp">C#</option>
        <option value="java">Java</option>
        <option value="Javascript">Javascript</option>
        <option value="mongoDB">MongoDB</option>
        <option value="mysql">MySql</option>
        <option value="php">PHP</option>
        <option value="python">Python</option>
        <option value="ruby">Ruby</option>
      </select>
      <label for="floatingColor">Tech Stack neeeded</label>
    </div>

    <!-- Availabilty -->
    <div class="form-floating availabilty">
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="availability"
      >
        <option value="quickie">0-3 Months</option>
        <option value="contract">3-6 Months</option>
        <option value="longterm">6+ Months</option>
      </select>
      <label for="floatingColor">Length of Project</label>
    </div>

    <!-- PROJECTS TO BE DISPLAYED HERE -->
    <div class="projectGrid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>
<script>
import ProjectCard from "../components/ProjectCard.vue";
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      search: "",
      technology: "",
      description: "",
      type: "",
      deadline: "",
      tech: "",
      postedBy: "",
      project: "",
      projects: "",
    };
  },
  computed: {
    projects() {
      console.log(this.$store.state.projects);
      return this.$store.state.projects;
    },
    project() {
      return this.$store.state.project;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$store.dispatch("getProjects");
  },
};
</script>
<style>
#projectDisplay {
  height: 90vh;

  background-image: url("https://i.postimg.cc/tgnSNzxp/2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
