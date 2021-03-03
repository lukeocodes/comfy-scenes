<template>
  <div class="relative flex backdrop">
    <Lamp />
    <Pet />
  </div>
</template>

<script>
import Pet from "@/components/Pet";
import Lamp from "@/components/Lamp";

export default {
  components: {
    Pet,
    Lamp
  }
};
</script>
