<script setup lang="ts">
import BasketProfil from '@/components/icons/vueProfil.vue'
import type { Basket } from '../types'
import ListeBaskets from '@/components/ListeBaskets.vue'
import ListeAllBaskets from '@/components/ListeAllBaskets.vue'
import { supabase } from '@/supabase'
const { data: { user } } = await supabase.auth.getUser()
</script>
<template>
  <h1>Supabase Configurateur</h1>
  <RouterLink to="/configurateur">
  <button class="bg-slate-500 rounded-2xl">Lien vers page configurateur SVG</button>
  </RouterLink>
</template>
