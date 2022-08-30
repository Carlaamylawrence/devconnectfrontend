<template>
  <ProfileCard />
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
};
</script>
<style></style>
