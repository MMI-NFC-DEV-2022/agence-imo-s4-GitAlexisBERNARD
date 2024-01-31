<script setup lang="ts">
import LoveIcon from '@/components/icons/LoveIcon.vue'
import BedIcon from '@/components/icons/BedIcon.vue'
import BathIcon from '@/components/icons/BathIcon.vue'
import Surfaceicon from '@/components/icons/SurfaceIcon.vue'
import { defineProps } from 'vue'
import { SchemaOffreMaison } from '@/types'
defineProps<SchemaOffreMaison>()

</script>

<template>
    <div class="flex flex-col w-1/2 rounded-lg border-indigo-100 border-solid overflow-hidden border-2">
        <div class="h-1/2 w-full "><img class="object-cover w-full h-full" :src="image" alt=""></div>
        <div class="px-5 flex flex-row justify-between">
<div class="flex flex-col "> 
    <div class="text-base font-bold text-indigo-500 py-4">{{prix}} <span class="text-base font-normal text-gray-500">/month</span></div>
<div class="text-base font-bold text-black py-2">{{nomMaison}}</div>
</div>
<div><LoveIcon :class="{'fill-red-500' : favori}"/></div>
        </div>
        <div class="px-5">
            
            <div class="py-2">{{ adresse }}</div>
            <hr/>
            <div class="w-full justify-between flex">
            <div class="flex py-4 gap-4"><BedIcon/>{{nbrChambres}}</div>
            <div class="flex py-4 gap-4"><BathIcon/>{{ nbrSDB }}</div>
            <div class="flex py-4 gap-4"><Surfaceicon/>{{ surface }}</div>
            </div>
        </div>
    </div>
</template>