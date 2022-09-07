<template>
  <section id="container">
    <div class="loginContainer row">
      <div class="loginImage col-lg-4">
        <img
          class="loginPicture img-fluid"
          src="https://i.postimg.cc/7LsxnX8B/loginimage.png"
        />
      </div>
      <div class="loginCard col-lg-5">
        <form @submit.prevent="login">
          <h3 class="text-center">Log in to DEVCONNECT</h3>
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
          <button type="submit" class="btn mt-2 =" value="Login">LOGIN</button>
        </form>
        <div v-if="user" class="welcomeUser">
          <p>Welcome</p>
          <h3>{{ user.fullname }}</h3>
        </div>
        <div v-else>
          <div class="registerBox">
            <h3 class="pt-2 text-center">or REGISTER</h3>
            <div class="registerBtns">
              <router-link to="/dev"
                ><button class="btn">I AM A DEV</button></router-link
              >
              <router-link to="/client"
                ><button class="btn">I AM A CLIENT</button></router-link
              >
            </div>
          </div>
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
<style scoped>
.loginContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: url("https://i.postimg.cc/2ySxr5DT/4.png"); */
  height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.loginCard {
  max-width: 300px;
  z-index: 1;
  background-color: var(--background-color);
  transition: 0.3s;

  border-radius: 10px;
  box-shadow: 0 0 0 8px rgba(192, 166, 198, 0.659);
  padding: 2rem;
}

h3,p {
  color: whitesmoke;
}
.btn {
  font-family: "League Spartan", sans-serif;
  color: whitesmoke;
  height: 2rem;
  background-color:#e77755;
  padding: 5px;
  transition: transform 0.2s ease-out;
  box-shadow: 0px 3px 1px #7e43ac;
}
.registerBtns {
  display: flex;
  justify-content: space-evenly;
}
.welcomeUser {
  display: flex;
}
::placeholder {
  color: purple !important;
}
</style>
