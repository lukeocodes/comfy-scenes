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
    pet: {
      maxRight: window.innerWidth,
      pxToMove: 0,
      timeToMove: 0,
      state: "idle",
      right: 0
    },
    queue: [],
    effect: null
  },

  mutations: {
    petIdle(state) {
      state.pet.state = "idle";
    },

    petMaxRight(state, maxRight) {
      state.pet.maxRight = maxRight;
    },

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
    movePet(context) {
      const oldRight = context.state.pet.right;
      const newRight = Math.floor(
        Math.random() * (context.state.pet.maxRight - 1 + 1) + 1
      );

      const pxToMove = Math.abs(oldRight - newRight);
      const timeToMove = pxToMove / 50;
      const state = `walking ${oldRight > newRight ? "right" : "left"}`;
      const right = newRight;

      Object.assign(context.state.pet, { pxToMove, timeToMove, state, right });

      return timeToMove * 1000;
    },

    resetBulb({ commit }) {
      // console.log(context.effect);
      commit("bulbColor", {
        base: "#ffd1bf",
        glow: "#ff4444",
        shine: "#ff8f44",
        shadow: "#000000"
      });
    },

    changeBulb({ commit }, options) {
      // console.log(context.effect);
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
      // console.log(context.effect);
      commit("light", false);
    },

    lightsOn({ commit }) {
      // console.log(context.effect);
      commit("light", true);
    }
  },

  modules: {}
});
