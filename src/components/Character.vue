<template>
  <div id="character" ref="character" :class="state"></div>
</template>

<script>
export default {
  data() {
    return {
      state: "sitting"
    };
  },

  methods: {
    walkToPosition: () => {}
  }
};
</script>
