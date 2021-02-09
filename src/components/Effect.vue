<template>
  <div>
    <audio ref="audioFile" />
  </div>
</template>

<script>
export default {
  props: {
    sfx: {
      type: Object,
      required: true
    }
  },

  mounted() {
    const sound = this.$refs.audioFile;
    sound.src = `sfx/${this.sfx.mp3}`;
    sound.addEventListener("ended", () => {
      sound.src = "";
      this.$emit("ended");
    });
    sound.play().catch(error => {
      console.log("failed to play sound", error);
      this.$emit("ended");
    });
  }
};
</script>
