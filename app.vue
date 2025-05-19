<template>
  <div class="main-container">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>
<script setup>
useHead({
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
});
</script>
