<template>
  <!-- EDIT BUTTON -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    EDIT YOUR PROFILE
  </button>
  <!-- DISPLAY USER INFO -->
  <ProfileCard />
  <!-- EDIT INFO -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">UPDATE YOUR INFO</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
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

            <!-- Button to submit  -->
            <input type="submit" value="SAVE" />
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProfileCard from "../components/ProfileCard.vue";
export default {
  components: {
    ProfileCard,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    updateUserInfo(){
      this.$store.dispatch("updateUserInfo", this.user)
    }
  }
};
</script>
<style></style>
