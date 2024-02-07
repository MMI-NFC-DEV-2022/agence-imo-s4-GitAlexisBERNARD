<script setup lang="ts">
import { ref } from 'vue'
import MaisonCard from '@/components/AfficheMaison.vue'
import { supabase, user } from '@/supabase'

const props = defineProps<{ id: string }>()
let { data: Maisons, error } = await supabase.from('Maisons').select().eq('id', props.id).single()
console.log('Maisons :', Maisons)
let maison = ref({})
maison.value = Maisons
</script>

<template>
  <div>
    <div>
      <h2 class="text-2xl">Resultat (Prévisualisation)</h2>
      <MaisonCard v-bind="maison" />
    </div>
  </div>
  <div class="p-2">
    <FormKit
      type="form"
      v-model="maison"
      :config="{
        classes: {
          input: 'p-1 rounded border-red-300 shadow-sm border',
          label: 'text-gray-600'
        }
      }"
      :submit-attrs="{ classes: { input: 'bg-red-300 p-1 rounded' } }"
    >
      <FormKit name="nomMaison" label="Nom de la maison" type="text" />
      <FormKit name="prix" label="Prix" type="number" />
      <FormKit name="adresse" label="Adresse" type="text" />
      <FormKit name="nbrChambres" label="Nombre de chambres" type="number" />
      <FormKit name="nbrSDB" label="Nombre de salles de bain" type="number" />
      <FormKit name="surface" label="Surface" type="text" />
      <FormKit name="favori" label="Favori" type="checkbox" wrapper-class="flex" />
    </FormKit>
  </div>
</template>
