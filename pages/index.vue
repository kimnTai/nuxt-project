<script setup lang="ts">
definePageMeta({
  title: "我的主页",
});

const { data } = await useFetch("/api/hello");

const route = useRoute();

const text = ref<number>();

const result = await $fetch<{ body: { test: number } }>("/api/submit", {
  method: "post",
  body: { test: 123 },
});

const foo = useFoo();

const bar = useBar();

onMounted(() => {
  text.value = randomEntry([1, 2, 3, 4, 5, 6, 7]);

  console.log(foo.value.globalName, bar.value);
  console.log(route.meta.title, result);
});
</script>

<template>
  <div>
    <h1>首页</h1>
    <div>
      {{ data }}
    </div>
    <div>
      {{ text }}
    </div>
    <div>
      {{ formatNumber(444444) }}
    </div>
    <div>
      <ContentDoc path="/" />
    </div>
  </div>
</template>
