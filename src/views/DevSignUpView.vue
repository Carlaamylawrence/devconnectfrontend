<template>
  <section id="container">
    <div class="registerSection row">
      <div class="devAbout col-lg-4">
        <h2 class="registerDevAbout text-center">I AM A DEV</h2>
        <h4 class="registerDevAbout text-center">
          Why should I signup up to DEVCONNECT
        </h4>
        <p class="text-justify">
          How often do you check your email or social media accounts? If you’re
          anything like me, you probably spend hours every day checking your
          phone, tablet, laptop, etc., looking at updates from friends, family,
          and colleagues. With so much time being wasted on social media, it’s
          no wonder why some people struggle to stay focused. To get noticed,
          you need to create a professional profile that showcases your skills
          and experience.
        </p>
        <p class="text-justify">
          DEVCONNECT provides a unique opportunity to connect with other
          professionals in the same field. Are you looking for a career change?
          Or maybe you want to start a new career altogether? There are plenty
          of opportunities out there for those who are interested in becoming a
          software engineer.
        </p>
      </div>
      <div class="registerFormCard col-lg-8">
        <form @submit.prevent="devRegister">
          <h3 class="text-center">Register your profile on DEVCONNECT</h3>
          <fieldset>
            <div class="registerDisplay row d-flex justify-content-center">
              <div class="registerDash col-lg-6">
                <div class="form-floating mb-3">
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
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    required
                    v-model="email"
                    id="floatingInput"
                    placeholder="Your email @"
                  />
                  <!-- <label for="floatingInput">Email address</label> -->
                </div>
                <!-- Password -->
                <div class="form-floating mb-3">
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
                <div class="form-floating mb-3">
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
                <!-- GENDER -->
                <div class="form-floating mb-3">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="avatar"
                  >
                    <option
                      value="https://i.postimg.cc/Kz6w3MxG/female-Avatar.png"
                    >
                      Female
                    </option>
                    <option
                      value="https://i.postimg.cc/KvShRd8P/male-Avatar.png"
                    >
                      Male
                    </option>
                  </select>
                  <label class="inputLabel" for="floatingColor">Gender</label>
                </div>
                <!-- BIO -->
                <div class="form-floating mb-3">
                  <textarea
                    v-model="bio"
                    class="form-control"
                    placeholder="Let us know who you are"
                    id="floatingTextarea"
                    style="height: 100px"
                  ></textarea>
                </div>
              </div>
              <div class="registerDashTwo col-lg-6">
                <!-- LOCATION -->
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    required
                    v-model="location"
                    id="floatingInput"
                    placeholder="Location"
                  />
                  <!-- <label for="floatingInput">Github Url</label> -->
                </div>
                <!-- availability -->
                <div class="form-floating mb-3">
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
                <!-- Technology -->
                <div class="form-floating mb-3">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="technology"
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
                    >Type of Technology</label
                  >
                </div>
                <!-- PORTFOLIO -->
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    required
                    v-model="portUrl"
                    id="floatingInput"
                    placeholder="Portfolio URL"
                  />
                  <!-- <label for="floatingInput">Portfolio Url</label> -->
                </div>
                <!-- GITHUB -->
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    required
                    v-model="githubUrl"
                    id="floatingInput"
                    placeholder="Github URL"
                  />
                  <!-- <label for="floatingInput">Github Url</label> -->
                </div>
                <!-- USERROLE -->
                <div class="form-floating mb-3">
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
              </div>
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
      fullname: "",
      email: "",
      password: "",
      experience: "",
      avatar: "",
      bio: "",
      location: "",
      availability: "",
      technology: "",
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
        bio: this.bio,
        location: this.location,
        avatar: this.avatar,
        availability: this.availability,
        technology: this.technology,
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
}
.registerSection {
  display: flex;
}
.devAbout {
  max-width: 440px;
  margin: auto;

  position: relative;
  z-index: 1;

  background-color: rgb(255 255 255 / 9%);
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
}
</style>
