<script setup lang="ts">
import ChaussureDessus from '@/components/icons/vueDessus.vue'
import ChaussureProfil from '@/components/icons/vueProfil.vue'
import type { ChaussureSvg } from '@/types-svg'
import { ref } from 'vue'
const Chaussure = ref<ChaussureSvg>({})
</script>
<template>
  <p>Page de configuration</p>
  <div class="p-2">
    <ul class="flex gap-1">
      <li><a href="#profil">Profil</a></li>
      <li><a href="#dessus">Dessus</a></li>
    </ul>
  </div>
  <div class="w-64">
    <ChaussureDessus class="w-64" v-bind="Chaussure" id="dessus" />
    <ChaussureProfil class="w-64" v-bind="Chaussure" id="profil" />
  </div>
  <FormKit type="form" v-model="Chaussure">
    <FormKit name="semelle" label="semelle" value="#FFFFFF" type="color" />
    <FormKit name="empeigne" label="empeigne" value="#FFFFFF" type="color" />
    <FormKit name="pointe" label="pointe" value="#FFFFFF" type="color" />
    <FormKit name="oeillet" label="oeillet" value="#FFFFFF" type="color" />
    <FormKit name="bande" label="bande" value="#FFFFFF" type="color" />
    <FormKit name="languette" label="languette" value="#FFFFFF" type="color" />
    <FormKit name="lacet" label="lacet" value="#FFFFFF" type="color" />
    <FormKit name="trimestre" label="trimestre" value="#FFFFFF" type="color" />
  </FormKit>
</template>
