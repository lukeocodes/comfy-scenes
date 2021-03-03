<template>
  <audio
    v-if="effect.src"
    ref="audioFile"
    :src="`/effects/sounds/${effect.src}`"
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

  mounted() {
    if (this.effect.src) {
      const sound = this.$refs.audioFile;
      sound.addEventListener("ended", () => {
        sound.src = "";
        this.$emit("ended");
      });
      sound.play().catch(error => {
        console.log("failed to play sound", error);
        this.$emit("ended");
      });
    }
  }
};
</script>

<style scoped>
.flicker {
  animation: neon-blue-flicker 3s infinite;
}

@keyframes neon-blue-flicker {
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
