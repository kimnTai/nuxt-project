<script setup lang="ts">
definePageMeta({
  title: "我的主页",
});

const route = useRoute();

const text = ref<number>();

onMounted(() => {
  text.value = randomEntry([1, 2, 3, 4, 5, 6, 7]);

  console.log(route.meta.title);
});
</script>

<template>
  <div>
    <h1>首页</h1>
    {{ text }}
    {{ formatNumber(444444) }}
  </div>
</template>
