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
        console.log(`it has an action ${effect.action}`);
        this.action = effect.action;
      }

      if ("sfx" in effect) {
        console.log(`it has an sfx ${effect.sfx.src}`);
        this.sfx = effect.sfx;
      }

      if ("vfx" in effect) {
        console.log(`it has an vfx ${effect.vfx.src}`);
        this.vfx = effect.vfx;
      }
    },

    action(action) {
      if (action) {
        this.$store.dispatch(this.effect.action, this.effect);
        this.actionEnded();
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
      console.log(
        `the current effect is ${this.effect !== null}, the queue length is ${
          this.queue.length
        }`
      );
      if (this.effect === null && this.queue.length > 0) {
        console.log(`we can process the next item`);
      }
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
          console.log(`get the next item to process`);
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
      console.log(`the action ${this.action} just ended`);
      this.action = null;
    },

    sfxEnded() {
      console.log(`the sfx ${this.sfx.src} just ended`);
      this.sfx = null;
    },

    vfxEnded() {
      console.log(`the vfx ${this.vfx.src} just ended`);
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
