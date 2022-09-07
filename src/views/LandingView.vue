<template>
  <section id="container">
    <div class="landingContainer row">
      <div class="logoCard col-lg-5">
        <div class="logoDEV">
          <img
            class="floatingImage img-fluid"
            src="https://i.postimg.cc/sDSBX8YS/E8432-FAB-AFBC-4-FF1-82-DE-9-E0244799-FB8.png"
          />
        </div>
      </div>
      <div class="landingInfo col-lg-6">
        <div class="devConnect">
          <img
            class="logo img-fluid"
            src="https://i.postimg.cc/KzHmWhRs/logo.png"
          />
        </div>
        <!-- <div class="login-btn">
          <router-link to="/login"
            ><button class="btn">LOGIN</button></router-link
          >
        </div> -->
        <div class="registerBox">
          <h3 class="pt-2 text-center">SIGN UP TODAY</h3>
          <div class="registerBtns">
            <router-link to="/dev"
              ><button class="btn">I AM A DEV</button></router-link
            >
            <router-link to="/client"
              ><button class="btn">I AM A CLIENT</button></router-link
            >
          </div>
        </div>
        <div class="moreInfo mt-2">
          <router-link class="aboutRedirect" to="/about"
            ><i class="fa-solid fa-circle-info"></i>Find out more</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style>
.landingContainer {
  height: 90vh;
  overflow-x: hidden;
  /* background-image: url("https://i.postimg.cc/mDCqw77q/1.png"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.landingInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.devConnect {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logoCard {
  max-width: 400px;
  z-index: 1;
  /* background-color: rgba(255, 255, 255, 1); */
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  border-radius: 10px;
  /* box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2); */
  padding: 1rem;
}
.logo {
  max-height: 200px;
  object-fit: cover;
  filter: drop-shadow(1px 3px 0px rgba(0, 0, 0, 0.7));
}
.floatingImage {
  width: 100%;
  height: auto;
  object-fit: cover;
  filter: drop-shadow(1px 3px 0px rgba(0, 0, 0, 0.7));
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    filter: drop-shadow(1px 3px 0px rgba(0, 0, 0, 0.7));
    /* box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6); */
    transform: translatey(0px);
  }
  50% {
    filter: drop-shadow(1px 3px 0px rgba(0, 0, 0, 0.7));
    /* box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2); */
    transform: translatey(-20px);
  }
  100% {
    filter: drop-shadow(1px 3px 0px rgba(0, 0, 0, 0.7));
    /* box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6); */
    transform: translatey(0px);
  }
}
.login-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.registerBtns {
  display: flex;
  justify-content: center;
  gap: 10px;
}
a.aboutRedirect {
  color: var(--color3);
  font-size: 1rem;
}
</style>
