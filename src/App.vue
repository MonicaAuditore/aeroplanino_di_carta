<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import ImageTextSection from "./components/ImageTextSection.vue";
import ContactForm from "./components/ContactForm.vue";
import Footer from "./components/Footer.vue";
import BottoniPlayerTornaSu from "./components/BottoniPlayerTornaSu.vue";
import mainBg from "@/assets/main-bg.png";
import PaperPlane from "./components/PaperPlane.vue";
</script>

<template>
  <BottoniPlayerTornaSu />
  <Navbar />
  <PaperPlane :baseRotation="180" :size="100" />
  <Hero />
  <section class="transition-section"></section>
  <!-- Wrapper principale con sfondo unico -->
  <div class="main-content" :style="{ backgroundImage: `url(${mainBg})` }">
    <ImageTextSection />
    <ContactForm />
    <Footer />
  </div>
</template>

<style scoped>
.main-content {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 3rem clamp(1rem, 5vw, 6rem); /* padding laterale che si adatta allo schermo */
  margin-top: -294px; /* metà dell’altezza della sfumatura */
  position: relative;
  z-index: 1;
}

.main-content::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4); /* overlay scuro per contrasto testo */
  z-index: -1;
}

.transition-section {
  position: relative;
  z-index: 2;
  height: 300px;
  background: linear-gradient(
    to bottom,
    #011a31 0%,
    rgba(1, 26, 49, 0.9) 20%,
    rgba(1, 26, 49, 0.6) 50%,
    rgba(1, 26, 49, 0.2) 80%,
    rgba(1, 26, 49, 0) 100%
  );
}

@media (max-width: 768px) {
  .transition-section {
    position: relative;
    z-index: 2;
    height: 294px;
    background: linear-gradient(
      to bottom,
      #011a31 0%,
      rgba(1, 26, 49, 0.9) 13%,
      rgba(1, 26, 49, 0.6) 34%,
      rgba(1, 26, 49, 0.2) 43%,
      rgba(1, 26, 49, 0) 71%
    );
  }
}
</style>
