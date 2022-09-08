<template>
  <div id="single" class="singleProjectCard" v-if="project && user">
    <div v-if="user.userRole == 'admin' || user.userRole == 'client'">
      <button
        type="button"
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#addModal"
      >
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>

    <div
      class="container"
      v-for="project of project"
      :key="project.project_id"
      :project="project"
    >
      <div class="alterBtns" v-if="project.postedBy === user.id">
        <button
          type="button"
          class="btn"
          data-bs-toggle="modal"
          :data-bs-target="`#editModal${project.project_id}`"
        >
          <i class="fa-solid fa-gear"></i>
        </button>

        <!-- EDIT PROJECT -->
        <div
          class="modal fade"
          :id="`editModal${project.project_id}`"
          tabindex="-1"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="editM">EDIT A PROJECT</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="updateProject(project.project_id)">
                  <!-- Type of Developer -->
                  <div class="form-floating experience mb-3">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      v-model="title"
                    >
                      <option value="Front-end">Front-End</option>
                      <option value="Backend">Backend</option>
                      <option value="Fullstack">FullStack</option>
                    </select>
                    <label class="inputLabel" for="floatingColor"
                      >Type of Developer</label
                    >
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      required
                      v-model="description"
                      id="floatingInput"
                      placeholder="Project description"
                    />
                  </div>
                  <!-- Experience -->
                  <div class="form-floating experience mb-3">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      v-model="type"
                    >
                      <option value="Junior">Junior</option>
                      <option value="Mid">Mid-Level</option>
                      <option value="Senior">Senior</option>
                    </select>
                    <label class="inputLabel" for="floatingColor"
                      >Level of Experience</label
                    >
                  </div>

                  <!-- Technology -->
                  <div class="form-floating technology mb-3">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      v-model="tech"
                    >
                      <option value="Cplus">C++</option>
                      <option value="Csharp">C#</option>
                      <option value="Java">Java</option>
                      <option value="Javascript">javascript</option>
                      <option value="MySql">MySql</option>
                      <option value="Node">Node</option>
                      <option value="Python">Python</option>
                      <option value="Ruby">Ruby</option>
                    </select>
                    <label class="inputLabel" for="floatingColor"
                      >Required tech</label
                    >
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      required
                      v-model="email"
                      id="floatingInput"
                      placeholder="Email to Contact"
                    />
                  </div>
                  <div class="pushBtns">
                    <button type="submit" class="btn mt-2" value="editProduct">
                      SAVE
                    </button>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- DELETE PROJECT -->
        <button
          type="button"
          class="btn"
          @click="deleteProject(project.project_id)"
        >
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
      <div class="singleProjectContainer row">
        <div class="singleProjectImg col-lg-4">
          <img
            class="img-fluid"
            style="width: 8rem"
            src="https://i.postimg.cc/CL75Kf2j/single-Project.png"
          />
          <p>If you are interested contact us at:</p>
          <h4>{{ project.email }}</h4>
        </div>
        <div class="singleProjectInfo col-lg-6">
          <h4>{{ project.title }}</h4>
          <p>{{ project.type }}</p>
          <p>{{ project.description }}</p>
          <p>{{ project.tech }}</p>
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
          <div class="modal-body">
            <form @submit.prevent="addProject">
              <!-- Type of Developer -->
              <div class="form-floating experience mb-3">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="title"
                >
                  <option value="Front-end">Front-End</option>
                  <option value="Backend">Backend</option>
                  <option value="Fullstack">FullStack</option>
                </select>
                <label class="inputLabel" for="floatingColor"
                  >Type of Developer</label
                >
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  required
                  v-model="description"
                  id="floatingInput"
                  placeholder="Project description"
                />
              </div>
              <!-- Experience -->
              <div class="form-floating experience mb-3">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="type"
                >
                  <option value="Junior">Junior</option>
                  <option value="Mid">Mid-Level</option>
                  <option value="Senior">Senior</option>
                </select>
                <label class="inputLabel" for="floatingColor"
                  >Level of Experience</label
                >
              </div>

              <!-- Technology -->
              <div class="form-floating technology mb-3">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="tech"
                >
                  <option value="Cplus">C++</option>
                  <option value="Csharp">C#</option>
                  <option value="Java">Java</option>
                  <option value="Javascript">javascript</option>
                  <option value="MySql">MySql</option>
                  <option value="Node">Node</option>
                  <option value="Python">Python</option>
                  <option value="Ruby">Ruby</option>
                </select>
                <label class="inputLabel" for="floatingColor"
                  >Required tech</label
                >
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  required
                  v-model="email"
                  id="floatingInput"
                  placeholder="Email to Contact"
                />
              </div>
              <div class="pushBtns">
                <button type="submit" class="btn mt-2" value="addProduct">
                  SAVE
                </button>
              </div>
            </form>
          </div>
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
      title: "",
      description: "",
      type: "",
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
    token() {
      return this.$store.state.jwt;
    },
  },
  mounted() {
    console.log(this.$route.params.id);
    this.$store.dispatch("getProject", this.$route.params.id);
  },
  methods: {
    addProject() {
      this.$store.dispatch("addProject", {
        title: this.title,
        description: this.description,
        type: this.type,
        tech: this.type,
        email: this.email,
        postedBy: this.postedBy,
        token: this.token,
      });
    },
    updateProject(id) {
      this.$store.dispatch("updateProject", {
        id: id,
        title: this.title,
        description: this.description,
        type: this.type,
        tech: this.type,
        email: this.email,
        token: this.token,
      });
    },
    deleteProject(id) {
      this.$store.dispatch("deleteProject", { id: id, token: this.token });
    },
  },
};
</script>
<style>
#single {
  min-height: 100vh;
  margin-top: 8rem;
}

.singleProjectContainer {
  display: flex;
  justify-content: center;
  background-color: rgb(255 255 255 / 9%);
}

.alterBtns {
  display: flex;
  justify-content: center;
}
</style>
