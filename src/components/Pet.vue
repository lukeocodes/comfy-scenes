<template>
  <div
    id="pet"
    ref="pet"
    :class="status"
    class="absolute bottom-0 right-0 w-8 h-8 border-2 border-black"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      status: "idle",
      right: 0,
      newRight: 0
    };
  },

  methods: {
    walkToRight: () => {},

    getNewRight: () => {}
  }
};
</script>
