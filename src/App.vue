<template>
  <div id="app">
    <router-view />
    <SoundEffect v-if="sfx" :effect="sfx" v-on:ended="sfxEnded" />
    <VisualEffect v-if="vfx" :effect="vfx" v-on:ended="vfxEnded" />
  </div>
</template>

<script>
import SoundEffect from "@/components/Effects/SoundEffect";
import VisualEffect from "@/components/Effects/VisualEffect";

const ComfyJS = require("comfy.js");
const config = require("./config");

export default {
  components: {
    SoundEffect,
    VisualEffect
  },

  data() {
    return {
      sfx: null,
      vfx: null,
      action: null,
      timeout: null
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
        this.$store.commit("processed");
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
      return this.$store.state.queue;
    },

    effect() {
      return this.$store.state.effect;
    }
  },

  mounted() {
    ComfyJS.onCommand = this.handleCommand;
    ComfyJS.Init(process.env.VUE_APP_CHANNEL_NAME);
  },

  methods: {
    nextEffect() {
      this.timeout = setTimeout(() => {
        if (this.queue.length > 0) {
          this.$store.commit("process", this.$store.state.queue.shift());
          clearTimeout(this.timeout);
        }
      }, 200);
    },

    handleCommand(user, command, message, flags, extra) {
      if (command in config) {
        const effect = config[command];
        this.$store.commit("enqueue", {
          ...effect,
          user,
          command,
          message,
          flags,
          extra
        });
      }
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

<style>
body {
  background: #1c1d1c;
}
</style>
