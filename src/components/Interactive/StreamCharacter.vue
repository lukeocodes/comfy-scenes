<template>
  <div
    class="character"
    ref="character"
    :class="[state, character]"
    :style="styleObj"
    @click="close()"
  >
    <span v-if="player.name" class="name">{{ player.name }}</span>
  </div>
</template>

<script>
const getRand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default {
  props: {
    player: {
      type: Object,
      required: true
    }
  },

  data() {
    const right = getRand(1, window.innerWidth);
    const size = getRand(4, 10);

    return {
      right: `${right - size * 16}px`,
      size,
      timeout: null,
      state: "",
      bottom: `120%`,
      transition: "",
      listener: null,
      opacity: 1
    };
  },

  computed: {
    styleObj() {
      return {
        zIndex: "4",
        right: this.right,
        width: `${this.size}rem`,
        height: `${this.size}rem`,
        backgroundSize: `auto ${this.size}rem`,
        bottom: this.bottom,
        transition: this.transition,
        opacity: this.opacity
      };
    },

    character() {
      const characters = ["blue", "dave", "greg", "mort"];

      return characters[Math.floor(Math.random() * characters.length)];
    }
  },

  beforeDestroy() {
    this.$refs.character.removeEventListener("animationend", this.listener);
  },

  mounted() {
    this.$nextTick(() => {
      const moveTimer = setTimeout(() => {
        this.state = "falling";
        this.bottom = 0;
        clearTimeout(moveTimer);
      }, getRand(500, 3000));

      this.listener = this.$refs.character.addEventListener(
        "animationend",
        () => {
          this.state = "idle";
          this.transition = `opacity 1s linear 5s`;
          this.opacity = 0;

          const removeTimer = setTimeout(() => {
            this.removeSelf();
            clearTimeout(removeTimer);
          }, 6000);
        }
      );
    });
  },

  methods: {
    removeSelf() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    }
  }
};
</script>

<style scoped>
@import url("http://fonts.cdnfonts.com/css/press-start-2p");

.character {
  @apply absolute;
  background-image: url("~@/assets/images/dino/sheets/greg.png");
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}

.character.dave {
  background-image: url("~@/assets/images/dino/sheets/dave.png");
}

.character.blue {
  background-image: url("~@/assets/images/dino/sheets/blue.png");
}

.character.mort {
  background-image: url("~@/assets/images/dino/sheets/mort.png");
}

.character.idle {
  animation: 0.5s idle infinite steps(1);
}

.character.walking {
  background-position-x: -8rem;
  animation: 0.5s walking infinite steps(1);
  transform: scaleX(-1);
}

.character.kick {
  animation: 0.5s kicking infinite steps(1);
}

.character.walking.right {
  transform: scaleX(1);
}

@keyframes idle {
  0% {
    background-position-x: 0;
  }
  25% {
    background-position-x: -100%;
  }
  50% {
    background-position-x: -200%;
  }
  75% {
    background-position-x: -300%;
  }
}

@keyframes fallings-fall {
  0% {
    bottom: 120%;
  }
  100% {
    bottom: 0%;
  }
}

@keyframes fallings-shake {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(80px);
  }
}

.falling {
  user-select: none;
  cursor: default;
  animation-name: fallings-fall, fallings-shake;
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: 1, 3;
  animation-duration: 9s, 3s;
}

.falling::before {
  @apply absolute;
  content: "";
  width: 100%;
  height: 135%;
  top: -35%;
  background: url("~@/assets/images/chute.png") no-repeat center top;
  background-size: contain;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}

.falling .name {
  @apply hidden;
}

.name {
  @apply block;
  font-family: "Press Start 2P", sans-serif;
  @apply bg-white;
  @apply inline-block;
  @apply border-2;
  @apply border-black;
  /* @apply rounded-full; */
  @apply px-4;
  @apply py-1;
}
</style>
