import Vue from "vue";
import Vuex from "vuex";
import Color from "color2";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    light: true,
    logo: {
      base: "#ffd1bf",
      glow: "#ff4444",
      shine: "#ff8f44",
      shadow: "#000000"
    },
    queue: [],
    effect: null
  },
  mutations: {
    enqueue(state, effect) {
      state.queue.push(effect);
    },
    process(state, effect) {
      state.effect = effect;
    },

    // !bulb #ffd1bf
    // !bulb rgb(125,125,222)
    // !bulb blue

    resetBulb(state) {
      state.logo = {
        base: "#ffd1bf",
        glow: "#ff4444",
        shine: "#ff8f44",
        shadow: "#000000"
      };
    },

    changeBulb(state, options) {
      const regex = new RegExp(
        "^(#([a-f0-9]{3}){1,2})|(rgb(((25[0-5]|2[0-4]d|1d{1,2}|dd?)s*,s*?){2}(25[0-5]|2[0-4]d|1d{1,2}|dd?)s*))$"
      );

      const { message: colorCode } = options;

      if (regex.test(colorCode)) {
        const color = Color(colorCode);

        if (color.isDark()) {
          state.logo = {
            glow: color.hexString(),
            shine: color.saturate(0.2).hexString(),
            base: color.lighten(0.8).hexString(),
            shadow: "#000000"
          };
        } else {
          state.logo = {
            base: color.hexString(),
            glow: color.lighten(0.8).hexString(),
            shine: color.saturate(0.2).hexString(),
            shadow: "#000000"
          };
        }
      }

      state.effect = null;
    },

    lightsOut(state) {
      state.light = false;
      state.effect = null;
    },

    lightsOn(state) {
      state.light = true;
      state.effect = null;
    }
  },
  actions: {},
  modules: {}
});
