<script setup lang="ts">
definePageMeta({
  title: "我的主页",
});

const route = useRoute();

console.log(route.meta.title);
</script>

<template>
  <h1>首页</h1>
</template>
