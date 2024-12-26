<template>
  <v-container class="d-flex justify-center align-center" max-width="600">
    <v-card class="rounded-xl w-100 w-lg-75" height="250" hover>
      <iframe
        class="w-100 h-100 border-none"
        :src="url"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        loading="lazy"
        allowfullscreen
      ></iframe>
    </v-card>
  </v-container>
</template>

<script setup>
const { url } = defineProps(["url"]);
</script>
