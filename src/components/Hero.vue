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
  </section>
</template>

<script setup>
import heroImage from "@/assets/hero-bg.png";

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

/* Tablet & Mobile */
@media (max-width: 1024px) {
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
