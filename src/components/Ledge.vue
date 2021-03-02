<template>
  <div class="flex items-center h-16 pl-4 ledge">
    <Logo />
    <Social />
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import Social from "@/components/Social";

export default {
  components: {
    Logo,
    Social
  }
};
</script>

<style scoped>
.ledge {
  background-image: url("~@/assets/images/brick.png");
}
</style>
