<template>
  <nav class="navbar">
    <div class="logo">Mio Sito</div>
    <ul>
      <li><a href="#sezione1" @click.prevent="scrollTo('sezione1')">01</a></li>
      <li><a href="#sezione2" @click.prevent="scrollTo('sezione2')">02</a></li>
      <li><a href="#sezione3" @click.prevent="scrollTo('sezione3')">03</a></li>
      <li><a href="#sezione4" @click.prevent="scrollTo('sezione4')">04</a></li>
      <li><a href="#sezione5" @click.prevent="scrollTo('sezione5')">05</a></li>
      <li><a href="#sezione6" @click.prevent="scrollTo('sezione6')">06</a></li>
      <li>
        <a href="#contatti" @click.prevent="scrollTo('contatti')"
          >Verso nuovi cieli</a
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100vw; /* forza la larghezza piena */
  max-width: 100%; /* evita restrizioni */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  backdrop-filter: blur(6px); /* effetto vetro */
  padding: 1rem 2rem;
  box-sizing: border-box;
  color: white;
}

.logo {
  font-weight: bold;
  font-size: 1.2rem;
  color: #2c3e50;
}

ul {
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
  color: white;
  text-decoration: none;
}
a.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid #42b983;
}
</style>
