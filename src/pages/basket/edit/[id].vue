<script setup lang="ts">
import FormSvg from "@/components/FormSvg.vue";
import {useRoute} from "vue-router"
defineProps<{ id: string }>();
</script>
<template>
  <FormSvg :id="id"/>
</template>