<template>
  <div class="container">
    <div class="registerSection row">
      <div class="devAbout col-lg-6">
        <h2 class="registerDevAbout">I AM A DEV</h2>
        <h4 class="registerDevAbout">Why should I signup up to DEVCONNECT</h4>
        <p>
          How often do you check your email or social media accounts? If you’re
          anything like me, you probably spend hours every day checking your
          phone, tablet, laptop, etc., looking at updates from friends, family,
          and colleagues. With so much time being wasted on social media, it’s
          no wonder why some people struggle to stay focused.
        </p>
        <p>
          DEVCONNECT provides a unique opportunity to connect with other
          professionals in the same field. Are you looking for a career change?
          Or maybe you want to start a new career altogether? There are plenty
          of opportunities out there for those who are interested in becoming a
          software engineer.
        </p>
      </div>
      <div class="registerFormCard col-lg-4">
        <form @submit.prevent="devRegister">
          <h3>Register your profile on DEVCONNECT</h3>
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
              <!-- <label class="inputLabel" for="floatingInput">Full Name</label> -->
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
              <!-- <label for="floatingInput">Email address</label> -->
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
              <!-- <label class="inputLabel" for="floatingPassword">Password</label> -->
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
              <label class="inputLabel" for="floatingColor"
                >Years of Experience</label
              >
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
              <label class="inputLabel" for="floatingColor"
                >Type of Availabilty</label
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
            <!-- USERROLE -->
            <div class="form-floating experience">
              <select
                class="form-select"
                aria-label="Default select example"
                v-model="userRole"
              >
                <option value="dev">Developer</option>
              </select>
              <label class="inputLabel" for="floatingColor"
                >Just for confirmation</label
              >
            </div>
          </fieldset>
          <!-- Button to submit  -->
          <button class="btn" type="submit" value="Register">REGISTER</button>
        </form>
        <div v-if="user">
          Welcome {{ user.fullname }}, Your sign up was successsul
        </div>
      </div>
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
        userRole: this.userRole,
      };
      this.$store.dispatch("devRegister", user);
    },
  },
};
</script>
<style>
.registerDevAbout {
  color: whitesmoke;
}
.registerSection {
  display: flex;
}
.devAbout {
  max-width: 440px;
  margin: auto;
  overflow-y: auto;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  background-color: #a762df;
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
  padding: 2rem;
}
</style>
