<template>
  <section id="container">
    <div v-if="user.userRole === 'dev'">
      <div class="profileGrid row">
        <div class="profilePicture col-lg-3">
          <img
            class="profilepicture mt-5 img-fluid"
            alt="profilepicture"
            :src="user.avatar"
            style="max-width: 12rem"
          />
        </div>

        <div class="profileHeader col-lg-6">
          <h3>HI, I AM</h3>
          <h2>{{ user.fullname }}</h2>
        </div>
        <div class="editBtn">
          <!-- EDIT BUTTON -->
          <button
            type="button"
            class="btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i class="fa-solid fa-gear"></i>
          </button>
        </div>
        <div class="deleteBtn">
          <!-- DELETE BUTTON -->
          <button type="button" class="btn" @click="deleteUser(id)">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
        <div class="logoutBtn">
          <button type="button" class="btn"  @click="Logout()">
            <router-link to="/"><i class="fa-solid fa-right-from-bracket"></i></router-link>
          </button>
        </div>
        <div class="profileInfo row">
          <div class="profileDetails col-lg-6">
            <p>Location: {{ user.location }}</p>
            <p>Fluent in: {{ user.technology }}</p>
            <p>Availible for {{ user.availability }}</p>
            <p>Experience: {{ user.experience }}</p>
          </div>
          <div class="profileAbout col-lg-6">
            <p>{{ user.bio }}</p>
            <div class="exploreBtns">
              <a :href="user.githubUrl" target="_blank"
                ><button class="btn">Github</button></a
              >
              <a :href="user.portUrl" target="_blank"
                ><button class="btn">Portfolio</button></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="user.userRole === 'client' ">
      <div class="deleteBtn">
        <!-- DELETE BUTTON -->
        <button type="button" class="btn" @click="deleteUser(user.id)">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
      <div class="logoutBtn">
          <button type="button" class="btn"  @click="Logout()">
            <router-link to="/"><i class="fa-solid fa-right-from-bracket"></i></router-link>
          </button>
        </div>
      <div class="profileHeader col-lg-6">
        <h3>HI, I AM A CLIENT</h3>
        <h2>{{ user.email }}</h2>
      </div>
    </div>
    <div v-if="user.userRole === 'admin'">
      <div class="deleteBtn">
        <!-- DELETE BUTTON -->
        <button type="button" class="btn" @click="deleteUser(user.id)">
          <i class="fa-solid fa-trash"></i>
        </button>
        <div class="logoutBtn">
          <button type="button" class="btn"  @click="Logout()">
            <router-link to="/"><i class="fa-solid fa-right-from-bracket"></i></router-link>
          </button>
        </div>
      </div>
      <div class="profileHeader col-lg-6">
        <h3>HI, I AM AN ADMIN</h3>
        <h2>{{ user.email }}</h2>
      </div>
    </div>
  </section>
  <!-- DISPLAY USER INFO -->

  <!-- EDIT INFO -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="exampleModalLabel">UPDATE YOUR INFO</h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="updateUserInfo">
            <!-- Experience -->
            <div class="form-floating experience mb-3">
              <select
                class="form-select"
                aria-label="Default select example"
                v-model="experience"
              >
                <option value="Junior">Junior</option>
                <option value="Mid">Mid-Level</option>
                <option value="Senior">Senior</option>
              </select>
              <label class="inputLabel" for="floatingColor"
                >Level of Experience</label
              >
            </div>
            <!-- Availabilty -->
            <div class="form-floating availability">
              <select
                class="form-select"
                aria-label="Default select example"
                v-model="availability"
              >
                <option value="quickie">0-3 Months</option>
                <option value="contract">3-6 Months</option>
                <option value="longterm">6+ Months</option>
              </select>
              <label class="inputLabel" for="floatingColor"
                >Type of availability</label
              >
            </div>
            <!-- PORTFOLIO -->
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                required
                v-model="portUrl"
                id="floatingInput"
                placeholder="www.portfolio.com"
              />
              <!-- <label for="floatingInput">Portfolio Url</label> -->
            </div>
            <!-- GITHUB -->
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                required
                v-model="githubUrl"
                id="floatingInput"
                placeholder="www.github.com"
              />
              <!-- <label for="floatingInput">Github Url</label> -->
            </div>

            <!-- Button to submit  -->
            <button class="btn" type="submit" value="SAVE">SAVE</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      experience: "",
      availability: "",
      portUrl: "",
      githubUrl: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    token() {
      return this.$store.state.jwt;
    },
   
  },
  methods: {
    updateUserInfo() {
      this.$store.dispatch("updateUserInfo", {
        id: this.user.id,
        experience: this.experience,
        availability: this.availability,
        portUrl: this.portUrl,
        githubUrl: this.githubUrl,
        token: this.token,
      });
    },
    deleteUser(id) {
      this.$store.dispatch("deleteUser", { id: id, token: this.token });
    },
    //     Logout() {
    //   this.$store.dispatch("logout");
    // },
  },
};
</script>
<style>
.profileDetails {
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

.profileAbout {
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

.profileGrid {
  display: flex;
  justify-content: center;
  align-content: center;
}

.profileHeader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
