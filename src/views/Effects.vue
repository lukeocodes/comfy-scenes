<template>
  <div>
    <Effect v-if="effect" :effect="effect" v-on:ended="handleEnded" />
  </div>
</template>

<script>
import Effect from "../components/Effect";

const config = require("../config");
const ComfyJS = require("comfy.js");
export default {
  components: {
    Effect
  },

  data() {
    return {
      effect: null,
      timeout: null,
      queue: []
    };
  },

  mounted() {
    ComfyJS.onCommand = this.handleCommand;
    ComfyJS.Init(process.env.VUE_APP_CHANNEL_NAME);
  },

  watch: {
    queue: {
      deep: true,
      handler() {
        if (this.effect === null) {
          this.effect = this.queue.shift();
        }
      }
    }
  },

  methods: {
    handleEnded() {
      this.effect = null;

      this.timeout = setTimeout(() => {
        if (this.queue.length > 0) {
          this.effect = this.queue.shift();
          clearTimeout(this.timeout);
        }
      }, 200);
    },

    handleCommand(user, command) {
      if (command in config) {
        const effect = config[command];
        this.queue.push(effect);
      }

      if (command === "mute") {
        this.effect = null;
        this.timeout = null;
        this.queue = [];
      }
    }
  }
};
</script>
