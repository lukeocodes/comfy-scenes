import Vue from "vue";
import Vuex from "vuex";
import Color from "color2";

Vue.use(Vuex);

const petCalc = (oldRight, newRight, speed = 100) => {
  const pxToMove = Math.abs(oldRight - newRight);
  const timeToMove = pxToMove / speed;
  const state = `walking ${oldRight > newRight ? "right" : "left"}`;
  const right = newRight;

  return {
    pxToMove,
    timeToMove,
    state,
    right
  };
};

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
      petCharacter: "greg",
      maxRight: window.innerWidth,
      pxToMove: 0,
      timeToMove: 0,
      state: "idle",
      right: 0,
      petSize: 4
    },
    queues: {
      default: [],
      pet: []
    },
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
      if ("queue" in effect) {
        state.queues[effect.queue].push(effect);
      } else {
        state.queues.default.push(effect);
      }
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
    petGetBiggly(context) {
      context.state.pet.petSize += 4;
    },

    petShrink(context) {
      context.state.pet.petSize = 4;
    },

    petDave(context) {
      context.state.pet.petCharacter = "dave";
    },

    petGreg(context) {
      context.state.pet.petCharacter = "greg";
    },

    petBlue(context) {
      context.state.pet.petCharacter = "blue";
    },

    petMort(context) {
      context.state.pet.petCharacter = "mort";
    },

    movePet(context) {
      const oldRight = context.state.pet.right;
      const newRight = Math.floor(
        Math.random() * (context.state.pet.maxRight - 1 + 1) + 1
      );
      const petUpdate = petCalc(oldRight, newRight);

      Object.assign(context.state.pet, petUpdate);

      return petUpdate.timeToMove * 1000;
    },

    movePetFast(context) {
      const oldRight = context.state.pet.right;
      const newRight = Math.floor(
        Math.random() * (context.state.pet.maxRight - 1 + 1) + 1
      );
      const petUpdate = petCalc(oldRight, newRight, 300);

      Object.assign(context.state.pet, petUpdate);

      return petUpdate.timeToMove * 1000;
    },

    movePetToMe(context) {
      const oldRight = context.state.pet.right;
      const newRight = 350; // right: 350px
      const petUpdate = petCalc(oldRight, newRight);

      Object.assign(context.state.pet, petUpdate);

      return petUpdate.timeToMove * 1000;
    },

    petKick(context) {
      Object.assign(context.state.pet, {
        state: "kick"
      });

      return 500;
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
