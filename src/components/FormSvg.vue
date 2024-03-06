<script setup lang="ts">
import ChaussureDessus from '@/components/icons/vueDessus.vue'
import ChaussureProfil from '@/components/icons/vueProfil.vue'
import type { Basket } from '@/types'
import { colors } from '@/types'
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
    <FormKit name="semelle" label="semelle" value="#FFFFFF" type="radio" :options="colors">
      <template #label="context">
        <div class="h-6 w-6 rounded-full" :style="{ backgroundColor: context.option.value }" />
        <span>{{ context.option.label }}</span>
      </template>
    </FormKit>
    <FormKit name="empeigne" label="empeigne" value="#FFFFFF" type="radio" :options="colors">
              <template #label="context">
        <div class="h-6 w-6 rounded-full" :style="{ backgroundColor: context.option.value }" />
        <span>{{ context.option.label }}</span>
      </template>
    </FormKit>
    <FormKit name="pointe" label="pointe" value="#FFFFFF" type="radio" :options="colors">
        <template #label="context">
        <div class="h-6 w-6 rounded-full" :style="{ backgroundColor: context.option.value }" />
        <span>{{ context.option.label }}</span>
      </template>
    </FormKit>
    <FormKit name="oeillet" label="oeillet" value="#FFFFFF" type="radio" :options="colors">
              <template #label="context">
        <div class="h-6 w-6 rounded-full" :style="{ backgroundColor: context.option.value }" />
        <span>{{ context.option.label }}</span>
      </template>
    </FormKit>
    <FormKit name="bande" label="bande" value="#FFFFFF" type="radio" :options="colors">
              <template #label="context">
        <div class="h-6 w-6 rounded-full" :style="{ backgroundColor: context.option.value }" />
        <span>{{ context.option.label }}</span>
      </template>
    </FormKit>
    <FormKit name="languette" label="languette" value="#FFFFFF" type="radio" :options="colors">
              <template #label="context">
        <div class="h-6 w-6 rounded-full" :style="{ backgroundColor: context.option.value }" />
        <span>{{ context.option.label }}</span>
      </template>
    </FormKit>
    <FormKit name="lacet" label="lacet" value="#FFFFFF" type="radio" :options="colors">
              <template #label="context">
        <div class="h-6 w-6 rounded-full" :style="{ backgroundColor: context.option.value }" />
        <span>{{ context.option.label }}</span>
      </template>
    </FormKit>
    <FormKit name="trimestre" label="trimestre" value="#FFFFFF" type="radio" :options="colors">
              <template #label="context">
        <div class="h-6 w-6 rounded-full" :style="{ backgroundColor: context.option.value }" />
        <span>{{ context.option.label }}</span>
      </template>
    </FormKit>
  </FormKit>
</template>
