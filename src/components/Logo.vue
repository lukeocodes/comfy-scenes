<template>
  <div class="relative text-4xl sign">
    @luke<b>o</b>codes
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
@import url("//fonts.cdnfonts.com/css/beon");

.sign {
  font-family: "Beon" !important;
  color: rgb(255, 209, 191);
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444,
    0 0 0.1em #ff8f44, 0 6px 3px #000;
}

.sign.off {
  color: rgb(97, 97, 97);
  text-shadow: 0 -40px 100px, 0 0 2px, 0 3px 3px #000;
}

.sign b {
  font-weight: normal;
  animation: blink linear infinite 2s;
}

@keyframes blink {
  78% {
    color: inherit;
    text-shadow: inherit;
  }
  79% {
    color: rgb(97, 97, 97);
  }
  80% {
    text-shadow: 0 2px 2px #000;
  }
  81% {
    color: inherit;
    text-shadow: inherit;
  }
  82% {
    color: rgb(97, 97, 97);
    text-shadow: 0 -40px 100px, 0 0 2px, 0 3px 3px #000;
  }
  83% {
    color: inherit;
    text-shadow: inherit;
  }
  92% {
    color: rgb(97, 97, 97);
    text-shadow: 0 -40px 100px, 0 0 2px, 0 3px 3px #000;
  }
  92.5% {
    color: inherit;
    text-shadow: inherit;
  }
}
</style>
