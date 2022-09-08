<template>
  <section id="container">
    <div class="devDisplay">
      <div class="sort-options">
        <div class="search-wrapper">
          <input
            class="search-input"
            type="text"
            v-model="search"
            placeholder="Search"
          />
        </div>
        <button class="btn ms-2" @click="sortUsers">Sort Alphabetically</button>
        <select v-model="technology" class="ms-3">
          <option value="all">All</option>
          <option value="Cplus">C++</option>
          <option value="Csharp">C#</option>
          <option value="Java">Java</option>
          <option value="Javascript">Javascript</option>
          <option value="MySql">MySql</option>
          <option value="Node">Node</option>
          <option value="Python">Python</option>
          <option value="Ruby">Ruby</option>
        </select>
      </div>
      <div class="devGrid" v-if="user">
        <AllProfiles v-for="user in users" :key="user.id" :user="user" />
      </div>
      <div class="loader" v-else>
        <div class="logoDEV">
          <img class="logo" src="https://i.postimg.cc/KzHmWhRs/logo.png" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// import ProfileCard from "@/components/ProfileCard.vue";
import AllProfiles from "@/components/allProfiles.vue";
export default {
  props: ["id"],
  components: { AllProfiles },
  data() {
    return {
      search: "",
      technology: "all",
      users: "",
      user: "",
    };
  },
  computed: {
    users() {
      return this.$store.state.users?.filter((user) => {
        let isMatch = true;
        if (!user.fullname?.toLowerCase().includes(this.search.toLowerCase()))
          isMatch = false;
        if (this.technology !== "all" && user.technology !== this.technology)
          isMatch = false;
        return isMatch;
      });
    },
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$store.dispatch("getUsers");
  },
  methods: {
    sortUsers() {
      this.$store.commit("sortUsersByFullname");
    },
  },
};
</script>
<style>
.devDisplay {
  min-height: 100vh;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.sort-options {
  display: flex;
  justify-content: center;
}

.devGrid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}
</style>
