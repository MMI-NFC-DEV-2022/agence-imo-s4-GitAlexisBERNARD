<script setup lang="ts">
import { supabase } from '@/supabase'
import { useRouter } from 'vue-router'
import BasketProfil from '@/components/icons/vueProfil.vue'
const props = defineProps<{
  max?: number;
}>();
const { data: Basket, error } = await supabase.from('Basket').select('*').limit(props.max ?? 100);

</script>

<template>
  <div class="pl-5">
    <h1>liste des Basket :</h1>
    <ul class="flex flex-col gap-2 p-2">
      <li v-for="nbasket in Basket" :key="index">
        <RouterLink
          :to="{
            name: 'basket-exemple-data',
            params: { data: JSON.stringify(nbasket) }
          }"
        >
          <BasketProfil class="w-64" v-bind="nbasket" />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
