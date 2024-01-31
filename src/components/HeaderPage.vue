<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
    <header id="header">
        <div>
            <div>
                <div>
                    <a>
                        <img src="#" alt="Logo">
                    </a>
                </div>
                <div>
                    <ul>
                        <li>
                            <RouterLink to="/">Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/maison">Affiche Maison</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/offres">Suite</RouterLink>
                        </li>
                    </ul>
            </div>
        </div>
    </div>
</header>
</template>