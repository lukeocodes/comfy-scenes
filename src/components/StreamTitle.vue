<template>
  <div
    class="absolute flex flex-col justify-center w-screen min-h-screen text-center"
    :class="{ background: background }"
  >
    <h1>
      {{ title }}
    </h1>
    <h2>
      {{ subtitle }}
    </h2>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.query);
  },

  computed: {
    title() {
      return this.$route.query.title;
    },

    subtitle() {
      return this.$route.query.subtitle;
    },

    background() {
      return this.$route.query.background;
    }
  }
};
</script>

<style scoped>
@import url("//fonts.cdnfonts.com/css/beon");

h1 {
  font-family: "Beon";
  font-size: 6rem;
  color: #ffe;

  text-shadow: 0 0 2px rgba(255, 255, 255, 0.5),
    0 0 4px rgba(255, 255, 255, 0.75), 0 0 6px rgba(255, 255, 255, 0.25),
    0 0 8px #228dff, 0 0 10px #228dff, 0 0 12px #228dff, 0 0 14px #228dff,
    0 0 16px #228dff, 0 0 32px #228dff, 0 0 64px #228dff, 0 0 128px #228dff,
    0 0 128px #228dff, 0 0 128px #228dff, 0 0 128px #228dff,
    0px 12px 3px #000000;
  animation: blink linear infinite 200s;
}

h2 {
  font-family: "Beon";
  font-size: 3rem;
  color: #ffd1bf;
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 2em #ff4444,
    0 0 3em #ff4444, 0 0 0.5em #ff4444, 0 0 0.1em #ff8f44, 0 12px 3px #000000;
}

div {
  z-index: -1;
}

.background {
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("~@/assets/images/brick.png");
}

@keyframes blink {
  2.76% {
    color: #ffe;
    text-shadow: 0 0 2px rgba(255, 255, 255, 0.5),
      0 0 4px rgba(255, 255, 255, 0.75), 0 0 6px rgba(255, 255, 255, 0.25),
      0 0 8px #228dff, 0 0 10px #228dff, 0 0 12px #228dff, 0 0 14px #228dff,
      0 0 16px #228dff, 0 0 32px #228dff, 0 0 64px #228dff, 0 0 128px #228dff,
      0 0 128px #228dff, 0 0 128px #228dff, 0 0 128px #228dff,
      0px 12px 3px #000000;
  }
  2.79% {
    color: rgb(97, 97, 97);
  }
  2.80% {
    text-shadow: 0 3px 3px #000;
  }
  2.84% {
    color: #ffe;
    text-shadow: 0 0 2px rgba(255, 255, 255, 0.5),
      0 0 4px rgba(255, 255, 255, 0.75), 0 0 6px rgba(255, 255, 255, 0.25),
      0 0 8px #228dff, 0 0 10px #228dff, 0 0 12px #228dff, 0 0 14px #228dff,
      0 0 16px #228dff, 0 0 32px #228dff, 0 0 64px #228dff, 0 0 128px #228dff,
      0 0 128px #228dff, 0 0 128px #228dff, 0 0 128px #228dff,
      0px 12px 3px #000000;
  }
  2.87% {
    color: rgb(97, 97, 97);
    text-shadow: 0 3px 3px #000;
  }
  2.90% {
    color: #ffe;
    text-shadow: 0 0 2px rgba(255, 255, 255, 0.5),
      0 0 4px rgba(255, 255, 255, 0.75), 0 0 6px rgba(255, 255, 255, 0.25),
      0 0 8px #228dff, 0 0 10px #228dff, 0 0 12px #228dff, 0 0 14px #228dff,
      0 0 16px #228dff, 0 0 32px #228dff, 0 0 64px #228dff, 0 0 128px #228dff,
      0 0 128px #228dff, 0 0 128px #228dff, 0 0 128px #228dff,
      0px 12px 3px #000000;
  }
  90.90% {
    color: #ffe;
    text-shadow: 0 0 2px rgba(255, 255, 255, 0.5),
      0 0 4px rgba(255, 255, 255, 0.75), 0 0 6px rgba(255, 255, 255, 0.25),
      0 0 8px #228dff, 0 0 10px #228dff, 0 0 12px #228dff, 0 0 14px #228dff,
      0 0 16px #228dff, 0 0 32px #228dff, 0 0 64px #228dff, 0 0 128px #228dff,
      0 0 128px #228dff, 0 0 128px #228dff, 0 0 128px #228dff,
      0px 12px 3px #000000;
  }
  90.92% {
    color: rgb(97, 97, 97);
    text-shadow: 0 3px 3px #000;
  }
  90.93% {
    color: #ffe;
    text-shadow: 0 0 2px rgba(255, 255, 255, 0.5),
      0 0 4px rgba(255, 255, 255, 0.75), 0 0 6px rgba(255, 255, 255, 0.25),
      0 0 8px #228dff, 0 0 10px #228dff, 0 0 12px #228dff, 0 0 14px #228dff,
      0 0 16px #228dff, 0 0 32px #228dff, 0 0 64px #228dff, 0 0 128px #228dff,
      0 0 128px #228dff, 0 0 128px #228dff, 0 0 128px #228dff,
      0px 12px 3px #000000;
  }
}
</style>
