<script setup lang="ts">
import ChaussureDessus from '@/components/icons/vueDessus.vue'
import ChaussureProfil from '@/components/icons/vueProfil.vue'
import FormKitListColors from '@/components/FormKitListColors.vue'
import type { Basket } from '@/types'
import { colors, materiaux } from '@/types'
import { ref } from 'vue'
const props = defineProps<{
  data?: Basket
  id?: string
}>()

const Chaussure = ref<Basket>(props.data ?? {})
</script>
<template>
  <p>Page de configuration</p>
  <div class="p-2">
    <ul class="flex gap-1">
      <li><a href="#profil">Profil</a></li>
      <li><a href="#dessus">Dessus</a></li>
    </ul>
  </div>
  <div class="carousel w-64">
    <ChaussureDessus class="carousel-item w-64" v-bind="Chaussure" id="dessus" />
    <ChaussureProfil class="carousel-item w-64" v-bind="Chaussure" id="profil" />
  </div>
  <FormKit type="form" v-model="Chaussure">
    <FormKit name="materiaux" label="materiaux" value="#ffffff" type="radio" :options="materiaux" :sections-schema="{
    inner: { $el: null},
    decorator: { $el: null },
}" 
input-class="peer sr-only"
options-class="flex gap-4"
>
    <template #label="context">
    <div class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600" :style="{ backgroundImage: `url(${context.option.value})` }" />

    <span class="sr-only">{{ context.option.label }}</span>

    </template>
</FormKit>
    <FormKitListColors name="semelle" label="semelle" />
    <FormKitListColors name="empeigne" label="empeigne" />
    <FormKitListColors name="pointe" label="pointe" />
    <FormKitListColors name="oeillet" label="oeillet" />
    <FormKitListColors name="bande" label="bande" />
    <FormKitListColors name="languette" label="languette" />
    <FormKitListColors name="lacet" label="lacet" />
    <FormKitListColors name="trimestre" label="trimestre" />
  </FormKit>
</template> 
