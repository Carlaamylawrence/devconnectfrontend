<template>
  <footer id="footer">
    <div class="container-fluid">
      <div class="top-footer p-3">
        <div class="footer-text d-flex flex-column align-items-center">
          <h3 class="text-center">NEED A PROJECT? NEED A DEVELOPER?</h3>
          <router-link to="/"
            ><h4 class="text-center">
              DEV<span class="footerName2">CONNECT</span> is a collaborative
              space FOR YOU
            </h4>
          </router-link>
          <router-link to="/contact"
            ><button type="button" class="btn">
              GET IN TOUCH<i class="fa-solid fa-arrow-right-long"></i></button
          ></router-link>
        </div>
        <div class="socialMedia">
          <router-link to=""><i class="fa-brands fa-linkedin"></i></router-link>
          <router-link to=""><i class="fa-brands fa-facebook"></i></router-link>
          <router-link to=""><i class="fa-brands fa-twitter"></i></router-link>
        </div>
      </div>

      <div class="bottom-footer">
        <div class="d-flex justify-content-evenly pb-2">
          <div class="copyright">
            <small class="footerp">© 2022 Copyright</small>
          </div>

          <div class="design">
            <small class="footerp">Designed by Carla Amy Lawrence</small>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
#footer {
  background-color: white;
  bottom: 0;
  height: 100px;
  width: 100%;
  z-index: 10;
}
.footerName2 {
  color: black;
}
.socialMedia {
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.fa-brands {
  color: black;
  font-size: 2rem;
}

.fa-brands:hover {
  text-shadow:#e77755 2px 3px 4px;
}
</style>
