<template>
  <nav>
    <router-link to="/">HOME</router-link> |
    <router-link to="/login">LOGIN</router-link> |
    <router-link to="/devs">DEVS</router-link> |
    <router-link to="/projects">PROJECTS</router-link> |
    <router-link to="/profile">PROFILE</router-link>
  </nav>
</template>
<script>
export default {};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
