<template>
  <Navbar></Navbar>
  <router-view :key="$route.fullPath" />
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  font-family: "League Spartan", sans-serif;
  overflow-x: hidden;
  min-height: 100vh;
}

h2,
h3,
h4,
h5 {
  color: #a762df;
  font-family: "League Spartan", sans-serif;
}
.btn {
  font-family: "League Spartan", sans-serif;
  height: 2rem;
  background-color: rgb(166, 104, 223);
  padding: 5px;
  transition: transform 0.2s ease-out;
  box-shadow: 0px 3px 1px #7e43ac;
}

.btn:hover {
  box-shadow: none;
  transform: translateY(3px);
}

.inputLabel {
  color: purple !important;
}

::placeholder {
  color: purple !important;
}

p {
  color: black;
}
</style>
