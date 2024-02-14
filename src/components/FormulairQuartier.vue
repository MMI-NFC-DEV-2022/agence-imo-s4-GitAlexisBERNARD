<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/supabase'
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'
import { FormKit } from '@formkit/vue'
const router = useRouter()
const props = defineProps<{ id: string }>()
let { data: Quartier, error } = await supabase.from('Quartier').select().eq('id', props.id).single()
let quartier = ref({})
quartier.value = Quartier
async function modifsupabase() {
  if (!quartier.value) return
  const { data, error } = await supabase
    .from('Quartier')
    .upsert(quartier.value)
    .select(quartier.value.id)
  if (error) {
    console.error('Erreur lors de la mise à jour:', error.message)
  } else {
    router.push('/quartier/edit/listequartieredit')
    console.log('Mise à jour réussie:')
  }
}
</script>
<template>
  <div>
    <div>
      <h2 class="text-2xl">Resultat (Prévisualisation)</h2>
      <div>
        <p>{{ quartier.nomQuartier }}</p>
        <p>{{ quartier.id_Commune }}</p>
      </div>
    </div>
    <div class="p-2">
      <FormKit
        type="form"
        v-model="quartier"
        @submit="modifsupabase"
        :config="{
          classes: {
            input: 'p-1 rounded border-red-300 shadow-sm border',
            label: 'text-gray-600'
          }
        }"
        :submit-attrs="{ classes: { input: 'bg-red-300 p-1 rounded' } }"
      >
        <FormKit name="nomQuartier" label="Nom du quartier" type="text" />
      </FormKit>
    </div>
  </div>
</template>
