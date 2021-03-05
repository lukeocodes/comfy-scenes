<template>
  <div class="relative flex backdrop">
    <StreamLamp />
    <StreamPet />
  </div>
</template>

<script>
import StreamPet from "@/components/Interactive/StreamPet";
import StreamLamp from "@/components/Interactive/StreamLamp";

export default {
  components: {
    StreamPet,
    StreamLamp
  }
};
</script>
