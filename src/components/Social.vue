<template>
  <div class="relative flex ml-4 space-x-4">
    <GitHubLogo />
    <TwitterLogo />
  </div>
</template>

<script>
import GitHubLogo from "@/components/Socials/GitHubLogo";
import TwitterLogo from "@/components/Socials/TwitterLogo";

export default {
  components: {
    GitHubLogo,
    TwitterLogo
  }
};
</script>
