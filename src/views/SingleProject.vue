<template>
  <div id="single" class="singleProjectCard" v-if="project">
    <div
      class="container"
      v-for="project of project"
      :key="project.project_id"
      :project="project"
    >
      <!-- <div v-if="project.postedBy === user.user.id">
        <button
          type="button"
          class="btn btn-outline-light"
          @click="deleteProject(project.project_id)"
        >
          Delete
        </button>

        <button
          type="button"
          class="btn btn-light-outilne"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Edit
        </button>
      </div> -->

      <p>{{ project.description }}</p>
    </div>
    <div class="section-title text-center"></div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      description: "",
      type: "",
      deadline: "",
      tech: "",
    };
  },

  computed: {
    project() {
      console.log(this.$store.state.project);
      return this.$store.state.project;
    },
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },
  mounted() {
    console.log(this.$route.params.id);
    this.$store.dispatch("getProject", this.$route.params.id);
  },
  methods: {
    updateProject() {
      this.$store.dispatch("updateProject", this.project);
    },
    deleteProject(id) {
      this.$store.dispatch("deleteProject", id);
    },
  },
};
</script>
<style>
#single {
  min-height: 100vh;
  margin-top: 8rem;
}
</style>
