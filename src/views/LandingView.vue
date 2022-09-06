<template>
  <section id="container">
    <div class="landingContainer row">
      <div class="landingCard col=lg-8">
        <div class="logoDEV">
          <img
            class="logo"
            src="https://i.postimg.cc/qvQ8b4xR/C34-C0-CE1-53-A4-4566-9-BD1-B4-A309-F2-E134.png"
          />
        </div>
        <div class="login-btn">
          <router-link to="/login"
            ><button class="btn">LOGIN</button></router-link
          >
        </div>
        <div class="registerBox">
          <h3 class="pt-2 text-center">or REGISTER</h3>
          <div class="registerBtns">
            <router-link to="/dev"
              ><button class="btn">I AM A DEV</button></router-link
            >
            <router-link to="/client"
              ><button class="btn">I AM A CLIENT</button></router-link
            >
          </div>
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
  background-image: url("https://i.postimg.cc/mDCqw77q/1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.landingCard {
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
  justify-content: space-evenly;
}
</style>
