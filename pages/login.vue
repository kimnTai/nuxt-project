<script setup lang="ts">
const name = ref("");
const type = ref(1);

function navigate() {
  return navigateTo({
    path: "/search",
    query: {
      name: name.value,
      type: type.value,
    },
  });
}
</script>

<template>
  <h1>Login</h1>
  <button @click="navigate">搜尋頁</button>
</template>

<style scoped></style>
