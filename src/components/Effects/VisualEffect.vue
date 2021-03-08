<template>
  <img
    v-if="effect.src"
    :src="`/img/${effect.src}`"
    ref="imageFile"
    width="300"
    class="absolute"
    :class="[position, animation]"
  />
</template>

<script>
export default {
  props: {
    effect: {
      type: Object,
      required: true
    }
  },

  computed: {
    position() {
      const map = {
        topleft: "left-0 top-0",
        bottomleft: "left-0 bottom-0",
        topright: "right-0 top-0",
        bottomright: "right-0 bottom-0"
      };
      return map[this.effect.pos];
    },
    animation() {
      const map = {
        flicker: "flicker"
      };

      return map[this.effect.animation];
    }
  },

  mounted() {
    if (this.effect.src) {
      this.$nextTick(() => {
        const timeout = setTimeout(() => {
          this.$emit("ended");
          clearTimeout(timeout);
        }, this.effect.ttl || 2000);
      });
    }
  }
};
</script>

<style scoped>
.flicker {
  animation: flicker 3s infinite;
}

@keyframes flicker {
  0% {
    opacity: 1;
  }
  47% {
    opacity: 1;
  }
  49% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  52% {
    opacity: 1;
  }
  54% {
    opacity: 0.5;
  }
  56% {
    opacity: 1;
  }
  97% {
    opacity: 1;
  }
  99% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
