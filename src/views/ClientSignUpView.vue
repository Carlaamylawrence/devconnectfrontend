<template>
  <div class="container shadow-sm p-3 mb-5 bg-body rounded">
    <form @submit.prevent="clientRegister">
      <p>Register as client on Devconnect</p>
      <fieldset>
        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            required
            v-model="email"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <!-- Password -->
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

        <!-- USERROLE -->
        <div class="form-floating experience">
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="userRole"
          >
            <option value="dev">Client</option>
          </select>
          <label for="floatingColor">Just for confirmation</label>
        </div>
      </fieldset>
      <!-- Button to submit  -->
      <input type="submit" value="Register" />
    </form>
    <div v-if="user">
      Welcome {{ user.fullname }}, Your sign up was successsul
    </div>
  </div>
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
      userRole: "",
    };
  },
  methods: {
    clientRegister() {
      let user = {
        email: this.email,
        password: this.password,
        userRole: client,
      };
      this.$store.dispatch("clientRegister", user);
    },
  },
};
</script>
<style></style>
