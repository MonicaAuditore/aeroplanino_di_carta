<template>
  <section id="contatti" class="contact-section">
    <img
      src="https://via.placeholder.com/150"
      alt="Immagine frammento di specchio"
      class="contact-image"
    />
    <h3>Da Quel Martedì a Oggi...</h3>
    <p class="contact-description">
      E ora eccomi qui. Quell'aereoplanino di carta che non sapevo creare quel
      martedì di tanto tempo fa? Ora vola leggero attraverso questo sito,
      portando con sé ogni storia, ogni valore, ogni pezzo di me che ho raccolto
      lungo il viaggio. Il bello dei voli è che non finiscono mai davvero. Si
      trasformano, cambiano rotta, scoprono nuovi cieli. E io sono pronta per il
      prossimo decollo.
    </p>

    <div class="contact-box">
      <p class="contact-box-intro">
        Se anche tu credi nella magia dei sogni che prendono il volo,<br />
        facciamo insieme il prossimo viaggio.
      </p>

      <form @submit.prevent="submitForm">
        <input
          type="text"
          v-model="name"
          placeholder="Scrivi qui il tuo nome"
          required
        />
        <input
          type="email"
          v-model="email"
          placeholder="Scrivi qui la tua email"
          required
        />
        <textarea
          v-model="message"
          placeholder="Scrivi qui il tuo messaggio"
          required
        ></textarea>
        <button type="submit">Verso nuovi cieli...</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");

function submitForm() {
  alert(
    `Grazie, ${name.value}! Ti risponderemo presto all'indirizzo ${email.value}.`
  );
  name.value = "";
  email.value = "";
  message.value = "";
}
</script>

<style>
.contact-section {
  text-align: center;
  padding: 3rem 1rem;
  margin-top: 5rem;
}

.contact-image {
  margin: 0 auto 1.5rem;
  display: block;
  border-radius: 50%;
}

.contact-description {
  font-size: 1.2rem;
  max-width: 73rem;
  margin: 3rem auto 5rem;
}

.contact-box {
  background: #000c1a;
  border-radius: 32px;
  max-width: 800px;
  padding: 4rem;
  text-align: left;
  box-shadow: 0 0 34px 3px rgba(255, 255, 255, 0.4);
  margin: 0 auto;
}

.contact-box-intro {
  text-align: center;
  font-weight: bold;
  margin-bottom: 4rem;
}

.contact-box form {
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
}

.contact-box label {
  font-weight: 600;
  display: flex;
  flex-direction: column;
}

.contact-box input,
.contact-box textarea {
  padding: 0.6rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  resize: vertical;
  padding: 1rem;
  color: var(--blue);
}

.contact-box input {
  border-radius: 40px;
}

.contact-box textarea {
  border-radius: 20px;
}

form button {
  align-self: center;
  margin-top: 2rem;
}
</style>
