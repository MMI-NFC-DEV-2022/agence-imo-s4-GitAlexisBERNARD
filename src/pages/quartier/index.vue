<script setup lang="ts">
import groupBy from 'lodash/groupBy'
import { supabase } from '../../supabase.ts'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
const { data, error } = await supabase.from('quartiercommune').select('*')
console.log(data)
if (error) console.log("n'a pas pu charger la table quartiercommune :", error)
</script>

<template>
  <h1>Un QUARTIER</h1>
  <section class="flex flex-col">
    <h3 class="text-2xl p-3">Liste des QuartiersCommune</h3>
    <ul class="flex flex-col gap-2 pl-3">
      <li v-for="quartierObject in (data as any[])">
        {{ quartierObject.nomCommune }} -
        {{ quartierObject.nomQuartier }}
      </li>
    </ul>
  </section>
  <section class="flex flex-col">
    <h3 class="text-2xl">Liste des QuartiersCommune avec ajout Headless UI et GroupBy</h3>
    <div
      v-for="(listeQuartier, nomCommune) in groupBy(data, 'nomCommune')"
      :key="nomCommune"
      class="pl-3 pt-3"
    >
      <Disclosure>
        <DisclosureButton>{{ nomCommune }}</DisclosureButton>
        <DisclosurePanel>
          <ul>
            <li v-for="quartierObject in listeQuartier" :key="quartierObject.id_Quartier">
              {{ quartierObject.nomQuartier }}
            </li>
          </ul>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </section>
  <div class="mt-10">
    <RouterLink to="/quartier/listquartieredit" class="rounded-3xl bg-slate-600 p-3">
      Editer le nom d'un quartier</RouterLink
    >
  </div>
</template>
