<script setup lang="ts">
import { supabase } from '../../supabase.ts'
const { data, error } = await supabase.from('quartiercommune').select('*')
console.log(data)
if (error) console.log("n'a pas pu charger la table quartiercommune :", error)
</script>

<template>
  <section class="flex flex-col">
    <h3 class="text-2xl">Liste des quartiers</h3>
    <ul>
      <li v-for="quartierObject in (data as any[])">
        {{ quartierObject.nomCommune }} -
        {{ quartierObject.nomQuartier }}
      </li>
    </ul>
  </section>
</template>
