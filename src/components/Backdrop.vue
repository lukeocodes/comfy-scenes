<template>
  <div class="relative flex backdrop">
    <Lamp />
    <Character />
  </div>
</template>

<script>
import Character from "@/components/Character";
import Lamp from "@/components/Lamp";

export default {
  components: {
    Character,
    Lamp
  }
};
</script>

<style scoped>
.backdrop {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("~@/assets/images/brick.png");
}
</style>
