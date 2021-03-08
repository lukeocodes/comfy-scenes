<template>
  <div class="flex items-center h-16 pl-4 space-x-4 ledge">
    <StreamLogo v-if="!noLogo" />
    <SocialIcons />
  </div>
</template>

<script>
import StreamLogo from "@/components/Interactive/StreamLogo";
import SocialIcons from "@/components/Static/SocialIcons";

export default {
  props: {
    noLogo: {
      type: Boolean,
      default: false
    }
  },

  components: {
    StreamLogo,
    SocialIcons
  }
};
</script>

<style scoped>
.ledge {
  background-image: url("~@/assets/images/brick.png");
}
</style>
