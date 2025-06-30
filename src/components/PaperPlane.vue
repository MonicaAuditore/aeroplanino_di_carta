<template>
  <div class="paper-plane-container">
    <!-- CONTENITORE SCIA MAGICA -->
    <!-- Qui vengono renderizzate tutte le particelle che formano la scia dietro l'aeroplano -->
    <div class="magic-trail">
      <div
        v-for="(particle, index) in particles"
        :key="index"
        :class="['particle', `particle-${particle.type}`]"
        :style="getParticleStyle(particle, index)"
      ></div>
    </div>

    <!-- AEROPLANO DI CARTA -->
    <!-- L'aeroplano principale che si muove seguendo la curva sinusoidale -->
    <div ref="paperPlane" class="paper-plane" :style="planeStyle">
      <svg
        :width="size"
        :height="size"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- EFFETTO BAGLIORE SVG -->
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <!-- CORPO PRINCIPALE DELL'AEROPLANO -->
        <path
          d="M2 20 L20 2 L38 20 L28 18 L20 25 L12 18 Z"
          fill="#e2e8f0"
          stroke="#94a3b8"
          stroke-width="0.5"
          stroke-opacity="0.6"
          filter="url(#glow)"
        />
        <!-- ALA DESTRA CON OMBREGGIATURA -->
        <path d="M20 2 L20 25 L12 18 Z" fill="#f1f5f9" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaperPlane",

  // PROPS: parametri che il componente riceve dall'esterno
  props: {
    // Dimensione dell'aeroplano in pixel
    size: {
      type: Number,
      default: 60,
    },
    // Rotazione base dell'aeroplano (in gradi)
    baseRotation: {
      type: Number,
      default: 0,
    },
  },

  // STATO REATTIVO DEL COMPONENTE
  data() {
    return {
      // Posizione attuale dello scroll verticale
      scrollY: 0,

      // PARAMETRI DELLA CURVA SINUSOIDALE
      amplitude: 120, // Ampiezza della curva (quanto si allarga)
      frequency: 0.003, // Frequenza della curva (quanto è stretta)
      speed: 0.15, // Velocità di movimento (non usata attualmente)

      // Offset iniziale dall'alto della pagina
      startOffset: 50,

      // Se l'aeroplano è visibile o meno
      isVisible: true,

      // Array di tutte le particelle della scia magica
      particles: [],

      // Ultima posizione dell'aeroplano (per calcolare la distanza percorsa)
      lastPosition: { x: 0, y: 0 },

      // ID dell'animazione per poterla cancellare
      animationId: null,

      // Tempo per l'animazione di galleggiamento
      floatTime: 0,
    };
  },

  // COMPUTED PROPERTIES: proprietà calcolate che si aggiornano automaticamente
  computed: {
    // Calcola lo stile CSS dell'aeroplano (posizione e rotazione)
    planeStyle() {
      // CALCOLO MOVIMENTO ORIZZONTALE (curva sinusoidale)
      const baseCurve =
        Math.sin(this.scrollY * this.frequency) * this.amplitude;

      // DETERMINAZIONE DELLA CURVA ATTUALE
      // Calcola in quale "ciclo" della sinusoide ci troviamo
      const totalRadians = this.scrollY * this.frequency;
      const curveNumber = Math.floor(totalRadians / (Math.PI * 2)) + 1;
      const curveProgress = (totalRadians % (Math.PI * 2)) / (Math.PI * 2);

      // OFFSET ORIZZONTALI PER PERSONALIZZARE IL PERCORSO
      let generalOffset = -60; // Sposta tutto verso sinistra di base
      let extraOffset = 0; // Offset extra per curve specifiche

      // Comportamento speciale per la 4° curva
      if (curveNumber === 4) {
        extraOffset = -120 * Math.sin(curveProgress * Math.PI);
      }

      // Offset progressivo: più si scende, più va a sinistra
      const progressiveOffset = -this.scrollY * 0.02;

      // POSICIÓN HORIZONTAL FINAL
      const x = baseCurve + generalOffset + extraOffset + progressiveOffset;

      // CALCOLO MOVIMENTO VERTICALE
      // Calcola la posizione Y basata sul progresso dello scroll
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = Math.max(documentHeight - windowHeight, 1);
      const progress = this.scrollY / maxScroll;
      const y = this.startOffset + progress * (windowHeight + 300);

      // CALCOLO ROTAZIONE DINAMICA
      // La rotazione cambia in base alla curva per dare effetto di "volo"
      const dynamicRotation = Math.cos(this.scrollY * this.frequency) * 20;
      const totalRotation = this.baseRotation + dynamicRotation;

      // MOVIMENTO DI GALLEGGIAMENTO
      // Piccoli movimenti ondulatori per dare vita all'aeroplano
      const floatX = Math.sin(this.floatTime * 0.6) * 6;
      const floatY = Math.cos(this.floatTime * 0.8) * 8;
      const floatRotation = Math.sin(this.floatTime * 0.4) * 3;

      // AGGIORNAMENTO PARTICELLE
      // Genera nuove particelle basate sulla posizione attuale
      this.updateParticles(x + floatX, y + floatY);

      // RITORNA LO STILE CSS FINALE
      return {
        transform: `translate(${x + floatX}px, ${y + floatY}px) rotate(${
          totalRotation + floatRotation
        }deg)`,
        opacity: this.isVisible ? 1 : 0,
        visibility: this.isVisible ? "visible" : "hidden",
      };
    },
  },

  // LIFECYCLE HOOKS: si eseguono in momenti specifici del ciclo di vita del componente
  mounted() {
    // Quando il componente è montato nel DOM
    this.$nextTick(() => {
      this.handleScroll(); // Calcola posizione iniziale
      // Ascolta l'evento scroll con opzione passive per performance
      window.addEventListener("scroll", this.handleScroll, { passive: true });
      this.startAnimation(); // Avvia l'animazione delle particelle
    });
  },

  beforeUnmount() {
    // Quando il componente sta per essere rimosso
    // Rimuove i listener e ferma le animazioni per evitare memory leak
    window.removeEventListener("scroll", this.handleScroll);
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  },

  // METODI DEL COMPONENTE
  methods: {
    // GESTIONE DELLO SCROLL
    // Aggiorna la posizione verticale e la visibilità dell'aeroplano
    handleScroll() {
      this.scrollY = window.scrollY;

      // Calcola se l'aeroplano deve essere visibile
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;

      // Nasconde l'aeroplano quando si raggiunge la fine della pagina
      this.isVisible = this.scrollY <= maxScroll + 100;
    },

    // AGGIORNAMENTO PARTICELLE DELLA SCIA
    // Genera nuove particelle quando l'aeroplano si muove abbastanza
    updateParticles(x, y) {
      // Calcola la distanza dall'ultima posizione
      const distance = Math.sqrt(
        Math.pow(x - this.lastPosition.x, 2) +
          Math.pow(y - this.lastPosition.y, 2)
      );

      // Genera nuove particelle solo se l'aeroplano si è mosso abbastanza
      if (distance > 7) {
        // Crea 3 nuove particelle per ogni movimento significativo
        for (let i = 0; i < 3; i++) {
          const particleType = this.getRandomParticleType();
          this.particles.push({
            // Posizione con un po' di randomizzazione
            x: x + (Math.random() - 0.5) * 20,
            y: y + (Math.random() - 0.5) * 20,

            // Durata di vita (1 = appena creata, 0 = morta)
            life: 1,
            initialLife: 1,

            // Caratteristiche visive
            size: this.getParticleSize(particleType),
            type: particleType,
            color: this.getParticleColor(particleType),

            // Movimento proprio della particella
            velocity: {
              x: (Math.random() - 0.5) * 1.2,
              y: (Math.random() - 0.5) * 1.2,
            },

            // Rotazione e scintillio
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 6,
            twinklePhase: Math.random() * Math.PI * 2,
          });
        }
        // Aggiorna la posizione di riferimento
        this.lastPosition = { x, y };
      }

      // GESTIONE MEMORIA: mantiene solo le ultime 80 particelle
      if (this.particles.length > 80) {
        this.particles = this.particles.slice(-80);
      }
    },

    // GENERAZIONE TIPO PARTICELLA CASUALE
    // Sceglie un tipo di particella basato su pesi probabilistici
    getRandomParticleType() {
      const types = ["sparkle", "tiny", "glow", "micro"];
      const weights = [0.35, 0.3, 0.25, 0.1]; // Probabilità per ogni tipo

      const random = Math.random();
      let cumulative = 0;

      // Algoritmo di selezione pesata
      for (let i = 0; i < types.length; i++) {
        cumulative += weights[i];
        if (random < cumulative) {
          return types[i];
        }
      }
      return "sparkle"; // Fallback
    },

    // CALCOLO DIMENSIONE PARTICELLA
    // Ogni tipo di particella ha una gamma di dimensioni diversa
    getParticleSize(type) {
      switch (type) {
        case "micro":
          return Math.random() * 1.5 + 0.8; // 0.8-2.3px
        case "tiny":
          return Math.random() * 2.5 + 1.5; // 1.5-4px
        case "sparkle":
          return Math.random() * 3.5 + 2.5; // 2.5-6px
        case "glow":
          return Math.random() * 4 + 3; // 3-7px
        default:
          return Math.random() * 3 + 2;
      }
    },

    // SELEZIONE COLORE PARTICELLA
    // Ogni tipo ha una palette di colori specifici
    getParticleColor(type) {
      const colors = {
        sparkle: ["#FFFFFF", "#F8F8FF", "#E6E6FA"],
        tiny: ["#FFFFFF", "#F0F8FF", "#FFFACD"],
        glow: ["#FFFFFF", "#F5F5F5", "#E6E6FA"],
        micro: ["#FFFFFF", "#F0F0F0", "#E8E8E8"],
      };

      const typeColors = colors[type] || colors.sparkle;
      return typeColors[Math.floor(Math.random() * typeColors.length)];
    },

    // CALCOLO STILE CSS PER OGNI PARTICELLA
    // Genera le proprietà CSS dinamiche per ogni particella
    getParticleStyle(particle, index) {
      // Opacità basata sulla durata di vita
      const opacity = particle.life * 0.9;

      // Scala basata sulla durata di vita e dimensione
      const scale = particle.life * (particle.size / 5);

      // EFFETTO SCINTILLIO
      // Oscillazione morbida dell'opacità per dare effetto "twinkle"
      const twinkle =
        Math.sin(particle.twinklePhase + this.floatTime * 2.5) * 0.25 + 0.75;

      // BOX SHADOW PERSONALIZZATO PER TIPO
      // Ogni tipo di particella ha un effetto luminoso diverso
      let boxShadow = "";
      switch (particle.type) {
        case "sparkle":
          boxShadow = `0 0 ${particle.size * 3}px ${particle.color}, 0 0 ${
            particle.size * 6
          }px rgba(255, 255, 255, 0.7)`;
          break;
        case "glow":
          boxShadow = `0 0 ${particle.size * 4}px ${particle.color}, 0 0 ${
            particle.size * 8
          }px rgba(255, 255, 255, 0.8)`;
          break;
        case "tiny":
          boxShadow = `0 0 ${particle.size * 2}px ${particle.color}, 0 0 ${
            particle.size * 4
          }px rgba(255, 255, 255, 0.5)`;
          break;
        case "micro":
          boxShadow = `0 0 ${particle.size * 1.5}px ${particle.color}`;
          break;
        default:
          boxShadow = `0 0 ${particle.size * 2.5}px ${particle.color}`;
      }

      // RITORNA L'OGGETTO STILE COMPLETO
      return {
        position: "absolute",
        left: `${particle.x}px`,
        top: `${particle.y}px`,
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        backgroundColor: particle.color,
        borderRadius: "50%",
        opacity: opacity * twinkle,
        transform: `scale(${scale}) rotate(${particle.rotation}deg)`,
        boxShadow: boxShadow,
        pointerEvents: "none", // Non interferisce con il mouse
        transition: "none", // Nessuna transizione CSS (gestiamo tutto via JS)
      };
    },

    // LOOP PRINCIPALE DELL'ANIMAZIONE
    // Gestisce l'aggiornamento continuo di tutte le particelle
    startAnimation() {
      const animate = () => {
        // Incrementa il tempo per gli effetti di galleggiamento
        this.floatTime += 0.014;

        // AGGIORNA TUTTE LE PARTICELLE
        this.particles = this.particles
          .map((particle) => ({
            ...particle,
            // Riduce la durata di vita
            life: particle.life - 0.012,

            // Muove la particella secondo la sua velocità
            x: particle.x + particle.velocity.x,
            y: particle.y + particle.velocity.y,

            // Ruota la particella
            rotation: particle.rotation + particle.rotationSpeed,

            // Aggiorna la fase di scintillio
            twinklePhase: particle.twinklePhase + 0.08,
          }))
          // RIMUOVE LE PARTICELLE MORTE
          .filter((particle) => particle.life > 0);

        // Programma il prossimo frame
        this.animationId = requestAnimationFrame(animate);
      };

      // Avvia il loop
      animate();
    },
  },
};
</script>

<style scoped>
/* CONTENITORE PRINCIPALE */
/* Posizionato fisso per rimanere sempre visibile durante lo scroll */
.paper-plane-container {
  position: fixed;
  top: -190px; /* Offset iniziale dall'alto */
  left: 50%; /* Centrato orizzontalmente */
  width: 0; /* Dimensioni nulle per non interferire */
  height: 0;
  pointer-events: none; /* Non cattura eventi del mouse */
  z-index: 100; /* Sopra agli altri elementi */
}

/* STILE AEROPLANO */
.paper-plane {
  position: absolute;
  transition: opacity 0.3s ease; /* Transizione per apparizione/scomparsa */
  filter: drop-shadow(
    2px 2px 12px rgba(255, 255, 255, 0.4)
  ); /* Ombra luminosa */
  animation: fadeIn 0.5s ease-in; /* Animazione di entrata */
}

/* CONTENITORE SCIA MAGICA */
/* Occupa tutto lo schermo per permettere alle particelle di muoversi liberamente */
.magic-trail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw; /* Larghezza = 100% viewport */
  height: 100vh; /* Altezza = 100% viewport */
  pointer-events: none; /* Non interferisce con il mouse */
}

/* STILE BASE PARTICELLE */
.particle {
  position: absolute;
  border-radius: 50%; /* Forma circolare */
  pointer-events: none; /* Non interferisce con il mouse */
}

/* ANIMAZIONI SPECIFICHE PER TIPO DI PARTICELLA */
/* Ogni tipo ha un'animazione diversa per varietà visiva */

.particle-sparkle {
  animation: sparkleSmooth 1.1s ease-out;
}

.particle-tiny {
  animation: tinyFloat 1.4s ease-out;
}

.particle-glow {
  animation: glowSoft 1.2s ease-out;
}

.particle-micro {
  animation: microShimmer 1.8s ease-out;
}

/* ANIMAZIONE ENTRATA AEROPLANO */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* ANIMAZIONE PARTICELLE SPARKLE */
/* Rotazione con cambio di scala e luminosità */
@keyframes sparkleSmooth {
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 1;
    filter: blur(0px) brightness(1.4);
  }
  20% {
    transform: scale(1.6) rotate(72deg);
    opacity: 1;
    filter: blur(0px) brightness(1.8);
  }
  50% {
    transform: scale(1.3) rotate(180deg);
    opacity: 0.9;
    filter: blur(0.3px) brightness(1.6);
  }
  75% {
    transform: scale(1) rotate(270deg);
    opacity: 0.6;
    filter: blur(0.6px) brightness(1.3);
  }
  90% {
    transform: scale(0.6) rotate(324deg);
    opacity: 0.3;
    filter: blur(1px) brightness(1.1);
  }
  100% {
    transform: scale(0.2) rotate(360deg);
    opacity: 0;
    filter: blur(1.5px) brightness(1);
  }
}

/* ANIMAZIONE PARTICELLE TINY */
/* Movimento di galleggiamento verso l'alto */
@keyframes tinyFloat {
  0% {
    transform: scale(0) translateY(0px);
    opacity: 1;
  }
  35% {
    transform: scale(1.1) translateY(-4px);
    opacity: 0.9;
  }
  75% {
    transform: scale(0.9) translateY(-8px);
    opacity: 0.5;
  }
  100% {
    transform: scale(0.3) translateY(-12px);
    opacity: 0;
  }
}

/* ANIMAZIONE PARTICELLE GLOW */
/* Espansione e dissolvenza morbida */
@keyframes glowSoft {
  0% {
    transform: scale(0);
    opacity: 1;
    filter: blur(0px);
  }
  45% {
    transform: scale(1.4);
    opacity: 0.85;
    filter: blur(0.8px);
  }
  100% {
    transform: scale(0.4);
    opacity: 0;
    filter: blur(2px);
  }
}

/* ANIMAZIONE PARTICELLE MICRO */
/* Scintillio sottile e duraturo */
@keyframes microShimmer {
  0% {
    opacity: 1;
    transform: scale(0.7);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
  100% {
    opacity: 0;
    transform: scale(0.3);
  }
}

/* ANIMAZIONE PULSAZIONE AEROPLANO */
/* L'aeroplano stesso ha un effetto di pulsazione luminosa */
.paper-plane svg {
  animation: pulse 2s ease-in-out infinite alternate;
}

@keyframes pulse {
  from {
    filter: drop-shadow(2px 2px 12px rgba(255, 255, 255, 0.4));
  }
  to {
    filter: drop-shadow(2px 2px 20px rgba(255, 255, 255, 0.8));
  }
}
</style>
