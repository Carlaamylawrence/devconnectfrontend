<template>
  <div id="single" class="singleProjectCard" v-if="project && user">
    <div class="alterBtns" v-if="project[0].postedBy === user.id">
      <button
        type="button"
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#addModal"
      >
        <i class="fa-solid fa-plus"></i>
      </button>
      <button
        type="button"
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#editModal"
      >
        <i class="fa-solid fa-gear"></i>
      </button>
      <button
        type="button"
        class="btn"
        @click="deleteProject(project.project_id)"
      >
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
    <div
      class="container"
      v-for="project of project"
      :key="project.project_id"
      :project="project"
    >
      <div class="singleProjectContainer">
        <div class="singleProjectImg">
          <img
            class="img-fluid"
            src="https://i.postimg.cc/CL75Kf2j/single-Project.png"
          />
        </div>
        <div class="singleProjectInfo">
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
    <!-- EDIT PROJECT -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editModalLabel">EDIT A PROJECT</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ADD PROJECT -->
    <div class="modal fade" id="addModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addModalLabel">ADD A PROJECT</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
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
      email: "",
      tech: "",
      postedBy: "",
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
