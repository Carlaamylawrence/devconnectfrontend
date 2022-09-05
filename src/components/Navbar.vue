<template>
  <nav id="navbar" :class="{ active: isActive }">
    <ul class="nav-links">
      <li class="nav-link" @click="toggleNav()">
        <router-link to="/">HOME</router-link>
      </li>
      <li class="nav-link" @click="toggleNav()">
        <router-link to="/login">LOGIN</router-link>
      </li>
      <li class="nav-link" @click="toggleNav()">
        <router-link to="/devs">DEVS</router-link>
      </li>
      <li class="nav-link" @click="toggleNav()">
        <router-link to="/projects">PROJECTS</router-link>
      </li>
      <li class="nav-link" @click="toggleNav()">
        <router-link to="/profile">PROFILE</router-link>
      </li>
    </ul>
  </nav>
  <i id="toggler" @click="toggleNav()" class="fa-solid fa-bars"></i>
</template>

<script>
setInterval(() => {
  if (window.scrollY != 0) {
    //user scrolled to the top of the page
    document.querySelector("#navbar").classList.add("solid");
  } else {
    document.querySelector("#navbar").classList.remove("solid");
  }
}, 100);
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<style scoped>
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #c5c5c5 1px 1px;
  /* background-color: var(--background-color); */
  z-index: 200;
  transition: all 0.3s linear;
}
#navbar.solid {
  background-color: #a862df;
}
nav {
  background-color: #a862df;
}
.nav-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style-type: none;
  margin-bottom: 0;
}
.nav-link a {
  color: whitesmoke;
  text-shadow: #a862df 1px 1px;
  text-decoration: none;

  font-size: 2rem;
}
.nav-link a:hover {
  color: #a862df 1px 1px;
}
#toggler {
  position: fixed;
  top: 20px;
  right: 20px;
  display: none;
  color: #a862df 1px 1px;
}
#navbar a.router-link-exact-active {
  color: #a862df;
  text-shadow: rgb(72, 72, 72) 1px 1px 3px;
}
@media screen and (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    align-items: center;
    z-index: 10;
  }
  #navbar {
    top: -110vh;
    transition: all 0.3s linear;
    background-color: #865ba6;
    z-index: 50;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #navbar.active {
    top: 0;
    height: 100%;
  }
  #navbar.active .nav-links {
    align-items: center;
  }
  #navbar.active,
  nav {
    background-color: #a862df 1px 1px;
  }
  .wrapper {
    display: none;
  }
  #toggler {
    display: block;
    z-index: 100;
  }
}
</style>
