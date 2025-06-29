<template>
  <div class="paper-plane-container">
    <!-- Scia magica -->
    <div class="magic-trail">
      <div
        v-for="(particle, index) in particles"
        :key="index"
        class="particle"
        :style="getParticleStyle(particle, index)"
      ></div>
    </div>

    <!-- Aeroplano -->
    <div ref="paperPlane" class="paper-plane" :style="planeStyle">
      <svg
        :width="size"
        :height="size"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M2 20 L20 2 L38 20 L28 18 L20 25 L12 18 Z"
          fill="#e2e8f0"
          stroke="#94a3b8"
          stroke-width="0.5px"
          filter="url(#glow)"
        />
        <path d="M20 2 L20 25 L12 18 Z" fill="#f1f5f9" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaperPlane",
  props: {
    size: {
      type: Number,
      default: 60,
    },
    baseRotation: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      scrollY: 0,
      amplitude: 120,
      frequency: 0.003,
      speed: 0.15,
      startOffset: 50,
      isVisible: true,
      particles: [],
      lastPosition: { x: 0, y: 0 },
      animationId: null,
    };
  },
  computed: {
    planeStyle() {
      const x = Math.sin(this.scrollY * this.frequency) * this.amplitude;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = Math.max(documentHeight - windowHeight, 1);
      const progress = this.scrollY / maxScroll;

      const y = this.startOffset + progress * (windowHeight + 300);

      const dynamicRotation = Math.cos(this.scrollY * this.frequency) * 20;
      const totalRotation = this.baseRotation + dynamicRotation;

      // Aggiorna la posizione per le particelle
      this.updateParticles(x, y);

      return {
        transform: `translate(${x}px, ${y}px) rotate(${totalRotation}deg)`,
        opacity: this.isVisible ? 1 : 0,
        visibility: this.isVisible ? "visible" : "hidden",
      };
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.handleScroll();
      window.addEventListener("scroll", this.handleScroll, { passive: true });
      this.startAnimation();
    });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;

      this.isVisible = this.scrollY <= maxScroll + 100;
    },

    updateParticles(x, y) {
      // Aggiungi nuove particelle solo se l'aereo si è mosso abbastanza
      const distance = Math.sqrt(
        Math.pow(x - this.lastPosition.x, 2) +
          Math.pow(y - this.lastPosition.y, 2)
      );

      if (distance > 8) {
        // Crea più particelle per una scia più densa
        for (let i = 0; i < 3; i++) {
          this.particles.push({
            x: x + (Math.random() - 0.5) * 20,
            y: y + (Math.random() - 0.5) * 20,
            life: 1,
            initialLife: 1,
            size: Math.random() * 6 + 2,
            color: this.getRandomColor(),
            velocity: {
              x: (Math.random() - 0.5) * 2,
              y: (Math.random() - 0.5) * 2,
            },
          });
        }
        this.lastPosition = { x, y };
      }

      // Rimuovi particelle vecchie (mantieni solo le ultime 50 per performance)
      if (this.particles.length > 50) {
        this.particles = this.particles.slice(-50);
      }
    },

    getRandomColor() {
      const colors = [
        "#FFFFFF", // Bianco puro
        "#F8F8FF", // Bianco fantasma
        "#F0F8FF", // Bianco alice
        "#E6E6FA", // Lavanda molto chiara
        "#F5F5F5", // Bianco fumo
        "#FFFACD", // Bianco limone chiarissimo
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    },

    getParticleStyle(particle, index) {
      const opacity = particle.life * 0.9;
      const scale = particle.life * (particle.size / 8);

      return {
        position: "absolute",
        left: `${particle.x}px`,
        top: `${particle.y}px`,
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        backgroundColor: particle.color,
        borderRadius: "50%",
        opacity: opacity,
        transform: `scale(${scale})`,
        boxShadow: `0 0 ${particle.size * 3}px ${particle.color}, 0 0 ${
          particle.size * 6
        }px rgba(255, 255, 255, 0.5)`,
        pointerEvents: "none",
        transition: "none",
      };
    },

    startAnimation() {
      const animate = () => {
        // Aggiorna le particelle esistenti
        this.particles = this.particles
          .map((particle) => ({
            ...particle,
            life: particle.life - 0.02,
            x: particle.x + particle.velocity.x,
            y: particle.y + particle.velocity.y,
          }))
          .filter((particle) => particle.life > 0);

        this.animationId = requestAnimationFrame(animate);
      };

      animate();
    },
  },
};
</script>

<style scoped>
.paper-plane-container {
  position: fixed;
  top: -190px;
  left: 50%;
  width: 0;
  height: 0;
  pointer-events: none;
  z-index: 100;
}

.paper-plane {
  position: absolute;
  transition: opacity 0.3s ease;
  filter: drop-shadow(2px 2px 12px rgba(255, 255, 255, 0.4));
  animation: fadeIn 0.5s ease-in;
}

.magic-trail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  /* Rimosso overflow: hidden per evitare il taglio delle particelle */
}

.particle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  animation: sparkle 0.6s ease-out;
}

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

@keyframes sparkle {
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 1;
    filter: blur(0px);
  }
  30% {
    transform: scale(1.5) rotate(120deg);
    opacity: 0.9;
    filter: blur(0.5px);
  }
  70% {
    transform: scale(1.2) rotate(240deg);
    opacity: 0.6;
    filter: blur(1px);
  }
  100% {
    transform: scale(0.3) rotate(360deg);
    opacity: 0;
    filter: blur(2px);
  }
}

/* Aggiungi un effetto pulsante all'aeroplano */
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
