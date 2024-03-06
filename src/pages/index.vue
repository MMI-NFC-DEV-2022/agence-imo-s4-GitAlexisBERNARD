<script setup lang="ts">
import BasketProfil from "@/components/icons/vueProfil.vue";
import type { Basket } from "../types";
const exemple0: Basket = {
  semelle: "#FF0000",
  empeigne: "#FFFFFF",
  pointe: "#FFFFFF",
  oeillet: "#FFFFFF",
  bande: "#00FF00",
  languette: "#FFFFFF",
  lacet: "#00FF00",
  trimestre: "#FFFFFF",
};
</script>
<template>
  <h1>Supabase Configurateur</h1>
  <RouterLink to="/basket/new">
    <button class="bg-slate-500 rounded-2xl">Lien vers page configurateur SVG</button>
  </RouterLink>
    <section>
    <h1 class="text-2xl">Exemples de Baskets</h1>
    <div class="flex flex-wrap gap-2">
      <div class="w-64">
        <RouterLink
          :to="{
            name: 'basket-exemple-data',
            params: { data: JSON.stringify(exemple0) },
          }"
        >
          <BasketProfil class="w-64" v-bind="exemple0" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>
