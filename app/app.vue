<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Caetano Prototype'
const description = 'An app to browse and select files for Caetano projects.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>

<template>
  <UApp>
    <UHeader class="header">
      <template #left>
        <img
          alt="COBUS"
          src="~/assets/images/logo.svg"
        >
        <span class="text-3xl  font-bold">Spare Parts Catalogue</span>
        <span class="text-2xl">Ecobus 3002 Chassis Gen2</span>
      </template>
    </UHeader>

    <NuxtPage />
  </UApp>
</template>

<style>
.header {
  background-color: var(--color-blue);
  position: static;
}
</style>
