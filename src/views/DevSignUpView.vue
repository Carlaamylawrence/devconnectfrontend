<template>
  <div class="container shadow-sm p-3 mb-5 bg-body rounded">
    <form @submit.prevent="devRegister">
      <p>Register your profile on Devconnect</p>
      <fieldset>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            required
            v-model="fullname"
            id="floatingInput"
            placeholder="John Doe"
          />
          <label for="floatingInput">Full Name</label>
        </div>
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

        <!-- Experience -->
        <div class="form-floating experience">
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="experience"
          >
            <option value="Junior">0-2 YEARS</option>
            <option value="Mid">3-5 YEARS</option>
            <option value="Senior">5-8 YEARS</option>
          </select>
          <label for="floatingColor">Years of Experience</label>
        </div>

        <!-- Availabilty -->
        <div class="form-floating availabilty">
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="availabilty"
          >
            <option value="quickie">0-3 Months</option>
            <option value="contract">3-6 Months</option>
            <option value="longterm">6+ Months</option>
          </select>
          <label for="floatingColor">Type of Availabilty</label>
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
          <label for="floatingInput">Portfolio Url</label>
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
          <label for="floatingInput">Github Url</label>
        </div>
        <!-- USERROLE -->
        <div class="form-floating experience">
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="userRole"
          >
            <option value="dev">Developer</option>
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
      fullname: "",
      email: "",
      password: "",
      experience: "",
      availabilty: "",
      portUrl: "",
      githubUrl: "",
      userRole: "",
    };
  },
  methods: {
    devRegister() {
      let user = {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
        experience: this.experience,
        availabilty: this.availability,
        portUrl: this.portUrl,
        githubUrl: this.githubUrl,
        userRole: dev,
      };
      this.$store.dispatch("devRegister", user);
    },
  },
};
</script>
<style></style>
