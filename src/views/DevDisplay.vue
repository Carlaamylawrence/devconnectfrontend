<template>
  <section id="devDisplay">
    <div class="devGrid" v-if="users">
      <div class="sort-options">
        <div class="search-wrapper">
          <input
            class="search-input"
            type="text"
            v-model="search"
            placeholder="Search"
          />
        </div>
        <button class="btn btn-outline-dark ms-5" @click="sortUsers">
          Sort By Technology
        </button>
        <select v-model="technology" class="ms-3">
          <option value="">All</option>
          <option value="Cplus">C++</option>
          <option value="Csharp">C#</option>
          <option value="Java">Java</option>
          <option value="Javascript">javascript</option>
          <option value="MySql">MySql</option>
          <option value="Python">Python</option>
          <option value="Ruby">Ruby</option>
        </select>
      </div>
      <ProfileCard v-for="dev in users" :key="dev.id" :dev="dev" />
    </div>
  </section>
</template>
<script>
import ProfileCard from "@/components/ProfileCard.vue";
export default {
  // props: ["id"],
  components: { ProfileCard },
  data() {
    return {
      search: "",
      technology: "",
    };
  },
  computed: {
    users() {
      console.log(this.$store.state.users);
      return this.$store.state.users?.filter((user) => {
        let isMatch = true;
        if (!user.fullname?.toLowerCase().includes(this.search.toLowerCase()))
          isMatch = false;
        if (this.technology !== "all" && user.technology !== this.technology)
          isMatch = false;
        return isMatch;
      });
    },
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
  methods: {
    sortUsers() {
      this.$store.commit("sortUsersByFullname");
    },
  },
};
</script>
<style></style>
