<template>
  <div class="paper-plane-container">
    <!-- Scia magica -->
    <div class="magic-trail">
      <div
        v-for="(particle, index) in particles"
        :key="index"
        :class="['particle', `particle-${particle.type}`]"
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
          stroke-width="0.5"
          stroke-opacity="0.6"
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
      floatTime: 0,
    };
  },
  computed: {
    planeStyle() {
      // Calcolo base della curva sinusoidale con offset generale
      const baseCurve =
        Math.sin(this.scrollY * this.frequency) * this.amplitude;

      // Determina quale curva stiamo attraversando
      const totalRadians = this.scrollY * this.frequency;
      const curveNumber = Math.floor(totalRadians / (Math.PI * 2)) + 1;
      const curveProgress = (totalRadians % (Math.PI * 2)) / (Math.PI * 2);

      // Offset generale per spostare tutto verso sinistra
      let generalOffset = -60; // Sposta tutto di 60px a sinistra

      // Aggiungi offset extra per la 4° curva
      let extraOffset = 0;
      if (curveNumber === 4) {
        // Spostamento extra verso sinistra durante la 4° curva
        extraOffset = -120 * Math.sin(curveProgress * Math.PI); // Extra -120px
      }

      // Offset progressivo che aumenta man mano che si scende
      const progressiveOffset = -this.scrollY * 0.02; // Sempre più a sinistra

      const x = baseCurve + generalOffset + extraOffset + progressiveOffset;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = Math.max(documentHeight - windowHeight, 1);
      const progress = this.scrollY / maxScroll;

      const y = this.startOffset + progress * (windowHeight + 300);

      const dynamicRotation = Math.cos(this.scrollY * this.frequency) * 20;
      const totalRotation = this.baseRotation + dynamicRotation;

      // Movimento di galleggiamento morbido
      const floatX = Math.sin(this.floatTime * 0.6) * 6;
      const floatY = Math.cos(this.floatTime * 0.8) * 8;
      const floatRotation = Math.sin(this.floatTime * 0.4) * 3;

      this.updateParticles(x + floatX, y + floatY);

      return {
        transform: `translate(${x + floatX}px, ${y + floatY}px) rotate(${
          totalRotation + floatRotation
        }deg)`,
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
      const distance = Math.sqrt(
        Math.pow(x - this.lastPosition.x, 2) +
          Math.pow(y - this.lastPosition.y, 2)
      );

      if (distance > 7) {
        // Numero ridotto di particelle per bilanciare densità e performance
        for (let i = 0; i < 3; i++) {
          const particleType = this.getRandomParticleType();
          this.particles.push({
            x: x + (Math.random() - 0.5) * 20,
            y: y + (Math.random() - 0.5) * 20,
            life: 1,
            initialLife: 1,
            size: this.getParticleSize(particleType),
            type: particleType,
            color: this.getParticleColor(particleType),
            velocity: {
              x: (Math.random() - 0.5) * 1.2,
              y: (Math.random() - 0.5) * 1.2,
            },
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 6,
            twinklePhase: Math.random() * Math.PI * 2,
          });
        }
        this.lastPosition = { x, y };
      }

      // Mantieni più particelle per una scia più lunga
      if (this.particles.length > 80) {
        this.particles = this.particles.slice(-80);
      }
    },

    getRandomParticleType() {
      const types = ["sparkle", "tiny", "glow", "micro"];
      const weights = [0.35, 0.3, 0.25, 0.1]; // Probabilità bilanciate

      const random = Math.random();
      let cumulative = 0;

      for (let i = 0; i < types.length; i++) {
        cumulative += weights[i];
        if (random < cumulative) {
          return types[i];
        }
      }
      return "sparkle";
    },

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

    getParticleStyle(particle, index) {
      const opacity = particle.life * 0.9;
      const scale = particle.life * (particle.size / 5);

      // Effetto twinkle più morbido
      const twinkle =
        Math.sin(particle.twinklePhase + this.floatTime * 2.5) * 0.25 + 0.75;

      // Box shadow bilanciato per tipo
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
        pointerEvents: "none",
        transition: "none",
      };
    },

    startAnimation() {
      const animate = () => {
        this.floatTime += 0.014; // Leggermente più lento per morbidezza

        this.particles = this.particles
          .map((particle) => ({
            ...particle,
            life: particle.life - 0.012, // Durata più lunga per scomparsa graduale
            x: particle.x + particle.velocity.x,
            y: particle.y + particle.velocity.y,
            rotation: particle.rotation + particle.rotationSpeed,
            twinklePhase: particle.twinklePhase + 0.08,
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
}

.particle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

/* Animazioni più morbide per tipo di particella */
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
