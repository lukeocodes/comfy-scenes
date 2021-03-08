<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <StreamTitle />
    <StreamBackdrop no-lamp class="flex-grow" />
    <BottomLedge no-logo />
  </div>
</template>

<script>
import BottomLedge from "@/components/BottomLedge";
import StreamBackdrop from "@/components/StreamBackdrop";
import StreamTitle from "@/components/StreamTitle";

export default {
  components: {
    BottomLedge,
    StreamBackdrop,
    StreamTitle
  },

  data() {
    return {};
  }
};
</script>
