<script setup lang="ts"></script>

<template>
  <div>
    <h2>Page d'inscription</h2>
  </div>
  <div>
    <FormKit
      type="form"
      :config="{
        classes: {
          input: 'p-1 rounded border-red-300 shadow-sm border',
          label: 'text-gray-600'
        }
      }"
      :submit-attrs="{ classes: { input: 'bg-red-300 p-1 rounded' } }"
    >
      <FormKit name="nom" label="Nom" type="text" />
      <FormKit name="email" label="Email" type="email" />
      <FormKit name="password" label="Mot de passe" type="password" />
      <FormKit name="password2" label="Confirmer le mot de passe" type="password" />
    </FormKit>
  </div>
</template>
