<template>
  <div class="card">
    <section id="specials" class="specials">
      <div class="container">
        <div class="section-title text-center">
          <h3>HI, I am</h3>
          <h4>
            {{ user.fullname }}
          </h4>
        </div>
        <div class="d-flex align-items-end">
          <div
            class="nav flex-column nav-pills me-3 special-list"
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
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="buyone"
              role="tabpanel"
              aria-labelledby="buyone-tab"
            >
              <div class="row d-flex flex-wrap">
                <div class="col-lg-8 order-2 order-lg-1">
                  <h3>Buy 1 get 1 free burgers</h3>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    est voluptas maiores quae minus alias sequi, rem suscipit
                    velit?
                  </p>
                </div>
                <div class="col-lg-4 text-center order-1 order-lg-2">
                  <img
                    src=""
                    class="img-fluid rounded-circle"
                    style="width: 200px; height: 200px"
                    alt="burger"
                  />
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
                <div class="col-lg-8 order-2 order-lg-1">
                  <h3>Happy Hour</h3>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    est voluptas maiores quae minus alias sequi, rem suscipit
                    velit?
                  </p>
                </div>
                <div class="col-lg-4 text-center order-1 order-lg-2">
                  <img
                    src=""
                    class="img-fluid rounded-circle"
                    style="width: 200px; height: 200px"
                    alt="drinks"
                  />
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
                <div class="col-lg-8 order-2 order-lg-1">
                  <h3>Eat on Us for your birthday</h3>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    est voluptas maiores quae minus alias sequi, rem suscipit
                    velit?
                  </p>
                </div>
                <div class="col-lg-4 text-center order-1 order-lg-2">
                  <img
                    src=""
                    class="img-fluid rounded-circle"
                    style="width: 200px; height: 200px"
                    alt="birthday"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
<style>
.card {
  max-width: 340px;
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
</style>
