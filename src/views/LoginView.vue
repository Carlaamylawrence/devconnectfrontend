<template>
  <section id="login">
    <div class="container shadow-sm p-3 mb-5 bg-body rounded">
      <div class="loginPanel d-flex justify-content-center align-self-center">
        <form @submit.prevent="login">
          <h3>Log in to DEVCONNECT</h3>
          <!-- Email -->
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              required
              v-model="email"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              required
              v-model="password"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <!-- Button to submit  -->
          <button type="submit" class="btn-outline-dark" value="Login">
            LOGIN
          </button>
        </form>
        <div v-if="user">
          Welcome {{ user.email }}
          <router-link to="/projects"> View Projects Here</router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
<style></style>
