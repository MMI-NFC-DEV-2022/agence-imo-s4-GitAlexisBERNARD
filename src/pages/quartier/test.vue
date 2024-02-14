<script setup lang="ts">
import groupBy from 'lodash/groupBy'
import { supabase } from '../../supabase.ts'
import { useRouter } from 'vue-router'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ref } from 'vue'
const { data, error } = await supabase.from('quartiercommune').select('*')
console.log(data)
if (error) console.log("n'a pas pu charger la table quartiercommune :", error)
let idQuartierASupprimer = 0
const router = useRouter()
async function supprimerQuartier() {
  console.log('supprimerQuartier', idQuartierASupprimer)
  const { data, error } = await supabase
    .from('Quartier')
    .delete()
    .match({ id: idQuartierASupprimer })
  console.log('data :', data, 'error :', error)

  if (error) {
    console.error('Erreur à la suppression de ', idQuartierASupprimer, 'erreur :', error)
  } else {
    router.push({ name: '/quartier/', force: true })
  }
}
const dialogSupprimer = ref<HTMLDialogElement>()
function afficheDialog(idQuartier: number) {
  idQuartierASupprimer = idQuartier
  dialogSupprimer.value?.showModal()
}
</script>

<template>
  <h1>Un QUARTIER</h1>
  <section class="flex flex-col">
    <h3 class="text-2xl p-3">Liste des QuartiersCommune</h3>
    <ul class="flex flex-col gap-2 pl-3">
      <li v-for="quartierObject in (data as any[])" :key="quartierObject.id_quartier">
        {{ quartierObject.nomCommune }} - {{ quartierObject.nomQuartier }}
        <!-- Bouton de suppression pour chaque quartier -->
        <button
          @click="supprimerQuartier(quartierObject.id_quartier)"
          class="ml-4 rounded bg-red-500 p-1 text-white"
        >
          Supprimer
        </button>
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
              <!-- Bouton de suppression ajouté à côté du nom du quartier -->
              <button
                type="button"
                @click="afficheDialog(quartierObject.id_quartier)"
                class="focus-style justify-self-end rounded-md bg-red-500 p-2 shadow-sm"
              >
                Supprimer l'offre
              </button>
            </li>
          </ul>
        </DisclosurePanel>
      </Disclosure>
    </div>
    <dialog ref="dialogSupprimer" @click=";($event.currentTarget as any).close()">
      <button
        type="button"
        class="focus-style justify-self-end rounded-md bg-blue-300 p-2 shadow-sm"
      >
        Annuler</button
      ><button
        type="button"
        @click="supprimerQuartier()"
        class="focus-style rounded-md bg-red-500 p-2 shadow-sm"
      >
        Confirmer suppression
      </button>
    </dialog>
  </section>
  <div class="mt-10">
    <RouterLink to="/quartier/listquartieredit" class="rounded-3xl bg-slate-600 p-3">
      Editer le nom d'un quartier
    </RouterLink>
  </div>
</template>
