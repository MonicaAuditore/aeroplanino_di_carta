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
  <div class="main-content">
    <!-- Sfondo sfocato separato -->
    <div
      class="background-blur"
      :style="{ backgroundImage: `url(${mainBg})` }"
    ></div>
    <ImageTextSection />
    <ContactForm />
    <Footer />
  </div>
</template>

<style scoped>
.main-content {
  margin-top: -300px; /* metà dell'altezza della sfumatura */
  position: relative;
  z-index: 1;
  overflow: hidden; /* Nasconde il blur che esce dai bordi */
}

.background-blur {
  position: absolute;
  /* Espandi l'immagine oltre i bordi per compensare il blur */
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(9px); /* Blur morbido - puoi regolare il valore */
  z-index: -2;
}

.main-content::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(
    0,
    0,
    0,
    0.589
  ); /* overlay scuro per contrasto testo */
  z-index: -1;
}

.transition-section {
  position: relative;
  z-index: 2;
  height: 300px;
  background: linear-gradient(
    to bottom,
    #011a31 0%,
    rgba(1, 26, 49, 0.9) 13%,
    rgba(1, 26, 49, 0.6) 27%,
    rgba(1, 26, 49, 0.2) 43%,
    rgba(1, 26, 49, 0) 79%
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
