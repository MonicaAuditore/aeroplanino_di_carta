<template>
  <div class="lock-container">
    <div class="story-section" v-if="showStory">
      <h3>Risolvi l'enigma per evocare il Sesto Vento</h3>
      <div class="story-text">
        <p>
          Si racconta di un antico lucchetto forgiato con la luce delle stelle.
          Per ottenere la chiave magica che aprirà questo lucchetto sacro, devi
          prima trovare la parola segreta.
        </p>
        <p>
          Questa parola magica danza tra ciò che eravamo e ciò che diventeremo.
          È il respiro del bruco prima di diventare farfalla, è l'eco del
          coraggio che ci porta oltre i nostri limiti. Solo chi ha seguito
          attentamente il volo dell'aeroplanino attraverso ogni trasformazione
          può pronunciarla.
        </p>
        <p>
          Ma attenzione: la parola non si trova qui. Gli indizi sono nascosti
          nei racconti dei cinque venti precedenti che hai già attraversato.
          Torna a leggere con cura i testi del Primo, Secondo, Terzo, Quarto e
          Quinto Vento. In ognuno di essi si cela un frammento del mistero. Solo
          unendo tutti gli indizi potrai svelare il segreto. Quando avrai
          raccolto tutti i segni, la parola ti apparirà chiara come il sole
          all'alba. Tu la conosci?
        </p>
      </div>

      <div class="diary-container">
        <p>
          Scrivi la parola magica per liberare il sesto vento e ottenere la
          chiave che aprirà il lucchetto delle stelle...
        </p>

        <!-- Lock Image Container -->
        <div class="lock-image-container" @click="focusInput">
          <img
            :src="isUnlocked ? unlockedImage : lockedImage"
            :alt="isUnlocked ? 'Lucchetto aperto' : 'Lucchetto chiuso'"
            class="lock-image"
            :class="{
              shake: isShaking,
              success: isUnlocked,
              unlocked: isUnlocked,
            }"
          />
        </div>

        <div class="word-input-container">
          <input
            ref="wordInput"
            type="text"
            v-model="userInput"
            @keyup.enter="tryUnlock"
            @focus="clearStatus"
            :disabled="isUnlocked"
            class="word-input"
            :class="{
              correct: isUnlocked,
              incorrect: showIncorrect,
            }"
            placeholder="Scrivi qui..."
            maxlength="15"
          />
        </div>

        <div class="button-container">
          <button v-if="!isUnlocked" class="unlock-btn" @click="tryUnlock">
            <img class="key-icon" :src="keyIcon" alt="Key icon" />
            Sussurra la parola...
          </button>
          <button class="hint-btn" @click="showHint" v-if="!isUnlocked">
            <i class="fa-regular fa-lightbulb"></i> Aiuto
          </button>
        </div>

        <!-- Contenitore per messaggi di stato con altezza fissa -->
        <div class="message-container">
          <transition name="message-fade" mode="out-in">
            <div
              class="status-message"
              :class="statusClass"
              v-if="statusMessage"
              :key="statusMessage"
            >
              {{ statusMessage }}
            </div>
          </transition>
        </div>

        <!-- Contenitore per suggerimenti con altezza fissa -->
        <div class="hint-container">
          <transition name="hint-fade">
            <div class="hint-box" v-if="hintVisible">
              <strong>
                <i class="fa-regular fa-lightbulb"></i> Indizio:
              </strong>
              <span v-if="hintsUsed === 1">
                È ciò che accade quando il bruco diventa farfalla...
              </span>
              <span v-else-if="hintsUsed === 2">
                14 lettere che raccontano il passaggio da una forma all'altra...
              </span>
              <span v-else>La parola è: TRASFORMAZIONE</span>
            </div>
          </transition>
        </div>

        <transition name="reveal">
          <div class="secret-content" v-if="isUnlocked">
            <h3>Il Sesto Vento è stato liberato</h3>
            <div class="secret-text">
              <p>
                <em>
                  "Trasformazione: l'arte di diventare ciò che il cuore sussurra
                  nei sogni più profondi."
                </em>
              </p>

              <p>
                <em>
                  Complimenti, viaggiatore. Hai trovato la chiave e liberato il
                  sesto vento. <br />Il tuo aeroplanino di carta ora può volare
                  verso orizzonti infiniti.
                </em>
              </p>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <!-- Particles Effect -->
    <div class="particles" v-if="showParticles">
      <div
        v-for="i in 30"
        :key="i"
        class="particle"
        :style="getParticleStyle()"
      >
        {{ getRandomEmoji() }}
      </div>
    </div>

    <!-- Sezione nascosta con effetto glass - Corretto -->
    <transition name="section-reveal" appear>
      <div
        class="hidden-section"
        :class="{
          'glass-effect': !isUnlocked,
          revealed: isUnlocked,
        }"
        v-show="true"
      >
        <section id="sezione6" class="section-image-text reverse">
          <div>
            <span class="number">06</span>
            <h2>Proactivity</h2>
            <p>
              Quando facevo la fotografa, non mi limitavo mai a "scattare belle
              foto". Ogni cliente portava con sé una storia, un sogno, un
              messaggio che voleva far arrivare al mondo. E io sentivo che il
              mio lavoro era diventare il ponte tra la sua visione e la realtà.
              Ricordo una cliente in particolare: scriveva canzoni e voleva
              delle foto che raccontassero i suoi testi. Non bastava uno studio
              neutro o una location qualsiasi. Dovevo entrare nella sua musica,
              nelle sue parole, nella sua anima.
            </p>
            <p>
              Passai ore ad ascoltare le sue canzoni, a capire le emozioni che
              voleva trasmettere. Poi trovai il luogo perfetto - un posto che
              parlava la stessa lingua poetica dei suoi testi. Creai
              un'atmosfera dove lei potesse davvero essere se stessa, dove ogni
              scatto catturasse non solo la sua immagine, ma la sua essenza.
            </p>
            <p>
              Quando vide le foto, i suoi occhi si illuminarono. "Hai capito
              esattamente quello che sentivo," mi disse. E quella fu la mia
              gioia più grande. Perché essere proattivi non significa solo
              anticipare i bisogni del cliente ma anche immergersi nel suo
              mondo, trasformando ogni progetto in una vera metamorfosi
              creativa.
            </p>
          </div>
          <img :src="img06" alt="Immagine 6" />
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
import lockedImage from "@/assets/img/padlockClosed.png";
import unlockedImage from "@/assets/img/padlockOpen.png";
import keyIcon from "@/assets/img/Key-icon.png";
import img06 from "@/assets/img/img_06.png";

export default {
  name: "TransformationLock",

  data() {
    return {
      userInput: "",
      isUnlocked: false,
      isShaking: false,
      showIncorrect: false,
      statusMessage: "",
      statusClass: "",
      hintVisible: false,
      hintsUsed: 0,
      attempts: 0,
      showParticles: false,
      correctWord: "trasformazione",
      lockedImage,
      unlockedImage,
      keyIcon,
      img06,
      showStory: true,
      messageTimeout: null,
      hintTimeout: null,
    };
  },

  beforeUnmount() {
    // Pulisci i timeout quando il componente viene distrutto
    if (this.messageTimeout) {
      clearTimeout(this.messageTimeout);
    }
    if (this.hintTimeout) {
      clearTimeout(this.hintTimeout);
    }
  },

  methods: {
    tryUnlock() {
      if (this.isUnlocked) return;

      this.attempts++;
      const inputWord = this.userInput.toLowerCase().trim();

      if (inputWord === this.correctWord) {
        this.unlock();
      } else {
        this.showFailure();
      }
    },

    unlock() {
      this.isUnlocked = true;
      this.showStatus(
        "Il lucchetto si è aperto! Il Sesto Vento è stato liberato.",
        "success"
      );
      this.createParticles();
      this.$emit("unlocked", true);
    },

    showFailure() {
      this.isShaking = true;
      this.showIncorrect = true;

      setTimeout(() => {
        this.isShaking = false;
        this.showIncorrect = false;
      }, 300);

      this.showStatus(
        "La parola magica non è ancora stata pronunciata...",
        "error"
      );
    },

    clearStatus() {
      if (this.messageTimeout) {
        clearTimeout(this.messageTimeout);
      }
      this.statusMessage = "";
      this.statusClass = "";
    },

    showHint() {
      this.hintsUsed++;
      this.hintVisible = true;

      // Nasconde il suggerimento precedente dopo un tempo più lungo
      if (this.hintTimeout) {
        clearTimeout(this.hintTimeout);
      }

      this.hintTimeout = setTimeout(() => {
        this.hintVisible = false;
      }, 8000); // 8 secondi per i suggerimenti

      if (this.hintsUsed === 1) {
        this.showStatus(
          "Pensa al processo che cambia una cosa in un'altra!",
          "hint"
        );
      } else if (this.hintsUsed === 2) {
        this.showStatus(
          "È una parola che descrive il passaggio da una forma all'altra!",
          "hint"
        );
      } else {
        this.showStatus(
          "Ultimo aiuto: la parola che cerchi è scritta in ogni cambiamento della tua vita!",
          "hint"
        );
      }
    },

    showStatus(message, type) {
      // Pulisci timeout precedente
      if (this.messageTimeout) {
        clearTimeout(this.messageTimeout);
      }

      this.statusMessage = message;
      this.statusClass = type;

      // Durata più lunga per i messaggi
      const duration = type === "success" ? 6000 : 5000; // 6 secondi per successo, 5 per altri

      this.messageTimeout = setTimeout(() => {
        this.statusMessage = "";
        this.statusClass = "";
      }, duration);
    },

    createParticles() {
      this.showParticles = true;
      setTimeout(() => {
        this.showParticles = false;
      }, 4000); // Particelle visibili più a lungo
    },

    getParticleStyle() {
      return {
        left: Math.random() * 100 + "%",
        animationDelay: Math.random() * 2 + "s",
        animationDuration: Math.random() * 2 + 3 + "s", // Durata più lunga
      };
    },

    getRandomEmoji() {
      const emojis = ["", "", "", "", "", "", "", "", "", "", "", ""];
      return emojis[Math.floor(Math.random() * emojis.length)];
    },

    focusInput() {
      if (!this.isUnlocked && this.$refs.wordInput) {
        this.$refs.wordInput.focus();
      }
    },
  },
};
</script>

<style scoped>
/* Transizioni migliorate per i messaggi */
.message-fade-enter-active {
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.message-fade-leave-active {
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.message-fade-enter-from {
  opacity: 0;
  transform: translateY(-20px) scale(0.8);
}

.message-fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
  filter: blur(2px);
}

/* Transizioni per i suggerimenti */
.hint-fade-enter-active {
  transition: all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.hint-fade-leave-active {
  transition: all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.hint-fade-enter-from {
  opacity: 0;
  transform: translateY(-30px) scale(0.7);
}

.hint-fade-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.8);
  filter: blur(3px);
}

/* Transizione per la sezione nascosta */
.section-reveal-enter-active {
  transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.section-reveal-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.key-icon {
  padding-right: 6px;
  width: 31px;
  transform: rotate(89deg);
}

.lock-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.story-section {
  background: #001e4375;
  padding: 50px 25px;
  border-radius: 15px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 100rem;
  margin: 0 auto;
}

.story-section h2 {
  color: var(--white-soft);
  margin-bottom: 20px;
}

.story-text {
  color: #4a5568;
  line-height: 1.7;
  font-size: 1.1em;
  padding-top: 1.5rem;
}

.story-text p {
  margin-bottom: 15px;
}

.diary-container h2 {
  color: #e53e76;
  margin-bottom: 10px;
  font-size: 2em;
}

.diary-container > p {
  color: #666;
  margin-bottom: 30px;
  font-style: italic;
}

/* Lock Image Styles */
.lock-image-container {
  margin: 30px 0;
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.lock-image {
  max-width: 400px;
  max-height: 400px;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: all 0.3s ease;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
}

.lock-image.shake {
  animation: shake 0.5s ease-in-out;
}

.lock-image.success {
  animation: success 0.8s ease-in-out;
  filter: drop-shadow(0 10px 20px rgba(233, 30, 99, 0.4));
}

.lock-image.unlocked {
  transform: scale(1.05);
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-8px);
  }
  75% {
    transform: translateX(8px);
  }
}

@keyframes success {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.05);
  }
}

/* Heart overlay effect */
.heart-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.floating-heart {
  position: absolute;
  font-size: 24px;
  animation: floatHeart 2s ease-in-out infinite;
}

.floating-heart:nth-child(1) {
  top: 20%;
  left: 20%;
  animation-delay: 0s;
}

.floating-heart:nth-child(2) {
  top: 30%;
  right: 25%;
  animation-delay: 0.7s;
}

.floating-heart:nth-child(3) {
  bottom: 20%;
  left: 30%;
  animation-delay: 1.4s;
}

@keyframes floatHeart {
  0%,
  100% {
    transform: translateY(0) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-10px) scale(1.2);
    opacity: 1;
  }
}

.word-input-container {
  margin: 20px 0;
}

.word-input {
  width: 390px;
  max-width: 100%;
  height: 50px;
  border: 2.5px solid #e2e8f0;
  border-radius: 45px;
  text-align: center;
  font-size: 18px;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  color: #2d3748;
  outline: none;
  font-family: "Playwrite US Trad", cursive;
  padding: 1.7rem;
}

.word-input:focus {
  border-color: var(--white-soft);
  box-shadow: 0 0 0 3px rgba(233, 30, 99, 0.1);
  transform: scale(1.02);
}

.word-input.correct {
  border-color: var(--white-soft);
  background-color: transparent;
  color: var(--white-soft);
  box-shadow: 0 0 15px 3px rgba(255, 255, 255, 0.7);
}

.word-input.incorrect {
  border-color: #e53e76;
  background: rgba(245, 101, 101, 0.1);
  animation: wiggle 0.3s ease;
}

@keyframes wiggle {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-1deg);
  }
  75% {
    transform: rotate(1deg);
  }
}

.button-container {
  margin: 20px 0;
}

.unlock-btn {
  color: var(--blue);
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 5px;
  background-color: var(--white);
  color: var(--blue);
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 34px;
  cursor: pointer;
  box-shadow: 0 0 15px 3px rgba(255, 255, 255, 0.7);
  transition: background-color 0.3s ease, box-shadow 0.6s ease;
  position: relative;
  z-index: 0;
  font-family: "Playwrite US Trad", cursive;
  font-weight: 400;
  letter-spacing: 0.5px;
}

.unlock-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.unlock-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.hint-btn {
  background: var(--blue);
  color: var(--white-soft);
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 34px;
  cursor: pointer;
  box-shadow: 0 0 15px 3px rgba(255, 255, 255, 0.7);
  transition: background-color 0.3s ease, box-shadow 0.6s ease;
  position: relative;
  z-index: 0;
  font-family: "Playwrite US Trad", cursive;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin: 5px;
}

.status-message {
  margin: 15px auto;
  padding: 12px 20px;
  border-radius: 12px;
  font-weight: bold;
  transition: all 0.3s ease;
  max-width: 490px;
  text-align: center;
  font-size: 1.1em;
}

.status-message.success {
  background: transparent;
  color: var(--white-soft);
  border: 2px solid var(--white-soft);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.status-message.error {
  background: rgba(245, 101, 101, 0.15);
  color: #e53e76;
  border: 2px solid #e53e76;
  box-shadow: 0 0 20px rgba(229, 62, 118, 0.3);
}

.status-message.hint {
  color: var(--white-soft);
  border: 2px solid var(--white-soft);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
  font-family: "Playwrite US Trad", cursive;
  font-weight: 300;
  background: rgba(255, 255, 255, 0.05);
}

.hint-box {
  background: rgba(16, 16, 16, 0.9);
  padding: 16px 20px;
  border-radius: 12px;
  margin: 20px auto;
  font-style: italic;
  color: #4a5568;
  max-width: 490px;
  text-align: center;
  border: 2px solid var(--white-soft);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
}

.secret-content {
  background: transparent;
  padding: 25px;
  border-radius: 15px;
  margin-top: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.secret-content h3 {
  color: var(--white-soft);
  margin-bottom: 15px;
  font-size: 2.5em;
}

.secret-text {
  color: #2d3748;
  line-height: 1.6;
  font-size: 1.1em;
  text-align: center;
}

.secret-text p {
  margin-bottom: 15px;
}

.reveal-enter-active {
  transition: all 0.8s ease;
}

.reveal-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

/* Hidden Section with Glass Effect - Migliorato */
.hidden-section {
  margin-top: 50px;
  transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
}

.hidden-section.glass-effect {
  filter: blur(15px);
  opacity: 0.7;
  pointer-events: none;
  user-select: none;
  transform: scale(0.95);
}

.hidden-section.glass-effect::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  z-index: 1;
  border-radius: 15px;
  transition: all 1s ease;
}

.hidden-section.revealed {
  filter: none;
  opacity: 1;
  pointer-events: auto;
  user-select: auto;
  transform: scale(1);
  animation: reveal 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.hidden-section.revealed::before {
  opacity: 0;
  backdrop-filter: blur(0px);
}

@keyframes reveal {
  0% {
    filter: blur(15px);
    opacity: 0.2;
    transform: translateY(30px) scale(0.95);
  }
  50% {
    filter: blur(5px);
    opacity: 0.6;
    transform: translateY(10px) scale(0.98);
  }
  100% {
    filter: none;
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Section Styles */
.section-image-text.reverse {
  flex-direction: row-reverse;
  padding-right: 5rem;
  padding-left: 0;
  text-align: left;
}

.section-image-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 5rem;
  padding-left: 5rem;
  padding-right: 0;
  flex-wrap: wrap;
  color: var(--white-soft);
}

.section-image-text img {
  border-radius: 8px;
  object-fit: cover;
  display: block;
  margin-right: 0;
}

#sezione6 img {
  max-width: 30%;
  align-self: center;
  margin: 0 auto;
}

.section-image-text div,
.section-image-text img {
  flex: 1 1 50%;
  max-width: 50%;
}

.section-image-text div {
  flex: 1;
}

.section-image-text h2 {
  margin-bottom: 0.5rem;
  font-size: 7rem;
}

.section-image-text p {
  font-size: 1.1rem;
  line-height: 1.5;
  padding-bottom: 1rem;
}

.number {
  font-size: 7rem;
  color: var(--white-soft);
}

.particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
}

.particle {
  position: absolute;
  font-size: 24px;
  animation: float 4s ease-out forwards;
}

@keyframes float {
  0% {
    transform: translateY(100vh) rotate(0deg) scale(0.5);
    opacity: 1;
  }
  50% {
    opacity: 1;
    transform: translateY(50vh) rotate(180deg) scale(1);
  }
  100% {
    transform: translateY(-100px) rotate(360deg) scale(0.8);
    opacity: 0;
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .section-image-text,
  .section-image-text.reverse {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 0 !important;
    padding-right: 0 !important;
    padding-top: 0rem;
  }

  .section-image-text img,
  .section-image-text div {
    width: 100%;
    max-width: 100%;
    text-align: left;
  }

  .section-image-text div {
    padding: 0rem 2rem !important;
  }

  #sezione6 img {
    width: 39%;
    padding: 3rem 0 1rem;
    align-self: center;
    margin: 0 auto;
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .lock-container {
    padding: 15px;
  }

  .word-input {
    width: 280px;
    font-size: 16px;
  }

  .unlock-btn {
    display: block;
    width: 200px;
    margin: 10px auto;
  }

  .lock-image {
    max-width: 150px;
    max-height: 150px;
  }

  .section-image-text h2 {
    font-size: 3rem;
  }

  .number {
    font-size: 3rem;
  }

  .section-image-text p {
    font-size: 11px;
  }

  .status-message {
    max-width: 280px;
    font-size: 0.9em;
    padding: 10px 16px;
  }

  .hint-box {
    max-width: 280px;
    font-size: 0.9em;
    padding: 12px 16px;
  }

  .secret-content h3 {
    font-size: 1.8em;
  }

  .particle {
    font-size: 18px;
  }
}
</style>
