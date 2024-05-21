<script setup lang="ts">
const props = defineProps(["foobar"]);

console.log(props.foobar);
</script>

<template>
  <div>
    <h1>我是子视图</h1>
  </div>
</template>
