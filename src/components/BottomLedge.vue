<template>
  <div class="flex items-center h-16 pl-4 ledge">
    <StreamLogo />
    <SocialIcons />
  </div>
</template>

<script>
import StreamLogo from "@/components/Interactive/StreamLogo";
import SocialIcons from "@/components/Static/SocialIcons";

export default {
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
