<template>
  <div
    id="pet"
    ref="pet"
    :class="state"
    class="absolute w-8 h-8 bg-blue-200 border-2 border-black"
    :style="styleObj"
    @click="getNewRight"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      state: "idle",
      right: 0,
      newRight: 0,
      timeToMove: 0,
      pxToMove: 0
    };
  },

  computed: {
    styleObj() {
      return {
        zIndex: "1000",
        right: `${this.right}px`,
        bottom: 0,
        transition: `right ${this.timeToMove}s linear`
      };
    },

    maxRight() {
      return window.innerWidth - this.petSize.width;
    },

    maxBottom() {
      return window.innerHeight - this.petSize.height;
    },

    petSize() {
      return this.$refs.pet.getBoundingClientRect();
    }
  },

  watch: {
    newRight(newRight, oldRight) {
      this.$nextTick(() => {
        this.pxToMove = Math.abs(oldRight - newRight);
        this.timeToMove = this.pxToMove / 50;
        this.state = `walking ${oldRight > newRight ? "left" : "right"}`;
        this.right = newRight;
      });
    }
  },

  mounted() {
    // this.maxRight = this.$refs.app.offsetWidth;

    // this.newRight = this.getNewRight();

    this.getNewRight();
  },

  methods: {
    walkToRight() {},

    getNewRight() {
      console.log("yes?");
      this.newRight = Math.floor(Math.random() * (this.maxRight - 1 + 1) + 1);
    }
  }
};
</script>
