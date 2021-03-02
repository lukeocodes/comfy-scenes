<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <Backdrop class="flex-grow" />
    <Ledge />
  </div>
</template>

<script>
import Ledge from "@/components/Ledge";
import Backdrop from "@/components/Backdrop";

export default {
  components: {
    Ledge,
    Backdrop
  },

  data() {
    return {};
  }
};
</script>

<style scoped>
.grid-rows-13 {
  grid-template-rows: repeat(13, minmax(0, 1fr));
}

.row-span-12 {
  grid-row: span 12 / span 12;
}

/* .overlays:hover * {
  animation: shake 0.2s;
} */

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
