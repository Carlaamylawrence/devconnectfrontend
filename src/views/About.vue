<template>
  <section id="container">
    <div class="about p-5 row">
      <div class="who col-lg-6 text-center">
        <h2 >WHAT IS DEVCONNECT?</h2>
        <h4>
          Do you need a team of expert developers? Or are you looking for a new
          project?
        </h4>
        <p>
          Devconnect allows you to find an abundance of developers and projects
          all in one place without all the fuss. DEVCONNECT provides a unique
          opportunity to connect with other professionals in the same field.
          There are plenty of opportunities out there for those who are
          interested in taking on freelance, exposure, experience or maybe just
          a passion project.
        </p>
        <h4>How does it work?</h4>
        <p>
          Sign up as a DEV and browse global freelance projects or sign up as a
          client and post your project. Developers may market themselves through
          our premade portfolios. Just add your details and your next
          opportunity will come to you. Clients alike can post their projects
          and provide the deadline and experience needed.
        </p>
      </div>
      <div class="why col-lg-6 d-flex justify-content-center align-items-center">
        <img
          src="https://i.postimg.cc/xjp1q5B9/358939-CF-F916-4-C1-F-8-C71-E52-E0495629-C.png"
          class="aboutImage img-fluid"
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style>
.who {
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
}

.aboutImage {
  object-fit: contain;
  aspect-ratio: 1;
   filter: drop-shadow(0px 1px 3px rgb(55, 51, 68));
  width: 100%;
  max-height: 22rem;

}

@media only screen and (max-width: 425px){
	h2{
    font-size: 6vw;
   transition: all 0.3s linear;
  }
}
</style>
