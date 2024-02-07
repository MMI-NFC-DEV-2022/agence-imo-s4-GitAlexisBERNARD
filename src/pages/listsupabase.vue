<script setup lang="ts">
import { supabase } from '../supabase'
import MaisonCard from '@/components/AfficheMaison.vue'
console.log('supabase :', supabase)

const { data: Maisons, error } = await supabase.from('Maisons').select('*')

console.log('Maisons :', Maisons)
</script>
<template>
  <div>
    <h1>Supabase</h1>
    <ul>
      <MaisonCard v-for="maison in Maisons" :key="maison.id" v-bind="maison" />
    </ul>
  </div>
</template>
