<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import ImageTextSection from "./components/ImageTextSection.vue";
import ContactForm from "./components/ContactForm.vue";
import Footer from "./components/Footer.vue";
import BottoniPlayerTornaSu from "./components/BottoniPlayerTornaSu.vue";
import mainBg from "@/assets/main-bg.png";
</script>

<template>
  <BottoniPlayerTornaSu />
  <Navbar />
  <Hero />
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
  position: relative;
  z-index: 0;
}

.main-content::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4); /* overlay scuro per contrasto testo */
  z-index: -1;
}
</style>
