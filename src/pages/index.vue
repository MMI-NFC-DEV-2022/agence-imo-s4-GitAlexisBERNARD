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
  <RouterLink to="/basket/new">
    <button class="bg-slate-500 rounded-2xl">Lien vers page configuration d'une Basket</button>
  </RouterLink>
  <section v-if="user">
    <div>
      <p>Affiche listes de basket de l'utilisateur avec SupaBase</p>
      <ListeBaskets :max="3" />
    </div>
  </section>
  <section v-else>
    <p>Afiche la liste de toutes les basket faites par les utilisatuers</p>
    <ListeAllBaskets />
  </section>
</template>
