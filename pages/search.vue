<script lang="ts" setup>
const router = useRouter();
</script>

<template>
  <div>
    <h1>Page: search</h1>
    <div>
      {{ router.currentRoute.value.query }}
    </div>
  </div>
</template>

<style scoped></style>
