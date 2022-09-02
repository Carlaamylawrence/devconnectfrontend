<template>
  <div class="card">
    <section id="specials" class="specials">
      <div class="container">
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
              <div class="col">
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
              <div class="col">
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
              <div class="col">
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
  props: ["user"],
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
  background-image: -webkit-linear-gradient(top, #ffffff, #a762df);
  background-image: -moz-linear-gradient(top, #ffffff, #a762df);
  background-image: -ms-linear-gradient(top, #ffffff, #a762df);
  background-image: -o-linear-gradient(top, #ffffff, #a762df);
  background-image: linear-gradient(to bottom, #ffffff, #a762df);
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
  color: #a762df;
}
</style>
