<template>
  <section
    class="hero"
    lang="it"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <div class="glass-left">
      <div class="hero-content">
        <h1>L'Aeroplanino di Carta e i Sei Venti</h1>
        <p>
          Questa è la storia di un aereoplanino di carta che ha cambiato tutto.
          Oggi, dopo anni di voli e atterraggi, eccomi qui a condividere con te
          i momenti che mi hanno resa la persona che sono.
        </p>
        <p>
          Ti invito a seguire il mio volo attraverso i valori che mi guidano.
          Ogni tappa racconta un pezzo di me, ogni storia è un frammento di uno
          specchio che ho raccolto per costruire la mia verità.
        </p>
        <p>Benvenuto nel mio viaggio...</p>
        <button class="my-btn" @click="scrollToSection">Vola con me</button>
      </div>
    </div>
    <!-- Aereoplanino con effetto galleggiamento -->
    <img
      :src="evelynPlane"
      alt="Decorazione destra"
      class="decorative-image decorative-right plane"
    />
    <!-- Container per le lucine magiche dietro l'aereoplanino -->
    <div class="magic-lights-container">
      <div class="magic-light"></div>
      <div class="magic-light"></div>
      <div class="magic-light"></div>
      <div class="magic-light"></div>
      <div class="magic-light"></div>
      <div class="magic-light"></div>
    </div>
  </section>
</template>

<script setup>
import heroImage from "@/assets/img/hero-bg.png";
import evelynPlane from "@/assets/img/evelyn_plane_left.png";

function scrollToSection() {
  const element = document.getElementById("sezione1");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 3rem 0;
  min-height: 100vh;
  box-sizing: border-box;
  background-size: cover;
  background-position: 80% -17%;
  position: relative;
  color: #dbdbdb;
  text-align: left;
  z-index: 3;
  position: relative;
}

.decorative-image.decorative-right.plane {
  position: absolute;
  top: 52%;
  right: 548px;
  width: 6rem;
  transform: translateY(-50%);
  z-index: 11;
  animation: float-plane 4s ease-in-out infinite;
  transition: animation-duration 0.3s ease;
}

/* Container per le lucine magiche */
.magic-lights-container {
  position: absolute;
  top: 50%;
  right: 576px;
  width: 5rem;
  height: 5rem;
  transform: translateY(-50%);
  z-index: 9;
  pointer-events: none;
}

/* Singole lucine */
.magic-light {
  position: absolute;
  width: 4px;
  height: 4px;
  background: radial-gradient(circle, #ffffff 0%, #87ceeb 50%, transparent 70%);
  border-radius: 50%;
  box-shadow: 0 0 6px #ffffff, 0 0 12px #87ceeb,
    0 0 18px rgba(135, 206, 235, 0.3);
}

.magic-light:nth-child(1) {
  top: 10%;
  left: 20%;
  animation: sparkle 2s infinite;
}

.magic-light:nth-child(2) {
  top: 30%;
  right: 15%;
  animation: sparkle-delayed 2.5s infinite 0.5s;
}

.magic-light:nth-child(3) {
  bottom: 25%;
  left: 30%;
  animation: sparkle-slow 3s infinite 1s;
}

.magic-light:nth-child(4) {
  top: 60%;
  right: 30%;
  animation: sparkle 2.2s infinite 1.5s;
}

.magic-light:nth-child(5) {
  bottom: 15%;
  right: 20%;
  animation: sparkle-delayed 2.8s infinite 0.8s;
}

.magic-light:nth-child(6) {
  top: 45%;
  left: 10%;
  animation: sparkle-slow 2.3s infinite 2s;
}

/* Effetto hover per maggiore interattività */
.decorative-image.decorative-right.plane:hover {
  animation-duration: 2s;
}

.decorative-image.decorative-right.plane:hover
  ~ .magic-lights-container
  .magic-light {
  animation-duration: 1s;
}

/* Glass area con effetto soffuso migliorato */
.glass-left {
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.08) 70%,
    rgba(255, 255, 255, 0.02) 95%,
    transparent 100%
  );
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 7rem 4rem 8rem 4rem;
  box-sizing: border-box;

  /* Ombra soffusa */
  box-shadow: 0 0 50px rgba(255, 255, 255, 0.05),
    0 0 100px rgba(255, 255, 255, 0.02);

  /* Maschere con transizione più graduale */
  mask: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 85%,
      rgba(0, 0, 0, 0.7) 92%,
      rgba(0, 0, 0, 0.3) 96%,
      rgba(0, 0, 0, 0.1) 98%,
      transparent 100%
    ),
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0.8) 85%,
      rgba(0, 0, 0, 0.5) 90%,
      rgba(0, 0, 0, 0.2) 95%,
      rgba(0, 0, 0, 0.05) 98%,
      transparent 100%
    );
  mask-composite: intersect;

  -webkit-mask: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 85%,
      rgba(0, 0, 0, 0.7) 92%,
      rgba(0, 0, 0, 0.3) 96%,
      rgba(0, 0, 0, 0.1) 98%,
      transparent 100%
    ),
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0.8) 85%,
      rgba(0, 0, 0, 0.5) 90%,
      rgba(0, 0, 0, 0.2) 95%,
      rgba(0, 0, 0, 0.05) 98%,
      transparent 100%
    );
  -webkit-mask-composite: source-in;
}

/* Contenuto */
.hero-content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

/* Default (desktop-like) */
.hero h1 {
  font-size: 5.5rem;
  margin-bottom: 1rem;
  line-height: 1.2;
  /* Sillabazione italiana invece di break-word */
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  /* Sillabazione italiana invece di break-word */
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.hero-content button {
  margin-top: 2rem;
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  display: inline-block;
}

@media (max-width: 1556px) {
  .decorative-image.decorative-right.plane {
    position: absolute;
    top: 48%;
    right: 458px;
  }

  .magic-lights-container {
    position: absolute;
    top: 47%;
    right: 478px;
  }
}

@media (max-width: 1144px) {
  .decorative-image.decorative-right.plane {
    position: absolute;
    top: 48%;
    right: 401px;
  }

  .magic-lights-container {
    position: absolute;
    top: 47%;
    right: 478px;
  }
}

/* Tablet & Mobile */
@media (max-width: 1024px) {
  .decorative-image.decorative-right.plane {
    display: none;
  }

  .magic-lights-container {
    display: none;
  }

  .hero {
    flex-direction: column;
    background-position: center center; /* Centra l'immagine su mobile */
    background-attachment: scroll; /* Evita problemi di performance */
  }

  .glass-left {
    width: 100%;
    padding: 3rem 2rem 3rem 2rem;

    /* Overlay più forte per mobile con sfumatura radiale */
    background: radial-gradient(
        ellipse at center,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(0, 0, 0, 0.5) 50%,
        rgba(0, 0, 0, 0.7) 100%
      ),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.08) 0%,
        rgba(255, 255, 255, 0.06) 50%,
        rgba(255, 255, 255, 0.02) 100%
      );

    /* Backdrop blur ridotto per performance mobile */
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);

    /* Maschera più semplice per mobile */
    mask: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(0, 0, 0, 0.95) 80%,
      rgba(0, 0, 0, 0.7) 90%,
      rgba(0, 0, 0, 0.3) 96%,
      transparent 100%
    );
    -webkit-mask: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(0, 0, 0, 0.95) 80%,
      rgba(0, 0, 0, 0.7) 90%,
      rgba(0, 0, 0, 0.3) 96%,
      transparent 100%
    );

    /* Bordo sottile per definire meglio l'area */
    border-radius: 0 0 24px 24px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2),
      0 0 50px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .hero-content {
    text-align: center;
    padding: 1rem;
  }

  .hero h1 {
    margin-bottom: 1.5rem;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); /* Ombra per leggibilità */
    /* Migliore gestione del testo mobile */
    hyphens: auto;
    -webkit-hyphens: auto;
    line-height: 1.1;
  }

  .hero p {
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    opacity: 0.95; /* Leggera trasparenza per gerarchia visiva */
    /* Migliore gestione del testo mobile */
    hyphens: auto;
    -webkit-hyphens: auto;
    line-height: 1.5;
  }

  .hero-content button {
    margin-top: 2.5rem;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 3.5rem;
  }

  .hero p {
    font-size: 16px;
  }

  .number {
    font-size: 3rem;
  }
}
</style>
