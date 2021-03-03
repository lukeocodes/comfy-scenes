<template>
  <div>
    <!-- <SoundEffect v-if="sfx" :effect="sfx" v-on:ended="sfxEnded" />
    <VisualEffect v-if="vfx" :effect="vfx" v-on:ended="vfxEnded" /> -->
  </div>
</template>

<script>
// import SoundEffect from "../components/Effects/SoundEffect";
// import VisualEffect from "../components/Effects/VisualEffect";

export default {
  // components: {
  //   SoundEffect,
  //   VisualEffect
  // },
  // data() {
  //   return {
  //     sfx: null,
  //     vfx: null
  //   };
  // },
  // watch: {
  //   effect(effect) {
  //     if (effect && "sfx" in effect) {
  //       this.sfx = effect["sfx"];
  //     }
  //     if (effect && "vfx" in effect) {
  //       this.vfx = effect["vfx"];
  //     }
  //   },
  //   allEnded() {
  //     this.$store.commit("processed");
  //   }
  // },
  // computed: {
  //   allEnded() {
  //     return this.sfx === null && this.vfx === null;
  //   },
  //   effect() {
  //     return this.$store.state.effect;
  //   }
  // },
  // methods: {
  //   sfxEnded() {
  //     console.log(`sfx ${this.sfx} ended`);
  //     this.sfx = null;
  //   },
  //   vfxEnded() {
  //     console.log(`vfx ${this.vfx} ended`);
  //     this.vfx = null;
  //   }
  // }
};
</script>
