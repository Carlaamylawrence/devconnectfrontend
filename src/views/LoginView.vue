<template>
  <section id="login">
    <div class="loginContainer">
      <div class="loginCard d-flex justify-content-center align-self-center">
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
            <!-- <label for="floatingInput">Email address</label> -->
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
            <!-- <label for="floatingPassword">Password</label> -->
          </div>

          <!-- Button to submit  -->
          <button type="submit" class="btn" value="Login">LOGIN</button>
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
<style>
#login {
  background-image: url("https://i.postimg.cc/2ySxr5DT/4.png");
  height: 90vh;
}

.loginCard {
  max-width: 300px;
  z-index: 1;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
  margin-left: 3rem;
  padding: 1rem;
}

::placeholder {
  color: purple !important;
}
</style>
