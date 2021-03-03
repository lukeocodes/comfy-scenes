<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
const ComfyJS = require("comfy.js");
const config = require("./config");

export default {
  data() {
    return {};
  },

  watch: {
    queue: {
      deep: true,
      handler() {
        const { queue, effect } = this.$store.state;

        if (effect === null) {
          this.$store.commit("process", queue.shift());
        }
      }
    },

    effect(effect) {
      if (effect && "mutation" in effect) {
        this.$store.commit(effect.mutation, effect);
      }
    }
  },

  computed: {
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
    }
  }
};
</script>

<style>
body {
  background: #1c1d1c;
}
</style>
