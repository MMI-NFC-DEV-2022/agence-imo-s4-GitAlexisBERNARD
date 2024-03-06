<script setup lang="ts">
import FormSvg from '@/components/FormSvg.vue'
import { useRoute } from 'vue-router'
defineProps<{ data: string }>();
</script>
<template>
  <FormSvg :data="JSON.parse(data)" />
</template>
