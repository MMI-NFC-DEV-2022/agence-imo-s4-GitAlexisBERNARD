<script setup lang="ts">
import { supabase } from '@/supabase'
import MaisonCard from '@/components/AfficheMaison.vue'
import { useRouter } from 'vue-router'

console.log('supabase :', supabase)

const { data: Quartier, error } = await supabase.from('Quartier').select('*')
console.log('Quartier :', Quartier)
</script>

<template>
  <div class="pl-5">
    <h1>liste des Quartiers :</h1>
    <ul class="flex flex-col gap-2 p-2">
      <li v-for="nQuartier in Quartier" :key="nQuartier.id">
        <Routerlink :to="{ name: 'quartier-id', params: { id: nQuartier.id } }">
          <p class="bg-slate-500 p-3 rounded-3xl">
            <b>Modifier le nom du quartier :</b> {{ nQuartier.nomQuartier }}
          </p>
        </Routerlink>
      </li>
    </ul>
  </div>
</template>
