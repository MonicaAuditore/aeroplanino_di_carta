<template>
  <!-- Audio player -->
  <audio ref="audioRef" :src="lullaby"></audio>

  <div class="audio-player">
    <button @click="toggleAudio" ref="toggleButtonRef">🎵 Play</button>
  </div>

  <!-- Bottone Torna su -->
  <button v-if="showScroll" @click="scrollToTop" class="scroll-to-top">
    <font-awesome-icon icon="arrow-up-long" />
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import lullaby from "@/assets/lullaby.mp3";

const audioRef = ref(null);
const toggleButtonRef = ref(null);
const showScroll = ref(false);

function toggleAudio() {
  const audio = audioRef.value;
  const button = toggleButtonRef.value;

  if (!audio || !button) return;

  if (audio.paused) {
    audio.play();
    button.textContent = "🔇 Stop";
  } else {
    audio.pause();
    button.textContent = "🎵 Play";
  }
}

// Aggiorna il testo del bottone al caricamento della pagina
onMounted(() => {
  const audio = audioRef.value;
  const button = toggleButtonRef.value;
  if (audio && button) {
    if (!audio.paused) {
      button.textContent = "🔇 Stop";
    } else {
      button.textContent = "🎵 Play";
    }
  }
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const onScroll = () => {
  showScroll.value = window.scrollY > 100;
};

onMounted(() => window.addEventListener("scroll", onScroll));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<style scoped>
.audio-player {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #fff;
  color: #000;
  border-radius: 50px;
  padding: 10px 20px;
  box-shadow: 0 0 15px 3px rgba(255, 255, 255, 0.7);
  z-index: 9999;
}

.audio-player button {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 0rem;
}

/* Bottone torna su */
.scroll-to-top {
  position: fixed;
  bottom: 80px;
  right: 20px;
  background-color: #000c1a;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 0 15px 3px rgba(255, 255, 255, 0.7);
  z-index: 10000;
  font-size: 16px;
  transition: background-color 0.3s;
  margin-bottom: 2rem;
}

.scroll-to-top:hover {
  background-color: #112244;
}
</style>
