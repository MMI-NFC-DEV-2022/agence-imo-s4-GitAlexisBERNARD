<script setup lang="ts">
import AfficheMaison from '@/components/AfficheMaison.vue'
import jsonmaison from '@/assets/maison.json'
import type { SchemaOffreMaison } from '@/types';
const maMaison:SchemaOffreMaison = {
    nomMaison: "Maison",
    prix: 1000,
    adresse: "Rue de la maison",
    nbrChambres: 3,
    nbrSDB: 2,
    surface: "100",
    favori: true,
    image: "/img/pexels-binyamin-mellish-106399-1.png"
}
const tableaumaisons = [{
    nomMaison: 'Maison1',
    prix: 1000,
    adresse: '14543 rue',
    nbrChambres: 2,
    nbrSDB: 2,
    surface: "30x40m²",
    favori: true,
    image: '/img/pexels-binyamin-mellish-106399-1.png'
},
{
    nomMaison: 'Maison2',
    prix: 1000,
    adresse: '123 rue',
    nbrChambres: 3,
    nbrSDB: 2,
    surface: "30x40m²",
    favori: true,
    image: '/img/pexels-binyamin-mellish-106399-1.png'
},
{
    nomMaison: 'Maison3',
    prix: 1000,
    adresse: '123 rue',
    nbrChambres: 3,
    nbrSDB: 2,
    surface: "30x40m²",
    favori: true,
    image: '/img/pexels-binyamin-mellish-106399-1.png'
},
{
    nomMaison: 'Maison4',
    prix: 1000,
    adresse: '123 rue',
    nbrChambres: 3,
    nbrSDB: 2,
    surface: "30x40m²",
    favori: true,
    image: '/img/pexels-binyamin-mellish-106399-1.png'
},
{
    nomMaison: 'Maison5',
    prix: 1000,
    adresse: '123 rue',
    nbrChambres: 3,
    nbrSDB: 2,
    surface: "30x40m²",
    favori: true,
    image: '/img/pexels-binyamin-mellish-106399-1.png'
},
{
    nomMaison: 'Maison6',
    prix: 1000,
    adresse: '123 rue',
    nbrChambres: 3,
    nbrSDB: 2,
    surface: "30x40m²",
    favori: true,
    image: '/img/pexels-binyamin-mellish-106399-1.png'
},
]
</script>

<template>
    <p>Affiche Maison normal</p>
    <AfficheMaison nomMaison="Maison" :favori="true" image="/img/pexels-binyamin-mellish-106399-1.png" />
    <p>On passe les valeurs en attributs</p>
    <AfficheMaison v-bind="maMaison" />
    <AfficheMaison v-bind="tableaumaisons[1]" />
    <p>Avec v for</p>
    <AfficheMaison v-for="maison in tableaumaisons" v-bind="maison" />
    <p>Avec JSON</p>
    <AfficheMaison v-for="maison in jsonmaison" v-bind="maison" />
</template>