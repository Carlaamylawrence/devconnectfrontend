<template>
  <div class="container">
    <div class="logo">
      <img src="../assets/0086C4B4-4FCA-4B81-8752-7461630F385B.png" />
    </div>
    <div class="login btn">
      <router-link to="/login"
        ><button class="btn btn-outline-dark">LOGIN</button></router-link
      >
    </div>
    <div class="register-btns">
      <h3>or REGISTER</h3>
      <router-link to="/dev"
        ><button class="btn btn-outline-dark">I AM A DEV</button></router-link
      >
      <router-link to="/client"
        ><button class="btn btn-outline-dark">
          I AM A CLIENT
        </button></router-link
      >
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
