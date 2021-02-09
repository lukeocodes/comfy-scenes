<template>
  <div>
    <Effect v-if="effect" :sfx="effect" v-on:ended="handleEnded" />
  </div>
</template>

<script>
import Effect from "../components/Effect";

const sfxConfig = require("../sfx/config");
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
    console.log(sfxConfig);
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

    handleCommand(user, command /*, message, flags, extra*/) {
      if (command in sfxConfig) {
        const sfx = sfxConfig[command];
        this.queue.push(sfx);
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
