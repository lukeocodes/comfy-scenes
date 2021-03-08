<template>
  <div
    class="relative text-4xl sign"
    :style="signStyle"
    :class="{ off: !$store.state.light }"
  >
    @luke<b>o</b>codes
  </div>
</template>

<script>
export default {
  computed: {
    signStyle() {
      const style = {
        "font-family": "Beon",
        color: this.$store.state.logo.base,
        "text-shadow": `0 -40px 100px, 0 0 2px, 0 0 1em ${this.$store.state.logo.glow}, 0 0 0.5em ${this.$store.state.logo.glow}, 0 0 0.1em ${this.$store.state.logo.shine}, 0 6px 3px ${this.$store.state.logo.shadow}`
      };

      if (!this.$store.state.light) {
        style["text-shadow"] = "0 3px 3px #000";
        style["color"] = "rgb(97, 97, 97)";
      }

      return style;
    }
  }
};
</script>

<style scoped>
@import url("//fonts.cdnfonts.com/css/beon");

.sign.off {
  color: rgb(97, 97, 97);
  text-shadow: 0 3px 3px #000;
}

.sign b {
  font-weight: normal;
  animation: blink linear infinite 200s;
}

@keyframes blink {
  2.76% {
    color: inherit;
    text-shadow: inherit;
  }
  2.79% {
    color: rgb(97, 97, 97);
  }
  2.80% {
    text-shadow: 0 3px 3px #000;
  }
  2.84% {
    color: inherit;
    text-shadow: inherit;
  }
  2.87% {
    color: rgb(97, 97, 97);
    text-shadow: 0 3px 3px #000;
  }
  2.90% {
    color: inherit;
    text-shadow: inherit;
  }
  90.90% {
    color: inherit;
    text-shadow: inherit;
  }
  90.92% {
    color: rgb(97, 97, 97);
    text-shadow: 0 3px 3px #000;
  }
  90.93% {
    color: inherit;
    text-shadow: inherit;
  }
}
</style>
