<script setup lang="ts">
import groupBy from 'lodash/groupBy'
import { supabase } from '../../supabase.ts'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
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
  <section class="flex flex-col">
    <h3 class="text-2xl">Liste des quartiers</h3>
    <div v-for="(listeQuartier, nomCommune) in groupBy(data, 'nomCommune')" :key="nomCommune">
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
</template>
