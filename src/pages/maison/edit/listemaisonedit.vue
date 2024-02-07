<script setup lang="ts">
import { supabase } from '@/supabase'
import MaisonCard from '@/components/AfficheMaison.vue'
import { useRouter } from 'vue-router'

console.log('supabase :', supabase)

const { data: Maisons, error } = await supabase.from('Maisons').select('*')
console.log('Maisons :', Maisons)
</script>

<template>
  <div>
    <h1>Supabase</h1>
    <ul>
      <li v-for="maison in Maisons" :key="maison.id">
        <router-link :to="{ name: 'maison-edit-id', params: { id: maison.id } }">
          <MaisonCard v-bind="maison" />
        </router-link>
      </li>
    </ul>
  </div>
</template>
