<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/supabase'
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps<{ id: string }>()
let { data: Quartier, error } = await supabase.from('Quartier').select().eq('id', props.id).single()
console.log('Quartier :', Quartier)
let quartier = ref({})

quartier.value = Quartier
const { data: listeCommune } = await supabase.from('Commune').select('*')
console.log('listeCommune :', listeCommune);

const optionsCommune = listeCommune?.map((commune) => ({
  value: commune.id,
  label: commune.nomCommune
}))

async function modifsupabasequartier() {
  if (!quartier.value) return

  const { data, error } = await supabase.from('Quartier').upsert(quartier.value)
  if (error) {
    console.error('Erreur lors de la mise à jour:', error.message)
  } else {
    router.push('/quartier/')
    console.log('Mise à jour réussie:', quartier)
  }
}
</script>

<template>
  <div>
    <div>
      <h2 class="text-2xl">Resultat (Prévisualisation)</h2>
      <div>
        <p>{{ quartier.nomQuartier }}</p>
      </div>
    </div>
    <div class="p-2">
      <FormKit
        type="form"
        v-model="quartier"
        @submit="modifsupabasequartier"
        :config="{
          classes: {
            input: 'p-1 rounded border-red-300 shadow-sm border',
            label: 'text-gray-600'
          }
        }"
        :submit-attrs="{ classes: { input: 'bg-red-300 p-1 rounded' } }"
      >
        <FormKit name="nomQuartier" label="Nom du quartier" type="text" />
        <FormKit name="id_Commune" label="Commune" type="select" :options="optionsCommune" />
      </FormKit>
    </div>
  </div>
</template>
