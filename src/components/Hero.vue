<template>
  <section class="hero" :style="{ backgroundImage: `url(${heroImage})` }">
    <div class="hero-content">
      <h1>L'Aeroplanino di Carta e i Sei Venti</h1>
      <p>
        Questa è la storia di un aereoplanino di carta che ha cambiato tutto.
        Oggi, dopo anni di voli e atterraggi, eccomi qui a condividere con te i
        momenti che mi hanno resa la persona che sono.
      </p>
      <p>
        Ti invito a seguire il mio volo attraverso i valori che mi guidano. Ogni
        tappa racconta un pezzo di me, ogni storia è un frammento di uno
        specchio che ho raccolto per costruire la mia verità.
      </p>
      <p>Benvenuto nel mio viaggio...</p>
      <button @click="scrollToSection">Vola con me</button>
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
  padding: 4rem 2rem;
  min-height: 100vh;
  box-sizing: border-box;
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: left;
  color: #dddddd;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 970px;
  padding: 2rem;
  text-align: center;
}

.hero h1 {
  font-size: 6rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
}

.hero-content button {
  margin-top: 2rem;
}
</style>
