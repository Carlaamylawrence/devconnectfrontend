<template>
  <div class="allProfiles">
    <router-link :to="{ name: 'SingleUser', params: { id: user.id } }">
      <div class="displayProfileCard">
        <h4>HI, I am</h4>
        <h3>{{ user.fullname }}</h3>
        <h5>{{ user.location }}</h5>
        <p>{{ user.bio }}</p>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "allProfiles",
  props: ["user"],
};
</script>
<style>
.allProfiles {
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
  padding: 2rem;
}
</style>
