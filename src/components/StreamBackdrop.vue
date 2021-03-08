<template>
  <div class="relative flex backdrop">
    <StreamCharacter
      v-for="(player, index) in raid"
      :key="index"
      :player="player"
    />
    <StreamLamp />
    <StreamPet />
  </div>
</template>

<script>
import StreamCharacter from "@/components/Interactive/StreamCharacter";
import StreamLamp from "@/components/Interactive/StreamLamp";
import StreamPet from "@/components/Interactive/StreamPet";

export default {
  components: {
    StreamCharacter,
    StreamLamp,
    StreamPet
  },

  computed: {
    raid() {
      return this.$store.state.raid;
    }
  }
};
</script>
