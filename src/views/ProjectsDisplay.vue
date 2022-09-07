<template>
  <section id="container">
    <div class="projectDisplay">
      <!-- Tech stack -->
      <div class="search-wrapper">
        <input
          class="search-input"
          type="text"
          v-model="search"
          placeholder="Search"
        />

        <button class="btn ms-2" @click="sortProjects">
          Sort By Technology
        </button>
        <div class="form-floating experience">
          <select class="form-select ms-3" v-model="tech">
            <option value="all">All</option>
            <option value="Cplus">C++</option>
            <option value="Csharp">C#</option>
            <option value="Java">Java</option>
            <option value="Javascript">Javascript</option>
            <option value="MySql">MySql</option>
            <option value="Node">Node</option>
            <option value="Python">Python</option>
            <option value="Ruby">Ruby</option>
          </select>
          <label for="floatingColor">Tech Stack neeeded</label>
        </div>
      </div>

      <!-- PROJECTS TO BE DISPLAYED HERE -->
      <div class="projectGrid" v-if="projects">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>
<script>
import ProjectCard from "../components/ProjectCard.vue";
export default {
  props: ["id"],
  components: {
    ProjectCard,
  },
  data() {
    return {
      search: "",
      description: "",
      type: "",
      deadline: "",
      tech: "all",
      postedBy: "",
      project: "",
      projects: "",
    };
  },
  computed: {
    projects() {
      console.log(this.$store.state.projects);
      return this.$store.state.projects?.filter((project) => {
        let isMatch = true;
        if (!project.title?.toLowerCase().includes(this.search.toLowerCase()))
          isMatch = false;
        if (this.tech !== "all" && project.tech !== this.tech) isMatch = false;
        return isMatch;
      });
    },
    project() {
      return this.$store.state.project;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$store.dispatch("getProjects");
  },
  methods: {
    sortProjects() {
      this.$store.commit("sortProjectsByTitle");
    },
  },
};
</script>
<style>
.projectDisplay {
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.sort-options {
  display: flex;
  justify-content: center;
}
</style>
