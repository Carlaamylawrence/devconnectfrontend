<template>
  <section id="devDisplay">
    <div class="sort-options">
      <div class="search-wrapper">
        <input
          class="search-input"
          type="text"
          v-model="search"
          placeholder="Search"
        />
      </div>
      <button class="btn ms-2" @click="sortUsers">Sort By Technology</button>
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
    <div class="devGrid">
      <ProfileCard v-for="user in users" :key="user.id" :user="user" />
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
      users: "",
      user: "",
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
      // console.log(this.$store.state.users);
      // console.log(this.$store.state.user);
      // return this.$store.state.users?.filter((user) => {
      //   let isMatch = true;
      //   if (!user.fullname?.toLowerCase().includes(this.search.toLowerCase()))
      //     isMatch = false;
      //   if (this.technology !== "all" && user.technology !== this.technology)
      //     isMatch = false;
      //   return isMatch;
      // });
    },
  },
  mounted() {
    fetch("http://localhost:3050/users")
      .then((response) => response.json())
      .then((data) => (this.users = data));
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
