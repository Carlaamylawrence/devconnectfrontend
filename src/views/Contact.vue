<template>
  <section id="container">
    <div class="contactContainer row p-5">
      <div class="contactImage col-lg-6">
        <img
          class="phoneImage img-fluid"
          src="https://i.postimg.cc/0jrqJrs4/90286-FF9-8-DC0-43-AA-8422-C7-CA973-A09-A0.png"
        />
      </div>
      <div class="contactCard col-lg-6 mt-2">
        <h2 class="text-center">CONTACT US</h2>
        <form action="https://formspree.io/f/mrgdekgn" method="POST">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              required
              placeholder="YOUR FULL NAME"
              name="Fullname"
            />
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              required
              placeholder="YOUR EMAIL"
              name="Email"
            />
          </div>
          <div class="form-floating mb-3">
            <textarea
              class="form-control"
              placeholder="LEAVE YOUR MESSAGE HERE"
              id="floatingTextarea"
              style="height: 100px"
              name="message"
            ></textarea>
          </div>
          <!-- your other form fields go here -->
          <div class="contactSendBtn ">
          <button class="btn" type="submit">SEND <i class="fa-solid fa-paper-plane"></i></button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style>
.contactCard {
  max-width: 440px;
  margin: auto;
  position: relative;
  z-index: 1;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
}

.contactContainer {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}
.phoneImage {
  filter: drop-shadow(0px 10px 3px rgb(199, 104, 214));
  width: 100%;
  max-height: 22rem;
  object-fit: contain;
}

.contactSendBtn{
  display:flex;
  justify-content: center;
  align-items:center ;
}

::placeholder {
  color: #56a1f4 !important;
}
</style>
