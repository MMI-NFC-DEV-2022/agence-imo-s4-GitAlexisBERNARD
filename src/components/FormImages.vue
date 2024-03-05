<script setup lang="ts">
import type { Chaussure } from '@/types-images';
import { couleursNoms } from '@/types-images';
import { ref } from 'vue';
import ChaussureImage from '@/components/ChaussureImage.vue';
import { TabGroup, TabList, Tab, TabPanel, TabPanels } from '@headlessui/vue';

const chaussure = ref<Chaussure>({});
</script>
<template>
    <h2>Formulaire modification Image</h2>
    <TabGroup>
        <TabList class="tabs flex gap-1">
            <Tab class="tab tab-lifted ui-selected:tab-active">Coté</Tab>
            <Tab class="tab tab-lifted ui-selected:tab-active">Dessus</Tab>
            <Tab class="tab tab-lifted ui-selected:tab-active">Derrière</Tab>
        </TabList>
        <TabPanels class="w-64 p-2">
            <TabPanel>
                <ChaussureImage v-bind="chaussure"/>
            </TabPanel>
            <TabPanel>
                <ChaussureImage v-bind="chaussure" orientation="dessus"/>
            </TabPanel>
            <TabPanel>
                <ChaussureImage v-bind="chaussure" orientation="derriere"/>
            </TabPanel>
        </TabPanels>  
    </TabGroup>
    <FormKit type="form" v-model="chaussure">
        <FormKit name="bandes" label="bandes" :options="couleursNoms" type="select" />
        <FormKit name="cuir" label="cuir" :options="couleursNoms" type="select" />
        <FormKit name="mousse" label="mousse" :options="couleursNoms" type="select" />
    </FormKit>
</template>