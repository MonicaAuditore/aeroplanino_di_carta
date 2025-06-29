<template>
  <section id="contatti" class="contact-section">
    <img
      :src="frammento"
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
        <button class="my-btn" type="submit">Verso nuovi cieli...</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import frammento from "@/assets/frammento.png";

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
h2 {
  font-size: 7rem;
}

h3 {
  font-size: 4rem;
}
.contact-section {
  text-align: center;
  padding: 3rem 1rem;
  margin-top: 5rem;
}

.contact-image {
  margin: 0 auto 1.5rem;
  display: block;
  border-radius: 50%;
  width: 110px;
  height: 145px;
  object-fit: cover;
  animation: float 6s ease-in-out infinite;
  transition: transform 0.3s ease;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(2deg);
  }
  50% {
    transform: translateY(-5px) rotate(0deg);
  }
  75% {
    transform: translateY(-15px) rotate(-2deg);
  }
}

.contact-description {
  font-size: 1.2rem;
  max-width: 73rem;
  margin: 3rem auto 5rem;
  padding: 0 1rem;
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

.contact-box input,
.contact-box textarea {
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  resize: vertical;
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
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border-radius: 40px;
  cursor: pointer;
  background-color: var(--white);
  color: var(--blue);
  border: none;
  transition: background-color 0.3s ease;
}

/* RESPONSIVE */

/* Tablet */
@media (max-width: 1024px) {
  .contact-box {
    padding: 3rem 2rem;
  }

  .contact-description {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }

  .contact-image {
    width: 120px;
    height: 120px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .contact-section {
    padding: 2rem 1rem;
    margin-top: 3rem;
  }

  .contact-box {
    padding: 2rem 1.5rem;
    border-radius: 20px;
    box-shadow: 0 0 20px 2px rgba(255, 255, 255, 0.3);
  }

  .contact-box-intro {
    margin-bottom: 2.5rem;
    font-size: 1.1rem;
  }

  .contact-description {
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }

  .contact-image {
    width: 100px;
    height: 100px;
  }

  form button {
    width: 100%;
    padding: 1rem;
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 3.5rem;
  }

  h2,
  h3 {
    font-size: 3rem;
  }

  p {
    font-size: 16px;
  }

  .number {
    font-size: 3rem;
  }
}
</style>
