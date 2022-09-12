<template>
  <div class="card" v-if="user">
    <section id="singleProfile" class="singleProfile">
      <div class="container" v-for="user of user" :key="user.id" :user="user">
        <div class="profilePhoto">
          <img
            class="profilePicture mt-5"
            alt="profilepicture"
            :src="user.avatar"
          />
        </div>
        <div class="section-title text-center">
          <h4>HI, I am</h4>
          <h3>{{ user.fullname }}</h3>
        </div>

        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="buyone"
            role="tabpanel"
            aria-labelledby="buyone-tab"
          >
            <div class="row d-flex flex-wrap">
              <div class="col text-center">
                <h5>{{ user.location }}</h5>
                <p>{{ user.bio }}</p>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="happyhour"
            role="tabpanel"
            aria-labelledby="happyhour-tab"
          >
            <div class="row d-flex flex-wrap">
              <div class="col text-center mb-2">
                <p>{{ user.technology }}</p>
                <p>{{ user.experience }}</p>
                <a :href="user.githubUrl" target="_blank"
                  ><button class="btn">Github</button></a
                >
                <a :href="user.portUrl" target="_blank"
                  ><button class="btn">Portfolio</button></a
                >
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="freemeal"
            role="tabpanel"
            aria-labelledby="freemeal-tab"
          >
            <div class="row d-flex flex-wrap">
              <div class="col text-center">
                <p>{{ user.availability }}</p>
                <p>
                  If you would like to collaborate on your next project let me
                  know by dropping me an email.
                </p>
                <p>{{ user.email }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div
            class="nav d-flex nav-pills me-3 special-list"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              class="nav-link active"
              id="buyone-tab"
              data-bs-toggle="pill"
              data-bs-target="#buyone"
              type="button"
              role="tab"
              aria-controls="buyone"
              aria-selected="true"
            >
              ABOUT
            </button>
            <button
              class="nav-link"
              id="happyhour-tab"
              data-bs-toggle="pill"
              data-bs-target="#happyhour"
              type="button"
              role="tab"
              aria-controls="happyhour"
              aria-selected="false"
            >
              CHECK ME OUT
            </button>
            <button
              class="nav-link"
              id="freemeal-tab"
              data-bs-toggle="pill"
              data-bs-target="#freemeal"
              type="button"
              role="tab"
              aria-controls="freemeal"
              aria-selected="false"
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: ["id"],

  computed: {
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },
  mounted() {
    console.log(this.$route.params.id);
    this.$store.dispatch("getUser", this.$route.params.id);
  },
};
</script>
<style>
.card {
  max-width: 440px;
  margin: auto;
  overflow-y: auto;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
}

.nav-link {
  color: black;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background: #ffffff;
  background-image: -webkit-linear-gradient(top, #ffffff, #ed6928);
  background-image: -moz-linear-gradient(top, #ffffff, #ed6928);
  background-image: -ms-linear-gradient(top, #ffffff, #ed6928);
  background-image: -o-linear-gradient(top, #ffffff, #ed6928);
  background-image: linear-gradient(to bottom, #ffffff, #ed6928);
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0px;
  text-shadow: 1px 1px 3px #666666;
  color: #ffffff;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}

.nav-pills .nav-link {
  background: 0 0;
  border: 0;
  /* border-radius: 0.25rem; */
}
.nav-link:hover {
  color: #ed6928;
}

.profilePicture {
  object-fit: contain;
  aspect-ratio: 1;
  filter: drop-shadow(0px 1px 3px rgb(55, 51, 68));
  width: 100%;
  max-height: 22rem;
}
</style>
