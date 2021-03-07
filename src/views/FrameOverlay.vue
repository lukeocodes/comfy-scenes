<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <StreamBackdrop class="flex-grow" />
    <BottomLedge />
  </div>
</template>

<script>
import BottomLedge from "@/components/BottomLedge";
import StreamBackdrop from "@/components/StreamBackdrop";

export default {
  components: {
    BottomLedge,
    StreamBackdrop
  },

  data() {
    return {};
  }
};
</script>
