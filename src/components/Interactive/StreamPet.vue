<template>
  <div id="pet" ref="pet" :class="[state, petCharacter]" :style="styleObj">
    <SoundEffect v-if="sfx" :effect="sfx" v-on:ended="sfxEnded" />
    <VisualEffect v-if="vfx" :effect="vfx" v-on:ended="vfxEnded" />
  </div>
</template>

<script>
import SoundEffect from "@/components/Effects/SoundEffect";
import VisualEffect from "@/components/Effects/VisualEffect";

export default {
  components: {
    SoundEffect,
    VisualEffect
  },

  data() {
    return {
      action: null,
      sfx: null,
      vfx: null,
      effect: null,
      listener: null
    };
  },

  watch: {
    effect(effect) {
      if (!effect) {
        return;
      }

      if ("action" in effect) {
        this.action = effect.action;
      }

      if ("sfx" in effect) {
        this.sfx = effect.sfx;
      }

      if ("vfx" in effect) {
        this.vfx = effect.vfx;
      }
    },

    action(action) {
      if (action) {
        this.$store.dispatch(action.name, this.effect).then(ttl => {
          // allow an action to return its own timeout
          const timeout = setTimeout(() => {
            this.actionEnded();
            clearTimeout(timeout);
          }, (action.ttl > ttl ? action.ttl : ttl) || 200);
        });
      }
    },

    allEnded(val) {
      if (val) {
        this.effect = null;
      }
    },

    canProcess(val) {
      if (val) {
        this.nextEffect();
      }
    }
  },

  computed: {
    canProcess() {
      return this.effect === null && this.queue.length > 0;
    },

    allEnded() {
      return this.action === null && this.sfx === null && this.vfx === null;
    },

    queue() {
      return this.$store.state.queues.pet;
    },

    styleObj() {
      return {
        zIndex: "4",
        right: `${this.right}px`,
        width: `${this.petSize}rem`,
        height: `${this.petSize}rem`,
        backgroundSize: `auto ${this.petSize}rem`,
        bottom: 0,
        transition: `right ${this.timeToMove}s linear`
      };
    },

    maxRight() {
      return window.innerWidth - this.petClientSize.width;
    },

    petClientSize() {
      return this.$refs.pet.getBoundingClientRect();
    },

    petCharacter() {
      return this.$store.state.pet.petCharacter;
    },

    petSize() {
      return this.$store.state.pet.petSize;
    },

    timeToMove() {
      return this.$store.state.pet.timeToMove;
    },

    state() {
      return this.$store.state.pet.state;
    },

    right() {
      return this.$store.state.pet.right;
    }
  },

  beforeDestroy() {
    this.$refs.pet.removeEventListener("transitionend", this.listener);
  },

  mounted() {
    this.$store.commit("petMaxRight", this.maxRight);

    this.$store.commit("enqueue", {
      queue: "pet",
      action: {
        name: "movePet"
      }
    });

    this.listener = this.$refs.pet.addEventListener("transitionend", () => {
      this.$store.commit("petIdle");

      const timeout = setTimeout(() => {
        this.$store.commit("enqueue", {
          queue: "pet",
          action: {
            name: "movePet"
          }
        });

        clearTimeout(timeout);
      }, 150000);
    });
  },

  methods: {
    nextEffect() {
      const timeout = setTimeout(() => {
        if (this.queue.length > 0) {
          this.effect = this.$store.state.queues.pet.shift();
          clearTimeout(timeout);
        }
      }, 200);
    },

    actionEnded() {
      this.action = null;
    },

    sfxEnded() {
      this.sfx = null;
    },

    vfxEnded() {
      this.vfx = null;
    }
  }
};
</script>

<style scoped>
#pet {
  @apply absolute;
  background-image: url("~@/assets/images/dino/sheets/greg.png");
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}

#pet.dave {
  background-image: url("~@/assets/images/dino/sheets/dave.png");
}

#pet.blue {
  background-image: url("~@/assets/images/dino/sheets/blue.png");
}

#pet.mort {
  background-image: url("~@/assets/images/dino/sheets/mort.png");
}

#pet.idle {
  animation: 0.5s idle infinite steps(1);
}

#pet.walking {
  background-position-x: -8rem;
  animation: 0.5s walking infinite steps(1);
  transform: scaleX(-1);
}

#pet.kick {
  animation: 0.5s kicking infinite steps(1);
}

#pet.walking.right {
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

@keyframes kicking {
  0% {
    background-position-x: -1000%;
  }
  25% {
    background-position-x: -1100%;
  }
  50% {
    background-position-x: -1200%;
  }
  75% {
    background-position-x: -1300%;
  }
}

@keyframes walking {
  0% {
    background-position-x: -400%;
  }
  16.6% {
    background-position-x: -500%;
  }
  33.2% {
    background-position-x: -600%;
  }
  49.8% {
    background-position-x: -700%;
  }
  66.4% {
    background-position-x: -800%;
  }
  83% {
    background-position-x: -900%;
  }
}
</style>
