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

    processed(state) {
      state.effect = null;
    },

    bulbColor(state, colors) {
      state.logo = colors;
    },

    light(state, status) {
      state.light = status;
    }
  },

  actions: {
    resetBulb({ commit }) {
      commit("bulbColor", {
        base: "#ffd1bf",
        glow: "#ff4444",
        shine: "#ff8f44",
        shadow: "#000000"
      });
    },

    changeBulb({ commit }, options) {
      const regex = new RegExp(
        "^(#([a-f0-9]{3}){1,2})|(rgb(((25[0-5]|2[0-4]d|1d{1,2}|dd?)s*,s*?){2}(25[0-5]|2[0-4]d|1d{1,2}|dd?)s*))$"
      );

      const { message: colorCode } = options;

      if (regex.test(colorCode)) {
        const color = Color(colorCode);

        if (color.isDark()) {
          commit("bulbColor", {
            glow: color.hexString(),
            shine: color.saturate(0.2).hexString(),
            base: color.lighten(0.8).hexString(),
            shadow: "#000000"
          });
        } else {
          commit("bulbColor", {
            base: color.hexString(),
            glow: color.lighten(0.8).hexString(),
            shine: color.saturate(0.2).hexString(),
            shadow: "#000000"
          });
        }
      }
    },

    lightsOut({ commit }) {
      commit("light", false);
    },

    lightsOn({ commit }) {
      commit("light", true);
    }
  },

  modules: {}
});
