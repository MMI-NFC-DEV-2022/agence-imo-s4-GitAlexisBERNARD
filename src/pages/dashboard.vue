<script setup lang="ts">
import { supabase, user } from '../supabase'
const { data: { user } } = await supabase.auth.getUser()
</script>
<template>
  <div>
    <h1>Dashboard</h1>
    <h2>Votre Email : {{ user?.email }}</h2>
  </div>
</template>
