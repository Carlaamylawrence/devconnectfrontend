<template>
  <Navbar></Navbar>
  <router-view :key="$route.fullPath" />
  <Footer />
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
:root {
  --color1: #193948;
  --color2: whitesmoke;
  --color3: #e76266;
  --color4: #6baef5;
  --color5: #1a1a1a;

  --background-color: #4d76c7;
}
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

h2 {
  color: var(--color1);
  font-family: "League Spartan", sans-serif;
  font-size: 3rem;
  text-shadow: 1px 1px 3px black;
}

h3,
h4,
h5 {
  color: var(--color4);
  font-family: "League Spartan", sans-serif;
}
.btn {
  font-family: "League Spartan", sans-serif;
  height: 2rem;
  background-color: var(--color5);
  padding: 5px;
  transition: transform 0.2s ease-out;
  box-shadow: 0px 3px 1px var(--color4);
  color: var(--color2);
}

section {
  min-height: 100vh;
  padding-top: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 4rem;
  background-color: white;
  /* background-image: linear-gradient(
    to right bottom,
    #274d84,
    #25669f,
    #2080ba,
    #189bd3,
    #13b6ea
  ); */
}

.btn:hover {
  box-shadow: none;
  transform: translateY(3px);
  color: var(--color2);
}

.inputLabel {
  color: var(--color1) !important;
}

::placeholder {
  color: var(--color1) !important;
}

p {
  color: black;
}

a {
  text-decoration: none;
}
</style>
