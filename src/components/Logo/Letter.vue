<template>
  <span class="mx-1 flicker">{{ char }}</span>
</template>

<script>
export default {
  props: {
    char: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
@import url("//fonts.cdnfonts.com/css/beon");

.flicker {
  /* color: #fff; */
  font-family: "Beon" !important;
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.5),
    0 0 4px rgba(255, 255, 255, 0.75), 0 0 6px rgba(255, 255, 255, 0.25),
    0 0 8px #228dff, 0 0 10px #228dff, 0 0 12px #228dff, 0 0 14px #228dff,
    0 0 16px #228dff, 0px 6px 3px #000000;
  animation: neon-blue-flicker 100s infinite;
  /*text-shadow: 2px 0 0 #2a1e4c, -2px 0 0 #2a1e4c, 0 2px 0 #2a1e4c, 0 -2px 0 #2a1e4c, 1px 1px #2a1e4c, -1px -1px 0 #2a1e4c, 1px -1px 0 #2a1e4c, -1px 1px 0 #2a1e4c;*/
}

@keyframes neon-blue-flicker {
  0% {
    color: #fff;
    text-shadow: 0 0 2px rgba(255, 255, 255, 0.5),
      0 0 4px rgba(255, 255, 255, 0.75), 0 0 6px rgba(255, 255, 255, 0.25),
      0 0 8px #228dff, 0 0 10px #228dff, 0 0 12px #228dff, 0 0 14px #228dff,
      0 0 16px #228dff, 0px 6px 3px #000000;
  }
  9.98% {
    color: #fff;
    text-shadow: 0 0 2px rgba(255, 255, 255, 0.5),
      0 0 4px rgba(255, 255, 255, 0.75), 0 0 6px rgba(255, 255, 255, 0.25),
      0 0 8px #228dff, 0 0 10px #228dff, 0 0 12px #228dff, 0 0 14px #228dff,
      0 0 16px #228dff, 0px 6px 3px #000000;
  }
  10% {
    color: #ddd;
    text-shadow: 0px 6px 3px #000000;
  }
  10.02% {
    color: #fff;
    text-shadow: 0 0 2px rgba(255, 255, 255, 0.5),
      0 0 4px rgba(255, 255, 255, 0.75), 0 0 6px rgba(255, 255, 255, 0.25),
      0 0 8px #228dff, 0 0 10px #228dff, 0 0 12px #228dff, 0 0 14px #228dff,
      0 0 16px #228dff, 0px 6px 3px #000000;
  }
  99.92% {
    color: #fff;
    text-shadow: 0 0 2px rgba(255, 255, 255, 0.5),
      0 0 4px rgba(255, 255, 255, 0.75), 0 0 6px rgba(255, 255, 255, 0.25),
      0 0 8px #228dff, 0 0 10px #228dff, 0 0 12px #228dff, 0 0 14px #228dff,
      0 0 16px #228dff, 0px 6px 3px #000000;
  }
  99.94% {
    color: #ddd;
    text-shadow: 0px 6px 3px #000000;
  }
  99.96% {
    color: #fff;
    text-shadow: 0 0 2px rgba(255, 255, 255, 0.5),
      0 0 4px rgba(255, 255, 255, 0.75), 0 0 6px rgba(255, 255, 255, 0.25),
      0 0 8px #228dff, 0 0 10px #228dff, 0 0 12px #228dff, 0 0 14px #228dff,
      0 0 16px #228dff, 0px 6px 3px #000000;
  }
  99.98% {
    color: #ddd;
    text-shadow: 0px 6px 3px #000000;
  }
  100% {
    color: #fff;
    text-shadow: 0 0 2px rgba(255, 255, 255, 0.5),
      0 0 4px rgba(255, 255, 255, 0.75), 0 0 6px rgba(255, 255, 255, 0.25),
      0 0 8px #228dff, 0 0 10px #228dff, 0 0 12px #228dff, 0 0 14px #228dff,
      0 0 16px #228dff, 0px 6px 3px #000000;
  }
}
</style>
