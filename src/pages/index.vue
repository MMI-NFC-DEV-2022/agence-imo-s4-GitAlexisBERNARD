<script setup lang="ts">
import BasketProfil from '@/components/icons/vueProfil.vue'
import type { Basket } from '../types'
const exemples: Basket[] = [
  {
    semelle: '#FF0000',
    empeigne: '#FFFFFF',
    pointe: '#FFFFFF',
    oeillet: '#FFFFFF',
    bande: '#00FF00',
    languette: '#FFFFFF',
    lacet: '#00FF00',
    trimestre: '#FFFFFF'
  },
  {
    semelle: '#FF0000',
    empeigne: '#FFFFFF',
    pointe: '#FFFFFF',
    oeillet: '#FFFFFF',
    bande: '#00FF00',
    languette: '#FFFFFF',
    lacet: '#00FF00',
    trimestre: '#FFFFFF'
  },
  {
    semelle: '#FF0000',
    empeigne: '#FFFFFF',
    pointe: '#FFFFFF',
    oeillet: '#FFFFFF',
    bande: '#00FF00',
    languette: '#FFFFFF',
    lacet: '#00FF00',
    trimestre: '#FFFFFF'
  },
  {
    semelle: '#00FF00',
    empeigne: '#0000FF',
    pointe: '#FFFFFF',
    oeillet: '#FFFFFF',
    bande: '#FF0000',
    languette: '#FFFFFF',
    lacet: '#FF00FF',
    trimestre: '#FFFFFF'
  }
]
</script>
<template>
  <h1>Supabase Configurateur</h1>
  <RouterLink to="/basket/new">
    <button class="bg-slate-500 rounded-2xl">Lien vers page configurateur SVG</button>
  </RouterLink>
  <section>
    <h1 class="text-2xl">Exemples de Baskets</h1>
    <div class="flex flex-wrap gap-2">
      <div v-for="(exemple, index) in exemples" :key="index" class="w-64">
        <RouterLink
          :to="{
            name: 'basket-exemple-data',
            params: { data: JSON.stringify(exemple) }
          }"
        >
          <BasketProfil class="w-64" v-bind="exemple" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>
