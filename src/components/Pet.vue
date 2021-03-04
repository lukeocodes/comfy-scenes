<template>
  <div id="pet" ref="pet" :class="state" :style="styleObj" />
</template>

<script>
export default {
  computed: {
    styleObj() {
      return {
        zIndex: "4",
        right: `${this.right}px`,
        bottom: 0,
        transition: `right ${this.timeToMove}s linear`
      };
    },

    maxRight() {
      return window.innerWidth - this.petSize.width;
    },

    petSize() {
      return this.$refs.pet.getBoundingClientRect();
    },

    newRight() {
      return this.$store.state.pet.newRight;
    },

    pxToMove() {
      return this.$store.state.pet.pxToMove;
    },

    timeToMove() {
      return this.$store.state.pet.timeToMove;
    },

    state() {
      return this.$store.state.pet.state;
    },

    right() {
      return this.$store.state.pet.right;
    },

    currentPos() {
      if (!this.$refs.pet) {
        return 0;
      }

      return this.$refs.pet.getBoundingClientRect().right;
    }
  },

  watch: {
    currentPos(val) {
      console.log(val);
    }
  },

  beforeDestroy() {
    this.$refs.pet.removeEventListener("transitionend");
  },

  mounted() {
    this.$store.commit("petMaxRight", this.maxRight);
    this.$store.dispatch("movePet");

    this.$refs.pet.addEventListener("transitionend", () => {
      this.$store.commit("petIdle");

      const timeout = setTimeout(() => {
        this.$store.commit("enqueue", {
          action: {
            name: "movePet"
          }
        });

        clearTimeout(timeout);
      }, 50000);
    });
  }
};
</script>

<style scoped>
#pet {
  @apply absolute;
  @apply w-16;
  @apply h-16;
  @apply border-black;
  background-image: url("~@/assets/images/pet.png");
  background-size: auto 4rem;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  animation: 1s idle infinite steps(1);
}

#pet.walking {
  background-position-x: -8rem;
  animation: 0.5s walking infinite steps(1);
}

#pet.walking.right {
  transform: scaleX(-1);
}

@keyframes idle {
  0% {
    background-position-x: 0;
  }
  50% {
    background-position-x: -12rem;
  }
}

@keyframes walking {
  0% {
    background-position-x: -8rem;
  }
  50% {
    background-position-x: -20rem;
  }
}
</style>
