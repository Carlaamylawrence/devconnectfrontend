<template>
  <div class="container">
    <div class="registerSection row">
      <div class="clientAbout col-lg-6">
        <h2 class="registerClientAbout">I AM A CLIENT</h2>
        <h4 class="registerClientAbout">
          Why should I signup up to DEVCONNECT
        </h4>
        <p>
          Do you need a team of expert developers? Devconnect allows you to find
          an abundance of developers all in one place without all the fuss. The
          problem is that they don't always work out well for everyone. There
          are over 100 million vacancies worldwide, and the competition is
          fierce.
        </p>
        <p>
          Hiring a full-time employee is expensive. If you want to save money,
          consider hiring freelance developers instead. Freelancers often charge
          less than employees, and they can also offer flexible hours and other
          perks.Freelancing has become a viable option for many professionals
          who want to supplement their income or even replace their full time
          jobs. The gig economy is booming, and freelancers are now earning more
          than ever before.
        </p>
      </div>
      <div class="registerFormCard col-lg-4">
        <form @submit.prevent="clientRegister">
          <h3>Register as client on Devconnect</h3>
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
              <!-- <label class="inputLabel" for="floatingInput">Email address</label> -->
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
              <!-- <label class="inputLabel" for="floatingInput">Email address</label> -->
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

            <!-- USERROLE -->
            <div class="form-floating experience">
              <select
                class="form-select"
                aria-label="Default select example"
                v-model="userRole"
              >
                <option value="dev">Client</option>
              </select>
              <label class="inputLabel" for="floatingColor"
                >Just for confirmation</label
              >
            </div>
          </fieldset>
          <!-- Button to submit  -->
          <button type="submit" class="btn" value="Register">REGISTER</button>
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
      userRole: "",
    };
  },
  methods: {
    clientRegister() {
      let user = {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
        userRole: this.userRole,
      };
      this.$store.dispatch("clientRegister", user);
    },
  },
};
</script>
<style>
.inputLabel {
  color: purple !important;
}
.registerClientAbout {
  color: whitesmoke;
}
.clientAbout {
  max-width: 440px;
  margin: auto;
  overflow-y: auto;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  background-color: rgb(255 255 255 / 9%);
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
  padding: 2rem;
}

.registerSection {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
