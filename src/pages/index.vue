<script setup lang="ts">
import BasketProfil from '@/components/icons/vueProfil.vue'
import type { Basket } from '../types'
import ListeBaskets from '@/components/ListeBaskets.vue'
</script>
<template>
  <h1>Supabase Configurateur</h1>
  <RouterLink to="/basket/new">
    <button class="bg-slate-500 rounded-2xl">Lien vers page configuration d'une Basket</button>
  </RouterLink>
  <section>
    <div>
      <p>Affiche listes de basket avec SupaBase</p>
      <ListeBaskets :max="3" />
    </div>
  </section>
</template>
