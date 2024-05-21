<script setup lang="ts">
const route = useRoute();

if (route.params.group === "admins" && !route.params.id) {
  console.log("警告！确保用户已经通过身份验证！");
}
</script>

<template>
  <p>product</p>
  <p>{{ route.params.group }} - {{ route.params.id }}</p>
</template>
